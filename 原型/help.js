(function () {
  const CHANNELS = window.HELP_CHANNELS;
  const CATEGORIES = window.HELP_CATEGORIES;
  const TYPES = window.HELP_TYPES;
  const FAQS = window.HELP_FAQS;
  const view = document.getElementById("view");

  const state = {
    q: "",
    cat: "all",
    group: "",
    open: new Set(),
    type: "content",
    page: "",
    resource: ""
  };

  function esc(value) {
    return String(value).replace(/[&<>"']/g, (ch) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[ch]));
  }

  function formatDate(iso) {
    const [y, m, d] = iso.split("-");
    return `${y}年${Number(m)}月${Number(d)}日`;
  }

  function chevron() {
    return '<svg class="chev" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6.25 8 10.25 12 6.25" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }

  function params() {
    return new URLSearchParams(location.search);
  }

  function sameOriginPage() {
    const requested = params().get("page");
    if (requested) return requested;
    try {
      if (document.referrer) {
        const ref = new URL(document.referrer);
        if (ref.origin === location.origin && !ref.pathname.endsWith("/help.html")) return ref.href;
      }
    } catch (err) {
      /* 无法解析来源页时使用本页地址 */
    }
    return location.origin + location.pathname;
  }

  function readState() {
    const q = params();
    state.q = q.get("q") || "";
    state.cat = CATEGORIES.some((item) => item.id === q.get("cat")) ? q.get("cat") : "all";
    state.group = CHANNELS.some((item) => item.group === q.get("group")) ? q.get("group") : "";
    state.type = TYPES.some((item) => item.id === q.get("type")) ? q.get("type") : "content";
    state.page = sameOriginPage();
    state.resource = q.get("resource") || "";
    const faq = q.get("faq");
    if (faq && FAQS.some((item) => item.id === faq)) state.open.add(faq);
  }

  function writeUrl(hash) {
    const q = new URLSearchParams();
    if (state.q) q.set("q", state.q);
    if (state.cat !== "all") q.set("cat", state.cat);
    if (state.group) q.set("group", state.group);
    const visible = new Set(visibleFaqs().map((item) => item.id));
    const faq = [...state.open].reverse().find((id) => visible.has(id));
    if (faq) q.set("faq", faq);
    const nextHash = hash === undefined ? location.hash : hash;
    const search = q.toString();
    history.replaceState(null, "", `help.html${search ? `?${search}` : ""}${nextHash}`);
  }

  function visibleFaqs() {
    const folded = state.q.trim().toLowerCase();
    return FAQS.filter((item) => {
      if (state.group && item.group !== state.group) return false;
      if (state.cat !== "all" && item.category !== state.cat) return false;
      if (!folded) return true;
      const hay = [item.id, item.title, item.owner, ...(item.aliases || []), ...item.paragraphs]
        .join("\n")
        .toLowerCase();
      return hay.includes(folded);
    });
  }

  function channelByGroup(group) {
    return CHANNELS.find((item) => item.group === group);
  }

  function mailHref(channel) {
    return `mailto:${channel.email}?subject=${encodeURIComponent(channel.subject)}`;
  }

  function channelHtml(channel) {
    const action = channel.action === "form"
      ? `<a class="btn" href="#feedback">填写反馈</a>`
      : `<a class="btn" href="${esc(mailHref(channel))}">写邮件</a>`;
    const ext = [channel.ext ? `内线 ${channel.ext}` : "", channel.extNote].filter(Boolean).join(" · ");
    return `
      <tr id="${esc(channel.id)}">
        <th scope="row" class="team">
          <strong>${esc(channel.name)}</strong>
          <span>${esc(channel.dept)}</span>
        </th>
        <td>${esc(channel.scope)}</td>
        <td class="when">
          <span>${esc(channel.hours)}</span>
          ${channel.hoursNote ? `<span>${esc(channel.hoursNote)}</span>` : ""}
        </td>
        <td class="contact">
          <span class="addr">${esc(channel.email)}</span>
          <span class="sub">
            ${ext ? `<span>${esc(ext)}</span>` : "<span></span>"}
            <button class="copy" type="button" data-copy="${esc(channel.email)}">复制</button>
          </span>
        </td>
        <td class="act">
          <span class="ops">${action}<a class="quiet" href="#faq" data-group="${esc(channel.group)}">相关问题</a></span>
        </td>
      </tr>`;
  }

  function faqHtml(item) {
    const open = state.open.has(item.id);
    const links = item.links.map((link) => `<a href="${esc(link.href)}">${esc(link.label)}</a>`).join("");
    const paragraphs = item.paragraphs.map((text) => `<p>${esc(text)}</p>`).join("");
    return `
      <article class="faq${open ? " open" : ""}" id="${esc(item.id)}">
        <h3>
          <button class="faq-q" type="button" aria-expanded="${open ? "true" : "false"}" aria-controls="panel-${esc(item.id)}">
            <span class="faq-id">${esc(item.id)}</span>
            <span class="faq-title">${esc(item.title)}</span>
            <span class="faq-owner">${esc(item.owner)}</span>
            ${chevron()}
          </button>
        </h3>
        <div class="faq-panel" id="panel-${esc(item.id)}" role="region" aria-label="${esc(item.title)}"${open ? "" : " hidden"}>
          ${paragraphs}
          <p class="faq-date">更新于 ${formatDate(item.updatedAt)}</p>
          <div class="faq-links">${links}</div>
        </div>
      </article>`;
  }

  function filtersHtml() {
    return CATEGORIES.map((item) => {
      const current = !state.group && state.cat === item.id;
      const href = item.id === "all" ? "help.html" : `help.html?cat=${item.id}`;
      return `<a href="${href}" data-cat="${esc(item.id)}"${current ? ' aria-current="true"' : ""}>${esc(item.label)}</a>`;
    }).join("");
  }

  function typeMenu() {
    return TYPES.map((item) => {
      const selected = item.id === state.type;
      return `<li role="option" tabindex="-1" data-value="${esc(item.id)}" aria-selected="${selected ? "true" : "false"}">${esc(item.label)}</li>`;
    }).join("");
  }

  function selectedTypeLabel() {
    return (TYPES.find((item) => item.id === state.type) || TYPES[0]).label;
  }

  function formBody() {
    return `
      <div class="notice">请勿填写密码、密钥、证件号、银行卡号、客户信息及其他敏感资料。</div>
      <div class="form-grid">
        <div class="field" id="field-type">
          <label for="f-type">问题类型</label>
          <div class="select" id="type-select">
            <button class="select-trigger" id="f-type" type="button" aria-haspopup="listbox" aria-expanded="false" aria-controls="type-menu">
              <span>${esc(selectedTypeLabel())}</span>
              ${chevron()}
            </button>
            <ul class="select-menu" id="type-menu" role="listbox" hidden>${typeMenu()}</ul>
            <input type="hidden" id="f-type-value" value="${esc(state.type)}" />
          </div>
        </div>
        <div class="field" id="field-page">
          <label for="f-page">当前页面</label>
          <input id="f-page" type="text" readonly value="${esc(state.page)}" />
        </div>
        <div class="field" id="field-resource">
          <label for="f-resource">资源编号</label>
          <input id="f-resource" type="text" maxlength="48" spellcheck="false" placeholder="如 DOC-HR-001，没有可留空" value="${esc(state.resource)}" />
        </div>
        <div class="field" id="field-contact">
          <label for="f-contact">联系方式</label>
          <input id="f-contact" type="email" maxlength="80" placeholder="企业邮箱，选填" autocomplete="email" />
        </div>
        <div class="field span-2" id="field-desc">
          <label for="f-desc">问题描述</label>
          <textarea id="f-desc" maxlength="800" placeholder="写明栏目、现象和期望的正确内容。不要粘贴密码或客户资料。"></textarea>
        </div>
        <div class="form-actions span-2">
          <p>正式环境将发至 portal-feedback@company.internal，不在门户内开立账号。</p>
          <button class="btn-primary" type="submit">提交反馈</button>
        </div>
      </div>`;
  }

  function shell() {
    return `
      <nav class="crumbs" aria-label="面包屑">
        <a href="homepage-mockup.html">首页</a>
        <span aria-hidden="true">/</span>
        <span class="cur">帮助支持</span>
      </nav>
      <div class="page-head">
        <div>
          <h1>帮助支持</h1>
          <p>查阅常见问题，或按事项联系对应服务团队。报销、请假和系统审批仍在原系统办理，门户只提供入口和说明。</p>
        </div>
        <div class="head-stats">
          <span>工作日 09:00–18:00</span>
          <span>常见问题 ${FAQS.length}</span>
        </div>
      </div>
      <section id="channels" aria-labelledby="channel-title">
        <div class="section-head">
          <h2 id="channel-title">服务渠道</h2>
          <span>${CHANNELS.length} 个团队</span>
        </div>
        <div class="sheet directory-sheet">
          <table class="directory">
            <thead>
              <tr>
                <th>服务团队</th>
                <th>受理范围</th>
                <th>工作时间</th>
                <th>联系方式</th>
                <th class="act">办理</th>
              </tr>
            </thead>
            <tbody>
              ${CHANNELS.map(channelHtml).join("")}
            </tbody>
          </table>
          <p class="sheet-note">优先使用团队邮箱和内线，不公布个人手机。门户不重置密码，也不代收报销或人事材料。</p>
        </div>
      </section>
      <section id="faq" aria-labelledby="faq-title">
        <div class="section-head">
          <h2 id="faq-title">常见问题</h2>
          <span id="faq-count" aria-live="polite"></span>
        </div>
        <div class="toolbar">
          <div class="filters" role="toolbar" aria-label="问题分类">${filtersHtml()}</div>
          <div class="search">
            <input id="q" type="text" placeholder="搜索问题" autocomplete="off" value="${esc(state.q)}" />
            <button id="clear-q" type="button"${state.q ? "" : " hidden"}>清除</button>
          </div>
        </div>
        <p class="narrow" id="narrow" hidden></p>
        <div class="sheet" id="faq-list"></div>
      </section>
      <section id="feedback" aria-labelledby="feedback-title">
        <div class="section-head">
          <h2 id="feedback-title">门户反馈</h2>
          <span>内容与入口</span>
        </div>
        <form class="sheet feedback-sheet" id="feedback-form" novalidate>
          <div id="feedback-body">${formBody()}</div>
        </form>
      </section>`;
  }

  function syncFilters() {
    document.querySelectorAll("[data-cat]").forEach((el) => {
      const on = !state.group && el.dataset.cat === state.cat;
      if (on) el.setAttribute("aria-current", "true");
      else el.removeAttribute("aria-current");
    });
    const narrow = document.getElementById("narrow");
    const channel = channelByGroup(state.group);
    if (!channel) {
      narrow.hidden = true;
      narrow.innerHTML = "";
      return;
    }
    narrow.hidden = false;
    narrow.innerHTML = `<span>仅显示${esc(channel.name)}的相关问题</span><button type="button" id="clear-group">清除</button>`;
  }

  function updateList() {
    const list = visibleFaqs();
    const count = document.getElementById("faq-count");
    const box = document.getElementById("faq-list");
    count.textContent = list.length === FAQS.length ? `${list.length} 条` : `显示 ${list.length} 条`;
    if (!list.length) {
      box.innerHTML = `<div class="empty"><p>没有符合条件的问题。可清除搜索和筛选，或直接联系服务渠道中的对应团队。</p><button type="button" id="reset-filters">清除搜索与筛选</button></div>`;
    } else {
      box.innerHTML = list.map(faqHtml).join("");
    }
    const clear = document.getElementById("clear-q");
    clear.hidden = !state.q;
    syncFilters();
  }

  function focusSearch() {
    const input = document.getElementById("q");
    document.getElementById("faq").scrollIntoView({ block: "start" });
    input.focus();
    input.select();
  }

  async function copyText(text, button) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.left = "-999px";
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    const previous = button.textContent;
    button.textContent = "已复制";
    window.setTimeout(() => {
      if (button.isConnected) button.textContent = previous;
    }, 1600);
  }

  function clearFieldError(id) {
    const field = document.getElementById(id);
    if (!field) return;
    field.classList.remove("error");
    const message = field.querySelector(".field-error");
    if (message) message.remove();
  }

  function setFieldError(id, text) {
    const field = document.getElementById(id);
    field.classList.add("error");
    let message = field.querySelector(".field-error");
    if (!message) {
      message = document.createElement("p");
      message.className = "field-error";
      message.setAttribute("role", "alert");
      field.appendChild(message);
    }
    message.textContent = text;
  }

  function bindSelect(root) {
    const trigger = root.querySelector(".select-trigger");
    const menu = root.querySelector(".select-menu");
    const hidden = root.querySelector("input[type=hidden]");
    const label = trigger.querySelector("span");
    const options = [...menu.querySelectorAll("[role=option]")];

    function close() {
      trigger.setAttribute("aria-expanded", "false");
      menu.hidden = true;
    }

    function open() {
      trigger.setAttribute("aria-expanded", "true");
      menu.hidden = false;
    }

    function choose(option) {
      options.forEach((item) => item.setAttribute("aria-selected", "false"));
      option.setAttribute("aria-selected", "true");
      hidden.value = option.dataset.value;
      state.type = option.dataset.value;
      label.textContent = option.textContent;
      close();
      clearFieldError("field-type");
    }

    trigger.addEventListener("click", () => {
      if (menu.hidden) open();
      else close();
    });

    trigger.addEventListener("keydown", (event) => {
      const current = options.findIndex((item) => item.getAttribute("aria-selected") === "true");
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        if (menu.hidden) open();
        const next = event.key === "ArrowDown"
          ? (current + 1) % options.length
          : (current - 1 + options.length) % options.length;
        choose(options[next]);
        open();
      } else if (event.key === "Escape") {
        close();
      } else if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        if (menu.hidden) open();
        else close();
      }
    });

    options.forEach((option) => {
      option.addEventListener("click", () => {
        choose(option);
        trigger.focus();
      });
    });

    document.addEventListener("click", (event) => {
      if (!root.contains(event.target)) close();
    });
  }

  function onSubmit(event) {
    event.preventDefault();
    ["field-type", "field-resource", "field-contact", "field-desc"].forEach(clearFieldError);
    const type = document.getElementById("f-type-value").value;
    const resource = document.getElementById("f-resource").value.trim();
    const contact = document.getElementById("f-contact").value.trim();
    const desc = document.getElementById("f-desc").value.trim();
    let invalid = false;

    if (!TYPES.some((item) => item.id === type)) {
      setFieldError("field-type", "请选择问题类型。");
      invalid = true;
    }
    if (resource && !/^[A-Za-z0-9][A-Za-z0-9._-]{1,47}$/.test(resource)) {
      setFieldError("field-resource", "资源编号格式如 DOC-HR-001，没有可留空。");
      invalid = true;
    }
    if (contact && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)) {
      setFieldError("field-contact", "请填写企业邮箱，或留空。");
      invalid = true;
    }
    if (desc.length < 8) {
      setFieldError("field-desc", "请写明问题现象，至少 8 个字。");
      invalid = true;
    } else if (/密码|口令|验证码|密钥|私钥|身份证|银行卡|客户名单|password|secret|token/i.test(desc)) {
      setFieldError("field-desc", "请删除密码、密钥、证件号或客户信息后再提交。");
      invalid = true;
    }
    if (invalid) return;

    document.getElementById("feedback-body").innerHTML = `
      <div class="done">
        <h3>反馈已记录</h3>
        <p>原型环境不会真正发送。正式环境将把「${esc(selectedTypeLabel())}」转至 portal-feedback@company.internal，由栏目责任部门处理。门户不建立工单账号。</p>
        <button class="btn" id="again" type="button">继续填写</button>
      </div>`;
  }

  function restoreForm() {
    state.type = "content";
    document.getElementById("feedback-body").innerHTML = formBody();
    bindSelect(document.getElementById("type-select"));
  }

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ block: id === "faq" || id === "feedback" ? "start" : "center" });
  }

  function bind() {
    document.getElementById("q").addEventListener("input", (event) => {
      state.q = event.target.value.trim();
      writeUrl();
      updateList();
    });

    document.getElementById("clear-q").addEventListener("click", () => {
      state.q = "";
      document.getElementById("q").value = "";
      writeUrl();
      updateList();
      document.getElementById("q").focus();
    });

    document.getElementById("feedback-form").addEventListener("submit", onSubmit);
    bindSelect(document.getElementById("type-select"));

    view.addEventListener("click", (event) => {
      const copyBtn = event.target.closest("[data-copy]");
      if (copyBtn) {
        copyText(copyBtn.dataset.copy, copyBtn);
        return;
      }

      const groupLink = event.target.closest("[data-group]");
      if (groupLink) {
        event.preventDefault();
        state.group = groupLink.dataset.group;
        state.cat = "all";
        writeUrl("#faq");
        updateList();
        scrollTo("faq");
        return;
      }

      if (event.target.id === "clear-group" || event.target.id === "reset-filters") {
        state.group = "";
        state.cat = "all";
        state.q = "";
        const input = document.getElementById("q");
        if (event.target.id === "reset-filters") input.value = "";
        if (event.target.id === "clear-group") {
          state.q = input.value.trim();
        }
        writeUrl();
        updateList();
        return;
      }

      const catLink = event.target.closest("[data-cat]");
      if (catLink) {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        state.cat = catLink.dataset.cat;
        state.group = "";
        writeUrl();
        updateList();
        return;
      }

      const faqBtn = event.target.closest(".faq-q");
      if (faqBtn) {
        const article = faqBtn.closest(".faq");
        const panel = article.querySelector(".faq-panel");
        const willOpen = panel.hidden;
        panel.hidden = !willOpen;
        article.classList.toggle("open", willOpen);
        faqBtn.setAttribute("aria-expanded", willOpen ? "true" : "false");
        if (willOpen) state.open.add(article.id);
        else state.open.delete(article.id);
        writeUrl();
        return;
      }

      if (event.target.id === "again") restoreForm();
    });
  }

  document.getElementById("openSearch").addEventListener("click", focusSearch);
  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      focusSearch();
    }
  });

  readState();
  view.innerHTML = shell();
  bind();
  updateList();

  const faq = params().get("faq");
  if (faq && document.getElementById(faq)) scrollTo(faq);
  if (location.hash && document.querySelector(location.hash)) {
    document.querySelector(location.hash).scrollIntoView({ block: "start" });
  }
})();
