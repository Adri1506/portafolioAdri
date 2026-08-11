"use client";

import { Menu, X } from "lucide-react";
import DarkLightToggle from "@/components/molecules/DarkLightToggle";

export default function Topbar({
  onMenuToggle,
  isOpen,
}: {
  onMenuToggle: () => void;
  isOpen: boolean;
}) {
  return (
    <header className="glass-sticky fixed top-0 left-0 right-0 z-40 flex h-16 items-center justify-between px-4 lg:hidden">
      {/* Monogram */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Ir al inicio"
        className="flex cursor-pointer items-center gap-2"
      >
        <span className="font-display text-2xl font-bold tracking-tight text-foreground">
          AZ
        </span>
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-primary" />
      </button>

      <div className="flex items-center gap-1">
        <DarkLightToggle />
        <button
          type="button"
          onClick={onMenuToggle}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          className="cursor-pointer rounded-full p-2 text-foreground transition-colors hover:bg-neutral-800 light:hover:bg-neutral-200"
        >
          {isOpen ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>
      </div>
    </header>
  );
}
