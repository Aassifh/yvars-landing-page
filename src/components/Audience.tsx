import { copy } from '../copy/fr';
import SectionHeading from './SectionHeading';

export default function Audience() {
  return (
    <section id="pour-qui" className="reveal scroll-mt-28 border-y border-border bg-white py-20 lg:py-28">
      <div className="page-shell">
        <SectionHeading
          eyebrow={copy.audience.eyebrow}
          title={copy.audience.title}
          subtitle={copy.audience.subtitle}
        />

        <ol className="mt-12 divide-y divide-border border-y border-border">
          {copy.audience.items.map((item) => (
            <li key={item.title} className="py-8">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">{item.title}</h3>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
