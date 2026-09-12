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

      <div className="mt-4 flex h-10 items-end gap-1.5" aria-hidden>
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
        <p className="text-xs font-semibold tracking-wide text-muted uppercase">{card.chartTitle}</p>
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
              <span className="text-center text-[0.7rem] font-medium text-muted">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
