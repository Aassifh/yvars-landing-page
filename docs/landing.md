# Landing Page Overrides

> **PROJECT:** YVARS landing page
> **Generated:** 2026-08-13
> **Page Type:** Landing / Marketing
> **App:** Standalone Vite site in this repository (not the product SPA)

> ⚠️ **IMPORTANT:** Rules in this file are the design source of truth for this repo.

---

## Isolation

- This repository is the marketing site only. No shared router, AppShell, login, or LiveKit.
- Single CTA: **Demander une démo** → `#contact` (mailto).
- Do not link to `/admin`, Google SSO, or “Se connecter”.

## Pitch (do not dilute)

YVARS is a qualitative research workspace: adaptive **voice** interviews (French, English, Arabic) + structured insights + **competitive intelligence** fusion (Intelligence Lab). Do not lead with “IA” / “AI dashboard” language on the marketing site.

### Forbidden claims

- Worldwide recruitment panels
- Video interviews
- 24–72h delivery SLAs
- Consumer “personae” graphs as in Verso
- Fake testimonials, logos, or metrics
- Google sign-in / “accéder à la plateforme”

## Layout Overrides

- **Max Width:** `page-shell` content, full-width section backgrounds
- **Nav:** Floating glass bar (`bg-white/80` + `backdrop-blur`), visible `border-gray-200`
- **Style:** Swiss / minimal — white space, one indigo accent, high contrast, no neumorphism
- **Sections:** Hero (type-led) → Sticky product story → Use cases → Audience → Workspace (livrables) → Why → FAQ → Contact → Footer
- **Spine:** Sticky product window with a fixed height and no inner scroll. Steps sit beside it as a timeline (titles + rail), not a numbered 01–05 stack. Page scroll updates the window.
- **CTA:** Sticky in nav + hero + contact. No secondary login CTA.

## Typography Overrides

- **Font:** Geist Variable (match product UI). Do **not** use Plus Jakarta Sans from MASTER.md.
- **Headings:** Modular scale. Hero h1 `clamp(2.5rem, 5vw + 0.5rem, 5.25rem)`. Section h2 max `2.5rem`. Beat titles stay below h1 (`text-2xl` / `text-3xl`).
- **Body:** 17px (`1.0625rem`) / 1.6. Slate-900 `#0F172A` for text, slate-600 `#475569` minimum for muted
- **Rhythm:** 8px grid. Sections `py-20 lg:py-28`. Gaps `gap-4 / 6 / 8`.
- **Stacking:** skip `z-50`, nav `z-40`, mobile dock `z-30`, sticky canvas `z-20`, content `z-10`, grain behind (`body::before`)

## Color Overrides

| Role | Hex | Notes |
|------|-----|--------|
| Primary | `#4F46E5` | Indigo-600 — match live product, not MASTER emerald CTA |
| Background | `#F8FAFC` | Cool slate |
| Text | `#0F172A` | Slate-900 |
| Muted | `#475569` | Slate-600 minimum |
| Border | `#E2E8F0` | Visible in light mode |
| CTA | `#4F46E5` | Same as primary |

Light mode only. No dark-by-default.

## Style

Swiss / International: grid, whitespace, Geist, single indigo accent. Cards are white with a visible border. No extruded shadows, no decorative orbs. No emoji icons (Lucide only).

## Interaction

- `cursor-pointer` on all clickable elements
- Hover: color / opacity / border, 150–300ms, **no** scale that shifts layout
- Visible `:focus-visible` rings
- `prefers-reduced-motion: reduce` disables decorative motion
