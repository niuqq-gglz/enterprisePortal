(function () {
  var TODAY = "2026-10-15";
  var WEEK = ["日", "一", "二", "三", "四", "五", "六"];
  var DIGIT = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
  var viewYear = 2026;
  var viewMonth = 10;
  var REST = {
    "2026-09-25": 1, "2026-09-26": 1, "2026-09-27": 1,
    "2026-10-01": 1, "2026-10-02": 1, "2026-10-03": 1, "2026-10-04": 1,
    "2026-10-05": 1, "2026-10-06": 1, "2026-10-07": 1
  };
  var WORK = { "2026-09-20": 1, "2026-10-10": 1 };
  var FEST = {
    "2026-09-07": "白露",
    "2026-09-10": "教师节",
    "2026-09-23": "秋分",
    "2026-09-25": "中秋",
    "2026-09-30": "烈士纪念",
    "2026-10-01": "国庆节",
    "2026-10-08": "寒露",
    "2026-10-10": "辛亥革命",
    "2026-10-18": "重阳",
    "2026-10-23": "霜降",
    "2026-10-25": "台湾光复",
    "2026-10-31": "万圣节",
    "2026-11-07": "立冬",
    "2026-11-22": "小雪",
    "2026-12-07": "大雪",
    "2026-12-13": "公祭日",
    "2026-12-22": "冬至",
    "2026-12-24": "平安夜",
    "2026-12-25": "圣诞",
    "2027-01-01": "元旦"
  };
  var lunarDay = buildLunar();

  function pad(n) { return n < 10 ? "0" + n : String(n); }
  function iso(y, m, d) { return y + "-" + pad(m) + "-" + pad(d); }
  function lunarName(n) {
    if (n === 10) return "初十";
    if (n === 20) return "二十";
    if (n === 30) return "三十";
    if (n < 10) return "初" + DIGIT[n];
    if (n < 20) return "十" + DIGIT[n - 10];
    return "廿" + DIGIT[n - 20];
  }
  function buildLunar() {
    var resets = { "2026-09-11": 1, "2026-10-10": 1, "2026-11-09": 1, "2026-12-09": 1 };
    var map = {};
    var n = 19;
    var cursor = new Date(2026, 7, 31);
    var end = new Date(2027, 0, 3);
    while (cursor <= end) {
      var key = iso(cursor.getFullYear(), cursor.getMonth() + 1, cursor.getDate());
      if (resets[key]) n = 1;
      map[key] = n;
      n += 1;
      cursor.setDate(cursor.getDate() + 1);
    }
    return map;
  }

  function render() {
    var heading = document.getElementById("cal-heading");
    var prev = document.getElementById("cal-prev");
    var next = document.getElementById("cal-next");
    var grid = document.getElementById("cal-grid");
    if (!heading || !prev || !next || !grid) return;
    heading.textContent = viewMonth + "月";
    prev.disabled = viewYear === 2026 && viewMonth === 9;
    next.disabled = viewYear === 2026 && viewMonth === 12;
    grid.setAttribute("aria-label", viewYear + "年" + viewMonth + "月");
    var first = new Date(viewYear, viewMonth - 1, 1);
    var cursor = new Date(viewYear, viewMonth - 1, 1 - ((first.getDay() + 6) % 7));
    var html = "";
    var seen = false;
    while (true) {
      var y = cursor.getFullYear();
      var m = cursor.getMonth() + 1;
      var d = cursor.getDate();
      var id = iso(y, m, d);
      var inMonth = m === viewMonth && y === viewYear;
      if (inMonth) seen = true;
      var dow = cursor.getDay();
      var off = !!REST[id];
      var work = !!WORK[id];
      var weekend = dow === 0 || dow === 6;
      var fest = FEST[id];
      var lunar = lunarDay[id] ? lunarName(lunarDay[id]) : "";
      var sub = fest || lunar;
      var cls = "day";
      if (!inMonth) cls += " out";
      if (off) cls += " is-off";
      else if (weekend && !work) cls += " is-weekend";
      if (work) cls += " is-work";
      if (id === TODAY) cls += " is-today";
      var label = m + "月" + d + "日 星期" + WEEK[dow] + (sub ? " " + sub : "");
      if (off) label += " 放假";
      if (work) label += " 上班";
      html += '<div class="' + cls + '" role="gridcell"' + (id === TODAY ? ' aria-current="date"' : "") + ' aria-label="' + label + '">';
      if (off) html += '<span class="mark">休</span>';
      if (work) html += '<span class="mark work">班</span>';
      html += '<span class="num">' + d + '</span><span class="sub' + (fest ? " fest" : "") + '">' + sub + "</span></div>";
      cursor.setDate(cursor.getDate() + 1);
      if (seen && dow === 0 && (cursor.getFullYear() !== viewYear || cursor.getMonth() + 1 !== viewMonth)) break;
    }
    grid.innerHTML = html;
  }

  var prevBtn = document.getElementById("cal-prev");
  var nextBtn = document.getElementById("cal-next");
  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      if (viewYear === 2026 && viewMonth === 9) return;
      viewMonth -= 1;
      render();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      if (viewYear === 2026 && viewMonth === 12) return;
      viewMonth += 1;
      render();
    });
  }
  render();
})();
