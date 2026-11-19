/* Version switcher shown on every version. Add or remove a version by editing VERSIONS. */
(function () {
  var VERSIONS = [
    { id: 2, name: "Swiss", note: "Giant type, strict grid, red" },
    { id: 5, name: "Brutal", note: "Loud, playful, neo-brutalist" },
    { id: 8, name: "Kinetic", note: "Type in motion, horizontal work reel" }
  ];
  var LATEST = 8;
  var m = location.pathname.match(/\/v(\d+)\//);
  var cur = m ? +m[1] : LATEST;
  var idx = Math.max(0, VERSIONS.findIndex(function (v) { return v.id === cur; }));
  var go = function (i) { location.href = "/v" + VERSIONS[(i + VERSIONS.length) % VERSIONS.length].id + "/"; };

  var css = "#vsw{all:initial;position:fixed;left:50%;right:auto;top:auto;bottom:16px;margin:0;padding:0;mix-blend-mode:normal;display:block;transform:translateX(-50%);z-index:9999;font:500 13px/1 ui-sans-serif,system-ui,-apple-system,'Segoe UI',sans-serif;color:#f5f5f4;-webkit-font-smoothing:antialiased}" +
    "#vsw .bar{display:flex;align-items:center;gap:2px;padding:4px;border-radius:999px;background:rgba(18,18,20,.84);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.14);box-shadow:0 10px 40px rgba(0,0,0,.35)}" +
    "#vsw button,#vsw a.tab{all:unset;cursor:pointer;display:flex;align-items:center;gap:6px;height:34px;padding:0 14px;border-radius:999px;color:inherit;white-space:nowrap}" +
    "#vsw button:hover,#vsw a.tab:hover{background:rgba(255,255,255,.1)}#vsw :focus-visible{outline:2px solid #fff;outline-offset:1px}" +
    "#vsw a.tab.cur{background:#f5f5f4;color:#111}#vsw a.tab b{font-weight:600}#vsw a.tab span{opacity:.65}" +
    "@media(max-width:420px){#vsw a.tab span{display:none}#vsw a.tab{padding:0 12px}}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  var el = document.createElement("div"); el.id = "vsw"; el.setAttribute("role", "navigation"); el.setAttribute("aria-label", "Site versions");
  el.innerHTML = '<div class="bar">' + VERSIONS.map(function (x, i) {
    return '<a class="tab' + (i === idx ? " cur" : "") + '" href="/v' + x.id + '/"' + (i === idx ? ' aria-current="page"' : "") + ' title="' + x.note + '"><b>v' + x.id + "</b><span>" + x.name + "</span></a>";
  }).join("") + "</div>";
  document.body.appendChild(el);

  document.addEventListener("keydown", function (e) {
    var t = e.target; if (e.metaKey || e.ctrlKey || e.altKey || (t && (t.isContentEditable || /INPUT|TEXTAREA|SELECT/.test(t.tagName)))) return;
    if (e.key === "[") go(idx - 1); else if (e.key === "]") go(idx + 1);
  });
})();
