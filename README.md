# DD Finance — Demo Website

Demo website for a fictional Mexican finance company, built as a clean foundation for teaching tracking pixel implementation (Google Tag Manager, Google Analytics, Google Ads, Meta Ads, TikTok, etc.).

## Tech Stack

- **Next.js 14** (App Router, static export)
- **Tailwind CSS**
- **Static files** — deployable to Netlify or GitHub Pages

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, product overview, stats, CTA |
| `/tarjeta-de-credito` | Credit card product page |
| `/cuenta-de-ahorro` | Savings account product page |
| `/hipoteca` | Mortgage product page |
| `/solicitar` | Lead generation form |
| `/gracias` | Conversion confirmation page (pixel target) |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build for Hosting

```bash
npm run build
```

Generates the `/out` folder — deploy its contents to any static host.

### Netlify (drag & drop)
1. Run `npm run build`
2. Drag the `/out` folder onto [app.netlify.com](https://app.netlify.com)

### Netlify (CI/CD)
`netlify.toml` is pre-configured (build command: `npm run build`, publish: `out`).

## GTM-Ready Element IDs

| ID | Element | Page |
|---|---|---|
| `cta-hero` | Hero primary CTA | `/` |
| `cta-banner-btn` | Banner CTA | `/` |
| `cta-nav` | Nav CTA | All pages |
| `cta-producto` | Product page CTA | Product pages |
| `form-solicitud` | Lead gen form | `/solicitar` |
| `btn-submit` | Submit button | `/solicitar` |
| `conversion-confirmation` | Thank you block | `/gracias` |
| `pagina-gracias` | Page root | `/gracias` |

**Conversion trigger:** URL contains `/gracias`.
