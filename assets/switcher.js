/* Version switcher shown on every version: ‹ current › plus a panel listing all versions.
   Edit VERSIONS to add or remove one. Paths: /a1/ … /a10/ (clean) and /v2/, /v5/, /v8/ (bold). */
(function () {
  var VERSIONS = [
    { id: "a1", name: "Paper", note: "White, quiet, typographic", group: "Clean" },
    { id: "a2", name: "Graphite", note: "Dark and understated", group: "Clean" },
    { id: "a3", name: "Serif", note: "Editorial reading layout", group: "Clean" },
    { id: "a4", name: "Sidebar", note: "Sticky profile, scrolling work", group: "Clean" },
    { id: "a5", name: "Cards", note: "Soft surfaces, rounded", group: "Clean" },
    { id: "a6", name: "Midnight", note: "Deep navy, subtle glow", group: "Clean" },
    { id: "a7", name: "Grid", note: "Hairlines and mono labels", group: "Clean" },
    { id: "a8", name: "Docs", note: "Documentation-style with contents", group: "Clean" },
    { id: "a9", name: "Sand", note: "Warm neutrals, deep green", group: "Clean" },
    { id: "a10", name: "Signature", note: "Light/dark, ⌘K, the full set", group: "Clean" },
    { id: "v2", name: "Swiss", note: "Giant type, strict grid, red", group: "Bold" },
    { id: "v5", name: "Brutal", note: "Loud, playful, neo-brutalist", group: "Bold" },
    { id: "v8", name: "Kinetic", note: "Type in motion, work reel", group: "Bold" }
  ];
  var DEFAULT = "a10";
  var m = location.pathname.match(/\/([av]\d+)\//);
  var cur = m ? m[1] : DEFAULT;
  var idx = Math.max(0, VERSIONS.findIndex(function (v) { return v.id === cur; }));
  var go = function (i) { location.href = "/" + VERSIONS[(i + VERSIONS.length) % VERSIONS.length].id + "/"; };

  var css = "#vsw{all:initial;position:fixed;left:50%;bottom:max(14px,env(safe-area-inset-bottom));transform:translateX(-50%);z-index:9999;font:500 13px/1 ui-sans-serif,system-ui,-apple-system,'Segoe UI',sans-serif;color:#f4f4f5;-webkit-font-smoothing:antialiased}" +
    "#vsw *{box-sizing:border-box}" +
    "#vsw .bar{display:flex;align-items:center;gap:2px;padding:4px;border-radius:999px;background:rgba(17,17,19,.86);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.14);box-shadow:0 10px 36px rgba(0,0,0,.3)}" +
    "#vsw button{all:unset;cursor:pointer;display:flex;align-items:center;gap:8px;height:36px;padding:0 12px;border-radius:999px;color:inherit;white-space:nowrap}" +
    "#vsw button:hover{background:rgba(255,255,255,.1)}#vsw button:focus-visible{outline:2px solid #fff;outline-offset:1px}" +
    "#vsw .ar{width:36px;padding:0;justify-content:center;font-size:17px}" +
    "#vsw .lbl b{font-weight:600}#vsw .lbl span{opacity:.6}#vsw .lbl i{font-style:normal;opacity:.6;font-size:10px}" +
    "#vsw .panel{position:absolute;bottom:52px;left:50%;transform:translateX(-50%);width:min(560px,calc(100vw - 24px));max-height:min(68vh,600px);overflow:auto;padding:8px;border-radius:18px;background:rgba(17,17,19,.96);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border:1px solid rgba(255,255,255,.14);box-shadow:0 20px 60px rgba(0,0,0,.45);display:none}" +
    "#vsw.open .panel{display:grid;grid-template-columns:1fr 1fr;gap:3px}" +
    "#vsw .grp{grid-column:1/-1;padding:10px 10px 4px;font-size:11px;letter-spacing:.08em;text-transform:uppercase;opacity:.5}" +
    "#vsw .panel a{display:flex;gap:10px;align-items:center;padding:9px 10px;border-radius:12px;color:inherit;text-decoration:none}" +
    "#vsw .panel a:hover,#vsw .panel a.cur{background:rgba(255,255,255,.08)}#vsw .panel a.cur{box-shadow:inset 0 0 0 1px rgba(255,255,255,.25)}" +
    "#vsw .n{flex:none;width:34px;height:30px;border-radius:9px;display:grid;place-items:center;background:rgba(255,255,255,.1);font:600 11px/1 ui-monospace,Menlo,monospace}" +
    "#vsw .panel strong{display:block;font-weight:600;margin-bottom:3px}#vsw .panel small{opacity:.6;font-size:12px;line-height:1.3}" +
    "#vsw .hint{grid-column:1/-1;padding:8px 10px 2px;opacity:.45;font-size:11px}" +
    "@media(max-width:480px){#vsw.open .panel{grid-template-columns:1fr}#vsw .panel small{display:none}#vsw .hint{display:none}}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  var v = VERSIONS[idx], last = "";
  var el = document.createElement("div"); el.id = "vsw"; el.setAttribute("role", "navigation"); el.setAttribute("aria-label", "Site versions");
  el.innerHTML = '<div class="panel" id="vsw-panel">' + VERSIONS.map(function (x) {
    var g = x.group !== last ? '<div class="grp">' + x.group + "</div>" : ""; last = x.group;
    return g + '<a href="/' + x.id + '/"' + (x.id === v.id ? ' class="cur" aria-current="page"' : "") + '><span class="n">' + x.id + "</span><span><strong>" + x.name + "</strong><small>" + x.note + "</small></span></a>";
  }).join("") + '<div class="hint">Tip: press [ and ] to flip between versions</div></div>' +
    '<div class="bar"><button class="ar" data-d="-1" aria-label="Previous version">‹</button>' +
    '<button class="lbl" aria-expanded="false" aria-controls="vsw-panel" aria-label="All versions"><b>' + v.id + "</b><span>" + v.name + "</span><i>▲</i></button>" +
    '<button class="ar" data-d="1" aria-label="Next version">›</button></div>';
  document.body.appendChild(el);

  var lbl = el.querySelector(".lbl");
  var set = function (o) { el.classList.toggle("open", o); lbl.setAttribute("aria-expanded", o); };
  lbl.addEventListener("click", function (e) { e.stopPropagation(); set(!el.classList.contains("open")); });
  el.querySelectorAll(".ar").forEach(function (b) { b.addEventListener("click", function () { go(idx + +b.dataset.d); }); });
  document.addEventListener("click", function (e) { if (!el.contains(e.target)) set(false); });
  document.addEventListener("keydown", function (e) {
    var t = e.target; if (e.metaKey || e.ctrlKey || e.altKey || (t && (t.isContentEditable || /INPUT|TEXTAREA|SELECT/.test(t.tagName)))) return;
    if (e.key === "[") go(idx - 1); else if (e.key === "]") go(idx + 1); else if (e.key === "Escape") set(false);
  });
})();
