/* Renderer + behaviours for the clean versions (a1–a10). Content comes from assets/data.js (window.PROFILE).
   Options (window.CLEAN): layout "single" | "sidebar" | "toc", toggle (theme switch), palette (⌘K menu), mocks (default true). */
(function () {
  var P = window.PROFILE, O = Object.assign({ layout: "single", toggle: false, palette: false, mocks: true }, window.CLEAN || {});
  var pad = function (n) { return String(n).padStart(2, "0"); };
  var esc = function (s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); };
  var $ = function (s, r) { return (r || document).querySelector(s); }, $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var mail = "mailto:" + P.email + "?subject=" + encodeURIComponent("Project enquiry");
  var root = document.documentElement;
  try { var saved = localStorage.getItem("kd-theme"); if (saved && O.toggle) root.dataset.theme = saved; } catch (e) {}

  var NAV = [["work", "Work"], ["services", "Services"], ["experience", "Experience"], ["contact", "Contact"]];
  var h1 = P.headline[0] + " <em>" + P.headline[1] + "</em> " + P.headline[2];
  var sun = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  var moon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>';
  var menu = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 8h16M4 16h16"/></svg>';
  var close = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';

  var nav = '<a class="c-skip" href="#main">Skip to content</a><header class="c-nav"><div class="c-wrap c-nav-in">' +
    '<a class="c-brand" href="#top"><span class="c-mark">KD</span><span>' + P.name + "</span></a>" +
    '<nav class="c-links" aria-label="Sections">' + NAV.map(function (n) { return '<a href="#' + n[0] + '">' + n[1] + "</a>"; }).join("") + "</nav>" +
    '<div class="c-actions">' + (O.palette ? '<button class="c-icon c-kbtn" type="button" aria-label="Open quick actions" title="Quick actions (Ctrl K)"><span style="font:600 12px var(--font-m)">⌘K</span></button>' : "") +
    (O.toggle ? '<button class="c-icon c-theme" type="button" aria-label="Switch light or dark theme">' + moon + "</button>" : "") +
    '<a class="c-btn c-btn-sm c-resume" href="' + P.links.resume + '" target="_blank" rel="noopener">Résumé</a>' +
    '<a class="c-btn c-btn-p c-btn-sm" href="#contact">Hire me</a>' +
    '<button class="c-icon c-menu" type="button" aria-label="Open menu" aria-expanded="false">' + menu + "</button></div></div></header>" +
    '<div class="c-sheet" id="c-sheet" aria-hidden="true"><div class="c-sheet-top"><span class="c-brand"><span class="c-mark">KD</span>' + P.name + '</span><button class="c-icon c-close" type="button" aria-label="Close menu">' + close + "</button></div>" +
    "<nav>" + NAV.map(function (n) { return '<a href="#' + n[0] + '">' + n[1] + "</a>"; }).join("") + '<a href="' + P.links.resume + '" target="_blank" rel="noopener">Résumé ↗</a></nav>' +
    '<div class="c-sheet-ft"><a class="c-btn c-btn-p" href="' + mail + '">Email me</a><span class="c-label" style="text-align:center">' + P.location + " · " + P.timezone + "</span></div></div>";

  var hero = '<section class="c-hero c-wrap" id="top"><span class="c-status"><span class="c-dot"></span>' + P.available + "</span>" +
    "<h1>" + h1 + '</h1><p class="c-lede">' + P.intro + "</p>" +
    '<div class="c-cta"><a class="c-btn c-btn-p" href="' + mail + '">Start a project <span class="c-arw">→</span></a><a class="c-btn" href="#work">View case studies</a></div>' +
    '<div class="c-meta"><span><b>' + P.role + "</b> at " + P.company + "</span><span>" + P.location + '</span><span class="c-clock"></span></div></section>';

  var stats = '<div class="c-stats c-rv">' + P.stats.map(function (s) { return '<div class="c-stat"><b class="c-cnt" data-v="' + s.value + '">' + s.value + "</b><span>" + s.label + "</span></div>"; }).join("") + "</div>";

  var cases = '<section class="c-sec" id="work"><div class="c-head is-split c-rv"><div><span class="c-label">Selected work</span><h2 style="margin-top:12px">Products I designed and built end to end</h2></div><p>From audio capture to the screen people actually use — shipped, measured and improved.</p></div><div class="c-cases">' +
    P.cases.map(function (c, i) {
      return '<article class="c-case c-rv"><div class="c-case-txt"><span class="c-label">' + pad(i + 1) + " · " + c.kind + "</span><h3>" + c.name + '</h3><p class="c-tag">' + c.tagline + ".</p>" +
        '<dl class="c-pa"><div><dt>Problem</dt><dd>' + c.problem + "</dd></div><div><dt>Approach</dt><dd>" + c.approach + "</dd></div></dl>" +
        '<p class="c-impact">' + c.impact + '</p><div class="c-chips">' + c.stack.map(function (s) { return "<span>" + s + "</span>"; }).join("") + "</div></div>" +
        (O.mocks && window.MOCKS ? '<div class="c-case-vis">' + MOCKS.render(i) + "</div>" : "") + "</article>";
    }).join("") + "</div></section>";

  var projects = '<section class="c-sec" id="projects"><div class="c-head c-rv"><span class="c-label">More projects</span><h2>Client sites, experiments and tools</h2></div><ul class="c-list c-rv">' +
    P.projects.map(function (p) {
      var n = p.url ? '<a class="c-ln" href="' + p.url + '" target="_blank" rel="noopener">' + p.name + ' <span aria-hidden="true">↗</span></a>' : '<span class="c-ln">' + p.name + "</span>";
      return "<li>" + n + '<span class="c-ld">' + p.desc + '</span><span class="c-lt">' + p.tag + "</span></li>";
    }).join("") + '</ul><p class="c-note c-rv">' + P.ndaNote + "</p></section>";

  var services = '<section class="c-sec" id="services"><div class="c-head is-split c-rv"><div><span class="c-label">Services</span><h2 style="margin-top:12px">What I can build for you</h2></div><p>For founders and product teams who need AI that works with real customers, not just in a demo.</p></div>' +
    '<div class="c-grid is-4">' + P.services.map(function (s, i) { return '<div class="c-tile c-rv"><span class="c-num">' + pad(i + 1) + "</span><h3>" + s.title + "</h3><p>" + s.desc + "</p></div>"; }).join("") + "</div>" +
    '<div class="c-head c-rv" style="margin-top:clamp(56px,8vw,88px)"><span class="c-label">How I work</span><h2>From first call to production</h2></div>' +
    '<ol class="c-grid is-4">' + P.process.map(function (s, i) { return '<li class="c-tile c-rv"><span class="c-num">Step ' + (i + 1) + "</span><h3>" + s.step + "</h3><p>" + s.desc + "</p></li>"; }).join("") + "</ol></section>";

  var xp = '<section class="c-sec" id="experience"><div class="c-head c-rv"><span class="c-label">Experience</span><h2>Where I\'ve shipped</h2></div><ol class="c-xp">' +
    P.experience.map(function (e) {
      return '<li class="c-rv"><div><p class="c-when">' + e.when + '</p><p class="c-label" style="margin-top:4px">' + e.place + "</p></div><div><h3>" + e.role + " <span>· " + e.org + "</span></h3><ul>" + e.points.map(function (p) { return "<li>" + p + "</li>"; }).join("") + "</ul>" +
        (e.stack ? '<div class="c-chips">' + e.stack.split(" · ").map(function (s) { return "<span>" + s + "</span>"; }).join("") + "</div>" : "") + "</div></li>";
    }).join("") + "</ol>" +
    '<div class="c-head c-rv" style="margin-top:clamp(56px,8vw,88px)"><span class="c-label">Toolkit</span></div><div class="c-skills c-rv">' +
    P.skills.map(function (s) { return "<div><h3>" + s.group + '</h3><div class="c-chips" style="margin-top:0">' + s.items.map(function (i) { return "<span>" + i + "</span>"; }).join("") + "</div></div>"; }).join("") + "</div>" +
    '<div class="c-edu"><div class="c-tile c-rv"><span class="c-num">Education · ' + P.education.year + "</span><h3>" + P.education.degree + '</h3><p class="c-mut">' + P.education.school + " · " + P.education.detail + "</p></div>" +
    '<div class="c-tile c-rv"><span class="c-num">Credentials</span><ul class="c-creds" style="margin-top:12px">' + P.credentials.map(function (c) { return "<li>" + c + "</li>"; }).join("") + "</ul></div></div></section>";

  var socials = '<div class="c-socials"><a href="' + P.links.linkedin + '" target="_blank" rel="noopener">LinkedIn</a><a href="' + P.links.github + '" target="_blank" rel="noopener">GitHub</a><a href="' + P.links.resume + '" target="_blank" rel="noopener">Résumé (PDF)</a></div>';
  var contact = '<section class="c-contact c-rv" id="contact"><span class="c-label">Contact</span><h2>Have a product that should be talking?</h2><p>Tell me what you\'re building. I reply within a day, and the first call is about your problem — not a pitch.</p>' +
    '<div class="c-cta"><a class="c-btn c-btn-p" href="' + mail + '">' + P.email + '</a><button class="c-btn c-copy" type="button">Copy email</button></div>' + socials + "</section>" +
    '<footer class="c-foot"><span>© ' + new Date().getFullYear() + " " + P.name + "</span><span>" + P.location + " · " + P.timezone + "</span></footer>";

  var body = stats + cases + projects + services + xp + contact;
  var html;
  if (O.layout === "sidebar" || O.layout === "toc") {
    var aside = O.layout === "sidebar"
      ? '<aside class="c-aside"><span class="c-status"><span class="c-dot"></span>Available</span><p class="c-aside-name" style="margin-top:22px">' + P.name + '</p><p class="c-role">' + P.role + " · " + P.focus + '</p><p class="c-lede">' + P.intro + "</p>" +
        '<nav class="c-toc" aria-label="On this page">' + [["top", "Overview"], ["work", "Work"], ["projects", "Projects"], ["services", "Services"], ["experience", "Experience"], ["contact", "Contact"]].map(function (n) { return '<a href="#' + n[0] + '">' + n[1] + "</a>"; }).join("") + "</nav>" + socials + "</aside>"
      : '<aside class="c-aside"><p class="c-label">On this page</p><nav class="c-toc" aria-label="On this page" style="margin-top:14px">' + [["top", "Introduction"], ["work", "Case studies"]].concat(P.cases.map(function (c, i) { return ["case-" + i, "— " + c.name]; })).concat([["projects", "Projects"], ["services", "Services & process"], ["experience", "Experience"], ["contact", "Contact"]]).map(function (n) { return '<a href="#' + n[0] + '">' + n[1] + "</a>"; }).join("") + "</nav>" +
        '<div class="c-tile" style="margin-top:28px"><span class="c-num">Status</span><p style="margin-top:8px;font-size:14px">' + P.available + "</p></div></aside>";
    html = nav + '<main id="main" class="c-wrap"><div class="c-shell">' + aside + '<div class="c-content">' + hero.replace('class="c-hero c-wrap"', 'class="c-hero"') + body + "</div></div></main>";
  } else {
    html = nav + '<main id="main">' + hero + '<div class="c-wrap">' + body + "</div></main>";
  }
  var app = document.getElementById("app"); app.innerHTML = html;
  $$(".c-case").forEach(function (c, i) { c.id = "case-" + i; });

  /* ---------- behaviours ---------- */
  var still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }); }, { rootMargin: "0px 0px -8% 0px" });
  $$(".c-rv").forEach(function (el) { io.observe(el); });
  if (window.MOCKS) MOCKS.observe();

  var navEl = $(".c-nav"); var onS = function () { navEl.classList.toggle("is-scrolled", scrollY > 8); }; addEventListener("scroll", onS, { passive: true }); onS();

  // Mobile sheet
  var sheet = $("#c-sheet"), mbtn = $(".c-menu");
  var setSheet = function (open) { sheet.classList.toggle("is-open", open); sheet.setAttribute("aria-hidden", !open); mbtn.setAttribute("aria-expanded", open); document.body.style.overflow = open ? "hidden" : ""; document.body.classList.toggle("c-sheet-open", open); if (open) $(".c-close").focus(); };
  mbtn.addEventListener("click", function () { setSheet(true); });
  $(".c-close").addEventListener("click", function () { setSheet(false); mbtn.focus(); });
  $$("#c-sheet nav a").forEach(function (a) { a.addEventListener("click", function () { setSheet(false); }); });
  addEventListener("keydown", function (e) { if (e.key === "Escape" && sheet.classList.contains("is-open")) setSheet(false); });

  // Active section in nav / toc
  var links = $$(".c-links a, .c-toc a");
  var so = new IntersectionObserver(function (es) { es.forEach(function (e) { if (!e.isIntersecting) return; var id = e.target.id; links.forEach(function (a) { a.classList.toggle("is-on", a.getAttribute("href") === "#" + id); }); }); }, { rootMargin: "-40% 0px -55% 0px" });
  $$("#top,#work,#projects,#services,#experience,#contact,.c-case").forEach(function (s) { so.observe(s); });

  // Counters
  var co = new IntersectionObserver(function (es) { es.forEach(function (e) {
    if (!e.isIntersecting) return; co.unobserve(e.target); var el = e.target, raw = el.dataset.v, m = raw.match(/[\d.,]+/); if (!m || still) return;
    var n = parseFloat(m[0].replace(/,/g, "")), d = (m[0].split(".")[1] || "").length, t0 = performance.now();
    (function f(t) { var k = Math.min(1, (t - t0) / 1200), v = n * (1 - Math.pow(1 - k, 3)); el.textContent = raw.replace(m[0], d ? v.toFixed(d) : Math.round(v).toLocaleString("en-US")); if (k < 1) requestAnimationFrame(f); })(t0);
  }); }, { threshold: 0.6 });
  $$(".c-cnt").forEach(function (el) { co.observe(el); });

  // Local time
  var clock = $(".c-clock"); var tick = function () { if (clock) clock.textContent = new Date().toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit", timeZone: "Asia/Kolkata" }) + " local time"; }; tick(); setInterval(tick, 30000);

  // Toast + copy
  var toast = document.createElement("div"); toast.className = "c-toast"; toast.setAttribute("role", "status"); document.body.appendChild(toast);
  var say = function (m) { toast.textContent = m; toast.classList.add("is-on"); clearTimeout(toast._t); toast._t = setTimeout(function () { toast.classList.remove("is-on"); }, 1800); };
  var copy = function () { (navigator.clipboard ? navigator.clipboard.writeText(P.email) : Promise.reject()).then(function () { say("Email copied"); }, function () { location.href = mail; }); };
  $$(".c-copy").forEach(function (b) { b.addEventListener("click", copy); });

  // Theme toggle
  var tbtn = $(".c-theme");
  var isDark = function () { return root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches; };
  var paint = function () { if (tbtn) tbtn.innerHTML = isDark() ? sun : moon; };
  if (tbtn) { paint(); tbtn.addEventListener("click", function () { root.dataset.theme = isDark() ? "light" : "dark"; try { localStorage.setItem("kd-theme", root.dataset.theme); } catch (e) {} paint(); }); }

  // Quick-actions palette
  if (O.palette) {
    var pal = document.createElement("div"); pal.className = "c-pal"; pal.setAttribute("role", "dialog"); pal.setAttribute("aria-label", "Quick actions");
    pal.innerHTML = '<div class="c-pal-box"><input placeholder="Search or jump to…" aria-label="Search actions" /><ul role="listbox"></ul></div>'; document.body.appendChild(pal);
    var A = [["Case studies", "#work"], ["Projects", "#projects"], ["Services", "#services"], ["Experience", "#experience"], ["Contact", "#contact"]].map(function (x) { return { t: "Go to " + x[0], g: "Jump", a: function () { location.hash = x[1]; } }; })
      .concat(P.cases.map(function (c, i) { return { t: c.name, g: "Case study", a: function () { location.hash = "#case-" + i; } }; }))
      .concat([{ t: "Copy email address", g: "Action", a: copy }, { t: "Email Kuldeep", g: "Action", a: function () { location.href = mail; } }, { t: "Open résumé (PDF)", g: "Link", a: function () { open(P.links.resume, "_blank"); } },
        { t: "Open LinkedIn", g: "Link", a: function () { open(P.links.linkedin, "_blank"); } }, { t: "Open GitHub", g: "Link", a: function () { open(P.links.github, "_blank"); } }])
      .concat(O.toggle ? [{ t: "Toggle light / dark", g: "Theme", a: function () { tbtn.click(); } }] : []);
    var inp = $("input", pal), ul = $("ul", pal), sel = 0, list = A;
    var draw = function () { var q = inp.value.toLowerCase().trim(); list = A.filter(function (x) { return x.t.toLowerCase().indexOf(q) > -1; }); sel = Math.min(sel, Math.max(0, list.length - 1));
      ul.innerHTML = list.length ? list.map(function (x, i) { return '<li role="option" data-i="' + i + '" class="' + (i === sel ? "is-sel" : "") + '" aria-selected="' + (i === sel) + '"><span>' + esc(x.t) + '</span><span class="c-label">' + x.g + "</span></li>"; }).join("") : '<li style="cursor:default">No results</li>'; };
    var openP = function () { pal.classList.add("is-open"); inp.value = ""; sel = 0; draw(); setTimeout(function () { inp.focus(); }, 10); }, closeP = function () { pal.classList.remove("is-open"); };
    var run = function (i) { var x = list[i]; if (!x) return; closeP(); x.a(); };
    $(".c-kbtn").addEventListener("click", openP);
    pal.addEventListener("click", function (e) { if (e.target === pal) closeP(); var li = e.target.closest("li[data-i]"); if (li) run(+li.dataset.i); });
    inp.addEventListener("input", function () { sel = 0; draw(); });
    addEventListener("keydown", function (e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); pal.classList.contains("is-open") ? closeP() : openP(); return; }
      if (!pal.classList.contains("is-open")) return;
      if (e.key === "Escape") closeP(); else if (e.key === "ArrowDown") { e.preventDefault(); sel = (sel + 1) % Math.max(1, list.length); draw(); } else if (e.key === "ArrowUp") { e.preventDefault(); sel = (sel - 1 + list.length) % Math.max(1, list.length); draw(); } else if (e.key === "Enter") { e.preventDefault(); run(sel); }
    });
  }
})();
