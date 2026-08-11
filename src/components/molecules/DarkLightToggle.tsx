"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

/**
 * Dark/light toggle.
 * DARK is the default (no class on <html>); LIGHT adds the `.light` class.
 * Persists the choice in localStorage("theme") and falls back to
 * prefers-color-scheme when no explicit preference is stored.
 */
export default function DarkLightToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    // Initial theme resolution: stored preference → prefers-color-scheme → dark
    const stored = window.localStorage.getItem("theme");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const light = stored === "light" || (stored === null && prefersLight);
    root.classList.toggle("light", light);

    // Keep every mounted instance in sync (sidebar + topbar share the state)
    const sync = () => setIsLight(root.classList.contains("light"));
    sync();

    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const toggle = () => {
    const next = !isLight;
    const root = document.documentElement;
    root.classList.toggle("light", next);
    window.localStorage.setItem("theme", next ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? "Activar modo oscuro" : "Activar modo claro"}
      className="cursor-pointer rounded-full p-2 text-foreground transition-colors hover:bg-neutral-800 light:hover:bg-neutral-200"
    >
      {isLight ? (
        <Moon size={18} aria-hidden="true" />
      ) : (
        <Sun size={18} aria-hidden="true" />
      )}
    </button>
  );
}
