# Tasks: Skills & Methodology Sections

> Feature: `018-skills-methodology` | Spec: `spec.md`

---

## Tareas

- [ ] **T01** — Crear `src/components/organisms/SkillsSection.tsx`: `<section>` con SectionHeader `number="03." title="Habilidades"`, fondo `texture-dots`. Datos: 4 categorías (FRONTEND, SDD & IA, TOOLS, DEPLOY) con skills array. Cada categoría: heading mono `text-mono-sm text-primary uppercase tracking-widest mb-4`. Cada skill: fila `flex justify-between py-2 border-b border-border` con nombre `font-mono text-sm text-foreground` + nivel `text-sm text-muted-foreground`. Grid 2 col en desktop (`grid grid-cols-1 md:grid-cols-2 gap-8`)
  - Verifica: `REQ-001`, `REQ-002`, `REQ-003`, `REQ-007`
  - Archivos: `src/components/organisms/SkillsSection.tsx`
  - Dependencias: ninguna

- [ ] **T02** — Crear `src/components/organisms/SDDMethodology.tsx`: `<section>` con SectionHeader `number="04." title="Metodología SDD"`, tagline mono `text-mono-sm text-primary`. Diagrama: 5 nodos en fila `flex items-center gap-4`. Cada nodo: div `border border-border rounded-md p-4 text-center` con número mono `text-primary` + label mono uppercase. Conectores: `<span>` con `→` mono ámbar `text-primary`. Responsive: `flex-col md:flex-row` con conectores `↓` en mobile. Añadir descripción + beneficios (checkmarks)
  - Verifica: `REQ-004`, `REQ-005`, `REQ-006`, `REQ-007`
  - Archivos: `src/components/organisms/SDDMethodology.tsx`
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
