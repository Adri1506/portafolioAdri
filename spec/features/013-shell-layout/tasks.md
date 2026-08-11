# Tasks: Shell Layout (sidebar + content area)

> Feature: `013-shell-layout` | Spec: `spec.md`

---

## Tareas

- [x] **T01** — Crear `src/components/molecules/DarkLightToggle.tsx`: botón sol/luna que togglea clase `.light` en `<html>`, persiste en `localStorage('theme')`, lee `prefers-color-scheme` al cargar, usa iconos `Sun`/`Moon` de lucide-react
  - Verifica: `REQ-004`, `REQ-005`
  - Archivos: `src/components/molecules/DarkLightToggle.tsx`
  - Dependencias: ninguna

- [x] **T02** — Crear `src/components/organisms/Sidebar.tsx`: componente `"use client"`, sticky `top-0 h-screen`, monograma `AZ.` (Space Grotesk 700, punto ámbar), nav mono numerado (`01. Sobre Mí`...`05. Contacto`), status pill `● Disponible para proyectos` (dot emerald + pulse), sociales mono con `↗`, DarkLightToggle abajo. Clases: `hidden lg:flex`, width 300/320, `border-r border-border`, `glass-sticky`
  - Verifica: `REQ-001`, `REQ-006`, `REQ-007`, `REQ-008`
  - Archivos: `src/components/organisms/Sidebar.tsx`
  - Dependencias: T01

- [x] **T03** — Crear `src/components/organisms/Topbar.tsx`: componente `"use client"`, fixed top-0, 64px height, `glass-sticky`, monograma `AZ.` izquierda, botón hamburguesa derecha (2 líneas → ✕), DarkLightToggle. Solo visible `<lg` via `lg:hidden`
  - Verifica: `REQ-002`, `REQ-004`
  - Archivos: `src/components/organisms/Topbar.tsx`
  - Dependencias: T01

- [x] **T04** — Crear `src/components/organisms/MobileMenu.tsx`: overlay full-screen `fixed inset-0 z-50`, fondo `#060B14` sólido, botón ✕ arriba, links Space Grotesk `2rem` numerados, status pill, sociales. Animación `opacity + translateX` 300ms. Bloquea body scroll via `overflow-hidden` en `<body>`
  - Verifica: `REQ-003`, `REQ-006`, `REQ-010`
  - Archivos: `src/components/organisms/MobileMenu.tsx`
  - Dependencias: T03

- [x] **T05** — Reestructurar `src/app/layout.tsx`: eliminar import de `Header`, añadir imports de `Sidebar` + `Topbar` + `MobileMenu`. Shell: `flex` con sidebar `hidden lg:flex` + `div flex-1` que contiene `Topbar` + `main`. Añadir Instrument Serif font (de T08 en 012 si está listo, o con placeholder). Añadir `suppressHydrationWarning` en `<html>` para dark mode
  - Verifica: `REQ-001`, `REQ-002`, `REQ-009`
  - Archivos: `src/app/layout.tsx`
  - Dependencias: T02, T03, T04

---

## Estado

| Tarea | Estado | Verificada por |
|-------|--------|----------------|
| T01 | ✅ hecha | Doctor (2026-08-11) |
| T02 | ✅ hecha | Doctor (2026-08-11) |
| T03 | ✅ hecha | Doctor (2026-08-11) |
| T04 | ✅ hecha | Doctor (2026-08-11) |
| T05 | ✅ hecha | Doctor (2026-08-11) |

**Leyenda:**
- ⬜ pendiente
- 🔄 en progreso
- ✅ hecha (Doctor aprobó)
- ❌ rechazada (Doctor rechazó)
