import { copy } from '../copy/fr';
import Logo from './Logo';

const links = [
  { href: '#produit', label: copy.nav.product },
  { href: '#cas-usage', label: copy.nav.useCases },
  { href: '#pour-qui', label: copy.nav.audience },
  { href: '#pourquoi', label: copy.nav.why },
  { href: '#faq', label: copy.nav.faq },
  { href: '#contact', label: copy.nav.cta },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 lg:py-16">
      <div className="page-shell flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <Logo className="h-8 w-auto" />
            <p className="text-sm font-semibold tracking-tight text-foreground">YVARS</p>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">{copy.footer.blurb}</p>
        </div>
        <nav aria-label="Pied de page" className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 cursor-pointer items-center text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="page-shell mt-8 flex items-center justify-between gap-4">
        <p className="text-xs text-muted">{copy.footer.copyright}</p>
        <a
          href="#top"
          className="cursor-pointer text-xs font-medium text-muted transition-colors duration-200 hover:text-foreground"
        >
          {copy.footer.top}
        </a>
      </div>
    </footer>
  );
}
