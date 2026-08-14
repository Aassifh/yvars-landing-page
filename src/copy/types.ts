import { fr } from './fr';

type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly (infer U)[]
        ? readonly Widen<U>[]
        : T extends object
          ? { [K in keyof T]: Widen<T[K]> }
          : T;

export type Locale = 'fr' | 'en' | 'ar';
export type Copy = Widen<typeof fr>;
export type StoryBeatId = (typeof fr.story.beats)[number]['id'];

export const LOCALES: readonly Locale[] = ['fr', 'en', 'ar'];
export const LOCALE_LABELS: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  ar: 'العربية',
};
export const STORAGE_KEY = 'yvars-lang';
