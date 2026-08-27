import { type FormEvent, type InputHTMLAttributes, useState } from 'react';
import { PANEL_EMAIL } from '../copy';
import { useLocale } from '../lib/LocaleContext';

export default function PanelForm() {
  const { copy } = useLocale();
  const p = copy.panel;
  const [status, setStatus] = useState<'idle' | 'error' | 'sending' | 'sent'>('idle');
  const [error, setError] = useState('');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const langs = data.getAll('languages').map(String);
    if (langs.length === 0) {
      setError(p.languagesRequired);
      setStatus('error');
      return;
    }
    if (!form.checkValidity()) {
      setError(p.consentRequired);
      setStatus('error');
      return;
    }

    const topics = data.getAll('topics').map(String);
    const body = [
      `${p.name} : ${String(data.get('name') ?? '').trim()}`,
      `${p.email} : ${String(data.get('email') ?? '').trim()}`,
      `${p.phone} : ${String(data.get('phone') ?? '').trim()}`,
      `${p.city} : ${String(data.get('city') ?? '').trim()}`,
      `${p.country} : ${String(data.get('country') ?? '').trim()}`,
      `${p.age} : ${String(data.get('age') ?? '').trim()}`,
      `${p.languages} : ${langs.join(', ')}`,
      `${p.occupation} : ${String(data.get('occupation') ?? '').trim()}`,
      `${p.topics} : ${topics.length ? topics.join(', ') : '-'}`,
      '',
      String(data.get('about') ?? '').trim(),
    ].join('\n');

    setError('');
    setStatus('sending');
    const href = `mailto:${PANEL_EMAIL}?subject=${encodeURIComponent(p.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    window.setTimeout(() => setStatus('sent'), 400);
  };

  const statusText =
    status === 'sending' ? p.sending : status === 'sent' ? p.sent : status === 'error' ? error : p.privacy;

  return (
    <form id="formulaire" className="surface scroll-mt-28 p-6 sm:p-8" onSubmit={onSubmit}>
      <h2 className="text-lg font-semibold tracking-tight text-foreground">{p.formTitle}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">{p.formLead}</p>
      <div className="mt-6 space-y-4">
        <Field id="panel-name" name="name" label={p.name} autoComplete="name" required />
        <Field
          id="panel-email"
          name="email"
          type="email"
          label={p.email}
          autoComplete="email"
          inputMode="email"
          required
        />
        <Field
          id="panel-phone"
          name="phone"
          type="tel"
          label={p.phone}
          autoComplete="tel"
          inputMode="tel"
          required
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <Field id="panel-city" name="city" label={p.city} autoComplete="address-level2" required />
          <Field id="panel-country" name="country" label={p.country} autoComplete="country-name" required />
        </div>
        <div>
          <label htmlFor="panel-age" className="block text-sm font-medium text-foreground">
            {p.age}
          </label>
          <select id="panel-age" name="age" required className="input-field mt-1.5">
            <option value="" />
            {p.ageOptions.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <fieldset>
          <legend className="text-sm font-medium text-foreground">{p.languages}</legend>
          <div className="mt-2 flex flex-col gap-2">
            {p.languageOptions.map((opt) => (
              <label key={opt.id} className="flex min-h-11 cursor-pointer items-center gap-3 text-sm">
                <input type="checkbox" name="languages" value={opt.id} className="size-4 accent-primary" />
                {opt.label}
              </label>
            ))}
          </div>
        </fieldset>
        <Field id="panel-occupation" name="occupation" label={p.occupation} autoComplete="organization-title" required />
        <fieldset>
          <legend className="text-sm font-medium text-foreground">{p.topics}</legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {p.topicOptions.map((opt) => (
              <label key={opt.id} className="flex min-h-11 cursor-pointer items-center gap-3 text-sm">
                <input type="checkbox" name="topics" value={opt.id} className="size-4 accent-primary" />
                {opt.label}
              </label>
            ))}
          </div>
        </fieldset>
        <div>
          <label htmlFor="panel-about" className="block text-sm font-medium text-foreground">
            {p.about}
          </label>
          <textarea id="panel-about" name="about" rows={4} className="input-field mt-1.5 min-h-24 resize-y" />
        </div>
        <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-foreground">
          <input type="checkbox" name="consent" required className="mt-1 size-4 shrink-0 accent-primary" />
          {p.consent}
        </label>
      </div>
      <button type="submit" className="btn-primary mt-6 w-full" disabled={status === 'sending'}>
        {status === 'sending' ? p.sending : p.submit}
      </button>
      <p className="mt-3 text-xs leading-relaxed text-muted" aria-live="polite">
        {statusText}
      </p>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  type = 'text',
  autoComplete,
  inputMode,
  required,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  inputMode?: InputHTMLAttributes<HTMLInputElement>['inputMode'];
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        inputMode={inputMode}
        required={required}
        className="input-field mt-1.5"
      />
    </div>
  );
}
