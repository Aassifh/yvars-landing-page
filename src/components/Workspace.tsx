import { useLocale } from '../lib/LocaleContext';
import SectionHeading from './SectionHeading';

export default function Workspace() {
  const { copy } = useLocale();
  return (
    <section id="espace" className="reveal scroll-mt-28 py-20 lg:py-28">
      <div className="page-shell">
        <SectionHeading
          eyebrow={copy.workspace.eyebrow}
          title={copy.workspace.title}
          subtitle={copy.workspace.subtitle}
        />

        <ol className="surface mt-12 grid overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
          {copy.workspace.items.map((item, index) => (
            <li
              key={item.title}
              className={`px-6 py-8 ${index < 2 ? 'border-b border-border lg:border-b-0' : ''} ${
                index % 2 === 0 ? 'sm:border-e sm:border-border' : ''
              } ${index < 3 ? 'lg:border-e lg:border-border' : ''}`}
            >
              <h3 className="text-base font-semibold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
