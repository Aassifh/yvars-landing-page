import { useEffect, useState } from 'react';
import { copy } from '../copy/fr';
import ProductCanvas, { type StoryBeatId } from './ProductCanvas';

const BEATS = copy.story.beats;

export default function ProductStory() {
  const [active, setActive] = useState<StoryBeatId>(BEATS[0].id);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-story-beat]'));
    if (nodes.length === 0) return;

    const desktop = window.matchMedia('(min-width: 1024px)');
    let observer: IntersectionObserver;

    const connect = () => {
      observer?.disconnect();
      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          const id = visible?.target.getAttribute('data-story-beat') as StoryBeatId | null;
          if (id) setActive(id);
        },
        {
          rootMargin: desktop.matches ? '-32% 0px -42% 0px' : '-48% 0px -16% 0px',
          threshold: [0.15, 0.35, 0.55],
        },
      );
      for (const node of nodes) observer.observe(node);
    };

    connect();
    desktop.addEventListener('change', connect);
    return () => {
      desktop.removeEventListener('change', connect);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="produit" className="scroll-mt-28 py-10 lg:py-16">
      <div className="page-shell">
        <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
          {copy.story.eyebrow}
        </p>
        <h2 className="mt-4 max-w-4xl text-[clamp(2rem,3.2vw+1rem,4.25rem)] leading-[1.05] font-semibold tracking-[-0.04em] text-foreground">
          {copy.story.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg 2xl:max-w-3xl 2xl:text-xl">
          {copy.story.subtitle}
        </p>

        <div className="mt-10 lg:mt-14 lg:grid lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-16 xl:gap-20">
          <div className="sticky top-[4.75rem] z-20 mb-6 self-start bg-background/95 pb-3 backdrop-blur-sm sm:top-[5.25rem] lg:col-start-2 lg:row-start-1 lg:mb-0 lg:bg-transparent lg:pb-0 lg:backdrop-blur-none lg:top-24 xl:top-28">
            <div aria-live="polite" className="sr-only">
              {BEATS.find((beat) => beat.id === active)?.title}
            </div>
            <ProductCanvas beat={active} live={active === 'interview'} fill />
          </div>

          <ol className="lg:col-start-1 lg:row-start-1">
            {BEATS.map((beat, index) => {
              const isActive = active === beat.id;
              const isLast = index === BEATS.length - 1;
              return (
                <li
                  key={beat.id}
                  data-story-beat={beat.id}
                  className={`flex min-h-[72svh] scroll-mt-[calc(4.75rem+36svh)] flex-col justify-center py-8 lg:min-h-[80svh] lg:scroll-mt-28 lg:py-10 ${
                    isLast ? 'min-h-[80svh] pb-20 lg:min-h-[100svh] lg:pb-28' : ''
                  }`}
                >
                  <p
                    className={`font-mono text-xs font-semibold tracking-wide transition-colors duration-200 ${
                      isActive ? 'text-primary' : 'text-muted'
                    }`}
                  >
                    {beat.kicker}
                  </p>
                  <h3
                    className={`mt-3 text-3xl font-semibold tracking-tight transition-colors duration-200 sm:text-4xl xl:text-5xl ${
                      isActive ? 'text-foreground' : 'text-muted'
                    }`}
                  >
                    {beat.title}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-muted xl:max-w-lg xl:text-lg">
                    {beat.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
