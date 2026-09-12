import { Mail, Phone } from 'lucide-react';
import { useLocale } from '../lib/LocaleContext';
import SectionHeading from './SectionHeading';

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function About() {
  const { copy } = useLocale();
  const sales = copy.about.sales;

  return (
    <section id="a-propos" className="reveal scroll-mt-28 border-y border-border bg-white py-14 lg:py-20">
      <div className="page-shell">
        <SectionHeading
          eyebrow={copy.about.eyebrow}
          title={copy.about.title}
          subtitle={copy.about.subtitle}
        />

        <ul className="mt-10 grid gap-8 sm:grid-cols-2 sm:gap-6 lg:gap-8">
          {copy.about.people.map((person) => (
            <li key={person.name} className="flex flex-col gap-4">
              <div className="aspect-square w-full overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src={person.photo}
                  alt={person.name}
                  width={560}
                  height={560}
                  className="size-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                  {person.role}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {person.name}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg sm:leading-[1.7]">
                  {person.bio}
                </p>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground transition-colors duration-200 hover:text-primary"
                >
                  <LinkedInIcon className="size-4" />
                  {copy.about.linkedinLabel}
                </a>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-8 border-t border-border pt-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-4">
            <div className="aspect-square w-full max-w-[12rem] shrink-0 overflow-hidden rounded-2xl bg-slate-100 sm:max-w-[13rem]">
              <img
                src={sales.photo}
                alt={sales.name}
                width={480}
                height={480}
                className="size-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                {sales.role}
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                {sales.name}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg sm:leading-[1.7]">
                {sales.bio}
              </p>
              <div className="mt-4 flex flex-col gap-1">
                <a
                  href={`mailto:${sales.email}`}
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground transition-colors duration-200 hover:text-primary"
                >
                  <Mail className="size-4" aria-hidden />
                  {sales.email}
                </a>
                <a
                  href={`tel:${sales.phone}`}
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground transition-colors duration-200 hover:text-primary"
                >
                  <Phone className="size-4" aria-hidden />
                  {sales.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
              {copy.about.presence.eyebrow}
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              {copy.about.presence.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg sm:leading-[1.7]">
              {copy.about.presence.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
