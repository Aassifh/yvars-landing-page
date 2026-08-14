import { type FormEvent, type InputHTMLAttributes, useState } from 'react';
import { copy, CONTACT_EMAIL } from '../copy/fr';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const org = String(data.get('org') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    const body = [`Nom : ${name}`, `Email : ${email}`, `Organisation : ${org}`, '', message].join(
      '\n',
    );

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
    <section id="contact" className="reveal scroll-mt-28 py-16 lg:py-24 xl:py-32">
      <div className="page-shell grid gap-12 lg:grid-cols-2 xl:gap-20">
        <div>
          <p className="text-sm font-semibold tracking-wide text-primary">{copy.contact.eyebrow}</p>
          <h2 className="mt-3 text-[clamp(1.75rem,2.4vw+1rem,3rem)] font-semibold tracking-tight text-foreground">
            {copy.contact.title}
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
            {copy.contact.subtitle}
          </p>
          <ul className="mt-8 space-y-3">
            {copy.contact.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-foreground">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <form
          className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
          onSubmit={onSubmit}
          noValidate={false}
        >
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
