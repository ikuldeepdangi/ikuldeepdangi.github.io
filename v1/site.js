(function () {
  var root = document.documentElement;
  root.classList.add('js');

  // Theme toggle (remembered per visitor when storage is available)
  var btn = document.querySelector('.theme');
  if (btn) btn.addEventListener('click', function () {
    var dark = root.dataset.theme ? root.dataset.theme === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
  });

  // Header border once scrolled
  var top = document.querySelector('.top');
  var onScroll = function () { top.classList.toggle('scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // Voice waveform under the hero — a nod to the voice-AI work
  var path = document.getElementById('wavePath');
  if (path) {
    var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var draw = function (t) {
      var d = 'M0 60', n = 240;
      for (var i = 0; i <= n; i++) {
        var x = i / n, env = Math.pow(Math.sin(Math.PI * x), 1.6);
        var y = 60 + env * 46 * (0.55 * Math.sin(x * 38 + t * 2.1) + 0.3 * Math.sin(x * 91 - t * 3.3) + 0.15 * Math.sin(x * 17 + t));
        d += ' L' + (x * 1200).toFixed(1) + ' ' + y.toFixed(1);
      }
      path.setAttribute('d', d);
    };
    if (still) draw(0.6);
    else (function loop(ts) { draw(ts / 1000); requestAnimationFrame(loop); })(0);
  }

  // Reveal sections as they enter the viewport
  var items = document.querySelectorAll('.case, .archive li, .svc, .xp > li, .skills > div, .edu > *');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { el.classList.add('reveal'); io.observe(el); });
  }

  // Highlight the current section in the nav
  var links = document.querySelectorAll('.nav a');
  if ('IntersectionObserver' in window) {
    var so = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) { a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['work', 'experience', 'skills', 'contact'].forEach(function (id) { var s = document.getElementById(id); if (s) so.observe(s); });
  }

  // Copy email
  var copy = document.querySelector('.copy');
  if (copy) copy.addEventListener('click', function () {
    var v = copy.dataset.copy;
    var done = function () { copy.textContent = 'Copied ✓'; setTimeout(function () { copy.textContent = 'Copy email'; }, 1800); };
    if (navigator.clipboard) navigator.clipboard.writeText(v).then(done, function () { location.href = 'mailto:' + v; });
    else location.href = 'mailto:' + v;
  });

  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
})();
