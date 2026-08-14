import { ArrowDown } from 'lucide-react';
import { copy } from '../copy/fr';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92svh] flex-col justify-center overflow-x-clip py-28 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_45%_at_50%_-8%,_oklch(0.94_0.04_264)_0%,_transparent_68%)]"
      />
      <div className="page-shell">
        <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
          {copy.hero.eyebrow}
        </p>
        <h1 className="mt-6 max-w-[16ch] text-[clamp(2.75rem,5.4vw+1rem,8.75rem)] leading-[0.9] font-semibold tracking-[-0.055em] text-foreground">
          {copy.hero.lines.map((line, index) => (
            <span
              key={line}
              className={`block ${index === copy.hero.lines.length - 1 ? 'text-primary' : ''}`}
            >
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl 2xl:max-w-3xl 2xl:text-2xl">
          {copy.hero.subtitle}
        </p>
        <p className="mt-4 text-sm font-medium tracking-tight text-foreground sm:text-base">
          {copy.hero.languages}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-5">
          <a href="#contact" className="btn-primary">
            {copy.hero.cta}
          </a>
          <a href="#produit" className="btn-ghost gap-1.5">
            {copy.hero.secondary}
            <ArrowDown className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
