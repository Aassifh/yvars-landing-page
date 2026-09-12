# Hero deliverable card (voice + study preview)

**Date:** 2026-09-12  
**Repo:** `yvars-landing-page` only  
**Status:** Approved for planning after user review of this spec

## Problem

The hero currently shows a cropped admin report screenshot (`hero-report.png`). It looks truncated, has empty margins, and does not clearly communicate that studies are **voice-conducted**. A raw product screenshot is the wrong marketing artifact for a type-led landing hero.

## Goal

Replace the screenshot with a **designed HTML card** in the same hero right-hand slot that:

1. Feels like a real YVARS deliverable (“generated study”).
2. Clearly signals **voice interviews** (chip + waveform).
3. Shows only the most impactful proof: title, two KPIs, one mini chart.
4. Stays localized (FR / EN / AR) and sharp on all screens.

## Non-goals

- No changes to `ai-interviewer`, admin, report APIs, or ngrok.
- No live data from a real study.
- No fake “recording now” UI, scrolling transcript, or login CTA.
- No second hero visual / stacked floating windows.

## Approach

**Designed React card** (not a screenshot, not an overlay on a PNG).

Reuse existing landing patterns: `surface`, primary indigo, `chip`, Geist typography, copy dictionaries.

## Card composition (top → bottom)

| Block | Content |
| --- | --- |
| Header row | Eyebrow “Generated study” (localized) + voice chip (mic icon + “Voice interview” / localized) |
| Title | Short study title; one accent word in `text-primary` |
| Waveform | 8–12 static bars; optional subtle idle pulse if `prefers-reduced-motion: no-preference` |
| KPIs | Two cards: primary filled `25` completed interviews; bordered `964` messages coded |
| Chart | One strip: “Sentiment mix” with three mini bars (positive / neutral / negative) and short labels |

No inner scroll. No bottom fade crop. No admin chrome.

## Placement

Keep the current hero two-column layout:

- Left: existing headline, subtitle, languages, CTAs (unchanged intent).
- Right: new card component instead of `<img src="/hero-report.png">`.

## Copy

Add hero card strings to `fr` / `en` / `ar` dictionaries (eyebrow, voice chip, title parts, KPI labels, chart title/labels). Demo numbers stay static in copy (same spirit as `ProductCanvas`).

## Motion

- Default: very light pulse on 2–3 waveform bars.
- `prefers-reduced-motion: reduce`: static bars only.
- Chip does not flash or animate aggressively.

## Cleanup

- Remove `hero-report.png` from `public/` once unused.
- Remove `reportAlt` (or repurpose) if it only described the screenshot.

## Success criteria

- Hero right side shows the designed card, not a PNG dump.
- Voice is readable within 1 second (chip + waveform).
- Card works in FR / EN / AR without layout break.
- Zero imports or network calls into the product app.
- Landing build/lint still pass.

## Testing

- Visual check at mobile and desktop widths.
- Toggle each locale; confirm chip/title/KPI/chart strings.
- Toggle reduced motion (or emulate) and confirm waveform is static.
