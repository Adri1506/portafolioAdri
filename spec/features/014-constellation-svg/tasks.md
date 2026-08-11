# Tasks: Constellation SVG (full-page backdrop)

> Feature: `014-constellation-svg` | Spec: `spec.md`

---

## Tareas

- [x] **T01** — Crear `src/components/organisms/Constellation.tsx`: función `seededRandom(seed)` con LCG, generar array de `ConstellationNode` (70–90 nodos, 12% estrellas), generar array de `ConstellationLine` (distancia < 110, opacidad 0.05–0.14). SVG con `viewBox="0 0 1440 900"`, `preserveAspectRatio="xMidYMid slice"`. Nodos: `<circle cx cy r fill opacity>`. Estrellas: clase `.star`. Líneas: `<line x1 y1 x2 y2 stroke stroke-width opacity>`
  - Verifica: `REQ-001`, `REQ-002`, `REQ-003`, `REQ-004`
  - Archivos: `src/components/organisms/Constellation.tsx`
  - Dependencias: ninguna

- [x] **T02** — Añadir wrapper `<div class="constellation">` con estilos inline: `position: fixed; inset: 0; z-index: 0; pointer-events: none;`. Añadir `aria-hidden="true"` al div contenedor. Usar variables CSS del design system: `var(--constellation-node)`, `var(--constellation-line)`, `var(--constellation-star)`
  - Verifica: `REQ-005`
  - Archivos: `src/components/organisms/Constellation.tsx`
  - Dependencias: T01

- [x] **T03** — Añadir parallax: `motion.div` wrapper con `useScroll()` y `useTransform(scrollY, [0, 1000], [0, 60])`. Aplicar transform `translateY` al SVG. Solo en desktop (no en mobile para ahorrar CPU)
  - Verifica: `REQ-006`
  - Archivos: `src/components/organisms/Constellation.tsx`
  - Dependencias: T02

- [x] **T04** — Implementar reduced-motion: usar `useReducedMotion()` de Framer Motion. Si reduce, no aplicar parallax y añadir clase que desactive twinkle. Añadir `@media (prefers-reduced-motion: reduce)` para `.constellation .star { animation: none; }` en CSS del componente
  - Verifica: `REQ-007`
  - Archivos: `src/components/organisms/Constellation.tsx`
  - Dependencias: T03

- [x] **T05** — Integrar en `layout.tsx`: importar `Constellation`, renderizar antes del shell (sidebar + contenido). Verificar que aparece como backdrop detrás de todo el layout (z-0 vs z-10 del contenido)
  - Verifica: `REQ-008`
  - Archivos: `src/app/layout.tsx`
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
