# ikuldeepdangi.github.io

Portfolio of **Kuldeep Dangi**, Software Engineer (voice AI, LLM systems, full-stack).
Live at **https://ikuldeepdangi.github.io**.

## What's here

One page, Swiss-style: a strict 12-column grid, off-white paper, black ink and one red accent.

- **Hero:** the name builds letter by letter; a 3D "voice sphere" of dots ripples like speech, follows the cursor and scroll, and speaks when clicked or tapped.
- **Case studies:** each one pins as you scroll and the next slides over it (desktop, when every card fits the screen); animated product mockups beside each.
- **Motion:** smooth scrolling on desktop (Lenis, self-hosted), section titles that reveal line by line, a marquee that reacts to scroll speed, a process line that draws as you scroll, a red cursor and magnetic buttons.
- **Phones:** full-screen menu, native scrolling, single-column layout, mockups stacked.
- **Accessibility:** everything is visible and static with "reduce motion" turned on. Press `G` to see the grid.

## Editing content

| Path | What it is |
|---|---|
| `assets/data.js` | All content: profile, case studies, projects, experience, skills |
| `assets/mocks.js` | Animated product mockups, one per case study (order matches `cases`) |
| `index.html` | Layout, styles and interactions |
| `assets/vendor/lenis.min.js` | Smooth-scroll library (MIT) |
| `assets/resume/resume.html` -> `kuldeep-dangi-resume.pdf` | Résumé source and PDF (print to A4, background graphics on) |
| `assets/img/og-card.png` | Link-preview image |
| `v2/` | Redirect for old links |

No build step. GitHub Pages publishes `main` automatically.

## Automated QA

A QA agent checks the site every 2 hours and logs bugs in `qa/bugs.json` on the `qa-reports` branch.
A fixer agent runs an hour later: it fixes open items, verifies them, merges to `main` and marks them fixed.
