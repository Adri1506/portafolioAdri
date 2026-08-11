# Tasks: Section Headers (editorial numbering)

> Feature: `017-section-headers` | Spec: `spec.md`

---

## Tareas

- [ ] **T01** — Crear `src/components/molecules/SectionHeader.tsx`: `<div>` con `aria-label` (número + título). Interior: `<span>` número mono `text-mono-sm text-primary tracking-widest`, `<h2>` título `font-display text-h2 font-semibold text-foreground`, `<div>` underline `w-16 h-0.5 bg-gradient-to-r from-primary to-transparent` (o `--gradient-underline`). Gap entre elementos con `space-y-2`
  - Verifica: `REQ-001`, `REQ-002`, `REQ-005`
  - Archivos: `src/components/molecules/SectionHeader.tsx`
  - Dependencias: ninguna

- [ ] **T02** — Añadir scroll-reveal: envolver número/título/underline en `motion.div` con `initial={{ opacity: 0, y: 16 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true, margin: "-80px" }}`, `transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}`. Stagger: número (0ms), título (80ms), underline (160ms) usando `transition.delay`
  - Verifica: `REQ-003`
  - Archivos: `src/components/molecules/SectionHeader.tsx`
  - Dependencias: T01

- [ ] **T03** — Implementar reduced-motion: usar `useReducedMotion()` de Framer Motion. Si reduce, renderizar sin `motion.div` (div estático). Alternativa: `<div>` con clases condicionales
  - Verifica: `REQ-004`
  - Archivos: `src/components/molecules/SectionHeader.tsx`
  - Dependencias: T02

---

## Estado

| Tarea | Estado | Verificada por |
|-------|--------|----------------|
| T01 | ⬜ pendiente | — |
| T02 | ⬜ pendiente | — |
| T03 | ⬜ pendiente | — |

**Leyenda:**
- ⬜ pendiente
- 🔄 en progreso
- ✅ hecha (Doctor aprobó)
- ❌ rechazada (Doctor rechazó)
