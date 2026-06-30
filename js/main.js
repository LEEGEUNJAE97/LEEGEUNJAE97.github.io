/* ============================================================
   main.js
   - SITE_CONFIG(표현/연락처) + RESUME_DATA(사실 정보)를 읽어 렌더
   - 언어 토글(KO/EN, localStorage), 편집 모드(site-config 전용), 저장 모달
   ============================================================ */
(function () {
  "use strict";

  var CFG = window.SITE_CONFIG || {};
  var DATA = window.RESUME_DATA || {};
  var LANG_KEY = "resume.lang";
  var $ = function (sel, root) { return (root || document).querySelector(sel); };

  /* 작은 헬퍼: 텍스트 노드 안전 생성 */
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  /* {ko, en} 양쪽을 .ko/.en span 두 개로 렌더 (언어 토글이 보임/숨김 처리) */
  function bilingual(container, pair, cls) {
    var ko = el("span", "ko" + (cls ? " " + cls : ""), (pair && pair.ko) || "");
    var en = el("span", "en" + (cls ? " " + cls : ""), (pair && pair.en) || "");
    container.appendChild(ko);
    container.appendChild(en);
    return container;
  }

  /* ---------- 0. 테마 컬러 주입 ---------- */
  function applyTheme() {
    var accent = (CFG.theme && CFG.theme.accent) || "#4A6741";
    document.documentElement.style.setProperty("--primary", accent);
    document.documentElement.style.setProperty("--primary-dark", shade(accent, -0.18));
    document.documentElement.style.setProperty("--primary-soft", shade(accent, 0.86));
    document.documentElement.style.setProperty("--accent", accent);
    document.documentElement.style.setProperty("--accent-dark", shade(accent, -0.18));
    document.documentElement.style.setProperty("--accent-soft", shade(accent, 0.86));
  }
  function shade(hex, amt) {
    var c = hex.replace("#", "");
    if (c.length === 3) c = c.split("").map(function (x) { return x + x; }).join("");
    var r = parseInt(c.slice(0, 2), 16), g = parseInt(c.slice(2, 4), 16), b = parseInt(c.slice(4, 6), 16);
    var t = amt < 0 ? 0 : 255, p = Math.abs(amt);
    function mix(v) { return Math.round((t - v) * p + v); }
    return "#" + [mix(r), mix(g), mix(b)].map(function (v) {
      return ("0" + v.toString(16)).slice(-2);
    }).join("");
  }

  /* ---------- 1. SITE_CONFIG 렌더 (편집 가능 영역) ---------- */
  function renderConfig() {
    bilingual($("#nav-brand"), CFG.name);
    bilingual($("#hero-name"), CFG.name);
    bilingual($("#hero-headline"), CFG.headline);
    bilingual($("#hero-subtitle"), CFG.subtitle);

    // 프로필 사진
    if (CFG.photo) {
      var photoEl = $("#hero-photo");
      var photoImg = $("#hero-photo-img");
      photoImg.src = CFG.photo;
      photoEl.hidden = false;
    }

    // 푸터
    var year = new Date().getFullYear();
    var f = $("#footer-text");
    var fk = el("span", "ko", "© " + year + " " + (CFG.name.ko || "") + ". All rights reserved.");
    var fe = el("span", "en", "© " + year + " " + (CFG.name.en || "") + ". All rights reserved.");
    fe.hidden = true; f.appendChild(fk); f.appendChild(fe);


    // 연락처
    renderContact();
  }

  function renderContact() {
    var list = $("#contact-list");
    list.innerHTML = "";
    var c = CFG.contact || {};
    var items = [
      { key: "email", icon: ICON.mail, href: c.email ? "mailto:" + c.email : "", label: c.email },
      { key: "phone", icon: ICON.phone, href: c.phone ? "tel:" + c.phone.replace(/[^+\d]/g, "") : "", label: c.phone },
      { key: "linkedin", icon: ICON.linkedin, href: c.linkedin, label: c.linkedin },
      { key: "github", icon: ICON.github, href: c.github, label: c.github }
    ];
    items.forEach(function (it) {
      if (!it.label) return; // 값 없으면 표시 안 함
      var li = el("li");
      var ic = document.createElement("span");
      ic.className = "ic"; ic.innerHTML = it.icon; ic.setAttribute("aria-hidden", "true");
      li.appendChild(ic);
      if (it.href) {
        var a = el("a", null, it.label);
        a.href = it.href;
        if (it.key === "linkedin" || it.key === "github") { a.target = "_blank"; a.rel = "noopener"; }
        li.appendChild(a);
      } else {
        li.appendChild(el("span", null, it.label));
      }
      list.appendChild(li);
    });
    if (!list.children.length) {
      var empty = el("li");
      bilingual(empty, { ko: "연락처를 편집 모드에서 추가하세요.", en: "Add contact info in edit mode." });
      list.appendChild(empty);
    }
  }

  /* ---------- 2. RESUME_DATA 렌더 (읽기 전용) ---------- */
  function renderResume() {
    // About — 마침표 기준으로 문장마다 줄바꿈
    (function () {
      var container = $("#about-text");
      function sentenceSpan(text, cls) {
        var span = el("span", cls);
        var sentences = text.split(". ").filter(Boolean);
        sentences.forEach(function (s, i) {
          var line = el("span", "about__sentence");
          var t = i < sentences.length - 1 ? s + "." : s;
          t.split("\n").forEach(function(part, pi) {
            if (pi > 0) line.appendChild(document.createElement("br"));
            var lsp = part.lastIndexOf(" ");
            line.appendChild(document.createTextNode(lsp === -1 ? part : part.slice(0, lsp) + " " + part.slice(lsp + 1)));
          });
          span.appendChild(line);
        });
        return span;
      }
      var koText = (DATA.about && DATA.about.ko) || "";
      var enText = (DATA.about && DATA.about.en) || "";
      container.appendChild(sentenceSpan(koText, "ko"));
      container.appendChild(sentenceSpan(enText, "en"));
    })();

    // 자기소개 — \n\n 기준으로 단락 분리
    (function () {
      var container = $("#self-intro-content");
      (DATA.selfIntro || []).forEach(function (item) {
        var card = el("div", "card si-card reveal");
        if (item.tag) {
          var badge = el("span", "card__type");
          bilingual(badge, item.tag);
          card.appendChild(badge);
        }
        if (item.title) {
          var h3 = el("h3", "si-title");
          bilingual(h3, item.title);
          card.appendChild(h3);
        }
        var pair = item.content || item;
        ["ko", "en"].forEach(function (lang) {
          var text = (pair && pair[lang]) || "";
          var outer = el("span", lang);
          text.split("\n\n").filter(Boolean).forEach(function (para, i) {
            outer.appendChild(el("p", "self-intro__body" + (i === 0 ? " si-lead" : ""), para.trim()));
          });
          card.appendChild(outer);
        });
        container.appendChild(card);
      });
    })();

    // 연혁 — 경력 + 학력 통합
    var hist = $("#history-list");

    function renderJobCard(job, badgeLabel) {
      var card = el("div", "card reveal");
      var badge = el("span", "card__type");
      bilingual(badge, badgeLabel);
      card.appendChild(badge);
      var top = el("div", "card__top");
      var titleWrap = el("div");
      var comp = el("div", "card__company"); bilingual(comp, job.company); titleWrap.appendChild(comp);
      var h3 = el("h3", "card__title");
      bilingual(h3, job.title); titleWrap.appendChild(h3);
      if (job.note) { var note = el("div", "card__sub"); bilingual(note, job.note); titleWrap.appendChild(note); }
      top.appendChild(titleWrap);
      top.appendChild(el("span", "card__period", job.period || ""));
      card.appendChild(top);
      if (job.groups && job.groups.length) {
        job.groups.forEach(function (g) {
          var grp = el("div", "job__group");
          if (g.label) { var lbl = el("div", "job__group-label"); bilingual(lbl, g.label); grp.appendChild(lbl); }
          if (g.duties && g.duties.length) {
            var dl = el("div", "job__section-label"); bilingual(dl, { ko: "주요 업무", en: "Duties" }); grp.appendChild(dl);
            var ul = el("ul", "card__highlights");
            g.duties.forEach(function (h) { ul.appendChild(bilingual(el("li"), h)); });
            grp.appendChild(ul);
          }
          if (g.results && g.results.length) {
            var rl = el("div", "job__section-label"); bilingual(rl, { ko: "주요 성과", en: "Key Outcomes" }); grp.appendChild(rl);
            var ru = el("ul", "card__highlights card__highlights--results");
            g.results.forEach(function (h) { ru.appendChild(bilingual(el("li"), h)); });
            grp.appendChild(ru);
          }
          card.appendChild(grp);
        });
      } else if (job.highlights && job.highlights.length) {
        var ul = el("ul", "card__highlights");
        job.highlights.forEach(function (h) { ul.appendChild(bilingual(el("li"), h)); });
        card.appendChild(ul);
      }
      hist.appendChild(card);
    }

    (DATA.experience || []).forEach(function (job) {
      renderJobCard(job, { ko: "경력", en: "Experience" });
    });

    (DATA.partTime || []).forEach(function (job) {
      renderJobCard(job, { ko: "아르바이트", en: "Part-time" });
    });

    (DATA.education || []).forEach(function (e) {
      var card = el("div", "card reveal");
      var badge = el("span", "card__type");
      bilingual(badge, { ko: "학력", en: "Education" });
      card.appendChild(badge);
      var top = el("div", "card__top");
      var wrap = el("div");
      var h3 = el("h3", "card__title"); bilingual(h3, e.school); wrap.appendChild(h3);
      var sub = el("div", "card__sub"); bilingual(sub, e.degree); wrap.appendChild(sub);
      top.appendChild(wrap);
      top.appendChild(el("span", "card__period", e.period || ""));
      card.appendChild(top);
      hist.appendChild(card);
    });

    // Certifications
    function renderCerts(container) {
      (DATA.certifications || []).forEach(function (group) {
        var section = el("div", "cert-group");
        var tEn = (group.title && group.title.en) || "";
        section.setAttribute("data-cat",
          /EHS|Safety|Core/i.test(tEn) ? "ehs" :
          /Digital|AI/i.test(tEn) ? "digital" :
          /Language/i.test(tEn) ? "lang" : "other");
        if (group.title) {
          var h4 = el("h4", "cert-group__title");
          bilingual(h4, group.title);
          section.appendChild(h4);
        }
        var ul = el("ul", "cert-list");
        (group.items || []).forEach(function (c) {
          var li = el("li", "reveal");
          bilingual(li, c);
          if (c.desc) { var d = el("p", "cert-desc"); bilingual(d, c.desc); li.appendChild(d); }
          if (c.date) { li.appendChild(el("p", "cert-date", c.date)); }
          ul.appendChild(li);
        });
        section.appendChild(ul);
        container.appendChild(section);
      });
    }
    // 메인: 이름만 칩으로
    function renderCertsCompact(container) {
      (DATA.certifications || []).forEach(function (group) {
        (group.items || []).forEach(function (c) {
          container.appendChild(bilingual(el("li", "reveal"), c));
        });
      });
    }
    renderCertsCompact($("#cert-list"));
    renderCerts($("#cert-list-tab"));

    // Skills / Tools — 메인: 칩(이름만), 탭: cert-list 스타일(이름+설명)
    function renderChips(container, items) {
      (items || []).forEach(function (item) { container.appendChild(bilingual(el("li", "reveal"), item)); });
    }
    function renderListWithDesc(container, items) {
      (items || []).forEach(function (item) {
        var li = el("li", "reveal");
        bilingual(li, item);
        if (item.desc) { var d = el("p", "cert-desc"); bilingual(d, item.desc); li.appendChild(d); }
        container.appendChild(li);
      });
    }
    renderChips($("#skill-list"), DATA.skills);
    renderListWithDesc($("#skill-list-tab"), DATA.skills);
    renderChips($("#tool-list"), DATA.tools);
    renderListWithDesc($("#tool-list-tab"), DATA.tools);

    // 교육 및 봉사활동
    (function () {
      var al = $("#activities-list");
      if (!al) return;
      (DATA.activities || []).forEach(function (a) {
        var card = el("div", "card reveal");
        var badge = el("span", "card__type");
        bilingual(badge, a.kind || { ko: "활동", en: "Activity" });
        card.appendChild(badge);
        var top = el("div", "card__top");
        var wrap = el("div");
        var h3 = el("h3", "card__title"); bilingual(h3, a.title || {}); wrap.appendChild(h3);
        if (a.org) { var org = el("div", "card__company"); bilingual(org, a.org); wrap.appendChild(org); }
        top.appendChild(wrap);
        if (a.period) top.appendChild(el("span", "card__period", a.period));
        card.appendChild(top);
        if (a.highlights && a.highlights.length) {
          var ul = el("ul", "card__highlights");
          a.highlights.forEach(function (h) { ul.appendChild(bilingual(el("li"), h)); });
          card.appendChild(ul);
        }
        al.appendChild(card);
      });
    })();

    // Projects (있을 때만 섹션 노출)
    if (DATA.projects && DATA.projects.length) {
      $("#projects").hidden = false;
      $(".nav__projects-li").hidden = false;
      var pl = $("#projects-list");
      DATA.projects.forEach(function (p) {
        var card = el("div", "card reveal");
        var top = el("div", "card__top");
        var wrap = el("div");
        var h3 = el("h3", "card__title"); bilingual(h3, p.name || p.title || {}); wrap.appendChild(h3);
        top.appendChild(wrap);
        if (p.period) top.appendChild(el("span", "card__period", p.period));
        card.appendChild(top);
        if (p.desc) card.appendChild(bilingual(el("p", "card__sub"), p.desc));
        if (p.highlights && p.highlights.length) {
          var ul = el("ul", "card__highlights");
          p.highlights.forEach(function (h) { ul.appendChild(bilingual(el("li"), h)); });
          card.appendChild(ul);
        }
        pl.appendChild(card);
      });
    }

  }

  /* ---------- 3. 언어 토글 ---------- */
  function setLang(lang) {
    var en = lang === "en";
    document.documentElement.lang = en ? "en" : "ko";
    document.querySelectorAll(".ko").forEach(function (n) { n.hidden = en; });
    document.querySelectorAll(".en").forEach(function (n) { n.hidden = !en; });
    var btn = $("#lang-toggle");
    btn.setAttribute("aria-pressed", String(en));
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  }
  function initLang() {
    var saved = "ko";
    try { saved = localStorage.getItem(LANG_KEY) || "ko"; } catch (e) {}
    setLang(saved);
    $("#lang-toggle").addEventListener("click", function () {
      setLang(document.documentElement.lang === "en" ? "ko" : "en");
    });
  }

  /* ---------- 4. (removed: 이메일 주소 복사) ---------- */
  function initPrint() {}

  /* ---------- 5. 탭 내비게이션 (연혁·프로젝트만) ---------- */
  function initTabs() {
    var sections = document.querySelectorAll("main .section");
    var pageBlocks = document.querySelectorAll("main .page-block");

    function setPageBlocks(visible) {
      pageBlocks.forEach(function (b) { b.hidden = !visible; });
    }

    function showOnly(id) {
      sections.forEach(function (s) {
        var on = s.id === id;
        s.classList.toggle("is-active", on);
        var link = document.querySelector('.nav__links a[href="#' + s.id + '"]');
        if (link) link.classList.toggle("is-active", on);
      });
      setPageBlocks(false);
    }

    function showMain() {
      sections.forEach(function (s) { s.classList.remove("is-active"); });
      document.querySelectorAll(".nav__links a").forEach(function (a) { a.classList.remove("is-active"); });
      setPageBlocks(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    document.addEventListener("click", function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute("href").slice(1);
      var target = document.getElementById(id);
      if (!target || !target.classList.contains("section")) return;
      e.preventDefault();
      showOnly(id);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    // 로고(MAIN) → 메인 복귀
    var brand = $("#nav-brand");
    if (brand) {
      brand.addEventListener("click", function (e) {
        e.preventDefault();
        showMain();
      });
    }
  }

  /* ---------- 6. 스크롤 페이드인 ---------- */
  function initReveal() {
    var nodes = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach(function (n) { n.classList.add("in"); }); return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var node = e.target;
        if (e.isIntersecting) {
          var siblings = node.parentElement
            ? Array.from(node.parentElement.querySelectorAll(".reveal:not(.in)"))
            : [];
          var idx = Math.max(0, siblings.indexOf(node));
          node.style.transitionDelay = (idx * 80) + "ms";
          node.classList.add("in");
        } else {
          node.style.transitionDelay = "";
          node.classList.remove("in");
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    nodes.forEach(function (n) { io.observe(n); });
  }

  /* ---------- 인라인 SVG 아이콘 ---------- */
  var ICON = {
    mail: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34v-7.2H6V18.3h2.34zM7.17 10.1a1.36 1.36 0 1 0 0-2.72 1.36 1.36 0 0 0 0 2.72zM18.3 18.34v-3.95c0-2.11-.45-3.74-2.92-3.74-1.19 0-1.99.65-2.31 1.27h-.03v-1.08H10.8V18.3h2.33v-3.56c0-.94.18-1.85 1.34-1.85 1.15 0 1.16 1.07 1.16 1.91v3.54H18.3z"/></svg>',
    github: '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85l-.01 2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>'
  };

  /* ---------- 부팅 ---------- */
  function init() {
    applyTheme();
    renderConfig();
    renderResume();
    initLang();
    initPrint();
    initTabs();
    initReveal();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
