import { ar } from './ar';
import { en } from './en';
import { fr } from './fr';
import type { Copy, Locale } from './types';
import { STORAGE_KEY } from './types';

export type { Copy, Locale, StoryBeatId } from './types';
export { LOCALES, LOCALE_LABELS, STORAGE_KEY } from './types';

export const dictionaries: Record<Locale, Copy> = { fr, en, ar };

export const CONTACT_EMAIL =
  import.meta.env.VITE_CONTACT_EMAIL?.trim() || 'contact@yvars.io';

export const PANEL_EMAIL =
  import.meta.env.VITE_PANEL_EMAIL?.trim() || CONTACT_EMAIL;

export function isLocale(value: string | null | undefined): value is Locale {
  return value === 'fr' || value === 'en' || value === 'ar';
}

export function detectLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    // private mode
  }

  const candidates = [
    ...(typeof navigator !== 'undefined' ? navigator.languages ?? [] : []),
    typeof navigator !== 'undefined' ? navigator.language : '',
  ];

  for (const tag of candidates) {
    if (tag.toLowerCase().startsWith('en')) return 'en';
  }

  return 'fr';
}

export function persistLocale(locale: Locale) {
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // private mode
  }
}

export function getCopy(locale: Locale): Copy {
  return dictionaries[locale];
}
