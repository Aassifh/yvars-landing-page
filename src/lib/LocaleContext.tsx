import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import {
  detectLocale,
  getCopy,
  persistLocale,
  type Copy,
  type Locale,
} from '../copy';
import { isPanelPage } from './site';

type LocaleContextValue = {
  locale: Locale;
  copy: Copy;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => detectLocale());
  const copy = useMemo(() => getCopy(locale), [locale]);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    root.dir = locale === 'ar' ? 'rtl' : 'ltr';
    document.title = isPanelPage() ? copy.panel.meta.title : copy.meta.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        isPanelPage() ? copy.panel.meta.description : copy.meta.description,
      );
    }
  }, [locale, copy]);

  const setLocale = (next: Locale) => {
    persistLocale(next);
    setLocaleState(next);
  };

  return (
    <LocaleContext.Provider value={{ locale, copy, setLocale }}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const value = useContext(LocaleContext);
  if (!value) {
    throw new Error('useLocale must be used within LocaleProvider');
  }
  return value;
}
