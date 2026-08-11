interface BadgeProps {
  variant: "production" | "local";
}

/**
 * Badge de estado de proyecto (design system F.4).
 * - production: dot emerald + mono uppercase + borde success/30
 * - local: mono muted-foreground + borde border
 */
export default function Badge({ variant }: BadgeProps) {
  if (variant === "production") {
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-success/30 px-2.5 py-0.5 font-mono text-xs uppercase tracking-wider text-success">
        <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
        En producción
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border px-2.5 py-0.5 font-mono text-xs uppercase tracking-wider text-muted-foreground">
      Local
    </span>
  );
}
