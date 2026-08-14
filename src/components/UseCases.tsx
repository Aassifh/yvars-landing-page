import { Lightbulb, Package, Shield, Smartphone, Store, Tag } from 'lucide-react';
import { useLocale } from '../lib/LocaleContext';
import SectionHeading from './SectionHeading';

const icons = [Package, Store, Smartphone, Shield, Tag, Lightbulb];

export default function UseCases() {
  const { copy } = useLocale();
  return (
    <section id="cas-usage" className="reveal scroll-mt-28 py-20 lg:py-28">
      <div className="page-shell">
        <SectionHeading
          eyebrow={copy.useCases.eyebrow}
          title={copy.useCases.title}
          subtitle={copy.useCases.subtitle}
        />

        <div className="surface mt-10 flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
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
                className="chip text-primary"
              >
                {lang.native}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {copy.useCases.clusters.map((cluster, index) => {
            const Icon = icons[index] ?? Package;
            return (
              <article
                key={cluster.title}
                className="surface flex flex-col p-6 transition-colors duration-200 hover:border-slate-300"
              >
                <div className="icon-well">
                  <Icon className="size-5" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                  {cluster.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{cluster.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {cluster.chips.map((chip) => (
                    <li key={chip} className="chip text-primary">
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
