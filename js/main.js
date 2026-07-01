/* ============================================================
   main.js — Resume site renderer
   SITE_CONFIG + RESUME_DATA → DOM · KO/EN toggle · scroll reveal
   ============================================================ */
(function () {
  "use strict";

  var CFG  = window.SITE_CONFIG || {};
  var DATA = window.RESUME_DATA || {};
  var LANG_KEY = "resume.lang";
  var $ = function (sel, root) { return (root || document).querySelector(sel); };

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls)  n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function bilingual(container, pair, cls) {
    var ko = el("span", "ko" + (cls ? " " + cls : ""), (pair && pair.ko) || "");
    var en = el("span", "en" + (cls ? " " + cls : ""), (pair && pair.en) || "");
    container.appendChild(ko);
    container.appendChild(en);
    return container;
  }

  /* ---------- Icons (Lucide-style outline) ---------- */
  var ICON = {
    mail:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    phone:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    pin:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    linkedin:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34v-7.2H6V18.3h2.34zM7.17 10.1a1.36 1.36 0 1 0 0-2.72 1.36 1.36 0 0 0 0 2.72zM18.3 18.34v-3.95c0-2.11-.45-3.74-2.92-3.74-1.19 0-1.99.65-2.31 1.27h-.03v-1.08H10.8V18.3h2.33v-3.56c0-.94.18-1.85 1.34-1.85 1.15 0 1.16 1.07 1.16 1.91v3.54H18.3z"/></svg>',
    github:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85l-.01 2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>',
    cake:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v2"/><path d="M12 8v2"/><path d="M17 8v2"/><path d="M7 4h.01"/><path d="M12 4h.01"/><path d="M17 4h.01"/></svg>'
  };

  /* ---------- 1. Header / Hero ---------- */
  function renderConfig() {
    var brandEl = $("#nav-brand"); if (brandEl) bilingual(brandEl, { ko: "✦ 프로필", en: "✦ Overview" });
    bilingual($("#hero-name"), CFG.name);
    bilingual($("#hero-headline"), CFG.headline);
    bilingual($("#hero-subtitle"), CFG.subtitle);

    if (CFG.photo) {
      var p  = $("#hero-photo"),
          im = $("#hero-photo-img");
      im.src = CFG.photo;
      p.hidden = false;
    }

    // Hero meta — quick at-a-glance contact
    var meta = $("#hero-meta"); meta.innerHTML = "";
    var c = CFG.contact || {};
    if (c.email) meta.appendChild(metaItem(ICON.mail, c.email));
    if (c.phone) meta.appendChild(metaItem(ICON.phone, c.phone));
    meta.appendChild(metaItem(ICON.cake, "97.11.07(만28세)"));

    // Hero CTAs
    var cta = $("#hero-cta"); cta.innerHTML = "";
    var cardBtn = el("button", "btn btn--accent");
    bilingual(cardBtn, { ko: "📇 연락 하기", en: "📇 Contact" });
    cardBtn.type = "button";
    cardBtn.addEventListener("click", openCardModal);
    cta.appendChild(cardBtn);

    // Footer
    var year = new Date().getFullYear();
    var f = $("#footer-text");
    var fk = el("span", "ko", "© " + year + " " + (CFG.name.ko || "") + ". All rights reserved.");
    var fe = el("span", "en", "© " + year + " " + (CFG.name.en || "") + ". All rights reserved.");
    fe.hidden = true; f.appendChild(fk); f.appendChild(fe);

    renderContact();
  }
  function metaItem(svg, label) {
    var span = el("span", "hero__meta-item");
    var ic = document.createElement("span"); ic.innerHTML = svg; span.appendChild(ic);
    span.appendChild(document.createTextNode(label));
    return span;
  }
  function ctaLink(href, cls, label, icon) {
    var a = el("a", cls); a.href = href;
    bilingual(a, label);
    if (icon) { var s = document.createElement("span"); s.innerHTML = icon; s.style.cssText = "display:inline-flex;width:16px;height:16px"; a.insertBefore(s, a.firstChild); }
    return a;
  }

  function openCardModal() {
    if ($("#card-modal")) return;
    var c = CFG.contact || {};
    var name = (document.documentElement.lang === "en" ? CFG.name.en : CFG.name.ko) || CFG.name.ko;

    var overlay = el("div", "card-modal__overlay");
    overlay.id = "card-modal";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");

    var box = el("div", "card-modal__box");

    var closeBtn = el("button", "card-modal__close", "✕");
    closeBtn.type = "button";
    closeBtn.setAttribute("aria-label", "닫기");

    var nameEl = el("p", "card-modal__name", name);
    var emailEl = el("a", "card-modal__row");
    emailEl.href = "mailto:" + c.email;
    emailEl.textContent = c.email;
    var phoneEl = el("a", "card-modal__row");
    phoneEl.href = "tel:" + (c.phone || "").replace(/-/g, "");
    phoneEl.textContent = c.phone;

    box.appendChild(closeBtn);
    box.appendChild(nameEl);
    if (c.email) box.appendChild(emailEl);
    if (c.phone) box.appendChild(phoneEl);
    overlay.appendChild(box);
    document.body.appendChild(overlay);

    function close() { overlay.remove(); document.removeEventListener("keydown", onKey); }
    function onKey(e) { if (e.key === "Escape") close(); }
    closeBtn.addEventListener("click", close);
    overlay.addEventListener("click", function (e) { if (e.target === overlay) close(); });
    document.addEventListener("keydown", onKey);
    closeBtn.focus();
  }

  function renderContact() {
    var list = $("#contact-list");
    list.innerHTML = "";
    var c = CFG.contact || {};
    var items = [
      { key: "email", icon: ICON.mail, href: c.email ? "mailto:" + c.email : "", label: c.email },
      { key: "phone", icon: ICON.phone, href: c.phone ? "tel:" + c.phone.replace(/[^+\d]/g, "") : "", label: c.phone },
      { key: "linkedin", icon: ICON.linkedin, href: c.linkedin, label: c.linkedin },
      { key: "github",   icon: ICON.github,   href: c.github,   label: c.github }
    ];
    items.forEach(function (it) {
      if (!it.label) return;
      var li = el("li");
      var ic = document.createElement("span");
      ic.className = "ic"; ic.innerHTML = it.icon; ic.setAttribute("aria-hidden", "true");
      li.appendChild(ic);
      if (it.href) {
        var a = el("a", null, it.label); a.href = it.href;
        if (it.key === "linkedin" || it.key === "github") { a.target = "_blank"; a.rel = "noopener"; }
        li.appendChild(a);
      } else {
        li.appendChild(el("span", null, it.label));
      }
      list.appendChild(li);
    });
  }

  /* ---------- 2. About — Strength Cards ---------- */
  function renderAboutBento() {
    var host = $("#about-bento"); if (!host) return;
    (DATA.workStyle || []).forEach(function (item) {
      var art = el("article", "bento__item reveal");
      art.setAttribute("role", "listitem");

      if (item.tag) art.appendChild(bilingual(el("div", "bento__tag"), item.tag));

      if (item.desc) {
        var wrap = el("div", "bento__title-wrap");
        ["ko", "en"].forEach(function (lang) {
          var span = el("span", lang);
          span.appendChild(el("p", "bento__main", (item.desc[lang] || "")));
          wrap.appendChild(span);
        });
        art.appendChild(wrap);
      }

      host.appendChild(art);
    });
  }

  /* ---------- 3. Self-Intro (full text, below bento) ---------- */
  function renderSelfIntroFull() {
    var host = $("#self-intro-content"); if (!host) return;
    (DATA.selfIntro || []).forEach(function (item) {
      var card = el("article", "card si-card reveal");
      if (item.tag) {
        var tag = el("span", "si-card__tag");
        bilingual(tag, item.tag);
        card.appendChild(tag);
      }
      if (item.title) {
        var h3 = el("h3", "si-card__title");
        bilingual(h3, item.title);
        card.appendChild(h3);
      }
      var pair = item.content || {};
      ["ko", "en"].forEach(function (lang) {
        var text = pair[lang] || "";
        var outer = el("span", lang);
        text.split("\n\n").filter(Boolean).forEach(function (para, i) {
          outer.appendChild(el("p", "si-card__body" + (i === 0 ? " si-card__lead" : ""), para.trim()));
        });
        card.appendChild(outer);
      });
      host.appendChild(card);
    });
  }

  /* ---------- 4. Timeline (Experience + Education) ---------- */
  function renderTimeline() {
    var hist = $("#history-list");

    function jobItem(job, badgeLabel, accent) {
      var li = el("div", "timeline-item" + (accent ? " timeline-item--accent" : ""));
      var card = el("article", "card card--job reveal");

      var tag = el("span", "card__tag");
      bilingual(tag, badgeLabel);
      card.appendChild(tag);

      var top = el("div", "card__top");
      var wrap = el("div");
      var comp = el("div", "card__company"); bilingual(comp, job.company); wrap.appendChild(comp);
      var title = el("div", "card__title"); bilingual(title, job.title); wrap.appendChild(title);
      if (job.note) { var note = el("div", "card__sub"); bilingual(note, job.note); wrap.appendChild(note); }
      top.appendChild(wrap);
      var right = el("div", "card__right");
      right.appendChild(el("span", "card__period", job.period || ""));
      var tog = el("span", "card__toggle", "+");
      right.appendChild(tog);
      top.appendChild(right);
      card.appendChild(top);

      card.addEventListener("click", function (e) {
        e.stopPropagation();
        tog.textContent = card.classList.toggle("is-open") ? "−" : "+";
      });

      // 미리보기 뱃지: job.preview 우선, 없으면 groups results 앞 2개
      (function () {
        var items = job.preview;
        if (!items) {
          items = [];
          (job.groups || []).forEach(function (g) {
            (g.results || []).forEach(function (r) { if (items.length < 2) items.push(r); });
          });
        }
        if (!items.length) return;
        var preview = el("div", "card__preview");
        items.forEach(function (r) {
          var badge = el("span", "card__preview-badge");
          bilingual(badge, r);
          preview.appendChild(badge);
        });
        card.appendChild(preview);
      })();

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

      li.appendChild(card);
      hist.appendChild(li);
    }

    (DATA.experience || []).forEach(function (job) {
      jobItem(job, { ko: "경력", en: "Experience" }, true);
    });
    (DATA.partTime || []).forEach(function (job) {
      jobItem(job, { ko: "아르바이트", en: "Part-time" }, false);
    });
    (DATA.education || []).forEach(function (e) {
      var li = el("div", "timeline-item");
      var card = el("article", "card reveal");
      var tag = el("span", "card__tag");
      bilingual(tag, { ko: "학력", en: "Education" });
      card.appendChild(tag);

      var top = el("div", "card__top");
      var wrap = el("div");
      var comp = el("div", "card__company"); bilingual(comp, e.school); wrap.appendChild(comp);
      var sub = el("div", "card__title"); bilingual(sub, e.degree); wrap.appendChild(sub);
      top.appendChild(wrap);
      top.appendChild(el("span", "card__period", e.period || ""));
      card.appendChild(top);

      li.appendChild(card);
      hist.appendChild(li);
    });
  }

  /* ---------- 5. Certifications + Skills + Tools ---------- */
  function makeChip(labelPair, detailFn) {
    var wrap = el("div"); wrap.style.cssText = "display:contents";
    var btn = el("button", "chip reveal");
    btn.type = "button";
    bilingual(btn, labelPair);
    var detail = el("div", "chip-detail");
    if (detailFn) detailFn(detail);
    btn.addEventListener("click", function () {
      var opening = !btn.classList.contains("is-open");
      btn.classList.toggle("is-open", opening);
      detail.classList.toggle("is-open", opening);
    });
    wrap.appendChild(btn);
    wrap.appendChild(detail);
    return wrap;
  }

  function renderCerts(container) {
    var groups = el("div", "cert-groups");
    (DATA.certifications || []).forEach(function (group) {
      var section = el("div", "cert-group");
      var tEn = (group.title && group.title.en) || "";
      section.setAttribute("data-cat",
        /EHS|Safety|Core/i.test(tEn) ? "ehs" :
        /Digital|AI/i.test(tEn) ? "digital" :
        /Language/i.test(tEn) ? "lang" : "other");
      if (group.title) {
        var h4 = el("h4", "cert-group__title"); bilingual(h4, group.title); section.appendChild(h4);
      }
      var chipList = el("div", "chip-list");
      (group.items || []).forEach(function (c) {
        chipList.appendChild(makeChip(c, function (detail) {
          if (c.desc) { var d = el("p", "cert-desc"); bilingual(d, c.desc); detail.appendChild(d); }
          if (c.date) { detail.appendChild(el("p", "cert-date", c.date)); }
        }));
      });
      section.appendChild(chipList);
      groups.appendChild(section);
    });
    container.appendChild(groups);
  }

  function renderListWithDesc(container, items) {
    (items || []).forEach(function (item) {
      container.appendChild(makeChip(item, function (detail) {
        if (item.desc) { var d = el("p", "cert-desc"); bilingual(d, item.desc); detail.appendChild(d); }
      }));
    });
  }

  /* ---------- 6. Activities + Projects ---------- */
  function renderActivities() {
    var al = $("#activities-list"); if (!al) return;
    (DATA.activities || []).forEach(function (a) {
      var li = el("div", "timeline-item");
      var card = el("article", "card reveal");
      var tag = el("span", "card__tag");
      bilingual(tag, a.kind || { ko: "활동", en: "Activity" });
      card.appendChild(tag);
      var top = el("div", "card__top");
      var wrap = el("div");
      var comp = el("div", "card__company"); bilingual(comp, a.title || {}); wrap.appendChild(comp);
      if (a.org) { var org = el("div", "card__title"); bilingual(org, a.org); wrap.appendChild(org); }
      top.appendChild(wrap);
      if (a.period) top.appendChild(el("span", "card__period", a.period));
      card.appendChild(top);
      if (a.highlights && a.highlights.length) {
        var ul = el("ul", "card__highlights");
        a.highlights.forEach(function (h) { ul.appendChild(bilingual(el("li"), h)); });
        card.appendChild(ul);
      }
      li.appendChild(card);
      al.appendChild(li);
    });
  }
  function renderProjects() {
    if (!DATA.projects || !DATA.projects.length) return;
    $("#projects").hidden = false;
    var pl = $("#projects-list");
    DATA.projects.forEach(function (p) {
      var li = el("div", "timeline-item");
      var card = el("article", "card reveal");
      if (p.type) { var tag = el("span", "card__tag"); bilingual(tag, p.type); card.appendChild(tag); }
      var top = el("div", "card__top");
      var wrap = el("div");
      var h3 = el("div", "card__company"); bilingual(h3, p.title || {}); wrap.appendChild(h3);
      if (p.company) { var co = el("div", "card__title"); bilingual(co, p.company); wrap.appendChild(co); }
      top.appendChild(wrap);
      if (p.period) top.appendChild(el("span", "card__period", p.period));
      card.appendChild(top);
      if (p.highlights && p.highlights.length) {
        var ul = el("ul", "card__highlights");
        p.highlights.forEach(function (h) { ul.appendChild(bilingual(el("li"), h)); });
        card.appendChild(ul);
      }
      li.appendChild(card);
      pl.appendChild(li);
    });
  }

  /* ---------- 7. KO / EN toggle ---------- */
  function setLang(lang) {
    var en = lang === "en";
    document.documentElement.lang = en ? "en" : "ko";
    document.querySelectorAll(".ko").forEach(function (n) { n.hidden = en; });
    document.querySelectorAll(".en").forEach(function (n) { n.hidden = !en; });
    var btn = $("#lang-toggle");
    if (btn) btn.setAttribute("aria-pressed", String(en));
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  }
  function initLang() {
    var saved = "ko";
    try { saved = localStorage.getItem(LANG_KEY) || "ko"; } catch (e) {}
    setLang(saved);
    var btn = $("#lang-toggle");
    if (btn) btn.addEventListener("click", function () {
      setLang(document.documentElement.lang === "en" ? "ko" : "en");
    });
  }

  /* ---------- 8. View-mode nav ---------- */
  function initNav() {
    var body = document.body;
    var links = Array.prototype.slice.call(document.querySelectorAll('.nav__links a[href^="#"]'));

    function showHome() {
      body.classList.remove("view--section");
      body.classList.add("view--home");
      document.querySelectorAll(".section").forEach(function (s) { s.classList.remove("is-active"); });
      links.forEach(function (l) { l.classList.remove("is-active"); });
      var brand = document.querySelector(".nav__brand");
      if (brand) brand.classList.add("is-active");
      window.scrollTo(0, 0);
    }

    function showSection(id) {
      body.classList.remove("view--home");
      body.classList.add("view--section");
      document.querySelectorAll(".section").forEach(function (s) { s.classList.remove("is-active"); });
      var target = document.getElementById(id);
      if (target) target.classList.add("is-active");
      links.forEach(function (l) { l.classList.remove("is-active"); });
      var active = document.querySelector('.nav__links a[href="#' + id + '"]');
      if (active) active.classList.add("is-active");
      window.scrollTo(0, 0);
    }

    links.forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        showSection(a.getAttribute("href").slice(1));
      });
    });

    var brand = document.querySelector(".nav__brand");
    if (brand) brand.addEventListener("click", function (e) {
      e.preventDefault();
      showHome();
    });

    document.querySelectorAll(".section:not(#hero):not(#history):not(#skills):not(#self-intro):not(#activities):not(#projects):not(#contact):not(#about)").forEach(function (sec) {
      sec.addEventListener("click", function () {
        if (body.classList.contains("view--home")) showSection(sec.id);
      });
    });

    // 자기소개·교육·프로젝트 → 홈뷰 전용 아이콘 quicknav
    var quickItems = [
      { id: "projects",   icon: "프로젝트", ko: "프로젝트",  en: "Projects" },
      { id: "activities", icon: "교육활동", ko: "교육 · 활동", en: "Training" },
      { id: "self-intro", icon: "자기소개", ko: "자기소개",  en: "Intro" }
    ];
    var qnav = el("div", "home-quicknav");
    quickItems.forEach(function (item) {
      var btn = el("button", "quicknav-item");
      btn.type = "button";
      var circle = el("div", "quicknav-circle");
      circle.appendChild(el("span", "quicknav-circle__title", item.icon));
      circle.appendChild(el("span", "quicknav-circle__sub", "자세히 보기 →"));
      btn.appendChild(circle);
      btn.addEventListener("click", function () { showSection(item.id); });
      qnav.appendChild(btn);
    });
    var selfIntro = document.getElementById("self-intro");
    if (selfIntro) selfIntro.parentElement.insertBefore(qnav, selfIntro);


    showHome();
  }

  /* ---------- 9. Reveal on scroll ---------- */
  function initReveal() {
    var nodes = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach(function (n) { n.classList.add("in"); }); return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) {
          e.target.classList.remove("in");
          e.target.style.transitionDelay = "";
          return;
        }
        var siblings = e.target.parentElement
          ? Array.from(e.target.parentElement.querySelectorAll(".reveal:not(.in)"))
          : [];
        var idx = Math.max(0, siblings.indexOf(e.target));
        e.target.style.transitionDelay = (idx * 70) + "ms";
        e.target.classList.add("in");
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    nodes.forEach(function (n) { io.observe(n); });
  }

  /* ---------- Boot ---------- */
  function init() {
    renderConfig();
    renderAboutBento();
    renderSelfIntroFull();
    renderTimeline();
    renderCerts($("#cert-list-tab"));
    renderListWithDesc($("#skill-list-tab"), DATA.skills);
    renderListWithDesc($("#tool-list-tab"),  DATA.tools);
    renderActivities();
    renderProjects();
    initLang();
    initNav();
    initReveal();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
