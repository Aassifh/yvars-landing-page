import { Briefcase, ShoppingBag, Users } from 'lucide-react';
import { copy } from '../copy/fr';

const icons = [Briefcase, Users, ShoppingBag];

export default function Audience() {
  return (
    <section id="pour-qui" className="reveal scroll-mt-28 py-16 lg:py-24 xl:py-32">
      <div className="page-shell">
        <p className="text-sm font-semibold tracking-wide text-primary">{copy.audience.eyebrow}</p>
        <h2 className="mt-3 max-w-3xl text-[clamp(1.75rem,2.4vw+1rem,3rem)] font-semibold tracking-tight text-foreground">
          {copy.audience.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted xl:max-w-3xl">
          {copy.audience.subtitle}
        </p>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {copy.audience.items.map((item, index) => {
            const Icon = icons[index] ?? Users;
            return (
              <article
                key={item.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-7"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                  <Icon className="size-5" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
