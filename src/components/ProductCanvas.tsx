import { type ReactNode } from 'react';
import { Mic } from 'lucide-react';
import { copy } from '../copy/fr';

export type StoryBeatId = (typeof copy.story.beats)[number]['id'];

type Props = {
  beat: StoryBeatId;
  live?: boolean;
};

export default function ProductCanvas({ beat, live = false }: Props) {
  const { study, live: liveLabel, canvas } = copy.story;
  const active = copy.story.beats.find((item) => item.id === beat) ?? copy.story.beats[0];

  return (
    <div className="surface flex h-[15.5rem] w-full flex-col overflow-hidden sm:h-[17rem] lg:h-[22rem]">
      <div className="flex shrink-0 items-center justify-between gap-3 border-b border-border px-4 py-3">
        <p className="truncate text-xs font-semibold tracking-wide text-muted uppercase">
          YVARS · {study}
        </p>
        {live ? (
          <span className="chip inline-flex shrink-0 items-center gap-1.5 text-primary">
            <span className="size-1.5 rounded-full bg-emerald" aria-hidden />
            {liveLabel}
          </span>
        ) : (
          <span className="shrink-0 text-xs font-medium tracking-wide text-muted">{active.title}</span>
        )}
      </div>

      <div className="relative min-h-0 flex-1 overflow-hidden">
        <Panel active={beat === 'design'}>
          <p className="text-xs font-semibold tracking-wide text-muted uppercase">Guide</p>
          <p className="mt-1.5 text-base font-semibold text-foreground">{study}</p>
          <ul className="mt-3 space-y-2.5">
            {canvas.axes.map((axis) => (
              <li key={axis} className="flex items-center gap-3 text-sm text-foreground">
                <span className="size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                {axis}
              </li>
            ))}
          </ul>
        </Panel>

        <Panel active={beat === 'collect'}>
          <p className="text-xs font-semibold tracking-wide text-muted uppercase">Quotas</p>
          <ul className="mt-3 space-y-3">
            {canvas.quotas.map((row) => {
              const percent = quotaPercent(row.value);
              return (
                <li key={row.label}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground">{row.label}</span>
                    <span className="font-medium tabular-nums text-muted">{row.value}</span>
                  </div>
                  <div
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={percent}
                    aria-label={row.label}
                    className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-accent"
                  >
                    <div className="h-full rounded-full bg-primary" style={{ width: `${percent}%` }} />
                  </div>
                </li>
              );
            })}
          </ul>
        </Panel>

        <Panel active={beat === 'interview'}>
          <p className="text-xs font-semibold tracking-wide text-muted uppercase">Entretien vocal</p>
          <div className="mt-4 flex h-14 items-end gap-1.5" aria-hidden>
            {[38, 72, 44, 92, 58, 84, 36, 68, 52, 78, 41, 90, 48, 76].map((h, i) => (
              <span
                key={i}
                className="w-1.5 rounded-full bg-primary/75 sm:w-2"
                style={{ height: `${Math.round(h * 0.55)}px` }}
              />
            ))}
            <Mic className="mb-0.5 ml-2 size-4 text-primary" />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-foreground">{canvas.probing}</p>
        </Panel>

        <Panel active={beat === 'analyze'}>
          <p className="text-xs font-semibold tracking-wide text-muted uppercase">Insights</p>
          <ul className="mt-3 space-y-3">
            {canvas.insights.map((row) => (
              <li key={row.label}>
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="font-medium text-foreground">{row.label}</span>
                  <span className="text-muted">{row.note}</span>
                </div>
                <div
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={row.level}
                  aria-label={row.label}
                  className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-accent"
                >
                  <div className="h-full rounded-full bg-primary" style={{ width: `${row.level}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel active={beat === 'intel'}>
          <p className="text-xs font-semibold tracking-wide text-muted uppercase">Intelligence Lab</p>
          <blockquote className="mt-2 text-sm leading-relaxed text-foreground sm:text-base">
            « {canvas.quote} »
          </blockquote>
          <div className="mt-3 space-y-1.5 text-sm">
            <div className="flex justify-between gap-4">
              <span className="text-muted">{canvas.brand}</span>
              <span className="font-semibold tabular-nums">{canvas.brandPrice}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-muted">{canvas.competitor}</span>
              <span className="font-semibold tabular-nums">{canvas.competitorPrice}</span>
            </div>
          </div>
          <p className="mt-3 rounded-lg bg-accent px-3 py-2 text-xs leading-snug font-medium text-primary">
            {canvas.fusion}
          </p>
        </Panel>
      </div>
    </div>
  );
}

function Panel({ active, children }: { active: boolean; children: ReactNode }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden p-4 transition-opacity duration-200 motion-reduce:transition-none sm:p-5 ${
        active ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
      aria-hidden={!active}
    >
      {children}
    </div>
  );
}

function quotaPercent(value: string) {
  const [done, total] = value.split('/').map((part) => Number(part.trim()));
  if (!done || !total) return 40;
  return Math.round((done / total) * 100);
}
