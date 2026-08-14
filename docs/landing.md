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
- **Nav:** Floating glass bar (`top-4 left-4 right-4`), `bg-white/80` + `backdrop-blur`, `border-gray-200`
- **Sections:** Hero (type-led) → Sticky product story → Use cases → Audience → Workspace (livrables) → Why → FAQ → Contact → Footer
- **Spine:** One sticky product window on all breakpoints. Content morphs with scroll (Concevoir → Croiser). Mobile: pinned under the nav; desktop: pinned in the right column.
- **CTA:** Sticky in nav + hero + contact. No secondary login CTA.

## Typography Overrides

- **Font:** Geist Variable (match product UI). Do **not** use Plus Jakarta Sans from MASTER.md.
- **Headings:** Oversized, tight tracking (`tracking-tight`), clamp for hero (`clamp(2.25rem, 6vw, 4.5rem)`)
- **Body:** Slate-900 `#0F172A` for text, slate-600 `#475569` minimum for muted

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

Editorial / Swiss restraint inspired by Askverso **structure**, not a clone: generous whitespace, 4-step how-it-works, use-case chips, comparison table, FAQ. Glass only on the nav (opacity ≥ 80%). No emoji icons (Lucide only).

## Interaction

- `cursor-pointer` on all clickable elements
- Hover: color / opacity / border, 150–300ms, **no** scale that shifts layout
- Visible `:focus-visible` rings
- `prefers-reduced-motion: reduce` disables decorative motion
