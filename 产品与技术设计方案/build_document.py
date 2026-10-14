from pathlib import Path
import re
import markdown

BASE = Path(__file__).resolve().parent
MD_PATH = BASE / "企业员工门户一期产品与技术设计方案.md"
HTML_PATH = BASE / "企业员工门户一期产品与技术设计方案.html"

source = MD_PATH.read_text(encoding="utf-8")
parts = re.split(r"\n---\n", source, maxsplit=1)
body_source = parts[1] if len(parts) == 2 else source

body = markdown.markdown(
    body_source,
    extensions=[
        "tables",
        "fenced_code",
        "sane_lists",
        "toc",
    ],
    extension_configs={"toc": {"permalink": False}},
)

body = re.sub(
    r"<h1 id=\"([^\"]+)\">(\d+)\.\s*([^<]+)</h1>",
    r'<section class="chapter-head chapter-\2"><div class="chapter-num">CHAPTER \2</div><h1 id="\1">\2. \3</h1></section>',
    body,
)

css = r"""
@page {
  size: A4;
  margin: 20mm 22mm 22mm 22mm;
  background: #ffffff;
  @top-right {
    content: string(section-title);
    font-family: "Songti SC", "STSong", "Source Han Serif SC", "Noto Serif CJK SC", serif;
    font-size: 8pt;
    color: #6a7380;
  }
  @bottom-center {
    content: counter(page) "  ·  企业员工门户一期产品与技术设计方案";
    font-family: "Songti SC", "STSong", "Source Han Serif SC", "Noto Serif CJK SC", serif;
    font-size: 8.5pt;
    color: #6a7380;
  }
}
@page:first {
  @top-right { content: ""; }
  @bottom-center { content: ""; }
}
* { box-sizing: border-box; }
:root {
  --page: #ffffff;
  --surface: #f4f6f9;
  --surface-2: #eef1f5;
  --near-black: #14181f;
  --dark-warm: #2c3440;
  --olive: #46505c;
  --stone: #6a7380;
  --brand: #1B365D;
  --brand-soft: #d9e3f0;
  --border: #dde3eb;
  --border-soft: #e8edf3;
  --tag-bg: #e6eef7;
  --serif: "Songti SC", "STSong", "Source Han Serif SC", "Noto Serif CJK SC", "SimSun", Georgia, serif;
  --mono: "SFMono-Regular", "Menlo", "JetBrains Mono", monospace;
}
html, body { background: var(--page); margin: 0; padding: 0; }
@media screen {
  body { max-width: 210mm; margin: 0 auto; padding: 20mm 22mm 22mm; }
}
body {
  color: var(--near-black);
  font-family: var(--serif);
  font-size: 9.8pt;
  line-height: 1.64;
  letter-spacing: 0.18pt;
  widows: 3;
  orphans: 3;
}
.cover {
  min-height: 250mm;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 42mm 0 4mm;
  break-after: page;
}
.cover-eyebrow {
  font-size: 10pt;
  color: var(--brand);
  letter-spacing: 1.2pt;
  margin-bottom: 18pt;
}
.cover-title {
  font-size: 32pt;
  line-height: 1.2;
  font-weight: 600;
  color: var(--near-black);
  max-width: 92%;
  margin-bottom: 14pt;
}
.cover-sub {
  font-size: 14pt;
  line-height: 1.65;
  color: var(--olive);
  max-width: 88%;
}
.cover-meta {
  font-size: 10pt;
  line-height: 1.8;
  color: var(--stone);
}
.cover-meta strong { color: var(--dark-warm); font-weight: 600; }
.chapter-head { break-before: page; }
.chapter-1,
.chapter-3,
.chapter-4,
.chapter-6,
.chapter-7,
.chapter-9,
.chapter-11,
.chapter-12,
.chapter-13 { break-before: auto; margin-top: 22pt; }
.chapter-num {
  font-size: 9pt;
  color: var(--brand);
  letter-spacing: 1.1pt;
  margin-bottom: 5pt;
}
h1 {
  font-size: 22pt;
  font-weight: 600;
  line-height: 1.25;
  margin: 0 0 12pt;
  padding-bottom: 8pt;
  border-bottom: 1pt solid var(--brand);
  color: var(--near-black);
  break-after: avoid;
}
h2 {
  font-size: 15.5pt;
  font-weight: 600;
  line-height: 1.3;
  margin: 19pt 0 7pt;
  color: var(--near-black);
  break-after: avoid;
  string-set: section-title content();
}
h3 {
  font-size: 12.5pt;
  font-weight: 600;
  line-height: 1.35;
  margin: 13pt 0 5pt;
  color: var(--dark-warm);
  break-after: avoid;
}
p { margin: 0 0 7.5pt; }
strong { font-weight: 600; }
a { color: var(--brand); text-decoration: none; overflow-wrap: anywhere; }
ul, ol { margin: 4pt 0 8pt; padding-left: 20pt; }
li { margin-bottom: 2pt; }
li::marker { color: var(--brand); }
blockquote {
  margin: 12pt 0;
  padding: 12pt 15pt;
  background: var(--surface);
  border-radius: 6pt;
  box-shadow: inset 0 0 0 0.6pt var(--border);
  break-inside: avoid;
}
blockquote::before {
  content: "";
  display: block;
  width: 28pt;
  height: 2pt;
  background: var(--brand);
  border-radius: 1pt;
  margin-bottom: 8pt;
}
blockquote p:last-child { margin-bottom: 0; }
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 8.4pt;
  line-height: 1.45;
  margin: 8pt 0 11pt;
  break-inside: auto;
}
thead { display: table-header-group; }
tr { break-inside: avoid; }
th {
  text-align: left;
  font-weight: 600;
  color: var(--dark-warm);
  padding: 4.5pt 6pt;
  border-bottom: 1pt solid var(--border);
}
td {
  padding: 4pt 6pt;
  border-bottom: 0.3pt solid var(--border-soft);
  vertical-align: top;
}
tbody tr:nth-child(even) td { background: var(--surface); }
pre {
  font-family: var(--mono);
  font-size: 8pt;
  line-height: 1.55;
  background: var(--surface);
  border-radius: 5pt;
  padding: 10pt 13pt;
  margin: 10pt 0 13pt;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  break-inside: avoid;
}
code {
  font-family: var(--mono);
  font-size: 0.92em;
  background: var(--surface);
  padding: 1pt 3pt;
  border-radius: 2pt;
}
pre code { background: transparent; padding: 0; }
hr {
  border: 0;
  border-top: 0.5pt solid var(--border);
  margin: 18pt 0;
}
.document-body > h2:first-child { margin-top: 0; }
.document-body > h2:first-child,
.document-body > h2:first-child + p { break-after: avoid; }
"""

mobile_css = r"""
@media (max-width: 600px) {
  body { max-width: none; padding: 24px 18px 36px; font-size: 15px; }
  .cover { min-height: calc(100vh - 60px); padding: 54px 0 8px; }
  .cover-title { font-size: 34px; max-width: 100%; }
  .cover-sub { font-size: 18px; max-width: 100%; }
  h1 { font-size: 28px; }
  h2 { font-size: 22px; }
  h3 { font-size: 18px; }
  table { display: block; overflow-x: auto; white-space: normal; }
  pre { overflow-x: auto; white-space: pre; }
}
"""

html = f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="author" content="企业员工门户项目组">
  <meta name="description" content="企业员工门户一期产品、页面、内容治理、技术架构、实施与验收方案">
  <meta name="keywords" content="企业员工门户,产品设计,技术方案,内容治理,静态门户">
  <meta name="generator" content="Kami">
  <title>企业员工门户一期产品与技术设计方案</title>
  <style>{css}</style>
  <style media="screen">{mobile_css}</style>
</head>
<body>
  <section class="cover">
    <div>
      <div class="cover-eyebrow">产品与技术设计方案</div>
      <div class="cover-title">企业员工门户一期<br>产品与技术设计方案</div>
      <div class="cover-sub">受控访问的员工信息与资源入口</div>
    </div>
    <div class="cover-meta">
      <strong>版本 2.4</strong><br>
      2026 年 10 月 14 日<br>
      适用于产品、设计、研发、运维、安全与内容负责人
    </div>
  </section>
  <article class="document-body">
    {body}
  </article>
</body>
</html>
"""

HTML_PATH.write_text(html, encoding="utf-8")
print(HTML_PATH)
