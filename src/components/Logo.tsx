type Props = {
  className?: string;
};

export default function Logo({ className = 'h-7 w-auto' }: Props) {
  return (
    <img
      src="/logo.png"
      alt=""
      width={145}
      height={120}
      className={className}
      decoding="async"
    />
  );
}
