# YVARS landing page

Standalone French marketing site for YVARS. Isolated from the product app: no login, no admin, no LiveKit.

Live: [https://aassifh.github.io/yvars-landing-page/](https://aassifh.github.io/yvars-landing-page/) (GitHub Pages). Point a custom domain here from GoDaddy after DNS is set.

Single CTA: **Demander une démo**.

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

- Copy lives in `src/copy/fr.ts` (French-first).
- Do not add `/admin`, Google SSO, or “Se connecter”.
- Do not claim worldwide panels, video interviews, or fake social proof.
