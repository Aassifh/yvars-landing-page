import { Lightbulb, Package, Shield, Smartphone, Store, Tag } from 'lucide-react';
import { copy } from '../copy/fr';

const icons = [Package, Store, Smartphone, Shield, Tag, Lightbulb];

export default function UseCases() {
  return (
    <section id="cas-usage" className="reveal scroll-mt-28 py-16 lg:py-24 xl:py-32">
      <div className="page-shell">
        <p className="text-sm font-semibold tracking-wide text-primary">{copy.useCases.eyebrow}</p>
        <h2 className="mt-3 max-w-3xl text-[clamp(1.75rem,2.4vw+1rem,3rem)] font-semibold tracking-tight text-foreground">
          {copy.useCases.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted xl:max-w-3xl">
          {copy.useCases.subtitle}
        </p>

        <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-7">
          <div className="max-w-xl">
            <p className="text-base font-semibold tracking-tight text-foreground">
              {copy.useCases.languages.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{copy.useCases.languages.body}</p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {copy.useCases.languages.items.map((lang) => (
              <li
                key={lang.code}
                lang={lang.code}
                dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                className="rounded-full border border-border bg-accent px-3.5 py-2 text-sm font-medium text-primary"
              >
                {lang.native}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {copy.useCases.clusters.map((cluster, index) => {
            const Icon = icons[index] ?? Package;
            return (
              <article
                key={cluster.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                  <Icon className="size-5" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                  {cluster.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{cluster.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {cluster.chips.map((chip) => (
                    <li
                      key={chip}
                      className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-primary"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
