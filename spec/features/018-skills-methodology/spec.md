---
id: "018-skills-methodology"
title: "Skills & Methodology Sections"
status: draft
owner: "Developer"
created: "2026-08-11"
updated: "2026-08-11"
priority: medium
depends_on: ["017-section-headers"]
touches_files:
  - "src/components/organisms/SkillsSection.tsx"
  - "src/components/organisms/SDDMethodology.tsx"
out_of_scope_files:
  - "src/app/globals.css"
  - "src/components/molecules/SectionHeader.tsx"
---

# Spec: Skills & Methodology Sections

## 1. Intent (una frase, sin ambigüedad)

Reescribir las secciones Skills (lista plana sin cards) y Metodología SDD (diagrama de flujo numerado) usando el design system v2 y el componente SectionHeader.

## 2. Contexto necesario

- `spec/design/screens-and-flows.md` (secciones 6, 7): wireframes de Skills y Metodología
- `spec/design/design-system.md` (secciones F.8, F.9): skills listas planas y ciclo SDD
- `src/components/molecules/SectionHeader.tsx`: componente reutilizable (feature 017)

## 3. Requisitos (EARS)

| ID | Tipo | Requisito |
|---|---|---|
| REQ-001 | Ubiquitous | Skills **shall** renderizar categorías como heading mono `0.75rem` uppercase `--primary` |
| REQ-002 | Ubiquitous | Skills **shall** renderizar filas con `border-bottom: 1px var(--border)`, tech en mono `--text-sm`, nivel/uso en `--muted-foreground` |
| REQ-003 | Ubiquitous | Skills **shall** usar fondo `texture-dots` (sutil) |
| REQ-004 | Ubiquitous | Metodología **shall** renderizar 5 nodos en fila: `SPEC → PLAN → TASKS → IMPLEMENT → VERIFY` |
| REQ-005 | Ubiquitous | Cada nodo **shall** tener: número mono `--primary` + label mono uppercase + conector línea 1px `--border-strong` con chevron `→` mono ámbar |
| REQ-006 | Event | When viewport < md, Metodología **shall** renderizar nodos en vertical con conectores ↓ |
| REQ-007 | Ubiquitous | Ambas secciones **shall** usar SectionHeader con número editorial (03. Skills, 04. Metodología) |

## 4. Contrato de interfaz (si aplica)

```typescript
interface SkillCategory {
  name: string;        // "FRONTEND", "SDD & IA", "TOOLS", "DEPLOY"
  skills: Skill[];
}

interface Skill {
  name: string;        // "Next.js"
  level: string;       // "avanzado", "intermedio", "experto"
}

// SkillsSection
export default function SkillsSection(): JSX.Element

// SDDMethodology
export default function SDDMethodology(): JSX.Element
```

## 5. Límites explícitos (guardrails)

- No usar cards ni icon-tiles en Skills (regla anti-IA: patrón variado, no cards)
- No usar animaciones pesadas — solo scroll-reveal estándar
- No hardcodear datos de skills — usar arrays de constantes

## 6. Plan de tareas (checklist atómico)

- [ ] T01: Crear `SkillsSection.tsx` con SectionHeader `03.`, categorías, filas planas, texture-dots → verifica: `REQ-001`, `REQ-002`, `REQ-003`, `REQ-007`
- [ ] T02: Crear `SDDMethodology.tsx` con SectionHeader `04.`, 5 nodos, conectores, responsive vertical → verifica: `REQ-004`, `REQ-005`, `REQ-006`, `REQ-007`

## 7. Cambios de dependencias / entorno

- Ninguno.

## 8. Criterios de verificación (lo que corre el Verifier)

```bash
npm run typecheck
npm run lint
```

- [ ] Skills: 4 categorías con filas planas y borde inferior
- [ ] Skills: fondo texture-dots
- [ ] Metodología: 5 nodos horizontales con conectores
- [ ] Metodología: responsive vertical en mobile
- [ ] Ambas secciones usan SectionHeader

## 9. Salida esperada al finalizar

- `SkillsSection.tsx`: ~80 líneas, lista plana por categoría
- `SDDMethodology.tsx`: ~100 líneas, diagrama de flujo
- Ambas secciones estilizadas con design system v2
