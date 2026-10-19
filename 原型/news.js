(function () {
  const NEWS_PAGE_SIZE = 6;
  const NOTICE_PAGE_SIZE = 8;
  const isNoticePage = /notices\.html$/i.test(location.pathname);
  const NEWS = window.PORTAL_NEWS.slice().sort((a, b) => (a.publishAt < b.publishAt ? 1 : -1));
  const NOTICES = window.PORTAL_NOTICES.slice();
  const isGuest = !isNoticePage && new URLSearchParams(location.search).get("guest") === "1";
  const visibleNews = isGuest ? NEWS.filter((item) => item.level === "public") : NEWS;
  const view = document.getElementById("view");

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

  function params() {
    return new URLSearchParams(location.search);
  }

  function newsHref(extra) {
    const q = new URLSearchParams();
    if (isGuest) q.set("guest", "1");
    if (extra.q) q.set("q", extra.q);
    if (extra.id) q.set("id", extra.id);
    if (extra.page > 1) q.set("page", String(extra.page));
    const s = q.toString();
    return s ? `news.html?${s}` : "news.html";
  }

  function noticeHref(extra) {
    const q = new URLSearchParams();
    if (extra.q) q.set("q", extra.q);
    if (extra.page > 1) q.set("page", String(extra.page));
    const s = q.toString();
    return s ? `notices.html?${s}` : "notices.html";
  }

  function clampPage(raw, pages) {
    const n = Number(raw);
    if (!Number.isFinite(n) || n < 1) return 1;
    return Math.min(pages, Math.floor(n));
  }

  function pagerNav(hrefFor, page, pages) {
    if (pages <= 1) return "";
    const prev = page > 1
      ? `<a class="pager-step" href="${esc(hrefFor(page - 1))}" rel="prev">上一页</a>`
      : `<span class="pager-step is-disabled">上一页</span>`;
    const next = page < pages
      ? `<a class="pager-step" href="${esc(hrefFor(page + 1))}" rel="next">下一页</a>`
      : `<span class="pager-step is-disabled">下一页</span>`;
    let nums = "";
    for (let i = 1; i <= pages; i += 1) {
      nums += i === page
        ? `<span class="pager-num is-current" aria-current="page">${i}</span>`
        : `<a class="pager-num" href="${esc(hrefFor(i))}">${i}</a>`;
    }
    return `<nav class="pager" aria-label="分页">${prev}<div class="pager-nums">${nums}</div>${next}</nav>`;
  }

  function setTitle(text, section) {
    const tail = section || (isNoticePage ? "公告" : "新闻");
    document.title = text ? `${text} · ${tail} · 企业员工门户` : `${tail} · 企业员工门户`;
  }

  function crumbBar(section, href, current) {
    const here = current
      ? `<a href="${href}">${esc(section)}</a><span aria-hidden="true">/</span><span class="cur">${esc(current)}</span>`
      : `<span class="cur">${esc(section)}</span>`;
    const home = isGuest ? "index.html" : "homepage-mockup.html";
    return `<nav class="crumbs" aria-label="面包屑"><a href="${home}">首页</a><span aria-hidden="true">/</span>${here}</nav>`;
  }

  function newsHead() {
    return `
      <div class="page-head">
        <div>
          <h1>新闻</h1>
        </div>
        <div class="head-stats">
          <span>共 ${visibleNews.length} 条${isGuest ? "已公开" : ""}</span>
        </div>
      </div>`;
  }

  function noticeHead() {
    return `
      <div class="page-head">
        <div>
          <h1>公告</h1>
        </div>
        <div class="head-stats">
          <span>共 ${NOTICES.length} 条</span>
        </div>
      </div>`;
  }

  function renderNewsList() {
    const q = params();
    const keyword = (q.get("q") || "").trim();
    const folded = keyword.toLowerCase();

    const list = visibleNews.filter((item) => {
      if (!folded) return true;
      const haystack = isGuest ? `${item.title} ${item.summary}` : item.title;
      return haystack.toLowerCase().includes(folded);
    });

    const pages = Math.max(1, Math.ceil(list.length / NEWS_PAGE_SIZE) || 1);
    const page = list.length ? clampPage(q.get("page"), pages) : 1;
    const slice = list.slice((page - 1) * NEWS_PAGE_SIZE, page * NEWS_PAGE_SIZE);
    const showLead = page === 1 && !keyword && slice.length > 0;
    const lead = showLead ? slice[0] : null;
    const rest = showLead ? slice.slice(1) : slice;

    const cards = rest.map((item) => `
      <a class="card" href="${esc(newsHref({ id: item.id }))}">
        <span class="card-media"><img src="${esc(item.cover)}" alt="${esc(item.coverAlt)}"></span>
        <span class="kicker"><time datetime="${esc(item.publishAt)}">${formatDate(item.publishAt)}</time></span>
        <span class="card-title">${esc(item.title)}</span>
        <span class="card-sum">${esc(item.summary)}</span>
        <span class="card-dept">${esc(item.authorDepartment)}</span>
      </a>`).join("");

    const leadHtml = lead ? `
      <a class="lead" href="${esc(newsHref({ id: lead.id }))}">
        <span class="lead-media"><img src="${esc(lead.cover)}" alt="${esc(lead.coverAlt)}"></span>
        <span class="lead-body">
          <span class="kicker"><time datetime="${esc(lead.publishAt)}">${formatDate(lead.publishAt)}</time></span>
          <span class="lead-title">${esc(lead.title)}</span>
          <span class="lead-sum">${esc(lead.summary)}</span>
          <span class="lead-foot"><span>${esc(lead.authorDepartment)}</span><span class="more-link">阅读全文</span></span>
        </span>
      </a>` : "";

    const empty = list.length === 0 ? (isGuest ? `
      <div class="empty">
        <h2>没有找到已公开的新闻</h2>
        <p>可以换一个词，例如「量子随机数」或「校园招聘」。</p>
        <a href="${esc(newsHref({ q: "量子随机数" }))}">搜索量子随机数</a>
      </div>` : `
      <div class="empty">
        <h2>没有符合条件的新闻</h2>
        <p>可清空搜索后再试。</p>
        <a href="news.html">查看全部新闻</a>
      </div>`) : "";

    const count = `<p class="result-line">共 ${list.length} 条${pages > 1 ? `，第 ${page} / ${pages} 页` : ""}</p>`;
    const pager = pagerNav((n) => newsHref({ q: keyword, page: n }), page, pages);

    view.innerHTML = `
      ${crumbBar("新闻", newsHref({}))}
      ${newsHead()}
      <form class="toolbar" method="get" action="news.html" role="search">
        ${isGuest ? '<input type="hidden" name="guest" value="1">' : ""}
        <div class="search">
          <input id="q" name="q" type="search" value="${esc(keyword)}" placeholder="${isGuest ? "搜索新闻" : "搜索标题"}" autocomplete="off">
        </div>
      </form>
      ${count}
      ${leadHtml}
      ${rest.length ? `<div class="grid">${cards}</div>` : ""}
      ${empty}
      ${pager}`;
    setTitle("");
  }

  function renderNoticeList() {
    const q = params();
    const keyword = (q.get("q") || "").trim();
    const folded = keyword.toLowerCase();

    const list = sortedNotices(NOTICES.filter((item) => {
      if (!folded) return true;
      return item.title.toLowerCase().includes(folded);
    }));
    const pages = Math.max(1, Math.ceil(list.length / NOTICE_PAGE_SIZE) || 1);
    const page = list.length ? clampPage(q.get("page"), pages) : 1;
    const slice = list.slice((page - 1) * NOTICE_PAGE_SIZE, page * NOTICE_PAGE_SIZE);

    const rows = slice.map((item) => `
      <div class="nrow ${item.pinned ? "pinned" : ""}">
        <span>
          <span class="ntitle">${item.pinned ? '<span class="pin">置顶</span>' : ""}${esc(item.title)}</span>
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
        <p>可清空搜索后再试。</p>
        <a href="notices.html">查看全部公告</a>
      </div>` : `
      <div class="sheet">
        <div class="sheet-head">
          <span>标题</span>
          <span>适用对象</span>
          <span>有效期</span>
          <span>发文单位</span>
          <span>发布日期</span>
          <span>操作</span>
        </div>
        ${rows}
      </div>`;

    const pager = pagerNav((n) => noticeHref({ q: keyword, page: n }), page, pages);

    view.innerHTML = `
      ${crumbBar("公告", "notices.html")}
      ${noticeHead()}
      <form class="toolbar" method="get" action="notices.html" role="search">
        <div class="search">
          <input id="q" name="q" type="search" value="${esc(keyword)}" placeholder="搜索标题" autocomplete="off">
        </div>
      </form>
      <p class="result-line">共 ${list.length} 条${pages > 1 ? `，第 ${page} / ${pages} 页` : ""}</p>
      ${empty}
      ${pager}`;
    setTitle("");
  }

  function renderNewsDetail(id) {
    const raw = newsById(id);
    if (isGuest && raw && raw.level !== "public") {
      view.innerHTML = `
        <div class="empty">
          <h2>这篇新闻需要登录后查看</h2>
          <p>未登录只能阅读已公开的新闻。</p>
          <a href="login.html">去登录</a>
        </div>`;
      setTitle("需要登录");
      return;
    }
    const item = raw;
    if (!item) {
      view.innerHTML = `<div class="empty"><h2>未找到这篇新闻</h2><p>它可能已从本期内容中撤下。</p><a href="${esc(newsHref({}))}">返回新闻</a></div>`;
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
      .filter((rel) => rel && (!isGuest || rel.level === "public"))
      .slice(0, 3)
      .map((rel) => `
        <a href="${esc(newsHref({ id: rel.id }))}">
          <img src="${esc(rel.cover)}" alt="">
          <span>
            <strong>${esc(rel.title)}</strong>
            <em>${formatDate(rel.publishAt)}</em>
          </span>
        </a>`).join("");

    view.innerHTML = `
      ${crumbBar("新闻", newsHref({}), item.title)}
      <a class="back" href="${esc(newsHref({}))}">返回新闻</a>
      <article>
        <header class="article-head">
          <div class="kicker"><time datetime="${esc(item.publishAt)}">${formatDate(item.publishAt)}</time></div>
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
      view.innerHTML = `<div class="empty"><h2>未找到这条公告</h2><p>请从公告列表重新进入。</p><a href="notices.html">返回公告</a></div>`;
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
      ${crumbBar("公告", "notices.html", item.title)}
      <a class="back" href="notices.html">返回公告</a>
      ${fileBlock}`;
    setTitle(item.title);
  }

  function render() {
    const q = params();
    const id = q.get("id");
    if (!isNoticePage && (q.get("tab") === "notice" || (id && id.indexOf("NTC-") === 0))) {
      const next = new URLSearchParams(location.search);
      next.delete("tab");
      const query = next.toString();
      location.replace(query ? `notices.html?${query}` : "notices.html");
      return;
    }
    if (isNoticePage && id && id.indexOf("NTC-") !== 0) {
      location.replace(`news.html?id=${encodeURIComponent(id)}`);
      return;
    }
    if (id && id.indexOf("NTC-") === 0) {
      renderNoticeDetail(id);
      return;
    }
    if (id) {
      renderNewsDetail(id);
      return;
    }
    if (isNoticePage) renderNoticeList();
    else renderNewsList();
  }

  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      const input = document.getElementById("q");
      if (input) {
        input.focus();
        input.select();
      }
    }
  });

  render();
})();
