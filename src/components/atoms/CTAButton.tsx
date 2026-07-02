import Link from "next/link";

interface CTAButtonProps {
  href: string;
  variant: "primary" | "outline";
  children: React.ReactNode;
}

export default function CTAButton({ href, variant, children }: CTAButtonProps) {
  const styles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-500 shadow-md hover:shadow-lg",
    outline:
      "border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50",
  };

  return (
    <Link
      href={href}
      className={`inline-block px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
