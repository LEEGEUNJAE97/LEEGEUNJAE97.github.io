/* ============================================================
   render.js — 2026 Renewal v2 (Cinematic Editorial) 렌더러
   window.RESUME_DATA(.ko)를 읽어 티커·일하는 방식·프로젝트·경력·자격·교육을 그린다.
   ============================================================ */
(function () {
  "use strict";
  var D = window.RESUME_DATA || {};

  function k(v) { return (((v && v.ko) || "")).replace(/\s+—\s+/g, " · "); }
  function h(s) { return String(s == null ? "" : s).replace(/[&<>]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]; }); }
  function set(id, html) { var n = document.getElementById(id); if (n) n.insertAdjacentHTML("beforeend", html); }
  function chev() { return '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"></path></svg>'; }

  /* ---------- 성과 티커 (필름 스트립: 큰 디스플레이 타이포) ---------- */
  (function () {
    var facts = [
      "외부 감사 지적 <b>0건</b>", "연 1,000억 원 정산 오차 <b>0%</b>", "1,400개 회원사 ESG 지원",
      "ISO 45001 · 8개 거점 표준화", "단독 연사 10회 · 신규 가입 <b>310건</b>", "55개 사업장 EHS 진단"
    ];
    var star = '<span style="color:#52E8CF;font-size:18px;align-self:center;">✳</span>';
    var one = facts.map(function (w) {
      return '<span style="font-size:22px;font-weight:800;letter-spacing:-0.01em;color:#C9C5DA;">' +
        w.replace(/<b>/g, '<span style="background:linear-gradient(110deg,#8B6DFF,#52E8CF);-webkit-background-clip:text;background-clip:text;color:transparent;">').replace(/<\/b>/g, "</span>") +
      "</span>" + star;
    }).join("");
    set("marquee", one + one);
  })();

  /* ---------- 푸터 티커 ---------- */
  (function () {
    var one = "";
    for (var i = 0; i < 8; i++) {
      one += '<span style="font-size:14px;font-weight:800;letter-spacing:0.18em;color:#8F89AE;">LET\u2019S TALK</span>' +
             '<span style="font-size:14px;font-weight:800;letter-spacing:0.18em;background:linear-gradient(110deg,#8B6DFF,#52E8CF);-webkit-background-clip:text;background-clip:text;color:transparent;">AS7688@NAVER.COM</span>';
    }
    set("marquee-foot", one + one);
  })();

  /* ---------- 일하는 방식 — 에디토리얼 인덱스 행 ---------- */
  (function () {
    (D.workStyle || []).forEach(function (w, i) {
      set("workstyle-list",
        '<div class="idx-row reveal" style="transition-delay:' + (i * 0.06) + 's;display:grid;grid-template-columns:64px 1fr;gap:20px;padding:26px 0;align-items:baseline;' + (i === (D.workStyle.length - 1) ? "border-bottom:1px solid rgba(244,242,250,0.13);" : "") + '">' +
          '<span style="font-size:14px;font-weight:800;color:#8B6DFF;">No.' + (i + 1) + "</span>" +
          '<div style="display:flex;flex-direction:column;gap:8px;">' +
            '<div style="font-size:clamp(22px,2vw,28px);font-weight:800;letter-spacing:-0.03em;line-height:1.25;">' + h(k(w.tag)) + "</div>" +
            '<div style="font-size:14.5px;line-height:1.7;color:#C9C5DA;text-wrap:pretty;max-width:560px;">' + h(k(w.desc)) + "</div>" +
          "</div>" +
        "</div>");
    });
  })();

  /* ---------- 프로젝트 — 풀와이드 인덱스 행 ---------- */
  (function () {
    var list = D.projects || [];
    list.forEach(function (p, i) {
      var highlights = (p.highlights || []).map(k);
      var summary = highlights[0] || "";
      var full = highlights.map(function (t) {
        return '<div style="display:flex;gap:10px;font-size:14px;line-height:1.7;color:#C9C5DA;margin-bottom:9px;"><span style="width:5px;height:5px;border-radius:50%;background:#8B6DFF;flex:none;margin-top:9px;"></span><span>' + h(t) + "</span></div>";
      }).join("");
      var canToggle = highlights.length > 1;
      set("projects-list",
        '<div class="exp idx-row' + (canToggle ? " exp-toggle" : "") + '"' +
          (canToggle ? ' role="button" tabindex="0" aria-expanded="false"' : "") +
          ' style="display:grid;grid-template-columns:110px 1fr auto;gap:28px;padding:34px 0;align-items:start;' + (i === list.length - 1 ? "border-bottom:1px solid rgba(244,242,250,0.13);" : "") + '">' +
          '<div style="font-size:clamp(36px,3.4vw,54px);font-weight:900;letter-spacing:-0.04em;line-height:1;background:linear-gradient(110deg,rgba(139,109,255,.55),rgba(82,232,207,.55));-webkit-background-clip:text;background-clip:text;color:transparent;">0' + (i + 1) + "</div>" +
          '<div style="min-width:0;">' +
            '<div style="font-size:clamp(20px,2.1vw,28px);font-weight:800;letter-spacing:-0.03em;line-height:1.35;">' + h(k(p.title)) + "</div>" +
            '<div style="display:flex;gap:10px;margin-top:10px;align-items:center;flex-wrap:wrap;">' +
              '<span style="font-size:11.5px;font-weight:700;color:#52E8CF;background:rgba(82,232,207,0.1);border:1px solid rgba(82,232,207,0.25);border-radius:999px;padding:4px 11px;">' + h(k(p.type)) + "</span>" +
              '<span style="font-size:12.5px;color:#8F89AE;">' + h(k(p.company)) + " · " + h(p.period) + "</span>" +
            "</div>" +
            '<div class="exp-collapsed" style="font-size:14px;line-height:1.7;color:#C9C5DA;text-wrap:pretty;margin-top:12px;max-width:720px;">' + h(summary) + "</div>" +
            '<div class="exp-body" style="margin-top:12px;max-width:760px;">' + full + "</div>" +
          "</div>" +
          (canToggle ? '<div style="padding-top:8px;">' + chev() + "</div>" : "") +
        "</div>");
    });
  })();

  /* ---------- 경력 — 스티키 좌측 회사 패널 ---------- */
  (function () {
    var reasons = [
      "공익법인 특성상 외부 조력자 역할에 한계를 느껴, 기업 내부에서 ESG 전략을 직접 기획·실행하는 주체로 성장하기 위해 이직을 결심했습니다.",
      "담당 직무가 당초 협의된 환경·안전 전문직에서 총무 전담으로 변경되어, 전문성 심화를 위해 이직을 결심했습니다."
    ];
    (D.experience || []).forEach(function (e, i) {
      var groups = (e.groups || []).map(function (g) {
        var results = (g.results || []).map(function (r) {
          return '<div style="display:inline-flex;align-items:flex-start;gap:10px;background:rgba(82,232,207,0.08);border:1px solid rgba(82,232,207,0.22);border-radius:12px;padding:10px 16px 10px 12px;">' +
            '<span style="font-size:11px;font-weight:800;color:#0A0817;background:#52E8CF;border-radius:999px;padding:3px 9px;flex:none;margin-top:2px;letter-spacing:0.03em;">성과</span>' +
            '<span style="font-size:13.5px;line-height:1.62;font-weight:700;color:#7FEFDC;">' + h(k(r)) + "</span></div>";
        }).join("");
        var duties = (g.duties || []).map(function (d) {
          return '<div style="display:flex;gap:11px;font-size:14px;line-height:1.68;color:#C9C5DA;"><span style="width:5px;height:5px;border-radius:50%;background:#8B6DFF;flex:none;margin-top:9px;"></span><span>' + h(k(d)) + "</span></div>";
        }).join("");
        var hasDuties = !!duties;
        var dutyBlock = hasDuties ?
          '<div class="grp-body" style="margin-top:2px;">' +
            '<div style="font-size:11.5px;font-weight:800;color:#8F89AE;letter-spacing:0.1em;margin:4px 0 10px;">세부 업무</div>' +
            '<div style="display:flex;flex-direction:column;gap:7px;">' + duties + "</div></div>" : "";
        var labelRow = '<div style="display:inline-flex;align-items:center;gap:8px;">' +
            '<span style="font-size:15.5px;font-weight:800;">' + h(k(g.label)) + "</span>" + (hasDuties ? chev() : "") +
          "</div>";
        return '<div class="grp' + (hasDuties ? " grp-toggle" : "") + '"' + (hasDuties ? ' role="button" tabindex="0" aria-expanded="false"' : "") + ' style="display:flex;flex-direction:column;gap:12px;border-top:1px solid rgba(244,242,250,0.1);padding-top:22px;">' +
          labelRow +
          '<div style="display:flex;flex-direction:column;gap:8px;align-items:flex-start;">' + results + "</div>" +
          dutyBlock +
        "</div>";
      }).join("");

      var reason = reasons[i] || "";
      var reasonBlock = reason ?
        '<div class="grp grp-toggle" role="button" tabindex="0" aria-expanded="false" style="display:flex;flex-direction:column;gap:12px;border-top:1px solid rgba(244,242,250,0.1);padding-top:22px;">' +
          '<div style="display:inline-flex;align-items:center;gap:8px;font-size:12.5px;font-weight:700;color:#8F89AE;">이직 배경 ' + chev() + "</div>" +
          '<div class="grp-body" style="margin-top:2px;"><div style="background:rgba(244,242,250,0.05);border:1px solid rgba(244,242,250,0.12);border-radius:12px;padding:16px 20px;display:flex;gap:12px;align-items:flex-start;">' +
            '<span style="font-size:11px;font-weight:800;color:#C9C5DA;background:rgba(244,242,250,0.1);border-radius:999px;padding:3px 9px;flex:none;margin-top:2px;letter-spacing:0.03em;white-space:nowrap;">이직 배경</span>' +
            '<span style="font-size:13.5px;line-height:1.62;color:#C9C5DA;">' + h(reason) + "</span></div></div>" +
        "</div>" : "";

      set("career-list",
        '<div class="split-2" style="display:grid;grid-template-columns:1fr 1.7fr;gap:64px;padding:64px 0;border-bottom:1px solid rgba(244,242,250,0.13);align-items:start;">' +
          '<div class="sticky-col reveal" style="display:flex;flex-direction:column;gap:12px;">' +
            '<div style="font-size:clamp(72px,7vw,110px);font-weight:900;letter-spacing:-0.05em;line-height:1;background:linear-gradient(110deg,rgba(139,109,255,.4),rgba(82,232,207,.4));-webkit-background-clip:text;background-clip:text;color:transparent;">0' + (i + 1) + "</div>" +
            '<div style="font-size:clamp(28px,2.6vw,38px);font-weight:900;letter-spacing:-0.03em;line-height:1.2;">' + h(k(e.company)) + "</div>" +
            '<div style="font-size:13.5px;color:#8F89AE;line-height:1.6;max-width:340px;">' + h(k(e.note)) + "</div>" +
            '<div style="font-size:14px;color:#52E8CF;font-weight:800;">' + h(e.period) + "</div>" +
            '<div style="font-size:15px;font-weight:700;color:#C9C5DA;">' + h(k(e.title)) + "</div>" +
          "</div>" +
          '<div class="reveal" style="transition-delay:0.1s;display:flex;flex-direction:column;gap:26px;">' + groups + reasonBlock + "</div>" +
        "</div>");
    });
  })();

  /* ---------- 자격 — 그리드 카드 ---------- */
  (function () {
    var count = 0;
    (D.certifications || []).forEach(function (g) {
      (g.items || []).forEach(function (c) {
        count++;
        var desc = k(c.desc);
        set("certs-list",
          '<div class="reveal" style="transition-delay:' + ((count % 4) * 0.06) + 's;border:1px solid rgba(244,242,250,0.13);border-radius:18px;padding:24px;display:flex;flex-direction:column;gap:10px;background:rgba(244,242,250,0.03);">' +
            '<div style="display:flex;justify-content:space-between;align-items:baseline;gap:10px;">' +
              '<span style="font-size:11px;font-weight:800;color:#52E8CF;letter-spacing:0.08em;">' + h(k(g.title)) + "</span>" +
              '<span style="font-size:12px;color:#8F89AE;white-space:nowrap;">' + h(c.date) + "</span>" +
            "</div>" +
            '<div style="font-size:16.5px;font-weight:800;letter-spacing:-0.02em;line-height:1.4;">' + h(c.ko) + "</div>" +
            (desc ? '<div style="font-size:13px;line-height:1.6;color:#C9C5DA;">' + h(desc) + "</div>" : "") +
          "</div>");
      });
    });
    var cc = document.getElementById("cert-count"); if (cc) cc.textContent = String(count);
  })();

  /* ---------- 교육·활동 / 아르바이트 / 학력 ---------- */
  function miniRow(title, sub) {
    return '<div class="idx-row" style="padding:16px 0;">' +
      '<div style="font-size:14.5px;font-weight:700;line-height:1.55;">' + h(title) + "</div>" +
      '<div style="font-size:12.5px;color:#8F89AE;margin-top:3px;">' + h(sub) + "</div></div>";
  }
  (function () {
    var lastKind = null;
    (D.activities || []).forEach(function (a) {
      var kind = k(a.kind);
      if (kind !== lastKind) {
        set("acts-list", '<div style="font-size:11px;font-weight:800;color:#52E8CF;letter-spacing:0.1em;margin-top:' + (lastKind ? "28px" : "0") + ';margin-bottom:2px;">' + h(kind) + "</div>");
        lastKind = kind;
      }
      set("acts-list", miniRow(k(a.title), k(a.org) + " · " + a.period));
    });
  })();
  (D.education || []).forEach(function (e) { set("edu-list", miniRow(k(e.school), k(e.degree) + " · " + e.period)); });
  (function () {
    var pt = D.partTime || [];
    if (!pt.length) { var s = document.getElementById("pt-section"); if (s) s.style.display = "none"; return; }
    pt.forEach(function (j) { set("pt-list", miniRow(k(j.company), k(j.title) + " · " + j.period)); });
  })();

  /* ---------- 통계 카운트업 ---------- */
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
    var box = document.getElementById("stats");
    if (!("IntersectionObserver" in window) || !box) { run(); return; }
    new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) run(); });
    }, { threshold: 0.3 }).observe(box);
  })();

  /* ---------- 동적 .reveal 관찰 ---------- */
  (function () {
    if (!("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { en.target.classList.toggle("in-view", en.isIntersecting); });
    }, { threshold: 0.08 });
    document.querySelectorAll("#workstyle-list .reveal, #projects-list .exp, #career-list .reveal, #certs-list .reveal").forEach(function (el) { io.observe(el); });
  })();

  /* ---------- 열고닫기 ---------- */
  function toggleExp(t) {
    var item = t.closest && t.closest(".exp");
    if (!item) return;
    var open = item.classList.toggle("open");
    var togs = item.querySelectorAll(".exp-toggle");
    for (var j = 0; j < togs.length; j++) togs[j].setAttribute("aria-expanded", String(open));
    if (item.classList.contains("exp-toggle")) item.setAttribute("aria-expanded", String(open));
  }
  document.addEventListener("click", function (e) {
    var t = e.target.closest ? e.target.closest(".exp-toggle") : null;
    if (t) toggleExp(t);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " " && e.key !== "Spacebar") return;
    var t = e.target.closest ? e.target.closest(".exp-toggle") : null;
    if (!t || t.tagName === "BUTTON") return;
    e.preventDefault();
    toggleExp(t);
  });

  /* ---------- 경력 파트별 열고닫기 ---------- */
  function toggleGrp(t) {
    var item = t.closest && t.closest(".grp");
    if (!item) return;
    var open = item.classList.toggle("open");
    var togs = item.querySelectorAll(".grp-toggle");
    for (var j = 0; j < togs.length; j++) togs[j].setAttribute("aria-expanded", String(open));
  }
  document.addEventListener("click", function (e) {
    var t = e.target.closest ? e.target.closest(".grp-toggle") : null;
    if (t) toggleGrp(t);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " " && e.key !== "Spacebar") return;
    var t = e.target.closest ? e.target.closest(".grp-toggle") : null;
    if (!t || t.tagName === "BUTTON") return;
    e.preventDefault();
    toggleGrp(t);
  });
})();
