import { useEffect, useState } from 'react';
import { useLocale } from '../lib/LocaleContext';

export default function MobileCta() {
  const { copy } = useLocale();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const contact = document.getElementById('contact');
    if (!contact) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.18 },
    );
    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-border bg-white/90 p-3 backdrop-blur-md transition-[transform,opacity] duration-200 md:hidden motion-reduce:transition-none motion-reduce:translate-y-0 ${
        hidden ? 'pointer-events-none translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      <a href="#contact" className="btn-primary w-full">
        {copy.nav.cta}
      </a>
    </div>
  );
}
