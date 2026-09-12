# Hero Deliverable Card Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the hero report screenshot with a designed HTML “generated study” card that signals voice interviews (chip + waveform), shows two KPIs and one mini sentiment chart, and stays FR/EN/AR — landing frontend only.

**Architecture:** Add a self-contained `HeroStudyCard` React component that reads localized copy from `useLocale()`. Wire it into `Hero` in place of the `<img>`. Extend `hero` copy in `fr` / `en` / `ar`. Delete unused `public/hero-report.png`. No product-app imports or APIs.

**Tech Stack:** React 19, Vite 8, Tailwind CSS 4, lucide-react (`Mic`), existing `surface` / `chip` utilities, copy dictionaries.

## Global Constraints

- Landing repo only (`yvars-landing-page`); never touch `ai-interviewer` or report APIs.
- Static demo content only (same spirit as `ProductCanvas`).
- No fake live recording UI, scrolling transcript, or login CTA.
- Respect `prefers-reduced-motion`: no waveform pulse when reduced.
- Keep hero left column (headline, subtitle, CTAs) intent unchanged.
- This repo has no unit-test runner; verify with `npm run build` and `npm run lint`.

## File map

| File | Role |
| --- | --- |
| `src/components/HeroStudyCard.tsx` | New card: header, title, waveform, KPIs, sentiment strip |
| `src/components/Hero.tsx` | Swap screenshot for `HeroStudyCard` |
| `src/copy/fr.ts` | French card strings (source of `Copy` type) |
| `src/copy/en.ts` | English card strings |
| `src/copy/ar.ts` | Arabic card strings |
| `src/index.css` | Optional `@keyframes` for waveform pulse |
| `public/hero-report.png` | Delete after unused |

---

### Task 1: Add hero card copy (FR / EN / AR)

**Files:**
- Modify: `src/copy/fr.ts` (`hero` object)
- Modify: `src/copy/en.ts` (`hero` object)
- Modify: `src/copy/ar.ts` (`hero` object)

**Interfaces:**
- Consumes: existing `hero` keys
- Produces: `hero.card` object shaped as below (inferred into `Copy` via `Widen<typeof fr>`)

```ts
card: {
  eyebrow: string;
  voiceChip: string;
  titleLead: string;      // text before accent word
  titleAccent: string;    // accent word only
  titleTrail: string;     // text after accent (may be empty)
  kpiInterviewsValue: string;
  kpiInterviewsLabel: string;
  kpiMessagesValue: string;
  kpiMessagesLabel: string;
  chartTitle: string;
  sentimentPositive: string;
  sentimentNeutral: string;
  sentimentNegative: string;
  sentimentPositiveLevel: number; // 0–100
  sentimentNeutralLevel: number;
  sentimentNegativeLevel: number;
}
```

- [ ] **Step 1: Extend French `hero` and remove `reportAlt`**

In `src/copy/fr.ts`, replace the `hero` object with:

```ts
  hero: {
    eyebrow: 'Plateforme d’études qualitatives',
    lines: ['Entendez vos clients.', 'Voyez le marché.', 'Agissez.'],
    subtitle:
      'YVARS conduit des entretiens vocaux qui s’adaptent en temps réel, en français, anglais et arabe, puis relie ces verbatims à l’intelligence concurrentielle : prix observés, MDD, écarts de rayon. Vous gardez le cadre de l’étude ; vous récupérez une matière encore vivante, que l’on peut croiser, filtrer et interroger pour décider plus vite, sans attendre un deck figé.',
    languages: 'Études menées en français, anglais et arabe.',
    cta: 'Demander une démo',
    secondary: 'Voir le produit',
    card: {
      eyebrow: 'Étude générée',
      voiceChip: 'Entretien vocal',
      titleLead: 'Healthy Snacking · Occasions et ',
      titleAccent: 'freins',
      titleTrail: '',
      kpiInterviewsValue: '25',
      kpiInterviewsLabel: 'Entretiens terminés',
      kpiMessagesValue: '964',
      kpiMessagesLabel: 'Messages codés',
      chartTitle: 'Mix de sentiments',
      sentimentPositive: 'Positif',
      sentimentNeutral: 'Neutre',
      sentimentNegative: 'Négatif',
      sentimentPositiveLevel: 55,
      sentimentNeutralLevel: 78,
      sentimentNegativeLevel: 22,
    },
  },
```

- [ ] **Step 2: Mirror English `hero.card` and remove `reportAlt`**

In `src/copy/en.ts`:

```ts
    card: {
      eyebrow: 'Generated study',
      voiceChip: 'Voice interview',
      titleLead: 'Healthy Snacking · Occasions and ',
      titleAccent: 'barriers',
      titleTrail: '',
      kpiInterviewsValue: '25',
      kpiInterviewsLabel: 'Completed interviews',
      kpiMessagesValue: '964',
      kpiMessagesLabel: 'Messages coded',
      chartTitle: 'Sentiment mix',
      sentimentPositive: 'Positive',
      sentimentNeutral: 'Neutral',
      sentimentNegative: 'Negative',
      sentimentPositiveLevel: 55,
      sentimentNeutralLevel: 78,
      sentimentNegativeLevel: 22,
    },
```

- [ ] **Step 3: Mirror Arabic `hero.card` and remove `reportAlt`**

In `src/copy/ar.ts`:

```ts
    card: {
      eyebrow: 'دراسة مُنشأة',
      voiceChip: 'مقابلة صوتية',
      titleLead: 'وجبات خفيفة صحية · مناسبات و',
      titleAccent: 'حواجز',
      titleTrail: '',
      kpiInterviewsValue: '25',
      kpiInterviewsLabel: 'مقابلات مكتملة',
      kpiMessagesValue: '964',
      kpiMessagesLabel: 'رسائل مُرمّزة',
      chartTitle: 'مزيج المشاعر',
      sentimentPositive: 'إيجابي',
      sentimentNeutral: 'محايد',
      sentimentNegative: 'سلبي',
      sentimentPositiveLevel: 55,
      sentimentNeutralLevel: 78,
      sentimentNegativeLevel: 22,
    },
```

- [ ] **Step 4: Typecheck**

Run: `npm run build`  
Expected: PASS (or at least no type errors on `Copy` / locales). If Hero still references `reportAlt`, expect a TS error until Task 3 — acceptable to stop after `tsc` failure on Hero only if build runs typecheck first; prefer completing Task 1 then Task 2/3 in order.

If build fails only because Hero still uses `reportAlt`, proceed to Task 2–3 in the same session.

- [ ] **Step 5: Commit**

```bash
git add src/copy/fr.ts src/copy/en.ts src/copy/ar.ts
git commit -m "Add localized copy for the hero study card."
```

---

### Task 2: Build `HeroStudyCard` + waveform motion

**Files:**
- Create: `src/components/HeroStudyCard.tsx`
- Modify: `src/index.css` (append keyframes + utility near existing reveal animation)

**Interfaces:**
- Consumes: `useLocale()` → `copy.hero.card`
- Produces: default export `HeroStudyCard` component with no props

- [ ] **Step 1: Add waveform pulse CSS**

Append to `src/index.css`:

```css
@keyframes wave-pulse {
  0%,
  100% {
    transform: scaleY(1);
    opacity: 0.75;
  }
  50% {
    transform: scaleY(1.35);
    opacity: 1;
  }
}

@media (prefers-reduced-motion: no-preference) {
  .wave-bar-pulse {
    transform-origin: bottom center;
    animation: wave-pulse 1.8s ease-in-out infinite;
  }
}
```

- [ ] **Step 2: Create `HeroStudyCard.tsx`**

Create `src/components/HeroStudyCard.tsx`:

```tsx
import { Mic } from 'lucide-react';
import { useLocale } from '../lib/LocaleContext';

const WAVE_HEIGHTS = [36, 64, 44, 88, 52, 76, 40, 70, 48, 82, 42, 66];
const PULSE_INDEXES = new Set([3, 5, 9]);

export default function HeroStudyCard() {
  const { copy } = useLocale();
  const card = copy.hero.card;

  const sentiments = [
    {
      label: card.sentimentPositive,
      level: card.sentimentPositiveLevel,
      barClass: 'bg-emerald',
    },
    {
      label: card.sentimentNeutral,
      level: card.sentimentNeutralLevel,
      barClass: 'bg-slate-500',
    },
    {
      label: card.sentimentNegative,
      level: card.sentimentNegativeLevel,
      barClass: 'bg-rose-500',
    },
  ];

  return (
    <div className="surface overflow-hidden p-5 shadow-md ring-1 ring-border/70 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
          {card.eyebrow}
        </p>
        <span className="chip inline-flex items-center gap-1.5">
          <Mic className="size-3.5" aria-hidden />
          {card.voiceChip}
        </span>
      </div>

      <h2 className="mt-4 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
        {card.titleLead}
        <span className="text-primary">{card.titleAccent}</span>
        {card.titleTrail}
      </h2>

      <div
        className="mt-4 flex h-10 items-end gap-1.5"
        aria-hidden
      >
        {WAVE_HEIGHTS.map((height, index) => (
          <span
            key={index}
            className={`w-1.5 rounded-full bg-primary/70 sm:w-2 ${
              PULSE_INDEXES.has(index) ? 'wave-bar-pulse' : ''
            }`}
            style={{
              height: `${Math.round(height * 0.4)}px`,
              animationDelay: PULSE_INDEXES.has(index) ? `${index * 0.12}s` : undefined,
            }}
          />
        ))}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-primary px-4 py-3 text-primary-foreground">
          <p className="text-2xl font-semibold tracking-tight tabular-nums">
            {card.kpiInterviewsValue}
          </p>
          <p className="mt-1 text-xs font-medium opacity-90">{card.kpiInterviewsLabel}</p>
        </div>
        <div className="rounded-xl border border-border bg-white px-4 py-3">
          <p className="text-2xl font-semibold tracking-tight text-foreground tabular-nums">
            {card.kpiMessagesValue}
          </p>
          <p className="mt-1 text-xs font-medium text-muted">{card.kpiMessagesLabel}</p>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-border bg-slate-50/80 p-4">
        <p className="text-xs font-semibold tracking-wide text-muted uppercase">
          {card.chartTitle}
        </p>
        <ul className="mt-3 flex items-end gap-4">
          {sentiments.map((item) => (
            <li key={item.label} className="flex min-w-0 flex-1 flex-col items-center gap-2">
              <div className="flex h-20 w-full items-end justify-center rounded-md bg-white/80 px-2">
                <span
                  className={`w-full max-w-8 rounded-t-md ${item.barClass}`}
                  style={{ height: `${item.level}%` }}
                  title={`${item.label}: ${item.level}`}
                />
              </div>
              <span className="text-center text-[0.7rem] font-medium text-muted">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Lint the new file**

Run: `npm run lint`  
Expected: no errors in `HeroStudyCard.tsx`.

- [ ] **Step 4: Commit**

```bash
git add src/components/HeroStudyCard.tsx src/index.css
git commit -m "Add HeroStudyCard with voice chip, waveform, KPIs, and sentiment."
```

---

### Task 3: Wire card into Hero and delete screenshot

**Files:**
- Modify: `src/components/Hero.tsx`
- Delete: `public/hero-report.png`

**Interfaces:**
- Consumes: `HeroStudyCard` default export
- Produces: Hero right column renders the card; no `reportAlt` / PNG references remain

- [ ] **Step 1: Replace screenshot block in `Hero.tsx`**

Update imports and the right column so `Hero.tsx` is:

```tsx
import { ArrowDown } from 'lucide-react';
import { useLocale } from '../lib/LocaleContext';
import HeroStudyCard from './HeroStudyCard';

export default function Hero() {
  const { copy } = useLocale();

  return (
    <section
      id="top"
      className="relative flex min-h-[88svh] flex-col justify-center overflow-x-clip py-28 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_45%_at_50%_-8%,_oklch(0.94_0.04_264)_0%,_transparent_68%)]"
      />
      <div className="page-shell grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
            {copy.hero.eyebrow}
          </p>
          <h1 className="mt-5 max-w-[16ch] text-[clamp(2.5rem,5vw+0.5rem,5.25rem)] leading-[1.04] font-semibold tracking-[-0.04em] text-foreground">
            {copy.hero.lines.map((line, index) => (
              <span
                key={line}
                className={`block ${index === copy.hero.lines.length - 1 ? 'text-primary' : ''}`}
              >
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg sm:leading-[1.7]">
            {copy.hero.subtitle}
          </p>
          <p className="mt-4 text-sm font-medium tracking-tight text-foreground">
            {copy.hero.languages}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-primary">
              {copy.hero.cta}
            </a>
            <a href="#produit" className="btn-ghost gap-2">
              {copy.hero.secondary}
              <ArrowDown className="size-4" aria-hidden />
            </a>
          </div>
        </div>

        <div className="relative w-full lg:justify-self-end">
          <HeroStudyCard />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Delete the PNG**

```bash
rm public/hero-report.png
```

- [ ] **Step 3: Verify build and lint**

Run:

```bash
npm run lint
npm run build
```

Expected: both PASS. Grep must find no `hero-report` or `reportAlt` left:

```bash
rg "hero-report|reportAlt" src public || true
```

Expected: no matches.

- [ ] **Step 4: Visual smoke (manual)**

Run: `npm run dev -- --host --port 5174`  
Check:

1. Desktop: card sits right of “Agissez.” with chip + waveform visible.
2. Switch FR / EN / AR: strings update, layout does not break (RTL for Arabic).
3. Mobile: card stacks under the copy, no horizontal overflow.

- [ ] **Step 5: Commit**

```bash
git add src/components/Hero.tsx public/hero-report.png
git commit -m "Replace hero screenshot with the designed study card."
```

---

## Spec coverage check

| Spec requirement | Task |
| --- | --- |
| Designed HTML card, not PNG | 2, 3 |
| Voice chip + waveform | 2 |
| Two KPIs + one sentiment chart | 2 |
| Same hero right slot | 3 |
| FR / EN / AR copy | 1 |
| Reduced-motion safe pulse | 2 (`wave-bar-pulse` only under media query) |
| Landing-only / no product APIs | Global + all tasks |
| Delete `hero-report.png` / drop `reportAlt` | 1, 3 |
| Build/lint pass | 3 |
