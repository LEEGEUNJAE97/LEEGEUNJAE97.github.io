/* ============================================================
   render.js — Resume Final 디자인 렌더러
   window.RESUME_DATA(.ko)를 읽어 벤토·경력·프로젝트·자격·교육 섹션을 그린다.
   Claude Design(.dc)의 renderVals() 로직을 의존성 없이 재현.
   ============================================================ */
(function () {
  "use strict";
  var D = window.RESUME_DATA || {};

  // 텍스트 기호(—) 정리: 원문의 긴 줄표는 가운뎃점으로 통일
  function k(v) { return (((v && v.ko) || "")).replace(/\s+—\s+/g, " · "); }
  function h(s) { return String(s == null ? "" : s).replace(/[&<>]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]; }); }
  function set(id, html) { var n = document.getElementById(id); if (n) n.insertAdjacentHTML("beforeend", html); }
  function chev() { return '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"></path></svg>'; }

  /* ---------- 키워드 마키 ---------- */
  (function () {
    var words = ["데이터 검증", "표준화 설계", "이해관계자 소통", "리스크 관리", "ISO 14001 · 45001", "AI 업무 자동화", "대관 업무"];
    var dot = '<span style="width:6px;height:6px;border-radius:50%;background:var(--accent);align-self:center;flex:none;"></span>';
    var one = words.map(function (w) {
      return '<span style="font-size:15px;font-weight:700;color:#A8ABB2;">' + h(w) + "</span>" + dot;
    }).join("");
    set("marquee", one + one); // 무한 스크롤용 2배 복제
  })();

  /* ---------- 벤토: 일하는 방식 카드 ---------- */
  (function () {
    var spans = [2, 2, 2, 3, 3];
    (D.workStyle || []).forEach(function (w, i) {
      set("bento-grid",
        '<div class="lift reveal" style="transition-delay:' + (0.25 + i * 0.05) + 's;background:#FFFFFF;border-radius:22px;padding:30px;display:flex;flex-direction:column;gap:12px;grid-column:span ' + (spans[i] || 2) + ';">' +
          '<div style="font-size:14px;font-weight:800;color:var(--accent);">' + h(k(w.tag)) + "</div>" +
          '<div style="font-size:14.5px;line-height:1.68;color:#494C52;text-wrap:pretty;">' + h(k(w.desc)) + "</div>" +
        "</div>");
    });
  })();

  /* ---------- 경력 (핵심 성과 노출 · 세부 업무 열고닫기) ---------- */
  (function () {
    var reasons = [
      "공익법인 특성상 외부 조력자 역할에 한계를 느껴, 기업 내부에서 ESG 전략을 직접 기획·실행하는 주체로 성장하기 위해 이직을 결심했습니다.",
      "담당 직무가 당초 협의된 환경·안전 전문직에서 총무 전담으로 변경되어, 전문성 심화를 위해 이직을 결심했습니다."
    ];
    (D.experience || []).forEach(function (e, i) {
      var hasDuties = false;
      var groups = (e.groups || []).map(function (g) {
        var results = (g.results || []).map(function (r) {
          return '<div style="display:inline-flex;align-items:flex-start;gap:10px;background:var(--accent-soft);border-radius:12px;padding:10px 16px 10px 12px;">' +
            '<span style="font-size:11px;font-weight:800;color:var(--accent);background:#FFFFFF;border-radius:999px;padding:3px 9px;flex:none;margin-top:2px;letter-spacing:0.03em;">성과</span>' +
            '<span style="font-size:13.5px;line-height:1.62;font-weight:700;color:var(--accent);">' + h(k(r)) + "</span></div>";
        }).join("");
        var duties = (g.duties || []).map(function (d) {
          return '<div style="display:flex;gap:11px;font-size:14px;line-height:1.65;color:#6E7178;"><span style="width:5px;height:5px;border-radius:50%;background:#C9CBD1;flex:none;margin-top:9px;"></span><span>' + h(k(d)) + "</span></div>";
        }).join("");
        var dutyBlock = "";
        if (duties) {
          hasDuties = true;
          dutyBlock = '<div class="exp-body">' +
            '<div style="font-size:11.5px;font-weight:800;color:#A8ABB2;letter-spacing:0.04em;margin:2px 0 8px;">세부 업무</div>' +
            '<div style="display:flex;flex-direction:column;gap:7px;">' + duties + "</div></div>";
        }
        return '<div style="display:flex;flex-direction:column;gap:12px;">' +
          '<div style="font-size:14.5px;font-weight:800;">' + h(k(g.label)) + "</div>" +
          '<div style="display:flex;flex-direction:column;gap:8px;align-items:flex-start;">' + results + "</div>" +
          dutyBlock +
        "</div>";
      }).join("");

      var reason = reasons[i] || "";
      var reasonBox = reason ?
        '<div class="exp-body"><div style="background:#F3F4F6;border-radius:12px;padding:16px 20px;display:flex;gap:12px;align-items:flex-start;">' +
          '<span style="font-size:11px;font-weight:800;color:#6E7178;background:#FFFFFF;border-radius:999px;padding:3px 9px;flex:none;margin-top:2px;letter-spacing:0.03em;white-space:nowrap;">이직 배경</span>' +
          '<span style="font-size:13.5px;line-height:1.62;color:#52565C;">' + h(reason) + "</span></div></div>" : "";

      var canToggle = hasDuties || reason;
      var cue = canToggle ? chev() : "";

      set("career-list",
        '<div class="exp grid-job' + (canToggle ? " exp-toggle" : "") + '"' +
          (canToggle ? ' role="button" tabindex="0" aria-expanded="false"' : "") +
          ' style="display:grid;grid-template-columns:300px 1fr;gap:56px;border-bottom:1px solid #EDEEF0;padding:48px 0;">' +
          '<div style="display:flex;flex-direction:column;gap:10px;">' +
            '<div style="font-size:60px;font-weight:800;color:#EDEEF0;letter-spacing:-0.04em;line-height:1;">0' + (i + 1) + "</div>" +
            '<div style="font-size:22px;font-weight:800;letter-spacing:-0.02em;">' + h(k(e.company)) + "</div>" +
            '<div style="font-size:13px;color:#A8ABB2;line-height:1.55;">' + h(k(e.note)) + "</div>" +
            '<div style="font-size:13.5px;color:var(--accent);font-weight:700;">' + h(e.period) + "</div>" +
          "</div>" +
          '<div style="display:flex;flex-direction:column;gap:26px;">' +
            '<div style="display:flex;justify-content:space-between;align-items:center;gap:16px;">' +
              '<div style="font-size:17px;font-weight:700;">' + h(k(e.title)) + "</div>" + cue +
            "</div>" +
            groups + reasonBox +
          "</div>" +
        "</div>");
    });
  })();

  /* ---------- 프로젝트 (요약 노출 · 전체 내용 열고닫기) ---------- */
  (function () {
    (D.projects || []).forEach(function (p, i) {
      var highlights = (p.highlights || []).map(k);
      var summary = highlights[highlights.length - 1] || "";
      var full = highlights.map(function (t) {
        return '<div style="display:flex;gap:9px;font-size:13px;line-height:1.62;color:#6E7178;margin-bottom:8px;"><span style="width:5px;height:5px;border-radius:50%;background:#C9CBD1;flex:none;margin-top:8px;"></span><span>' + h(t) + "</span></div>";
      }).join("");
      var canToggle = highlights.length > 1;
      set("projects-list",
        '<div class="exp' + (canToggle ? " exp-toggle" : "") + '"' +
          (canToggle ? ' role="button" tabindex="0" aria-expanded="false"' : "") +
          ' style="border-top:1px solid #E2E4E8;padding:22px 0;">' +
          '<div style="display:flex;gap:14px;align-items:flex-start;">' +
            '<div style="font-size:14px;font-weight:800;color:#C9CCD2;padding-top:3px;flex:none;">0' + (i + 1) + "</div>" +
            '<div style="flex:1;min-width:0;">' +
              '<div style="display:flex;justify-content:space-between;gap:10px;align-items:flex-start;">' +
                '<div style="font-size:18px;font-weight:800;letter-spacing:-0.02em;line-height:1.4;">' + h(k(p.title)) + "</div>" +
                (canToggle ? chev() : "") +
              "</div>" +
              '<div style="display:flex;gap:8px;margin-top:8px;align-items:center;flex-wrap:wrap;">' +
                '<span style="font-size:11.5px;font-weight:700;color:var(--accent);background:#FFFFFF;border-radius:999px;padding:4px 11px;">' + h(k(p.type)) + "</span>" +
                '<span style="font-size:12px;color:#A8ABB2;">' + h(k(p.company)) + " · " + h(p.period) + "</span>" +
              "</div>" +
              '<div class="exp-collapsed" style="font-size:13px;line-height:1.65;color:#6E7178;text-wrap:pretty;margin-top:10px;">' + h(summary) + "</div>" +
              '<div class="exp-body" style="margin-top:10px;">' + full + "</div>" +
            "</div>" +
          "</div>" +
        "</div>");
    });
  })();

  /* ---------- 자격사항 (자격명·취득일 노출 · 설명 열고닫기) ---------- */
  (function () {
    var count = 0;
    (D.certifications || []).forEach(function (g) {
      (g.items || []).forEach(function (c) {
        count++;
        var desc = k(c.desc);
        var descBody = desc ?
          '<div class="exp-body" style="padding:0 0 16px;"><div class="cert-desc-line" style="font-size:13px;line-height:1.6;color:#6E7178;">' + h(desc) + "</div></div>" : "";
        set("certs-list",
          '<div class="exp" style="border-bottom:1px solid #EDEEF0;">' +
            '<div class="cert-head' + (desc ? " exp-toggle" : "") + '"' + (desc ? ' role="button" tabindex="0" aria-expanded="false"' : "") +
              ' style="display:flex;justify-content:space-between;gap:12px;align-items:baseline;padding:16px 0;">' +
              '<div style="min-width:0;">' +
                '<div style="font-size:11px;font-weight:800;color:var(--accent);letter-spacing:0.05em;">' + h(k(g.title)) + "</div>" +
                '<div style="font-size:15px;font-weight:700;margin-top:3px;">' + h(c.ko) + "</div>" +
              "</div>" +
              '<div style="display:flex;gap:8px;align-items:center;font-size:12.5px;color:#A8ABB2;white-space:nowrap;flex:none;">' + h(c.date) + (desc ? chev() : "") + "</div>" +
            "</div>" + descBody +
          "</div>");
      });
    });
    var cc = document.getElementById("cert-count"); if (cc) cc.textContent = String(count);
  })();

  /* ---------- 교육·활동 / 아르바이트 / 학력 ---------- */
  function miniRow(title, sub) {
    return '<div style="border-bottom:1px solid #EDEEF0;padding:14px 0;">' +
      '<div style="font-size:14px;font-weight:700;line-height:1.5;">' + h(title) + "</div>" +
      '<div style="font-size:12.5px;color:#A8ABB2;margin-top:3px;">' + h(sub) + "</div></div>";
  }
  (D.activities || []).forEach(function (a) { set("acts-list", miniRow(k(a.title), k(a.org) + " · " + a.period)); });
  (D.education || []).forEach(function (e) { set("edu-list", miniRow(k(e.school), k(e.degree) + " · " + e.period)); });
  (function () {
    var pt = D.partTime || [];
    if (!pt.length) { var s = document.getElementById("pt-section"); if (s) s.style.display = "none"; return; }
    pt.forEach(function (j) { set("pt-list", miniRow(k(j.company), k(j.title) + " · " + j.period)); });
  })();

  /* ---------- 통계 카운트업 (스크롤로 들어올 때마다 재생) ---------- */
  (function () {
    var m = document.getElementById("stat-members"), b = document.getElementById("stat-billion"), n = document.getElementById("stat-enroll");
    if (!m || !b || !n) return;
    var dur = 1400, ease = function (t) { return 1 - Math.pow(1 - t, 3); }, raf = null;
    function run() {
      if (raf) cancelAnimationFrame(raf);
      var start = performance.now();
      (function tick(now) {
        var p = Math.min(1, (now - start) / dur), e = ease(p);
        m.textContent = Math.round(1400 * e).toLocaleString();
        b.textContent = Math.round(1000 * e).toLocaleString();
        n.textContent = Math.round(310 * e).toLocaleString();
        raf = p < 1 ? requestAnimationFrame(tick) : null;
      })(start);
    }
    var box = document.getElementById("bento-grid");
    if (!("IntersectionObserver" in window) || !box) { run(); return; }
    new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) run(); });
    }, { threshold: 0.3 }).observe(box);
  })();

  /* ---------- 열고닫기 인터랙션 (경력·프로젝트·자격 공통) ---------- */
  function toggleExp(t) {
    var item = t.closest && t.closest(".exp");
    if (!item) return;
    var open = item.classList.toggle("open");
    var togs = item.querySelectorAll(".exp-toggle");
    for (var j = 0; j < togs.length; j++) togs[j].setAttribute("aria-expanded", String(open));
    if (item.classList.contains("exp-toggle")) item.setAttribute("aria-expanded", String(open)); // 카드 자체가 토글일 때
  }
  document.addEventListener("click", function (e) {
    var t = e.target.closest ? e.target.closest(".exp-toggle") : null;
    if (t) toggleExp(t);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " " && e.key !== "Spacebar") return;
    var t = e.target.closest ? e.target.closest(".exp-toggle") : null;
    if (!t || t.tagName === "BUTTON") return; // 버튼은 네이티브 키보드 활성화에 위임
    e.preventDefault();
    toggleExp(t);
  });
})();
