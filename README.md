# ikuldeepdangi.github.io

Portfolio of **Kuldeep Dangi**, Software Engineer (voice AI, LLM systems, full-stack).
Live at **https://ikuldeepdangi.github.io** (opens the latest version, `/v10/`).

## Three versions

Every page has a switcher at the bottom (tabs, plus the `[` / `]` keys). The home page opens `/v8/`.

| Version | Style |
|---|---|
| `/v2/` | Swiss: giant type, strict 12-column grid (press `G` to see it), red |
| `/v5/` | Brutal: neo-brutalist, draggable stickers, crossing marquee bands |
| `/v8/` | Kinetic: intro loader, scroll-driven type, pinned horizontal case-study reel, contextual cursor |

Each case study shows an animated product mockup (`assets/mocks.js`), styled by the version through `--mk-*` CSS variables.

## Editing content

All text lives in **`assets/data.js`**; every version renders from it.

| Path | What it is |
|---|---|
| `assets/data.js` | All content: profile, case studies, projects, experience, skills |
| `assets/mocks.js` | Animated product mockups for the four case studies (order matches `cases`) |
| `assets/switcher.js` | The version switcher (edit `VERSIONS` to add or remove one) |
| `vN/index.html` | Each version's layout and styles |
| `assets/resume/resume.html` -> `kuldeep-dangi-resume.pdf` | Résumé source and PDF (print to A4, background graphics on) |
| `assets/img/og-card.png` | Link-preview image |

No build step. GitHub Pages publishes `main` automatically.

## Automated QA

A QA agent checks the live site every 2 hours and files bugs as GitHub issues labelled `qa-bot`.
A fixer agent runs an hour later: it fixes open `qa-bot` issues, pushes, merges to `main` and closes them.
