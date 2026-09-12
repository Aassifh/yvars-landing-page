# YVARS landing page

Standalone marketing site for YVARS (French, English, Arabic). Isolated from the product app: no login, no admin, no LiveKit.

Live: [https://yvars.io](https://yvars.io) (GitHub Pages + custom domain). Also serve `www.yvars.io` → redirect to the apex `https://yvars.io` so SEO does not split.

SEO / GEO assets in `public/`: `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt`, `og.png`.

## Domain

1. Point DNS for `yvars.io` and `www.yvars.io` at GitHub Pages (A / CNAME per GitHub docs).
2. In the repo Pages settings, set custom domain to `yvars.io` and enable HTTPS.
3. Prefer apex as canonical; configure `www` → `https://yvars.io` (DNS or Pages redirect).
4. After go-live, run Lighthouse SEO on `/` and `/panel.html`, and confirm `/robots.txt`, `/sitemap.xml`, `/llms.txt`.

Single CTA: request a demo (`#contact`). Locale: English browsers get English; everything else defaults to French. Arabic is chosen in the nav and remembered.

## Run

Requires Node 22.

```bash
npm install
npm run dev
```

Opens on [http://localhost:5174](http://localhost:5174). Panel application: [http://localhost:5174/panel.html](http://localhost:5174/panel.html).

Optional: copy `.env.example` to `.env` to set `VITE_CONTACT_EMAIL`.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Vite dev server on port 5174 |
| `npm run build` | Typecheck and production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Oxlint |

## Notes

- Copy lives in `src/copy/` (`fr.ts` is the schema source; `en.ts` and `ar.ts` match it). Locale detection is in `src/copy/index.ts`.
- Do not add `/admin`, Google SSO, or “Se connecter”.
- Do not claim worldwide panels, video interviews, or fake social proof.
