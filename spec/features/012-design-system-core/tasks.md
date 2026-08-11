# Tasks: Design System Core (globals.css)

> Feature: `012-design-system-core` | Spec: `spec.md`

---

## Tareas

- [x] **T01** — Reemplazar bloque `@theme inline` completo con tokens del design system v2: fuentes (4 familias), tokens semánticos, escalas crudas (neutral/ámbar/acero), motion tokens, espaciado, radios, sombras
  - Verifica: `REQ-009`
  - Archivos: `src/app/globals.css`
  - Dependencias: ninguna

- [x] **T02** — Añadir bloque `:root` con tokens semánticos dark-first: `--background`, `--foreground`, `--card`, `--muted`, `--border`, `--primary`, `--secondary`, `--success`, `--danger`, `--info`, constellation tokens, gradientes, `color-scheme: dark`
  - Verifica: `REQ-001`, `REQ-003`
  - Archivos: `src/app/globals.css`
  - Dependencias: T01

- [x] **T03** — Añadir bloque `.light` con tokens semánticos light: fondo `#F5F7FA`, texto `#0A1929`, primary `#B45309`, secondary `#2A5C94`, gradientes light, constellation light, `color-scheme: light`
  - Verifica: `REQ-002`
  - Archivos: `src/app/globals.css`
  - Dependencias: T02

- [x] **T04** — Añadir escalas crudas en `@theme inline`: neutral 50–950, ámbar 50–950, acero azul 50–950 (hex values from design system B.3–B.5)
  - Verifica: `REQ-004`
  - Archivos: `src/app/globals.css`
  - Dependencias: T01

- [x] **T05** — Añadir motion tokens (`--duration-micro/fast/standard/slow/reveal`, `--ease-expo/quart/standard`) y gradientes (`--gradient-brand/underline/sky/abyss/section`) en `:root` y `.light`
  - Verifica: `REQ-005`, `REQ-006`
  - Archivos: `src/app/globals.css`
  - Dependencias: T02, T03

- [x] **T06** — Añadir utilidades CSS: `.constellation` (fixed, z-0, pointer-events none), `@keyframes twinkle`, `.constellation .star`, `.texture-dots` (radial-gradient), `.glass-sticky` (color-mix + blur), `.link-underline` (background-size transition)
  - Verifica: `REQ-007`
  - Archivos: `src/app/globals.css`
  - Dependencias: T02

- [x] **T07** — Añadir `@custom-variant light (&:where(.light, .light *))` y `@media (prefers-reduced-motion: reduce)` que desactive animaciones, transiciones y scroll-behavior
  - Verifica: `REQ-008`, `REQ-010`
  - Archivos: `src/app/globals.css`
  - Dependencias: T06

- [x] **T08** — Añadir Instrument Serif a `layout.tsx` con `next/font/google`, subset `latin-ext`, `display: swap`, variable `--font-instrument-serif`. Añadir `.instrument-serif.variable` al `<html>` className
  - Verifica: REQ tipografía design system
  - Archivos: `src/app/layout.tsx`
  - Dependencias: ninguna

---

## Estado

| Tarea | Estado | Verificada por |
|-------|--------|----------------|
| T01 | ✅ hecha | Doctor |
| T02 | ✅ hecha | Doctor |
| T03 | ✅ hecha | Doctor |
| T04 | ✅ hecha | Doctor |
| T05 | ✅ hecha | Doctor |
| T06 | ✅ hecha | Doctor |
| T07 | ✅ hecha | Doctor |
| T08 | ✅ hecha | Doctor |

**Leyenda:**
- ⬜ pendiente
- 🔄 en progreso
- ✅ hecha (Doctor aprobó)
- ❌ rechazada (Doctor rechazó)
