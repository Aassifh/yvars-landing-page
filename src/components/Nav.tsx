import { useEffect, useId, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { copy } from '../copy/fr';
import { useActiveSection } from '../lib/useActiveSection';
import Logo from './Logo';

const links = [
  { href: '#produit', id: 'produit', label: copy.nav.product },
  { href: '#cas-usage', id: 'cas-usage', label: copy.nav.useCases },
  { href: '#pour-qui', id: 'pour-qui', label: copy.nav.audience },
  { href: '#pourquoi', id: 'pourquoi', label: copy.nav.why },
  { href: '#faq', id: 'faq', label: copy.nav.faq },
] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 pt-3 sm:pt-4">
      <div
        className={`page-shell pointer-events-auto flex items-center justify-between gap-4 rounded-2xl border border-border bg-white/80 px-3 backdrop-blur-md transition-[padding,box-shadow] duration-200 sm:px-4 ${
          scrolled ? 'py-2.5 shadow-sm' : 'py-3'
        }`}
      >
        <a
          href="#top"
          className="flex shrink-0 cursor-pointer items-center gap-2.5"
          aria-label="YVARS, haut de page"
        >
          <Logo />
          <span className="flex items-baseline gap-2">
            <span className="text-sm font-semibold tracking-tight text-foreground">YVARS</span>
            <span className="hidden text-xs font-medium text-muted sm:inline">Research</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Sections">
          {links.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'location' : undefined}
                className={`cursor-pointer rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'bg-accent text-primary' : 'text-muted hover:text-foreground'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-primary hidden lg:inline-flex">
            {copy.nav.cta}
          </a>
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors duration-200 hover:bg-accent lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
            <span className="sr-only">{open ? copy.nav.closeMenu : copy.nav.openMenu}</span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id={menuId}
          className="page-shell pointer-events-auto mt-2 rounded-2xl border border-border bg-white/95 p-3 shadow-sm backdrop-blur-md lg:hidden"
        >
          <nav className="flex flex-col gap-2" aria-label="Sections mobile">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="min-h-11 cursor-pointer rounded-xl px-3 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-accent hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary mt-1 w-full" onClick={() => setOpen(false)}>
              {copy.nav.cta}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
