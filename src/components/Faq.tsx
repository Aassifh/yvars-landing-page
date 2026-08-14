import { ChevronDown } from 'lucide-react';
import { copy } from '../copy/fr';

export default function Faq() {
  return (
    <section id="faq" className="reveal scroll-mt-28 py-16 lg:py-24 xl:py-32">
      <div className="page-shell max-w-3xl xl:max-w-4xl">
        <p className="text-sm font-semibold tracking-wide text-primary">{copy.faq.eyebrow}</p>
        <h2 className="mt-3 text-[clamp(1.75rem,3vw,2.35rem)] font-semibold tracking-tight text-foreground">
          {copy.faq.title}
        </h2>

        <div className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card">
          {copy.faq.items.map((item) => (
            <details key={item.q} name="faq" className="group px-5">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-base font-semibold tracking-tight text-foreground transition-colors duration-200 hover:text-primary [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown
                  className="size-5 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
