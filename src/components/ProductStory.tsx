import { useEffect, useRef, useState } from 'react';
import { copy } from '../copy/fr';
import ProductCanvas, { type StoryBeatId } from './ProductCanvas';
import SectionHeading from './SectionHeading';

const BEATS = copy.story.beats;

export default function ProductStory() {
  const listRef = useRef<HTMLOListElement>(null);
  const canvasWrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<StoryBeatId>(BEATS[0].id);

  useEffect(() => {
    const nodes = Array.from(
      listRef.current?.querySelectorAll<HTMLElement>('[data-story-beat]') ?? [],
    );
    if (nodes.length === 0) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const desktop = window.matchMedia('(min-width: 1024px)').matches;
      let next: StoryBeatId = BEATS[0].id;

      if (desktop) {
        const trigger = window.innerHeight * 0.4;
        for (const node of nodes) {
          if (node.getBoundingClientRect().top <= trigger) {
            next = (node.getAttribute('data-story-beat') as StoryBeatId) ?? next;
          }
        }
      } else {
        const canvasBottom = canvasWrapRef.current?.getBoundingClientRect().bottom ?? 180;
        next = BEATS[BEATS.length - 1].id;
        for (const node of nodes) {
          const id = node.getAttribute('data-story-beat') as StoryBeatId | null;
          if (id && node.getBoundingClientRect().top >= canvasBottom - 12) {
            next = id;
            break;
          }
        }
      }

      setActive((current) => (current === next ? current : next));
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section id="produit" className="scroll-mt-28 py-16 lg:py-20">
      <div className="page-shell">
        <SectionHeading
          eyebrow={copy.story.eyebrow}
          title={copy.story.title}
          subtitle={copy.story.subtitle}
        />

        <div className="mt-10 lg:mt-14 lg:grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start lg:gap-16 xl:gap-20">
          <div
            ref={canvasWrapRef}
            className="sticky top-[4.75rem] z-20 mb-8 self-start bg-background pb-3 sm:top-[5.25rem] lg:col-start-2 lg:row-start-1 lg:mb-0 lg:bg-transparent lg:pb-0 lg:top-24"
          >
            <div aria-live="polite" className="sr-only">
              {BEATS.find((beat) => beat.id === active)?.title}
            </div>
            <ProductCanvas beat={active} live={active === 'interview'} />
          </div>

          <ol ref={listRef} className="relative border-l border-border lg:col-start-1 lg:row-start-1">
            {BEATS.map((beat) => {
              const isActive = active === beat.id;
              return (
                <li
                  key={beat.id}
                  data-story-beat={beat.id}
                  className="relative scroll-mt-[calc(4.75rem+16.5rem)] py-5 pl-6 lg:scroll-mt-28 lg:py-8"
                >
                  <span
                    aria-hidden
                    className={`absolute top-8 -left-[5px] size-2.5 rounded-full border-2 transition-colors duration-200 lg:top-10 ${
                      isActive ? 'border-primary bg-primary' : 'border-border bg-background'
                    }`}
                  />
                  <h3
                    className={`text-xl font-semibold tracking-tight transition-colors duration-200 sm:text-2xl ${
                      isActive ? 'text-foreground' : 'text-muted'
                    }`}
                  >
                    {beat.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base lg:max-w-md">
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
