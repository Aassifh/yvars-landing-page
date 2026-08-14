# YVARS landing page

Standalone marketing site for YVARS (French, English, Arabic). Isolated from the product app: no login, no admin, no LiveKit.

Live: [https://aassifh.github.io/yvars-landing-page/](https://aassifh.github.io/yvars-landing-page/) (GitHub Pages). Point a custom domain here from GoDaddy after DNS is set.

Single CTA: request a demo (`#contact`). Locale: English browsers get English; everything else defaults to French. Arabic is chosen in the nav and remembered.

## Run

Requires Node 22.

```bash
npm install
npm run dev
```

Opens on [http://localhost:5174](http://localhost:5174).

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
