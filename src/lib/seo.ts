import type { Copy, Locale } from '../copy';
import { isPanelPage } from './site';

export const SITE_ORIGIN = 'https://yvars.io';
export const SITE_NAME = 'YVARS';

const OG_LOCALE: Record<Locale, string> = {
  fr: 'fr_FR',
  en: 'en_US',
  ar: 'ar_AR',
};

function ensureMeta(attr: 'name' | 'property', key: string): HTMLMetaElement {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  return el;
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  ensureMeta(attr, key).setAttribute('content', content);
}

export function syncDocumentMeta(locale: Locale, copy: Copy) {
  const panel = isPanelPage();
  const title = panel ? copy.panel.meta.title : copy.meta.title;
  const description = panel ? copy.panel.meta.description : copy.meta.description;
  const url = panel ? `${SITE_ORIGIN}/panel.html` : `${SITE_ORIGIN}/`;
  const image = `${SITE_ORIGIN}/og.png`;

  document.title = title;

  const root = document.documentElement;
  root.lang = locale;
  root.dir = locale === 'ar' ? 'rtl' : 'ltr';

  setMeta('name', 'description', description);
  setMeta('property', 'og:title', title);
  setMeta('property', 'og:description', description);
  setMeta('property', 'og:url', url);
  setMeta('property', 'og:locale', OG_LOCALE[locale]);
  setMeta('property', 'og:image', image);
  setMeta('property', 'og:site_name', SITE_NAME);
  setMeta('property', 'og:type', 'website');
  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', title);
  setMeta('name', 'twitter:description', description);
  setMeta('name', 'twitter:image', image);

  let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = url;
}

export function buildHomeJsonLd(copy: Copy, locale: Locale) {
  const organization = {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_ORIGIN,
    email: 'contact@yvars.io',
    description: copy.meta.description,
    areaServed: ['FR', 'MA'],
    knowsLanguage: ['fr', 'en', 'ar'],
  };

  const website = {
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_ORIGIN,
    inLanguage: locale,
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_ORIGIN },
  };

  const faq = {
    '@type': 'FAQPage',
    mainEntity: copy.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [organization, website, faq],
  };
}
