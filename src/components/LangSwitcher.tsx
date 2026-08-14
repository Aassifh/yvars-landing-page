import { LOCALES, LOCALE_LABELS } from '../copy';
import { useLocale } from '../lib/LocaleContext';

type Props = {
  stacked?: boolean;
  onPick?: () => void;
};

export default function LangSwitcher({ stacked = false, onPick }: Props) {
  const { locale, copy, setLocale } = useLocale();

  return (
    <div
      role="group"
      aria-label={copy.a11y.languages}
      className={stacked ? 'flex flex-col gap-2' : 'flex items-center gap-1'}
    >
      {LOCALES.map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            lang={code}
            dir={code === 'ar' ? 'rtl' : 'ltr'}
            aria-pressed={active}
            onClick={() => {
              setLocale(code);
              onPick?.();
            }}
            className={`min-h-11 cursor-pointer rounded-lg px-2.5 text-xs font-semibold transition-colors duration-200 ${
              stacked ? 'w-full text-start' : ''
            } ${active ? 'bg-accent text-primary' : 'text-muted hover:text-foreground'}`}
          >
            {LOCALE_LABELS[code]}
          </button>
        );
      })}
    </div>
  );
}
