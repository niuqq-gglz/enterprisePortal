(function () {
  const NEWS = window.PORTAL_NEWS.slice().sort((a, b) => (a.publishAt < b.publishAt ? 1 : -1));
  const NOTICES = window.PORTAL_NOTICES.slice();
  const view = document.getElementById("view");

  const STATUS_LABEL = { active: "有效", pending: "待生效", expired: "已失效" };

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

  function formatShort(iso) {
    const [, m, d] = iso.split("-");
    return `${Number(m)}月${Number(d)}日`;
  }

  function newsById(id) {
    return NEWS.find((item) => item.id === id);
  }

  function noticeById(id) {
    return NOTICES.find((item) => item.id === id);
  }

  function periodLabel(item) {
    if (item.validityText) return item.validityText;
    if (!item.effectiveTo) return `${formatShort(item.effectiveFrom)}起`;
    return `${formatShort(item.effectiveFrom)} – ${formatShort(item.effectiveTo)}`;
  }

  function noticeRank(item) {
    if (item.status === "expired") return 3;
    if (item.status === "pending") return 2;
    if (item.pinned) return 0;
    return 1;
  }

  function sortedNotices(list) {
    return list.slice().sort((a, b) => {
      const rank = noticeRank(a) - noticeRank(b);
      if (rank !== 0) return rank;
      return a.publishAt < b.publishAt ? 1 : -1;
    });
  }

  function activeNoticeCount() {
    return NOTICES.filter((item) => item.status === "active").length;
  }

  function params() {
    return new URLSearchParams(location.search);
  }

  function newsHref(extra) {
    const q = new URLSearchParams();
    if (extra.tag) q.set("tag", extra.tag);
    if (extra.q) q.set("q", extra.q);
    const s = q.toString();
    return s ? `news.html?${s}` : "news.html";
  }

  function noticeHref(extra) {
    const q = new URLSearchParams();
    q.set("tab", "notice");
    if (extra.scope && extra.scope !== "current") q.set("scope", extra.scope);
    if (extra.q) q.set("q", extra.q);
    return `news.html?${q.toString()}`;
  }

  function setTitle(text) {
    document.title = text ? `${text} · 新闻公告 · 企业员工门户` : "新闻公告 · 企业员工门户";
  }

  function crumbBar(current) {
    if (!current) {
      return `<nav class="crumbs" aria-label="面包屑"><a href="homepage-mockup.html">首页</a><span aria-hidden="true">/</span><span class="cur">新闻公告</span></nav>`;
    }
    return `<nav class="crumbs" aria-label="面包屑"><a href="homepage-mockup.html">首页</a><span aria-hidden="true">/</span><a href="news.html">新闻公告</a><span aria-hidden="true">/</span><span class="cur">${esc(current)}</span></nav>`;
  }

  function pageHead() {
    return `
      <div class="page-head">
        <div>
          <h1>新闻公告</h1>
          <p>展示公司新闻与正式公告。新闻用于了解公司近期动态与活动，公告用于传达需员工知悉或配合办理的事项。</p>
        </div>
        <div class="head-stats">
          <span>新闻 ${NEWS.length}</span>
          <span>有效公告 ${activeNoticeCount()}</span>
        </div>
      </div>`;
  }

  function tabBar(tab) {
    return `
      <div class="tabs" role="tablist" aria-label="新闻与公告">
        <a role="tab" href="news.html" aria-selected="${tab === "news" ? "true" : "false"}">新闻</a>
        <a role="tab" href="news.html?tab=notice" aria-selected="${tab === "notice" ? "true" : "false"}">公告</a>
      </div>`;
  }

  function renderNewsList() {
    const q = params();
    const tag = q.get("tag") || "";
    const keyword = (q.get("q") || "").trim();
    const folded = keyword.toLowerCase();

    let list = NEWS.filter((item) => {
      if (tag && item.tag !== tag) return false;
      if (!folded) return true;
      const hay = item.title.toLowerCase();
      return hay.includes(folded);
    });

    const showLead = !tag && !keyword && list.length > 0;
    const lead = showLead ? list[0] : null;
    const rest = showLead ? list.slice(1) : list;

    const tags = window.NEWS_TAGS.map((name) => {
      const href = newsHref({ tag: name === tag ? "" : name, q: keyword });
      const current = name === tag ? ` aria-current="true"` : "";
      return `<a href="${esc(href)}"${current}>${esc(name)}</a>`;
    }).join("");

    const cards = rest.map((item) => `
      <a class="card" href="news.html?id=${esc(item.id)}">
        <span class="card-media"><img src="${esc(item.cover)}" alt="${esc(item.coverAlt)}"></span>
        <span class="kicker"><span class="tag">${esc(item.tag)}</span><i class="dot"></i><time datetime="${esc(item.publishAt)}">${formatDate(item.publishAt)}</time></span>
        <span class="card-title">${esc(item.title)}</span>
        <span class="card-sum">${esc(item.summary)}</span>
        <span class="card-dept">${esc(item.authorDepartment)}</span>
      </a>`).join("");

    const leadHtml = lead ? `
      <a class="lead" href="news.html?id=${esc(lead.id)}">
        <span class="lead-media"><img src="${esc(lead.cover)}" alt="${esc(lead.coverAlt)}"></span>
        <span class="lead-body">
          <span class="kicker"><span class="tag">${esc(lead.tag)}</span><i class="dot"></i><time datetime="${esc(lead.publishAt)}">${formatDate(lead.publishAt)}</time></span>
          <span class="lead-title">${esc(lead.title)}</span>
          <span class="lead-sum">${esc(lead.summary)}</span>
          <span class="lead-foot"><span>${esc(lead.authorDepartment)}</span><span class="more-link">阅读全文</span></span>
        </span>
      </a>` : "";

    const empty = list.length === 0 ? `
      <div class="empty">
        <h2>没有符合条件的新闻</h2>
        <p>可更换标签，或清空搜索后再试。</p>
        <a href="news.html">查看全部新闻</a>
      </div>` : "";

    const count = tag || keyword
      ? `<p class="result-line">显示 ${list.length} 条</p>`
      : "";

    view.innerHTML = `
      ${crumbBar("")}
      ${pageHead()}
      ${tabBar("news")}
      <form class="toolbar" method="get" action="news.html" role="search">
        ${tag ? `<input type="hidden" name="tag" value="${esc(tag)}">` : ""}
        <div class="filters" aria-label="新闻标签">
          <a href="${esc(newsHref({ q: keyword }))}"${tag ? "" : ` aria-current="true"`}>全部</a>
          ${tags}
        </div>
        <div class="search">
          <input id="q" name="q" type="search" value="${esc(keyword)}" placeholder="搜索标题" autocomplete="off">
        </div>
      </form>
      ${count}
      ${leadHtml}
      ${rest.length ? `<div class="grid">${cards}</div>` : ""}
      ${empty}`;
    setTitle("");
  }

  function renderNoticeList() {
    const q = params();
    const scope = q.get("scope") || "current";
    const keyword = (q.get("q") || "").trim();
    const folded = keyword.toLowerCase();

    let list = NOTICES.filter((item) => {
      if (scope === "current" && item.status === "expired") return false;
      if (scope === "active" && item.status !== "active") return false;
      if (scope === "expired" && item.status !== "expired") return false;
      if (!folded) return true;
      const hay = item.title.toLowerCase();
      return hay.includes(folded);
    });
    list = sortedNotices(list);

    const scopes = [
      ["current", "有效与待生效"],
      ["active", "仅有效"],
      ["expired", "已失效"],
      ["all", "全部"]
    ];

    const filters = scopes.map(([id, label]) => {
      const href = noticeHref({ scope: id, q: keyword });
      return `<a href="${esc(href)}"${id === scope ? ` aria-current="true"` : ""}>${esc(label)}</a>`;
    }).join("");

    const rows = list.map((item) => `
      <div class="nrow ${item.pinned && item.status === "active" ? "pinned" : ""} ${item.status === "expired" ? "expired" : ""}">
        <span class="status ${esc(item.status)}"><i></i>${STATUS_LABEL[item.status]}</span>
        <span>
          <span class="ntitle">${item.pinned && item.status === "active" ? '<span class="pin">置顶</span>' : ""}${esc(item.title)}</span>
          <span class="nsum">${esc(item.summary)}</span>
        </span>
        <span class="cell">${esc(item.audience)}</span>
        <span class="cell">${periodLabel(item)}</span>
        <span class="cell">${esc(item.owner)}</span>
        <span class="cell">${formatShort(item.publishAt)}</span>
        <span class="row-actions">
          <a class="file-btn preview" href="${esc(item.file)}" target="_blank" rel="noopener">预览</a>
          <a class="file-btn download" href="${esc(item.file)}" download="${esc(item.fileName || "公告.pdf")}">下载</a>
        </span>
      </div>`).join("");

    const empty = list.length === 0 ? `
      <div class="empty">
        <h2>没有符合条件的公告</h2>
        <p>可切换状态，或清空搜索后再试。</p>
        <a href="news.html?tab=notice">查看有效公告</a>
      </div>` : `
      <div class="sheet">
        <div class="sheet-head">
          <span>状态</span>
          <span>标题</span>
          <span>适用对象</span>
          <span>有效期</span>
          <span>发文单位</span>
          <span>发布日期</span>
          <span>操作</span>
        </div>
        ${rows}
      </div>`;

    view.innerHTML = `
      ${crumbBar("")}
      ${pageHead()}
      ${tabBar("notice")}
      <form class="toolbar" method="get" action="news.html" role="search">
        <input type="hidden" name="tab" value="notice">
        ${scope !== "current" ? `<input type="hidden" name="scope" value="${esc(scope)}">` : ""}
        <div class="filters" aria-label="公告状态">${filters}</div>
        <div class="search">
          <input id="q" name="q" type="search" value="${esc(keyword)}" placeholder="搜索标题" autocomplete="off">
        </div>
      </form>
      <p class="result-line">显示 ${list.length} 条${scope === "current" ? "，已失效公告默认不列出" : ""}</p>
      ${empty}`;
    setTitle("公告");
  }

  function renderNewsDetail(id) {
    const item = newsById(id);
    if (!item) {
      view.innerHTML = `<div class="empty"><h2>未找到这篇新闻</h2><p>它可能已从本期内容中撤下。</p><a href="news.html">返回新闻</a></div>`;
      setTitle("未找到");
      return;
    }

    const blocks = item.body.map((block) => {
      if (block.type === "h") return `<h2>${esc(block.text)}</h2>`;
      if (block.type === "ul") {
        return `<ul>${block.items.map((line) => `<li>${esc(line)}</li>`).join("")}</ul>`;
      }
      if (block.type === "figure") {
        return `<figure class="inline-figure"><img src="${esc(block.src)}" alt="${esc(block.alt)}"><figcaption>${esc(block.caption)}</figcaption></figure>`;
      }
      return `<p>${esc(block.text)}</p>`;
    }).join("");

    const related = (item.relatedIds || [])
      .map(newsById)
      .filter(Boolean)
      .slice(0, 3)
      .map((rel) => `
        <a href="news.html?id=${esc(rel.id)}">
          <img src="${esc(rel.cover)}" alt="">
          <span>
            <strong>${esc(rel.title)}</strong>
            <em>${esc(rel.tag)} · ${formatDate(rel.publishAt)}</em>
          </span>
        </a>`).join("");

    view.innerHTML = `
      ${crumbBar(item.title)}
      <a class="back" href="news.html">返回新闻</a>
      <article>
        <header class="article-head">
          <div class="kicker"><span class="tag">${esc(item.tag)}</span><i class="dot"></i><time datetime="${esc(item.publishAt)}">${formatDate(item.publishAt)}</time></div>
          <h1>${esc(item.title)}</h1>
          <p class="lede">${esc(item.summary)}</p>
          <div class="byline"><span>${esc(item.authorDepartment)}</span><span>发布于 ${formatDate(item.publishAt)}</span></div>
        </header>
        <figure class="hero-figure">
          <img src="${esc(item.cover)}" alt="${esc(item.coverAlt)}">
          <figcaption>${esc(item.coverCaption)}</figcaption>
        </figure>
        <div class="prose">${blocks}</div>
      </article>
      ${related ? `<section class="related" aria-labelledby="related-title"><h2 id="related-title">相关新闻</h2><div class="related-list">${related}</div></section>` : ""}`;
    setTitle(item.title);
  }

  function renderNoticeDetail(id) {
    const item = noticeById(id);
    if (!item) {
      view.innerHTML = `<div class="empty"><h2>未找到这条公告</h2><p>请从公告列表重新进入。</p><a href="news.html?tab=notice">返回公告</a></div>`;
      setTitle("未找到");
      return;
    }

    const fileBlock = item.file ? `
      <div class="file-panel">
        <div class="file-bar">
          <span>${esc(item.fileName || "公告原文")}</span>
          <span class="file-actions">
            <a class="file-btn preview" href="${esc(item.file)}" target="_blank" rel="noopener">预览</a>
          </span>
        </div>
        <iframe class="file-frame" src="${esc(item.file)}" title="${esc(item.title)}"></iframe>
      </div>` : "";

    view.innerHTML = `
      ${crumbBar(item.title)}
      <a class="back" href="news.html?tab=notice">返回公告</a>
      ${fileBlock}`;
    setTitle(item.title);
  }

  function render() {
    const q = params();
    const id = q.get("id");
    if (id && id.indexOf("NTC-") === 0) {
      renderNoticeDetail(id);
      return;
    }
    if (id) {
      renderNewsDetail(id);
      return;
    }
    if (q.get("tab") === "notice") {
      renderNoticeList();
      return;
    }
    renderNewsList();
  }

  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      document.getElementById("openSearch").click();
    }
  });

  document.getElementById("openSearch").addEventListener("click", () => {
    const input = document.getElementById("q");
    if (input) {
      input.focus();
      input.select();
      return;
    }
    const tab = params().get("tab") === "notice" || (params().get("id") || "").indexOf("NTC-") === 0
      ? "news.html?tab=notice"
      : "news.html";
    location.href = tab;
  });

  render();
})();
