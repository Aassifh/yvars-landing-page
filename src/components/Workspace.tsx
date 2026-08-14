import { AudioLines, ClipboardList, GitCompare, MessagesSquare } from 'lucide-react';
import { copy } from '../copy/fr';

const icons = [ClipboardList, AudioLines, MessagesSquare, GitCompare];

export default function Workspace() {
  return (
    <section id="espace" className="reveal scroll-mt-28 py-16 lg:py-24 xl:py-32">
      <div className="page-shell">
        <p className="text-sm font-semibold tracking-wide text-primary">{copy.workspace.eyebrow}</p>
        <h2 className="mt-3 max-w-3xl text-[clamp(1.75rem,2.4vw+1rem,3rem)] font-semibold tracking-tight text-foreground">
          {copy.workspace.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted xl:max-w-3xl">
          {copy.workspace.subtitle}
        </p>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2">
          {copy.workspace.items.map((item, index) => {
            const Icon = icons[index] ?? ClipboardList;
            return (
              <li
                key={item.title}
                className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-7"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                  <Icon className="size-5" aria-hidden />
                </div>
                <div>
                  <p className="font-mono text-xs font-semibold tracking-wide text-primary">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
