import { type FormEvent, type InputHTMLAttributes, useState } from 'react';
import { CONTACT_EMAIL } from '../copy';
import { useLocale } from '../lib/LocaleContext';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const { copy } = useLocale();
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const org = String(data.get('org') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    const body = [
      `${copy.contact.name} : ${name}`,
      `${copy.contact.email} : ${email}`,
      `${copy.contact.org} : ${org}`,
      '',
      message,
    ].join('\n');

    setStatus('sending');
    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(copy.contact.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    window.setTimeout(() => setStatus('sent'), 400);
  };

  const statusText =
    status === 'sending'
      ? copy.contact.sending
      : status === 'sent'
        ? copy.contact.sent
        : copy.contact.privacy;

  return (
    <section
      id="contact"
      className="reveal scroll-mt-28 border-t border-border bg-white py-20 lg:py-28"
    >
      <div className="page-shell grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow={copy.contact.eyebrow}
            title={copy.contact.title}
            subtitle={copy.contact.subtitle}
          />
          <ul className="mt-8 space-y-3">
            {copy.contact.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-foreground">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <form className="surface p-6 sm:p-8" onSubmit={onSubmit} noValidate={false}>
          <div className="space-y-4">
            <Field id="name" name="name" label={copy.contact.name} autoComplete="name" required />
            <Field
              id="email"
              name="email"
              type="email"
              label={copy.contact.email}
              autoComplete="email"
              inputMode="email"
              required
            />
            <Field
              id="org"
              name="org"
              label={copy.contact.org}
              autoComplete="organization"
              required
            />
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground">
                {copy.contact.message}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="input-field mt-1.5 min-h-32 resize-y"
              />
            </div>
          </div>
          <button type="submit" className="btn-primary mt-6 w-full" disabled={status === 'sending'}>
            {status === 'sending' ? copy.contact.sending : copy.contact.submit}
          </button>
          <p className="mt-3 text-xs leading-relaxed text-muted" aria-live="polite">
            {statusText}
          </p>
        </form>
      </div>
    </section>
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
