# ikuldeepdangi.github.io

Portfolio of **Kuldeep Dangi**, Software Engineer (voice AI, LLM systems, full-stack).
Live at **https://ikuldeepdangi.github.io** (opens the latest version, `/v10/`).

## Versions

The home page opens **`/a10/`**. Every page has a switcher at the bottom (‹ › arrows, a panel listing all versions, and the `[` / `]` keys).

**Clean (a1–a10)** share one foundation (`assets/clean.css` + `assets/clean.js`); each version only sets fonts, colours and layout.

| Version | Style |
|---|---|
| `/a1/` Paper | White, quiet, typographic |
| `/a2/` Graphite | Dark and understated |
| `/a3/` Serif | Editorial reading layout (Newsreader) |
| `/a4/` Sidebar | Sticky profile on the left, work scrolls on the right |
| `/a5/` Cards | Soft surfaces, rounded cards, centred hero |
| `/a6/` Midnight | Deep navy with a subtle glow |
| `/a7/` Grid | Hairlines, square corners, mono labels (IBM Plex) |
| `/a8/` Docs | Documentation style with an "On this page" contents |
| `/a9/` Sand | Warm neutrals, deep green, Fraunces |
| `/a10/` Signature | Light/dark toggle, ⌘K quick actions — the default |

**Bold** (hand-built): `/v2/` Swiss, `/v5/` Brutal, `/v8/` Kinetic.

Every case study shows an animated product mockup (`assets/mocks.js`), styled per version through `--mk-*` CSS variables.

## Editing content

All text lives in **`assets/data.js`**; every version renders from it.

| Path | What it is |
|---|---|
| `assets/data.js` | All content: profile, case studies, projects, experience, skills |
| `assets/mocks.js` | Animated product mockups, one per case study (order matches `cases`) |
| `assets/clean.css`, `assets/clean.js` | Shared layout, mobile menu and behaviours for a1–a10 |
| `aN/index.html` | A clean version: tokens, fonts and options (`window.CLEAN`) |
| `vN/index.html` | A bold version's full layout and styles |
| `assets/switcher.js` | The version switcher (edit `VERSIONS`) |
| `assets/resume/resume.html` -> `kuldeep-dangi-resume.pdf` | Résumé source and PDF |

No build step. GitHub Pages publishes `main` automatically.

## Automated QA

A QA agent checks the live site every 2 hours and files bugs as GitHub issues labelled `qa-bot`.
A fixer agent runs an hour later: it fixes open `qa-bot` issues, pushes, merges to `main` and closes them.
