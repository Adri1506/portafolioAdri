/**
 * StatusPill — "● Disponible para proyectos"
 * Reutilizable en sidebar y hero (design system F.3).
 */
export default function StatusPill() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-1.5">
      <span
        aria-hidden="true"
        className="inline-block h-2 w-2 animate-pulse rounded-full bg-success ring-2 ring-success/25"
      />
      <span className="font-mono text-xs uppercase tracking-[0.08em] text-neutral-300">
        Disponible para proyectos
      </span>
    </span>
  );
}
