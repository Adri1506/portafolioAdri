interface BadgeProps {
  variant: "production" | "local";
  children: React.ReactNode;
}

export default function Badge({ variant, children }: BadgeProps) {
  const styles = {
    production: "bg-accent-soft text-cyan-700 border border-cyan-300",
    local: "bg-slate-200 text-slate-600 border border-slate-300",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium font-mono ${styles[variant]}`}
    >
      {variant === "production" && (
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
      )}
      {children}
    </span>
  );
}
