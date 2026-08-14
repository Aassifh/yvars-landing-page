import { ChevronDown } from 'lucide-react';
import { useLocale } from '../lib/LocaleContext';
import SectionHeading from './SectionHeading';

export default function Faq() {
  const { copy } = useLocale();
  return (
    <section id="faq" className="reveal scroll-mt-28 py-20 lg:py-28">
      <div className="page-shell max-w-3xl">
        <SectionHeading eyebrow={copy.faq.eyebrow} title={copy.faq.title} tight />

        <div className="mt-10 space-y-3">
          {copy.faq.items.map((item) => (
            <details
              key={item.q}
              name="faq"
              className="surface group px-5 transition-colors duration-200 open:border-primary/25"
            >
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-start text-base font-semibold tracking-tight text-foreground transition-colors duration-200 hover:text-primary [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown
                  className="size-5 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
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
