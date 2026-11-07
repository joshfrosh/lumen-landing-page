# Lumen — Landing Page

A clean, single-purpose, responsive one-page website built with plain HTML, CSS and JavaScript. No build step, no dependencies — just open it and it works.

## What's inside

| File | Purpose |
|------|---------|
| `index.html` | The page markup — hero, features, how-it-works, pricing, CTA and footer |
| `styles.css` | All styling, including the responsive breakpoints |
| `script.js` | Small progressive-enhancement script (mobile nav, footer year, CTA form) |

## Sections

- **Hero** — headline, sub-copy and two calls to action, with a lightweight CSS-only product mock.
- **Features** — a six-card grid of product highlights.
- **How it works** — a three-step explainer.
- **Pricing** — three tiers with a highlighted "most popular" plan.
- **CTA** — an email capture form (validated client-side only; nothing is sent anywhere).
- **Footer** — brand blurb, link columns and copyright.

## Run it locally

Because it's a static site, any of these work:

**Option 1 — just open the file**

Double-click `index.html`, or drag it into a browser.

**Option 2 — serve it (recommended)**

Serving over HTTP avoids any file-protocol quirks:

```bash
# Python 3
python3 -m http.server 8000
# then visit http://localhost:8000
```

```bash
# Node.js (if you have npx)
npx serve .
```

## Deploy it

The site is fully static, so it can be hosted anywhere:

- **GitHub Pages** — Settings → Pages → set the source to the branch root.
- **Netlify / Vercel / Cloudflare Pages** — point them at this repository; no build command is needed and the publish directory is the repository root.

## Browser support

Modern evergreen browsers (Chrome, Firefox, Safari, Edge). The layout is responsive from small phones up to wide desktops, and it respects `prefers-reduced-motion`.

## License

MIT — use it however you like.
