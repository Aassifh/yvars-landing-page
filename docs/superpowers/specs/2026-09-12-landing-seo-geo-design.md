# Landing SEO + GEO (Lighthouse) design

**Date:** 2026-09-12  
**Repo:** `yvars-landing-page` only  
**Canonical:** `https://yvars.io` (`www.yvars.io` → apex)  
**Validation:** Chrome Lighthouse SEO (+ Best Practices) on `/` and `/panel.html` after deploy

## Problem

The marketing site is a Vite SPA on GitHub Pages with thin HTML meta, no crawl map, no social cards, and no machine-readable brief for LLM/answer engines. Locale title/description updates happen only after JS. Custom domain SEO needs a single canonical host.

## Goals

1. **Technical SEO** — robots, sitemap, canonical, Open Graph/Twitter, share image, domain notes.  
2. **Content SEO** — tighter FR/EN/AR titles/descriptions; JSON-LD (`Organization`, `WebSite`, `FAQPage` on home).  
3. **GEO** — `llms.txt` + `llms-full.txt` describing YVARS for generative engines.  
4. **Lighthouse-green** SEO category on production URLs.

## Non-goals

- Touching `ai-interviewer` / admin / APIs.  
- Locale path prerender (`/en`, `/ar`) in this pass.  
- Automating Google Search Console.  
- Buying links or fake social proof (see `docs/landing.md`).

## Approach

Static-first assets in `public/` + hardened `index.html` / `panel.html` heads + small client meta sync. No SSR framework.

## Deliverables

| Item | Path / place |
| --- | --- |
| Robots | `public/robots.txt` → sitemap `https://yvars.io/sitemap.xml` |
| Sitemap | `public/sitemap.xml` → `/` and `/panel.html` |
| GEO short | `public/llms.txt` |
| GEO long | `public/llms-full.txt` |
| OG image | `public/og.png` (1200×630, brand-safe static) |
| Head tags | `index.html`, `panel.html`: canonical, OG, Twitter |
| Client | Sync title, description, `og:*` where practical on locale change |
| JSON-LD | Injected on home (Organization, WebSite, FAQPage) |
| Docs | README: DNS, apex canonical, www redirect |

## Panel indexing

Panel remains **indexable** with distinct B2C meta (participate / paid voice interview) so it does not replace the B2B home intent.

## Success criteria

- Absolute URLs use `https://yvars.io`.  
- Lighthouse SEO passes on live `/` and `/panel.html`.  
- `https://yvars.io/robots.txt`, `/sitemap.xml`, `/llms.txt` resolve.  
- No banned claims in meta or llms copy.
