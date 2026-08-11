import Image from "next/image";

/**
 * Portrait — retrato con marco técnico (design system F.11).
 * Fondo radial --gradient-sky detrás (REQ-009), 4 esquinas de registro
 * "+" en ámbar a 8px de las esquinas, caption mono (REQ-003).
 */
export default function Portrait() {
  return (
    <figure className="relative mx-auto max-w-[320px] lg:mx-0">
      {/* Glow radial --gradient-sky detrás del retrato */}
      <div
        aria-hidden="true"
        className="absolute -inset-8"
        style={{ background: "var(--gradient-sky)" }}
      />

      <div className="relative overflow-hidden rounded-sm border border-border">
        <Image
          src="/images/profile/photo.png"
          alt="Retrato de Adrián Zamorano"
          width={720}
          height={960}
          priority
          sizes="(max-width: 1024px) 90vw, 480px"
          className="aspect-[3/4] w-full object-cover"
        />
      </div>

      {/* Marco técnico: esquinas de registro (+) */}
      <Crosshair className="left-2 top-2" />
      <Crosshair className="right-2 top-2" />
      <Crosshair className="bottom-2 left-2" />
      <Crosshair className="bottom-2 right-2" />

      <figcaption className="relative mt-3 font-mono text-xs tracking-[0.06em] text-muted-foreground">
        fig. 01 — Adrián Zamorano · Santiago, Chile
      </figcaption>
    </figure>
  );
}

function Crosshair({ className }: { className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute flex h-3 w-3 items-center justify-center ${className}`}
    >
      <span className="absolute h-full w-px bg-primary" />
      <span className="absolute h-px w-full bg-primary" />
    </span>
  );
}
