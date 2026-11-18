/* Version switcher shown on every version. Add a new version by appending to VERSIONS. */
(function () {
  var VERSIONS = [
    { id: 1, name: "Editorial", note: "Paper, serif, one accent" },
    { id: 2, name: "Swiss", note: "Grid, type and red" },
    { id: 3, name: "Terminal", note: "A developer console" },
    { id: 4, name: "Bento", note: "Dark product-launch grid" },
    { id: 5, name: "Brutal", note: "Neo-brutalist, loud and honest" },
    { id: 6, name: "Aurora", note: "Glass over living colour" },
    { id: 7, name: "Noir", note: "Black, gold, slow luxury" },
    { id: 8, name: "Kinetic", note: "Type in motion, horizontal work reel" },
    { id: 9, name: "Signal", note: "Interactive voice field" },
    { id: 10, name: "Flagship", note: "Live voice-AI demo, command palette" }
  ];
  var m = location.pathname.match(/\/v(\d+)\//);
  var cur = m ? +m[1] : VERSIONS.length;
  var idx = Math.max(0, VERSIONS.findIndex(function (v) { return v.id === cur; }));
  var go = function (i) { location.href = "/v" + VERSIONS[(i + VERSIONS.length) % VERSIONS.length].id + "/"; };

  var css = "#vsw{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:9999;font:500 13px/1 ui-sans-serif,system-ui,-apple-system,'Segoe UI',sans-serif;color:#f5f5f4;-webkit-font-smoothing:antialiased}" +
    "#vsw .bar{display:flex;align-items:center;gap:2px;padding:4px;border-radius:999px;background:rgba(18,18,20,.82);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.12);box-shadow:0 10px 40px rgba(0,0,0,.35)}" +
    "#vsw button{all:unset;cursor:pointer;display:flex;align-items:center;gap:8px;height:34px;padding:0 12px;border-radius:999px;color:inherit;white-space:nowrap}" +
    "#vsw button:hover{background:rgba(255,255,255,.1)}#vsw button:focus-visible{outline:2px solid #fff;outline-offset:1px}" +
    "#vsw .ar{width:34px;padding:0;justify-content:center;font-size:16px}" +
    "#vsw .lbl b{font-weight:600}#vsw .lbl span{opacity:.6}" +
    "#vsw .panel{position:absolute;bottom:52px;left:50%;transform:translateX(-50%);width:min(560px,calc(100vw - 32px));max-height:min(70vh,560px);overflow:auto;padding:8px;border-radius:18px;background:rgba(18,18,20,.94);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border:1px solid rgba(255,255,255,.12);box-shadow:0 20px 60px rgba(0,0,0,.45);display:none}" +
    "#vsw.open .panel{display:grid;grid-template-columns:1fr 1fr;gap:4px}" +
    "#vsw .panel a{display:flex;gap:12px;align-items:center;padding:10px 12px;border-radius:12px;color:inherit;text-decoration:none}" +
    "#vsw .panel a:hover,#vsw .panel a.cur{background:rgba(255,255,255,.08)}#vsw .panel a.cur{box-shadow:inset 0 0 0 1px rgba(255,255,255,.25)}" +
    "#vsw .n{flex:none;width:34px;height:34px;border-radius:10px;display:grid;place-items:center;background:rgba(255,255,255,.1);font:600 12px/1 ui-monospace,Menlo,monospace}" +
    "#vsw .panel strong{display:block;font-weight:600;margin-bottom:3px}#vsw .panel small{opacity:.6;font-size:12px}" +
    "#vsw .hint{grid-column:1/-1;padding:8px 12px 4px;opacity:.5;font-size:11px}" +
    "@media(max-width:520px){#vsw.open .panel{grid-template-columns:1fr}#vsw .lbl span{display:none}}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  var v = VERSIONS[idx];
  var el = document.createElement("div"); el.id = "vsw";
  el.innerHTML = '<div class="panel" role="menu" aria-label="All versions">' +
    VERSIONS.map(function (x) { return '<a role="menuitem" href="/v' + x.id + '/"' + (x.id === v.id ? ' class="cur" aria-current="page"' : "") + '><span class="n">v' + x.id + '</span><span><strong>' + x.name + '</strong><small>' + x.note + "</small></span></a>"; }).join("") +
    '<div class="hint">Tip: press [ and ] to flip between versions</div></div>' +
    '<div class="bar"><button class="ar" data-d="-1" aria-label="Previous version">‹</button>' +
    '<button class="lbl" aria-expanded="false" aria-label="Show all versions"><b>v' + v.id + "</b><span>" + v.name + "</span> ▴</button>" +
    '<button class="ar" data-d="1" aria-label="Next version">›</button></div>';
  document.body.appendChild(el);

  var lbl = el.querySelector(".lbl");
  lbl.addEventListener("click", function (e) { e.stopPropagation(); var o = el.classList.toggle("open"); lbl.setAttribute("aria-expanded", o); });
  el.querySelectorAll(".ar").forEach(function (b) { b.addEventListener("click", function () { go(idx + +b.dataset.d); }); });
  document.addEventListener("click", function (e) { if (!el.contains(e.target)) { el.classList.remove("open"); lbl.setAttribute("aria-expanded", "false"); } });
  document.addEventListener("keydown", function (e) {
    var t = e.target; if (t && (t.isContentEditable || /INPUT|TEXTAREA|SELECT/.test(t.tagName))) return;
    if (e.key === "[") go(idx - 1); else if (e.key === "]") go(idx + 1);
    else if (e.key === "Escape") el.classList.remove("open");
  });
})();
