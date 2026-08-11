# Tasks: Projects Bento Grid

> Feature: `016-projects-bento` | Spec: `spec.md`

---

## Tareas

- [ ] **T01** — Crear `src/components/molecules/Badge.tsx`: variante `production` con dot 6px `bg-success` + pulse + texto mono `0.75rem` uppercase `EN PRODUCCIÓN` + borde `1px rgba(52,211,153,0.3)`. Variante `local` con texto mono `0.75rem` `text-muted-foreground` + borde `border-border`. Ambas: radius-full, padding `0.25rem 0.75rem`
  - Verifica: REQ badges design system
  - Archivos: `src/components/molecules/Badge.tsx`
  - Dependencias: ninguna

- [ ] **T02** — Crear `src/components/molecules/ProjectCard.tsx`: `<article>` con `<a>` stretch (`::after` overlay). Thumbnail: `next/image`, `aspect-ratio: 16/10` (featured 16/8), `object-cover`, `overflow-hidden`, wrapper con `scale(1.03)` en hover. Contenido: título `font-display text-h3`, descripción `text-sm text-muted-foreground`, tech pills (mono `0.75rem` border radius-full), Badge, link `VER CASO ↗` mono. Hover card: `translateY(-4px)` + `border-color: rgba(251,191,36,0.4)` 200ms. Sin sombra
  - Verifica: `REQ-002`, `REQ-003`, `REQ-005`
  - Archivos: `src/components/molecules/ProjectCard.tsx`
  - Dependencias: T01

- [ ] **T03** — Crear `src/components/organisms/ProjectsGrid.tsx`: `<section>` con `grid grid-cols-12 gap-6`. Datos hardcodeados: Chambecas (featured, col-span-7 row-span-2), SebaTatto (col-span-5), Tragaperras (col-span-5). Tira "50+ proyectos locales": fila completa, pills compactas (`e-commerce`, `landing`, `API`, `bot`, `dashboard`, `CLI`) con scroll horizontal + link `GitHub ↗`. Chambecas con `priority` en next/image
  - Verifica: `REQ-001`, `REQ-004`, `REQ-007`
  - Archivos: `src/components/organisms/ProjectsGrid.tsx`
  - Dependencias: T02

- [ ] **T04** — Añadir responsive: en `<lg`, grid cambia a `grid-cols-1`. Chambecas pierde row-span-2. Retrato pasa a `col-span-1`. Pills de tira mantienen scroll horizontal
  - Verifica: `REQ-006`
  - Archivos: `src/components/organisms/ProjectsGrid.tsx`
  - Dependencias: T03

---

## Estado

| Tarea | Estado | Verificada por |
|-------|--------|----------------|
| T01 | ⬜ pendiente | — |
| T02 | ⬜ pendiente | — |
| T03 | ⬜ pendiente | — |
| T04 | ⬜ pendiente | — |

**Leyenda:**
- ⬜ pendiente
- 🔄 en progreso
- ✅ hecha (Doctor aprobó)
- ❌ rechazada (Doctor rechazó)
