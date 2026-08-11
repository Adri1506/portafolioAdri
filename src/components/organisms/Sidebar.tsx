"use client";

import { useEffect, useState } from "react";
import DarkLightToggle from "@/components/molecules/DarkLightToggle";

const navLinks = [
  { number: "01", label: "SOBRE MÍ", href: "#sobre-mi" },
  { number: "02", label: "PROYECTOS", href: "#proyectos" },
  { number: "03", label: "HABILIDADES", href: "#skills" },
  { number: "04", label: "CONTACTO", href: "#contacto" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Email", href: "mailto:hola@adrianzamorano.dev" },
];

/**
 * Desktop-only (lg+) sidebar. Fixed, 300px (lg) / 320px (xl), full height.
 */
export default function Sidebar() {
  const [active, setActive] = useState<string>("");

  // Scroll-spy: mark the section currently in view as active
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.replace("#", "")))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="fixed top-0 left-0 z-40 hidden h-screen w-[300px] flex-col border-r border-border bg-background xl:w-[320px] lg:flex">
      <div className="flex h-full flex-col px-8 py-10">
        {/* Monogram */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Ir al inicio"
          className="flex w-fit cursor-pointer items-center gap-2"
        >
          <span className="font-display text-2xl font-bold tracking-tight text-foreground">
            AZ
          </span>
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-primary" />
        </button>

        {/* Nav */}
        <nav className="mt-16 flex flex-col gap-5">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNav(link.href)}
                aria-current={isActive ? "true" : undefined}
                className={`group flex cursor-pointer items-center gap-4 text-left font-mono text-mono-sm uppercase tracking-[0.06em] transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span
                  className={`transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground group-hover:text-primary"
                  }`}
                >
                  {link.number}.
                </span>
                <span className="link-underline">{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Bottom block */}
        <div className="mt-auto flex flex-col gap-8">
          {/* Status pill */}
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border-strong px-4 py-1.5">
            <span
              aria-hidden="true"
              className="h-2 w-2 animate-pulse rounded-full bg-success ring-2 ring-success/25"
            />
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-neutral-300">
              Disponible para proyectos
            </span>
          </span>

          {/* Socials */}
          <div className="flex flex-col gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex w-fit cursor-pointer items-center gap-1 font-mono text-mono-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="link-underline">{social.label}</span>
                <span
                  aria-hidden="true"
                  className="text-secondary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </a>
            ))}
          </div>

          <DarkLightToggle />
        </div>
      </div>
    </aside>
  );
}
