# Brand Axis v26 — Campaign / Build / Create

Complete static site package for GitHub + Netlify. No build command is required. Netlify publish directory: `.`

## Main pages
- `index.html`
- `about.html`
- `services.html`
- `campaign.html`
- `build.html`
- `create.html`
- `work.html`
- `contact.html`
- `thank-you.html`
- `/admin/` — Decap CMS

## Current starting prices
- Create: $499
- Build: $599
- Campaign: $799

Prices can be edited later from `/admin/` after OAuth is configured.

## Work portfolio
`work.html` reads `data/work.json`. The admin edits that file through a visual interface. Initial entries are deliberately labeled as client work, owned projects, concept studies, creative work, or in-progress work; no invented performance results are used.

## Forms
The existing Netlify form `brand-axis-project` is preserved. Form detection must remain enabled in Netlify. The notification destination is controlled in Netlify itself; it is not changed by this package.

## Admin login
See `ADMIN-SETUP.md`.

## Upload
Unzip and upload the CONTENTS of this folder to the root of the GitHub repository. Do not upload the outer folder.
