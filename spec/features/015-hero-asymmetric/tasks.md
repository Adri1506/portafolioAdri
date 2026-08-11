# Tasks: Hero Asymmetric (7/5)

> Feature: `015-hero-asymmetric` | Spec: `spec.md`

---

## Tareas

- [x] **T01** — Crear `src/components/molecules/StatusPill.tsx`: div con dot 8px `bg-success` + ring 2px `rgba(52,211,153,0.25)` + pulse animation + texto mono `0.75rem` uppercase `● Disponible para proyectos`. Border `1px border-border-strong`, radius-full, padding `0.375rem 1rem`
  - Verifica: `REQ-002`
  - Archivos: `src/components/molecules/StatusPill.tsx`
  - Dependencias: ninguna

- [x] **T02** — Crear `src/components/molecules/Portrait.tsx`: wrapper con `gradient-sky` radial detrás, `next/image` de `imagenes/Yo.png` con `aspect-ratio: 3/4`, `object-cover`, borde `1px border-border`. Marco crosshair: 4 esquinas con `+` ámbar a 8px de las esquinas (position absolute, mono). Caption mono `fig. 01 — Adrián Zamorano · Valparaíso, Chile 🇨🇱` debajo
  - Verifica: `REQ-003`, `REQ-009`
  - Archivos: `src/components/molecules/Portrait.tsx`
  - Dependencias: ninguna

- [x] **T03** — Reescribir `src/components/organisms/Hero.tsx`: eliminar ParticleNetwork, usar `grid grid-cols-12 gap-8`. Columna izquierda (col-span-7): StatusPill, nombre `Adrián` en `font-serif text-hero italic` + `Zamorano` en `font-display text-h1 font-bold`, tagline mono uppercase `--text-tagline`, intro 2 frases `--muted-foreground`, CTAs (CTAButton primary + secondary), socials mono con `link-underline`, stats planas (3 filas con `border-b border-border`). Columna derecha (col-span-5): Portrait. Usar `--gradient-sky` como bg del hero
  - Verifica: `REQ-001`, `REQ-002`, `REQ-004`, `REQ-005`, `REQ-006`, `REQ-007`
  - Archivos: `src/components/organisms/Hero.tsx`
  - Dependencias: T01, T02

- [x] **T04** — Añadir responsive mobile: en `<lg`, grid cambia a `grid-cols-1` (1 columna apilada). Orden: pill → nombre → tagline → intro → CTAs → retrato → stats. Retrato pasa a `col-span-1` con `aspect-ratio: 16/10` (o mantener 3/4)
  - Verifica: `REQ-008`
  - Archivos: `src/components/organisms/Hero.tsx`
  - Dependencias: T03

- [x] **T05** — Añadir scroll-reveal: `motion.div` con `initial={{ opacity: 0, y: 24 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true, margin: "-80px" }}`, `transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}`. Stagger 80ms entre elementos hijos. Respeta `useReducedMotion()`
  - Verifica: REQ motion design system
  - Archivos: `src/components/organisms/Hero.tsx`
  - Dependencias: T04

---

## Estado

| Tarea | Estado | Verificada por |
|-------|--------|----------------|
| T01 | ✅ hecha | Doctor |
| T02 | ✅ hecha | Doctor |
| T03 | ✅ hecha | Doctor |
| T04 | ✅ hecha | Doctor |
| T05 | ✅ hecha | Doctor |

**Leyenda:**
- ⬜ pendiente
- 🔄 en progreso
- ✅ hecha (Doctor aprobó)
- ❌ rechazada (Doctor rechazó)
