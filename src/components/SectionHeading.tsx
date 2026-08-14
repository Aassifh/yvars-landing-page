type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  tight?: boolean;
};

export default function SectionHeading({ eyebrow, title, subtitle, tight }: Props) {
  return (
    <header>
      <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">{eyebrow}</p>
      <h2
        className={`mt-3 font-semibold tracking-tight text-foreground ${
          tight
            ? 'text-[clamp(1.75rem,1.4vw+1rem,2.25rem)]'
            : 'max-w-3xl text-[clamp(1.75rem,1.6vw+1rem,2.5rem)]'
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{subtitle}</p>
      ) : null}
    </header>
  );
}
