import { ArrowDown } from 'lucide-react';
import { useLocale } from '../lib/LocaleContext';

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
          <div className="surface relative overflow-hidden shadow-md ring-1 ring-border/70">
            <img
              src="/hero-report.png?v=3"
              alt={copy.hero.reportAlt}
              width={1200}
              height={900}
              className="aspect-[6/5] w-full object-cover object-top"
              loading="eager"
              decoding="async"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/70 to-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
