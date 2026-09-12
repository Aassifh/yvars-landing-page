import { useEffect } from 'react';
import { useLocale } from '../lib/LocaleContext';
import { buildHomeJsonLd } from '../lib/seo';
import { isPanelPage } from '../lib/site';

export default function SeoJsonLd() {
  const { locale, copy } = useLocale();

  useEffect(() => {
    const id = 'yvars-jsonld';
    let script = document.getElementById(id) as HTMLScriptElement | null;

    if (isPanelPage()) {
      script?.remove();
      return;
    }

    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(buildHomeJsonLd(copy, locale));
  }, [copy, locale]);

  return null;
}
