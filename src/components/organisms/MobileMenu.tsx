"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

const navLinks = [
  { number: "01", label: "Sobre Mí", href: "#sobre-mi" },
  { number: "02", label: "Proyectos", href: "#proyectos" },
  { number: "03", label: "Habilidades", href: "#skills" },
  { number: "04", label: "Metodología", href: "#metodologia" },
  { number: "05", label: "Contacto", href: "#contacto" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Email", href: "mailto:hola@adrianzamorano.dev" },
];

/**
 * Mobile-only (<lg) full-screen overlay menu. Solid #060B14 panel, always
 * mounted so the open/close transition plays; inert + pointer-events-none
 * when closed.
 */
export default function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  // Block body scroll while the menu is open (REQ-010)
  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  // Close if the viewport grows to desktop (menu is lg:hidden there)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) onClose();
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [onClose]);

  const handleNav = (href: string) => {
    onClose();
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      aria-hidden={!isOpen}
      inert={!isOpen}
      className={`fixed inset-0 z-50 flex flex-col bg-[#060B14] px-8 py-8 transition-all duration-standard ease-expo lg:hidden ${
        isOpen
          ? "translate-x-0 opacity-100"
          : "pointer-events-none translate-x-full opacity-0"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold tracking-tight text-neutral-50">
            AZ
          </span>
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-primary" />
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar menú"
          className="cursor-pointer rounded-full p-2 text-neutral-50 transition-colors hover:bg-neutral-800"
        >
          <X size={24} aria-hidden="true" />
        </button>
      </div>

      <nav className="mt-16 flex flex-col gap-6">
        {navLinks.map((link) => (
          <button
            key={link.href}
            type="button"
            onClick={() => handleNav(link.href)}
            className="flex cursor-pointer items-baseline gap-4 text-left"
          >
            <span className="font-mono text-sm text-amber-400">
              {link.number}.
            </span>
            <span className="font-display text-[2rem] font-medium leading-tight text-neutral-50">
              {link.label}
            </span>
          </button>
        ))}
      </nav>

      <div className="mt-auto flex flex-col items-center gap-8">
        {/* Status pill */}
        <span className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-1.5">
          <span
            aria-hidden="true"
            className="h-2 w-2 animate-pulse rounded-full bg-success ring-2 ring-success/25"
          />
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-neutral-200">
            Disponible para proyectos
          </span>
        </span>

        {/* Socials */}
        <div className="flex items-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex cursor-pointer items-center gap-1 font-mono text-sm text-neutral-200 transition-colors hover:text-neutral-50"
            >
              {social.label}
              <span aria-hidden="true" className="text-steel-300">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
