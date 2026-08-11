"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import CTAButton from "@/components/atoms/CTAButton";
import StatusPill from "@/components/molecules/StatusPill";
import GeometricNetworkBackground from "@/components/molecules/GeometricNetworkBackground";

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface StatItem {
  value: string;
  label: string;
}

const STATS: StatItem[] = [
  { value: "50+", label: "proyectos construidos" },
  { value: "4", label: "en producción" },
  { value: "2", label: "años con SDD + IA" },
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/adrian-zamorano" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/adrian-zamorano" },
  { label: "Email", href: "mailto:hola@adrianzamorano.dev" },
];

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: EASE_EXPO }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      role="banner"
      className="relative flex min-h-screen items-center overflow-hidden scroll-mt-0"
      style={{ background: "var(--gradient-sky)" }}
    >
      {/* Animación geométrica de fondo */}
      <GeometricNetworkBackground opacity={0.7} />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-16 lg:px-12 lg:py-24">
        {/* Grid asimétrico 7/5 */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          {/* Columna izquierda — 7/12 */}
          <div className="flex flex-col gap-6 lg:col-span-7 lg:gap-8">
            <Reveal>
              <StatusPill />
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="font-serif text-hero italic leading-[1.02] tracking-[-0.01em] text-foreground">
                Adrián
                <span className="block font-display text-h1 font-bold not-italic leading-[1.05] tracking-[-0.02em]">
                  Zamorano
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="font-mono text-tagline font-medium uppercase tracking-[0.08em] text-primary">
                Ingeniero en Informática
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="max-w-[68ch] text-lg text-muted-foreground">
                Ingeniero en Informática: escribo primero la especificación,
                luego el código que la cumple. Con Spec-Driven Development e IA
                generativa, convierto ideas en productos web precisos y listos
                para producción.
              </p>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <CTAButton href="/projects" variant="primary">
                  Ver proyectos ↗
                </CTAButton>
                <CTAButton href="/contact" variant="outline">
                  Contactar
                </CTAButton>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {SOCIALS.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline font-mono text-sm text-muted-foreground hover:text-foreground"
                    >
                      {social.label} <span className="text-secondary">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Columna derecha — 5/12 (espacio para la animación) */}
          <div className="hidden lg:block lg:col-span-5" />
        </div>

        {/* Stats planas — full width */}
        <Reveal delay={0.24} className="mt-16 lg:mt-24">
          <div className="grid grid-cols-1 gap-6 border-b border-border pb-8 sm:grid-cols-3 sm:gap-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-h3 font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
