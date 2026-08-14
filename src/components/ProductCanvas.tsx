import { type ReactNode } from 'react';
import { Mic } from 'lucide-react';
import { copy } from '../copy/fr';

export type StoryBeatId = (typeof copy.story.beats)[number]['id'];

type Props = {
  beat: StoryBeatId;
  live?: boolean;
  fill?: boolean;
};

export default function ProductCanvas({ beat, live = false, fill = false }: Props) {
  const { study, live: liveLabel, canvas } = copy.story;
  const active = copy.story.beats.find((item) => item.id === beat) ?? copy.story.beats[0];

  return (
    <div
      className={`flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_28px_80px_oklch(0.205_0.03_264/0.1)] ${
        fill
          ? 'h-[min(16rem,34svh)] max-h-[34svh] sm:h-[min(18rem,38svh)] sm:max-h-[38svh] lg:h-[min(36rem,calc(100svh-11rem))] lg:max-h-[calc(100svh-11rem)] 2xl:h-[min(42rem,calc(100svh-11rem))]'
          : 'min-h-[22rem]'
      }`}
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-3 xl:px-6 xl:py-4">
        <span className="flex gap-1" aria-hidden>
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
        </span>
        <p className="ml-2 text-xs font-medium text-muted xl:text-sm">YVARS · {study}</p>
        {live ? (
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-primary">
            <span className="size-1.5 rounded-full bg-emerald" aria-hidden />
            {liveLabel}
          </span>
        ) : (
          <span className="ml-auto text-xs font-medium tracking-wide text-muted">{active.kicker}</span>
        )}
      </div>

      <div className={`relative flex-1 ${fill ? 'min-h-0' : 'min-h-[20rem]'}`}>
        <Panel active={beat === 'design'}>
          <p className="text-xs font-semibold tracking-wide text-muted uppercase">Guide</p>
          <p className="mt-2 text-lg font-semibold text-foreground xl:text-2xl">{study}</p>
          <ul className="mt-4 space-y-3 lg:mt-6 lg:space-y-4 xl:mt-8 xl:space-y-5">
            {canvas.axes.map((axis, index) => (
              <li
                key={axis}
                className="flex items-center gap-3 text-sm text-foreground xl:text-lg"
              >
                <span className="flex size-7 items-center justify-center rounded-md bg-accent font-mono text-[11px] font-semibold text-primary xl:size-8 xl:text-xs">
                  {index + 1}
                </span>
                {axis}
              </li>
            ))}
          </ul>
        </Panel>

        <Panel active={beat === 'collect'}>
          <p className="text-xs font-semibold tracking-wide text-muted uppercase">Quotas</p>
          <ul className="mt-4 space-y-3.5 lg:mt-6 lg:space-y-5 xl:mt-8 xl:space-y-6">
            {canvas.quotas.map((row) => (
              <li key={row.label}>
                <div className="flex items-center justify-between text-sm xl:text-lg">
                  <span className="text-foreground">{row.label}</span>
                  <span className="font-medium tabular-nums text-muted">{row.value}</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-accent xl:h-2">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: quotaWidth(row.value) }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel active={beat === 'interview'}>
          <p className="text-xs font-semibold tracking-wide text-muted uppercase">Entretien vocal</p>
          <div className="mt-5 flex items-end gap-1.5 lg:mt-8 xl:mt-10 xl:gap-2">
            {[38, 72, 44, 92, 58, 84, 36, 68, 52, 78, 41, 90, 48, 76].map((h, i) => (
              <span
                key={i}
                className="w-1.5 rounded-full bg-primary/75 sm:w-2 xl:w-2.5"
                style={{ height: `clamp(${h * 0.55}px, ${h * 0.12}vh, ${h * 1.15}px)` }}
              />
            ))}
            <Mic className="mb-1 ml-2 size-4 text-primary xl:size-5" aria-hidden />
          </div>
          <p className="mt-5 text-sm leading-relaxed text-foreground lg:mt-8 xl:text-lg">{canvas.probing}</p>
        </Panel>

        <Panel active={beat === 'analyze'}>
          <p className="text-xs font-semibold tracking-wide text-muted uppercase">Insights</p>
          <ul className="mt-4 space-y-4 lg:mt-6 lg:space-y-6 xl:mt-8 xl:space-y-8">
            {canvas.insights.map((row) => (
              <li key={row.label}>
                <div className="flex items-center justify-between gap-3 text-sm xl:text-lg">
                  <span className="font-medium text-foreground">{row.label}</span>
                  <span className="text-muted">{row.note}</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-accent xl:h-2">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${row.level}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel active={beat === 'intel'}>
          <p className="text-xs font-semibold tracking-wide text-muted uppercase">Intelligence Lab</p>
          <blockquote className="mt-3 text-base leading-relaxed text-foreground lg:mt-5 xl:text-xl">
            « {canvas.quote} »
          </blockquote>
          <div className="mt-4 space-y-2 text-sm lg:mt-6 lg:space-y-3 xl:text-lg">
            <div className="flex justify-between">
              <span className="text-muted">{canvas.brand}</span>
              <span className="font-semibold tabular-nums">{canvas.brandPrice}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">{canvas.competitor}</span>
              <span className="font-semibold tabular-nums">{canvas.competitorPrice}</span>
            </div>
          </div>
          <p className="mt-4 rounded-xl bg-accent px-3 py-2.5 text-xs leading-relaxed font-medium text-primary lg:mt-6 xl:px-4 xl:py-3 xl:text-sm">
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
      className={`absolute inset-0 overflow-auto p-4 transition-opacity duration-200 motion-reduce:transition-none sm:p-5 lg:overflow-hidden lg:p-6 xl:p-8 ${
        active ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
      aria-hidden={!active}
    >
      {children}
    </div>
  );
}

function quotaWidth(value: string) {
  const [done, total] = value.split('/').map((part) => Number(part.trim()));
  if (!done || !total) return '40%';
  return `${Math.round((done / total) * 100)}%`;
}
