/* render.js — window.RESUME_DATA를 index.html의 빈 컨테이너에 그린다. 내용 수정은 data/resume.js에서. */
(function () {
  "use strict";
  var D = window.RESUME_DATA || {};
  function k(v) { return (v && v.ko) || ""; }
  function h(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function put(id, html) { var n = document.getElementById(id); if (n) n.innerHTML = html; }
  function pad(i) { return (i < 9 ? "0" : "") + (i + 1); }

  // 티커 (data.ticker의 <b>만 허용)
  var tick = (D.ticker || []).map(function (t) { return "<span>" + h(t).replace(/&lt;(\/?)b&gt;/g, "<$1b>") + "</span><i>✳</i>"; }).join("");
  put("ticker", tick + tick);

  // KPI (desc의 <br />만 허용)
  put("stats", (D.stats || []).map(function (s) {
    return '<div class="kpi rv"><b><span data-count="' + (+s.count) + '">0</span><small>' + h(s.unit) + "</small></b><p>" +
      h(s.desc).replace(/&lt;br \/&gt;/g, "<br />") + "</p></div>";
  }).join(""));

  put("ways", (D.workStyle || []).map(function (w, i) {
    return '<div class="way rv"><div class="badge">' + pad(i) + "</div><h3>" + h(k(w.tag)) + "</h3><p>" + h(k(w.desc)) + "</p></div>";
  }).join(""));

  put("exps", (D.projects || []).map(function (p, i) {
    return '<details class="exp rv"' + (i === 0 ? " open" : "") + "><summary>" +
      '<span class="num">' + pad(i) + "</span>" +
      "<div><h3>" + h(k(p.title)) + '</h3><div class="meta"><span class="chip">' + h(k(p.type)) + "</span><span>" + h(k(p.company)) + " · " + h(p.period) + "</span></div></div>" +
      '<span class="plus" aria-hidden="true"></span></summary>' +
      '<div class="exp-body"><ul>' + (p.highlights || []).map(function (t) { return "<li>" + h(k(t)) + "</li>"; }).join("") + "</ul></div></details>";
  }).join(""));

  put("jobs", (D.experience || []).map(function (e) {
    var groups = (e.groups || []).map(function (g) {
      return '<div class="grp"><h4>' + h(k(g.label)) + "</h4><ul>" +
        (g.duties || []).map(function (d) { return "<li>" + h(k(d)) + "</li>"; }).join("") + "</ul>" +
        (g.results || []).map(function (r) { return '<div class="res">' + h(k(r)) + "</div>"; }).join("") + "</div>";
    }).join("");
    return '<article class="job rv"><div class="job-h"><h3>' + h(k(e.company)) + "</h3><span>" + h(k(e.title)) + "</span><time>" + h(e.period) + "</time></div>" +
      '<div class="job-note">' + h(k(e.note)) + '</div><div class="groups">' + groups + "</div></article>";
  }).join(""));

  function row(title, sub, time) {
    return '<div class="row"><div><b>' + h(title) + "</b>" + (sub ? "<small>" + h(sub) + "</small>" : "") + "</div><time>" + h(time) + "</time></div>";
  }
  put("certs", (D.certifications || []).map(function (g) {
    return '<div class="sub-h">' + h(k(g.title)) + "</div>" + (g.items || []).map(function (c) { return row(c.ko, k(c.desc), c.date); }).join("");
  }).join(""));
  put("edu", (D.education || []).map(function (e) { return row(k(e.school), k(e.degree), e.period); }).join(""));
  put("acts", (D.activities || []).map(function (a) { return row("[" + k(a.kind) + "] " + k(a.title), k(a.org), a.period); }).join(""));
  put("pt", (D.partTime || []).map(function (j) { return row(k(j.company), k(j.title), j.period); }).join(""));

  var m = D.motivation || {};
  put("why-lead", h(m.lead));
  put("why-body", (m.body || []).map(function (t) { return "<p>" + h(t) + "</p>"; }).join(""));
  put("nexts", (D.next || []).map(function (n, i) {
    return '<div class="next rv"><div class="badge">' + pad(i) + "</div><h3>" + h(n.title) + "</h3><p>" + h(n.desc) + "</p></div>";
  }).join(""));

  // 리빌 + KPI 카운트업
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var nums = document.querySelectorAll("[data-count]");
  function countUp() {
    if (reduce) { nums.forEach(function (n) { n.textContent = (+n.dataset.count).toLocaleString(); }); return; }
    var t0 = performance.now();
    (function tick(now) {
      var p = Math.min(1, (now - t0) / 1300), e = 1 - Math.pow(1 - p, 3);
      nums.forEach(function (n) { n.textContent = Math.round(+n.dataset.count * e).toLocaleString(); });
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  }
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".rv").forEach(function (el) { el.classList.add("in"); });
    countUp(); return;
  }
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".rv").forEach(function (el, i) { el.style.transitionDelay = ((i % 3) * 0.06) + "s"; io.observe(el); });
  var started = false, st = document.getElementById("stats");
  new IntersectionObserver(function (es) {
    if (!started && es[0].isIntersecting) { started = true; countUp(); }
  }, { threshold: 0.3 }).observe(st);
})();
