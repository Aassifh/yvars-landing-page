import { useLocale } from '../lib/LocaleContext';
import SectionHeading from './SectionHeading';

export default function Why() {
  const { copy } = useLocale();
  return (
    <section id="pourquoi" className="reveal scroll-mt-28 py-20 lg:py-28">
      <div className="page-shell">
        <SectionHeading eyebrow={copy.why.eyebrow} title={copy.why.title} subtitle={copy.why.lead} />

        <div className="surface mt-12 overflow-hidden">
          <div className="hidden sm:grid sm:grid-cols-2">
            <div className="border-e border-border bg-slate-50 px-6 py-4">
              <p className="text-sm font-semibold text-muted">{copy.why.withoutLabel}</p>
            </div>
            <div className="bg-accent px-6 py-4">
              <p className="text-sm font-semibold text-primary">{copy.why.withLabel}</p>
            </div>
          </div>
          {copy.why.rows.map((row) => (
            <div key={row.with} className="grid grid-cols-1 border-t border-border sm:grid-cols-2">
              <div className="border-b border-border px-6 py-5 sm:border-e sm:border-b-0">
                <p className="mb-1 text-xs font-semibold tracking-wide text-muted uppercase sm:hidden">
                  {copy.why.withoutLabel}
                </p>
                <p className="text-sm leading-relaxed text-muted">{row.without}</p>
              </div>
              <div className="px-6 py-5">
                <p className="mb-1 text-xs font-semibold tracking-wide text-primary uppercase sm:hidden">
                  {copy.why.withLabel}
                </p>
                <p className="text-sm leading-relaxed text-foreground">{row.with}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
