# ikuldeepdangi.github.io

Personal portfolio of **Kuldeep Dangi**, Software Engineer (voice AI, NLP and full-stack).
Live at **https://ikuldeepdangi.github.io**.

## Structure

| Path | What it is |
|---|---|
| `index.html` | The whole site (single page) |
| `assets/css/site.css` | Styles: light/dark theme tokens at the top |
| `assets/js/site.js` | Theme toggle, hero waveform, scroll reveals, copy-email |
| `assets/resume/resume.html` | Source of the résumé |
| `assets/resume/kuldeep-dangi-resume.pdf` | Résumé served by the site |
| `assets/img/og-card.png` | Link-preview image for LinkedIn/WhatsApp/X |

No build step and no dependencies beyond Google Fonts.

## Updating

- **Content:** edit `index.html` directly.
- **Résumé:** edit `assets/resume/resume.html`, open it in Chrome, Print → Save as PDF (A4, margins none,
  background graphics on) and overwrite `kuldeep-dangi-resume.pdf`.
- **Colours/fonts:** change the variables in `:root` at the top of `site.css`.

## Deploy

GitHub Pages publishes the `main` branch automatically on every push; changes are live in 1–2 minutes.
