/* Animated product mockups for the case studies. Illustrative UI, themed per version through CSS variables:
   --mk-bg, --mk-card, --mk-fg, --mk-mut, --mk-ac, --mk-ac2, --mk-ln, --mk-r (radius), --mk-font, --mk-mono.
   Usage: element.innerHTML = MOCKS.render(index)  (index follows PROFILE.cases order). */
(function () {
  var css = "" +
    ".mk{--_bg:var(--mk-bg,#111);--_card:var(--mk-card,#1a1a1a);--_fg:var(--mk-fg,#f2f2f2);--_mut:var(--mk-mut,#8a8a8a);--_ac:var(--mk-ac,#d4ff3a);--_ac2:var(--mk-ac2,#5ef2ff);--_ln:var(--mk-ln,rgba(255,255,255,.1));--_r:var(--mk-r,14px);" +
    "position:relative;width:100%;aspect-ratio:16/11;background:var(--_bg);color:var(--_fg);border:1px solid var(--_ln);border-radius:var(--_r);overflow:hidden;font:500 12px/1.4 var(--mk-font,system-ui,sans-serif);display:flex;flex-direction:column;text-align:left;letter-spacing:0;text-transform:none}" +
    ".mk *{box-sizing:border-box}.mk .mono{font:500 10px/1.3 var(--mk-mono,ui-monospace,Menlo,monospace);letter-spacing:.06em;text-transform:uppercase;color:var(--_mut)}" +
    ".mk-top{display:flex;align-items:center;gap:6px;padding:9px 12px;border-bottom:1px solid var(--_ln);flex:none}.mk-top i{width:8px;height:8px;border-radius:50%;background:var(--_ln)}.mk-top b{margin-left:8px;font-weight:600;font-size:11.5px}.mk-top .mono{margin-left:auto}" +
    ".mk-live{display:inline-flex;align-items:center;gap:5px;color:#ff4d5e!important}.mk-live::before{content:'';width:6px;height:6px;border-radius:50%;background:#ff4d5e;animation:mkb 1.2s infinite}" +
    "@keyframes mkb{50%{opacity:.25}}" +
    ".mk-body{flex:1;display:grid;gap:10px;padding:12px;min-height:0}" +
    ".mk-card{background:var(--_card);border:1px solid var(--_ln);border-radius:calc(var(--_r)*.7);padding:10px;min-height:0;overflow:hidden}" +
    ".mk-wave{display:flex;align-items:center;gap:2px;height:38px}.mk-wave span{flex:1;height:100%;border-radius:2px;background:var(--_ac);transform-origin:center;animation:mkw 1s ease-in-out infinite alternate}" +
    "@keyframes mkw{from{transform:scaleY(.12)}to{transform:scaleY(1)}}" +
    ".mk-ln{display:flex;gap:8px;padding:4px 0;opacity:0;animation:mkin .5s ease forwards}.mk-ln em{font-style:normal;flex:none;width:52px;font:600 9.5px/1.7 var(--mk-mono,monospace);text-transform:uppercase;letter-spacing:.06em}" +
    ".mk-ln.c em{color:var(--_ac2)}.mk-ln.a em{color:var(--_ac)}" +
    "@keyframes mkin{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}" +
    ".mk-sug{border:1px solid var(--_ac);background:color-mix(in srgb,var(--_ac) 12%,transparent);border-radius:calc(var(--_r)*.6);padding:9px 10px;opacity:0;animation:mkin .6s ease forwards}" +
    ".mk-sug .mono{color:var(--_ac)}" +
    ".mk-row{display:grid;grid-template-columns:1fr auto;gap:8px;align-items:center;padding:6px 0;border-bottom:1px solid var(--_ln)}.mk-row:last-child{border:0}" +
    ".mk-bar{height:5px;border-radius:3px;background:var(--_ln);overflow:hidden;margin-top:4px}.mk-bar i{display:block;height:100%;background:var(--_ac);width:0;animation:mkg 1.4s cubic-bezier(.2,.8,.2,1) forwards}" +
    "@keyframes mkg{to{width:var(--w)}}" +
    ".mk-chip{display:inline-block;padding:2px 7px;border-radius:999px;border:1px solid var(--_ln);font:600 9.5px/1.5 var(--mk-mono,monospace);text-transform:uppercase;letter-spacing:.04em}" +
    ".mk-chip.on{background:var(--_ac);color:var(--mk-on,#000);border-color:var(--_ac)}" +
    ".mk-big{font-size:22px;font-weight:700;letter-spacing:-.02em;line-height:1}" +
    ".mk-phone{width:46%;max-width:210px;justify-self:center;align-self:stretch;border:1px solid var(--_ln);border-radius:22px;background:var(--_card);padding:10px;display:flex;flex-direction:column;gap:6px;position:relative}" +
    ".mk-phone::before{content:'';width:34%;height:5px;border-radius:9px;background:var(--_ln);align-self:center;margin-bottom:4px}" +
    ".mk-bub{max-width:88%;padding:6px 8px;border-radius:10px;font-size:11px;opacity:0;animation:mkin .5s ease forwards}.mk-bub.c{background:var(--_ln);align-self:flex-start}.mk-bub.a{background:var(--_ac);color:var(--mk-on,#000);align-self:flex-end}" +
    ".mk-tkt{border:1px dashed var(--_ac);border-radius:10px;padding:10px;opacity:0;animation:mkin .6s ease forwards}" +
    ".mk-ring{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;background:var(--_ac);color:var(--mk-on,#000);font-weight:800;animation:mkr 1.6s ease-out infinite;align-self:center}" +
    "@keyframes mkr{0%{box-shadow:0 0 0 0 color-mix(in srgb,var(--_ac) 60%,transparent)}100%{box-shadow:0 0 0 16px transparent}}" +
    ".mk-cur{animation:mkb .9s step-end infinite}" +
    "@media(prefers-reduced-motion:reduce){.mk *{animation:none!important}.mk .mk-ln,.mk .mk-sug,.mk .mk-bub,.mk .mk-tkt,.mk .mk-row{opacity:1!important;transform:none!important}.mk .mk-bar i{width:var(--w)!important}.mk .mk-wave span{transform:scaleY(.55)}}" +
    "@media(max-width:600px){.mk .mk-body{grid-template-columns:1fr!important}.mk .mk-phone{width:100%;max-width:none}.mk .mk-wave{height:30px}}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  function wave(n) { var s = ""; for (var i = 0; i < n; i++) s += '<span style="animation-delay:' + ((i * 0.13) % 1).toFixed(2) + "s;animation-duration:" + (0.5 + ((i * 37) % 9) / 12).toFixed(2) + 's"></span>'; return s; }
  function top(title, right) { return '<div class="mk-top"><i></i><i></i><i></i><b>' + title + '</b><span class="mono">' + (right || "") + "</span></div>"; }

  var M = [
    // Kallo.ai — multilingual voice agent
    function () {
      return top("Kallo · Mira, front-desk agent", '<span class="mk-live">Live · Hinglish</span>') +
        '<div class="mk-body" style="grid-template-columns:1.25fr 1fr">' +
        '<div class="mk-card" style="display:flex;flex-direction:column;gap:6px"><span class="mono">Live captions</span><div class="mk-wave">' + wave(34) + "</div>" +
        '<div class="mk-ln c" style="animation-delay:.3s"><em>Caller</em><span>Kal subah 10 baje appointment mil sakta hai?</span></div>' +
        '<div class="mk-ln a" style="animation-delay:1.1s"><em>Agent</em><span>Ji haan, 10:00 AM free hai. Naam bata dijiye?</span></div>' +
        '<div class="mk-ln c" style="animation-delay:1.9s"><em>Caller</em><span>Rahul Mehta. Thanks!<span class="mk-cur">▍</span></span></div></div>' +
        '<div style="display:grid;gap:10px;align-content:start">' +
        '<div class="mk-sug" style="animation-delay:2.3s"><span class="mono">⚙ Tool call</span><p style="margin:5px 0 0;font-family:var(--mk-mono,monospace);font-size:11px">book_appointment(<br>&nbsp;time="10:00", name="Rahul")</p></div>' +
        '<div class="mk-card"><span class="mono">Outcome</span><p style="margin:6px 0 0;font-weight:700">✓ Booked · WhatsApp sent</p></div>' +
        '<div class="mk-card"><div class="mk-row" style="padding-top:0"><span class="mono">Duration</span><b>1:42</b></div><div class="mk-row"><span class="mono">Cost</span><b>₹1.9</b></div></div></div></div>';
    },
    // CallScope — live agent copilot
    function () {
      return top("CallScope · Agent console", '<span class="mk-live">Live 04:12</span>') +
        '<div class="mk-body" style="grid-template-columns:1.25fr 1fr">' +
        '<div class="mk-card" style="display:flex;flex-direction:column;gap:6px"><span class="mono">Live transcript</span><div class="mk-wave">' + wave(34) + "</div>" +
        '<div class="mk-ln c" style="animation-delay:.3s"><em>Caller</em><span>My order says delivered but I never got it.</span></div>' +
        '<div class="mk-ln a" style="animation-delay:1.1s"><em>Agent</em><span>Let me check that for you right away.</span></div>' +
        '<div class="mk-ln c" style="animation-delay:1.9s"><em>Caller</em><span>It was order 4471, last Tuesday<span class="mk-cur">▍</span></span></div></div>' +
        '<div style="display:grid;gap:10px;align-content:start">' +
        '<div class="mk-sug" style="animation-delay:2.4s"><span class="mono">✦ Suggested reply</span><p style="margin:5px 0 0">Offer a re-ship or refund — order 4471 shows a failed hand-off scan.</p></div>' +
        '<div class="mk-card"><span class="mono">Intent</span><p class="mk-big" style="margin-top:6px;font-size:16px">Missing delivery</p><div class="mk-bar"><i style="--w:92%"></i></div></div>' +
        '<div class="mk-card"><span class="mono">Sentiment</span><p style="margin:6px 0 0;font-weight:600">Frustrated → Calming</p></div></div></div>';
    },
    // CallVista — real-estate CRM
    function () {
      var props = [["3BHK · Vijay Nagar", 94], ["3BHK · Scheme 54", 88], ["4BHK · Nipania", 71]];
      return top("CallVista · Lead from call", '<span class="mono">Auto-captured</span>') +
        '<div class="mk-body" style="grid-template-columns:1fr 1.2fr">' +
        '<div class="mk-card" style="display:grid;gap:8px;align-content:start"><span class="mono">New lead</span><p class="mk-big">R. Sharma</p>' +
        '<div style="display:flex;flex-wrap:wrap;gap:4px"><span class="mk-chip on">Hot</span><span class="mk-chip">3BHK</span><span class="mk-chip">Ready to move</span></div>' +
        '<div><span class="mono">Budget</span><p style="margin:2px 0 0;font-weight:700">₹80–90 L</p></div><div><span class="mono">Next step</span><p style="margin:2px 0 0;font-weight:600">Site visit · Sat 11:00</p></div></div>' +
        '<div class="mk-card"><span class="mono">Matching properties</span>' +
        props.map(function (p, i) { return '<div class="mk-row" style="opacity:0;animation:mkin .5s ease ' + (0.4 + i * 0.35) + 's forwards"><div><b>' + p[0] + '</b><div class="mk-bar"><i style="--w:' + p[1] + "%;animation-delay:" + (0.6 + i * 0.35) + 's"></i></div></div><span class="mono" style="color:var(--_fg)">' + p[1] + "%</span></div>"; }).join("") +
        "</div></div>";
    },
    // ZeniServe — restaurant phone agent
    function () {
      return top("ZeniServe · AI phone line", '<span class="mk-live">On call</span>') +
        '<div class="mk-body" style="grid-template-columns:1fr 1fr;align-items:stretch">' +
        '<div class="mk-phone"><div class="mk-ring">AI</div><p class="mono" style="text-align:center;margin:2px 0 4px">+91 ••••• 2210</p>' +
        '<div class="mk-bub c" style="animation-delay:.3s">Table for four tonight, around 8?</div>' +
        '<div class="mk-bub a" style="animation-delay:1s">Yes — 8:00 PM is free. Indoor or terrace?</div>' +
        '<div class="mk-bub c" style="animation-delay:1.7s">Terrace please.</div></div>' +
        '<div style="display:grid;gap:10px;align-content:start">' +
        '<div class="mk-tkt" style="animation-delay:2.3s"><span class="mono" style="color:var(--_ac)">✓ Booked</span><p class="mk-big" style="margin-top:6px">Table 12</p><p style="margin:4px 0 0">Tonight · 8:00 PM · 4 guests · Terrace</p></div>' +
        '<div class="mk-card"><span class="mono">Today</span><div class="mk-row"><span>Calls answered</span><b>Auto</b></div><div class="mk-row"><span>Menu questions</span><b>Auto</b></div><div class="mk-row"><span>Staff interruptions</span><b>0</b></div></div></div></div>';
    },
    // Talent Pipeline — ranking board
    function () {
      var c = [["A. Verma", 91, "AI interview"], ["S. Khan", 86, "Manager review"], ["P. Iyer", 78, "Screened"], ["M. Rao", 64, "Screened"]];
      return top("Talent Pipeline · Backend Engineer", '<span class="mono">128 résumés parsed</span>') +
        '<div class="mk-body" style="grid-template-rows:auto 1fr">' +
        '<div style="display:flex;gap:6px;flex-wrap:wrap"><span class="mk-chip on">Screened 128</span><span class="mk-chip">AI interview 12</span><span class="mk-chip">Review 4</span><span class="mk-chip">Onboarding 1</span></div>' +
        '<div class="mk-card"><div class="mk-row mono" style="padding-top:0"><span>Candidate · JD match</span><span>Stage</span></div>' +
        c.map(function (x, i) { return '<div class="mk-row" style="opacity:0;animation:mkin .5s ease ' + (0.3 + i * 0.25) + 's forwards"><div><b>' + x[0] + '</b> <span class="mono" style="color:var(--_fg)">' + x[1] + '%</span><div class="mk-bar"><i style="--w:' + x[1] + "%;animation-delay:" + (0.5 + i * 0.25) + 's"></i></div></div><span class="mk-chip' + (i === 0 ? " on" : "") + '">' + x[2] + "</span></div>"; }).join("") +
        "</div></div>";
    }
  ];
  window.MOCKS = {
    render: function (i) { return '<div class="mk" role="img" aria-label="Illustrative interface of ' + ((window.PROFILE && PROFILE.cases[i] && PROFILE.cases[i].name) || "the product") + '">' + (M[i] ? M[i]() : "") + "</div>"; },
    // Re-run entrance animations when a mockup scrolls into view
    observe: function (root) {
      if (!("IntersectionObserver" in window)) return;
      var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("mk-in"); var el = e.target, html = el.innerHTML; el.innerHTML = html; io.unobserve(el); } }); }, { threshold: 0.35 });
      (root || document).querySelectorAll(".mk").forEach(function (m) { io.observe(m); });
    }
  };
})();
