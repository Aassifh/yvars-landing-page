import Nav from './components/Nav';
import Footer from './components/Footer';
import PanelForm from './components/PanelForm';
import { useLocale } from './lib/LocaleContext';

export default function PanelApp() {
  const { copy } = useLocale();
  const p = copy.panel;

  return (
    <>
      <a
        href="#formulaire"
        className="absolute top-4 start-4 z-50 -translate-y-[220%] rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm focus-visible:translate-y-0"
      >
        {p.skip}
      </a>
      <Nav />
      <div id="top" className="relative z-10">
        <main>
          <section className="scroll-mt-28 pt-28 pb-12 lg:pt-32 lg:pb-16">
            <div className="page-shell grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                  {p.eyebrow}
                </p>
                <h1 className="mt-3 max-w-xl text-[clamp(1.75rem,2vw+1rem,2.75rem)] font-semibold tracking-tight text-foreground">
                  {p.title}
                </h1>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">{p.subtitle}</p>
                <ul className="mt-8 space-y-3">
                  {p.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-foreground">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
                <h2 className="mt-12 text-base font-semibold tracking-tight text-foreground">
                  {p.stepsTitle}
                </h2>
                <ol className="mt-4 space-y-4">
                  {p.steps.map((step, index) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="chip shrink-0">{String(index + 1).padStart(2, '0')}</span>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{step.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted">{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <PanelForm />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
