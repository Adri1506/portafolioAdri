import Link from "next/link";

interface CTAButtonProps {
  href: string;
  variant: "primary" | "outline";
  children: React.ReactNode;
}

const base =
  "inline-flex min-h-12 items-center justify-center rounded-sm px-7 py-3.5 font-mono text-[0.8125rem] uppercase tracking-[0.08em] transition-all duration-[200ms] ease-[cubic-bezier(0.16,1,0.3,1)]";

const variants = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-hover hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "border border-border-strong bg-transparent text-foreground hover:border-primary hover:text-primary",
};

export default function CTAButton({ href, variant, children }: CTAButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
