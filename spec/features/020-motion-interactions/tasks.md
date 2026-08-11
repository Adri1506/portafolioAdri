# Tasks: Motion & Interactions

> Feature: `020-motion-interactions` | Spec: `spec.md`

---

## Tareas

- [ ] **T01** — Crear `src/components/molecules/ScrollReveal.tsx`: componente genérico `"use client"` que envuelve `children` en `motion.div`. Props: `className`, `delay` (default 0), `direction` (default "up"). Config: `initial={{ opacity: 0, y: direction === "up" ? 24 : direction === "down" ? -24 : 0, x: direction === "left" ? 24 : direction === "right" ? -24 : 0 }}`, `whileInView={{ opacity: 1, y: 0, x: 0 }}`, `viewport={{ once: true, margin: "-80px" }}`, `transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay }}`. Usar `useReducedMotion()`: si reduce, renderizar `<div>` estático sin motion
  - Verifica: `REQ-001`, `REQ-002`, `REQ-003`
  - Archivos: `src/components/molecules/ScrollReveal.tsx`
  - Dependencias: ninguna

- [ ] **T02** — Verificar/añadir hover states en `globals.css` o crear utilidades: `.hover-lift` (`hover:-translate-y-1 hover:border-primary/40 transition-all duration-200`), `.link-underline` (ya existe en 012), `.hover-btn` (`hover:-translate-y-0.5 active:translate-y-0 transition-all duration-120`). Verificar que cards bento, links y botones existentes usan estas clases
  - Verifica: `REQ-004`, `REQ-005`, `REQ-006`, `REQ-007`
  - Archivos: `src/app/globals.css`
  - Dependencias: ninguna

---

## Estado

| Tarea | Estado | Verificada por |
|-------|--------|----------------|
| T01 | ⬜ pendiente | — |
| T02 | ⬜ pendiente | — |

**Leyenda:**
- ⬜ pendiente
- 🔄 en progreso
- ✅ hecha (Doctor aprobó)
- ❌ rechazada (Doctor rechazó)
