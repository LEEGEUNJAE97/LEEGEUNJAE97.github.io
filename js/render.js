/* render.js — window.RESUME_DATA를 index.html의 빈 컨테이너에 그린다. 내용 수정은 data/resume.js에서. */
(function () {
  "use strict";
  var D = window.RESUME_DATA || {};
  function k(v) { return (v && v.ko) || ""; }
  function h(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function put(id, html) { var n = document.getElementById(id); if (n) n.innerHTML = html; }
  function pad(i) { return (i < 9 ? "0" : "") + (i + 1); }

  // 티커 (data.ticker의 <b>만 허용)
  var tick = (D.ticker || []).map(function (t) { return "<span>" + h(t).replace(/&lt;(\/?)b&gt;/g, "<$1b>") + "</span><i></i>"; }).join("");
  put("ticker", tick + tick);

  put("ways", (D.workStyle || []).map(function (w, i) {
    return '<div class="way"><div class="badge">' + pad(i) + "</div><h3>" + h(k(w.tag)) + "</h3><p>" + h(k(w.desc)) + "</p></div>";
  }).join(""));

  put("exps", (D.projects || []).map(function (p, i) {
    return '<details class="exp"><summary>' +
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
    return '<article class="job"><div class="job-h"><h3>' + h(k(e.company)) + "</h3><span>" + h(k(e.title)) + "</span><time>" + h(e.period) + "</time></div>" +
      '<div class="job-note">' + h(k(e.note)) + '</div><div class="groups">' + groups + "</div></article>";
  }).join(""));

  function row(title, sub, time) {
    return '<div class="row"><div><b>' + h(title) + "</b>" + (sub ? "<small>" + h(sub) + "</small>" : "") + "</div><time>" + h(time) + "</time></div>";
  }
  put("certs", (D.certifications || []).map(function (g) {
    return '<div class="sub-h">' + h(k(g.title)) + "</div>" + (g.items || []).map(function (c) { return row(c.ko, k(c.desc), c.date); }).join("");
  }).join(""));
  put("edu", (D.education || []).map(function (e) { return row(k(e.school), k(e.degree), e.period); }).join(""));
  put("acts", (D.activities || []).map(function (a) { return row(k(a.title), k(a.kind) + " · " + k(a.org), a.period); }).join(""));
  put("pt", (D.partTime || []).map(function (j) { return row(k(j.company), k(j.title), j.period); }).join(""));

  var m = D.motivation || {};
  put("why-lead", h(m.lead));
  put("why-body", (m.body || []).map(function (t) { return "<p>" + h(t) + "</p>"; }).join(""));
  put("nexts", (D.next || []).map(function (n, i) {
    return '<div class="next"><div class="badge">' + pad(i) + "</div><h3>" + h(n.title) + "</h3><p>" + h(n.desc) + "</p></div>";
  }).join(""));

  // 연락처: 누르면 번호 표시, 다시 누르면 숨김 (소스에는 뒤집은 값만 둬서 단순 수집을 피함)
  var rv = document.querySelector("[data-tel]");
  if (rv) rv.addEventListener("click", function () {
    var a = rv.previousElementSibling;
    if (a) { a.remove(); rv.textContent = "눌러서 확인"; rv.setAttribute("aria-expanded", "false"); return; }
    var t = rv.dataset.tel.split("").reverse().join("");
    a = document.createElement("a"); a.href = "tel:" + t; a.textContent = t;
    rv.before(a); rv.textContent = "숨기기"; rv.setAttribute("aria-expanded", "true");
  });

  // 리빌
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) { // 동작 줄이기: 전부 바로 표시
    document.querySelectorAll(".rv").forEach(function (el) { el.classList.add("in"); });
    return;
  }
  // 1회 리빌: 포인트 요소(.rv)만. 보이면 한 번 등장하고 끝.
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (en) {
      if (!en.isIntersecting) return;
      en.target.classList.add("in"); io.unobserve(en.target);
    });
  }, { threshold: 0.3 });
  document.querySelectorAll(".rv").forEach(function (el) { io.observe(el); });
})();
