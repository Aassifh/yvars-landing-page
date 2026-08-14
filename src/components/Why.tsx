import { copy } from '../copy/fr';

export default function Why() {
  return (
    <section id="pourquoi" className="reveal scroll-mt-28 py-16 lg:py-24 xl:py-32">
      <div className="page-shell">
        <p className="text-sm font-semibold tracking-wide text-primary">{copy.why.eyebrow}</p>
        <h2 className="mt-3 max-w-3xl text-[clamp(1.75rem,2.4vw+1rem,3rem)] font-semibold tracking-tight text-foreground">
          {copy.why.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted xl:max-w-3xl">
          {copy.why.lead}
        </p>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="hidden sm:grid sm:grid-cols-2">
            <div className="border-r border-border bg-slate-50 px-6 py-4">
              <p className="text-sm font-semibold text-muted">{copy.why.withoutLabel}</p>
            </div>
            <div className="bg-accent px-6 py-4">
              <p className="text-sm font-semibold text-primary">{copy.why.withLabel}</p>
            </div>
          </div>
          {copy.why.rows.map((row) => (
            <div
              key={row.with}
              className="grid grid-cols-1 border-t border-border sm:grid-cols-2"
            >
              <div className="border-b border-border px-6 py-5 sm:border-r sm:border-b-0">
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
