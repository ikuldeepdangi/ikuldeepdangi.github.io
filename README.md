# ikuldeepdangi.github.io

Portfolio of **Kuldeep Dangi**, Software Engineer (voice AI, LLM systems, full-stack).
Live at **https://ikuldeepdangi.github.io** (opens the latest version, `/v10/`).

## Ten versions

Every version has a floating switcher at the bottom (‹ › arrows, a panel listing all versions, and the `[` / `]` keys).

| Version | Style |
|---|---|
| `/v1/` | Editorial: paper, serif, one accent, light/dark toggle |
| `/v2/` | Swiss: giant type, strict grid, red |
| `/v3/` | Terminal: interactive developer console (type `help`) |
| `/v4/` | Bento: dark product-launch grid with spotlight cards and a live IST clock |
| `/v5/` | Brutal: neo-brutalist, thick borders, offset shadows |
| `/v6/` | Aurora: glass panels over animated colour, tilt cards |
| `/v7/` | Noir: black and gold luxury, slow reveals |
| `/v8/` | Kinetic: scroll-driven type, pinned horizontal work reel, custom cursor |
| `/v9/` | Signal: interactive 3D voice field, magnetic buttons |
| `/v10/` | Flagship: live AI-call demo, ⌘K command palette, sticky case studies, brief composer |

## Editing content

All text lives in **`assets/data.js`**. Versions 2–10 render from it, so a change there updates every version.
`/v1/` is static HTML in `v1/index.html`.

| Path | What it is |
|---|---|
| `assets/data.js` | All content: profile, case studies, projects, experience, skills |
| `assets/switcher.js` | The version switcher (add a version by appending to `VERSIONS`) |
| `vN/index.html` | Each version's layout and styles |
| `assets/resume/resume.html` → `kuldeep-dangi-resume.pdf` | Résumé source and PDF (print to A4, background graphics on) |
| `assets/img/og-card.png` | Link-preview image |

No build step. GitHub Pages publishes `main` automatically.

## Automated QA

A QA agent checks the live site every 2 hours and files bugs as GitHub issues labelled `qa-bot`.
A fixer agent runs an hour later: it fixes open `qa-bot` issues, pushes, merges to `main` and closes them.
