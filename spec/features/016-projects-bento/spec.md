---
id: "016-projects-bento"
title: "Projects Bento Grid"
status: draft
owner: "Developer"
created: "2026-08-11"
updated: "2026-08-11"
priority: high
depends_on: ["013-shell-layout"]
touches_files:
  - "src/components/organisms/ProjectsGrid.tsx"
  - "src/components/molecules/ProjectCard.tsx"
  - "src/components/molecules/Badge.tsx"
out_of_scope_files:
  - "src/app/globals.css"
  - "src/app/projects/[id]/page.tsx"
---

# Spec: Projects Bento Grid

## 1. Intent (una frase, sin ambigüedad)

Reescribir el grid de proyectos con layout bento asimétrico (Chambecas 7col featured, SebaTatto 5col, Tragaperras 5col) y tira compacta de "50+ proyectos locales".

## 2. Contexto necesario

- `spec/design/screens-and-flows.md` (sección 4): wireframe del bento
- `spec/design/design-system.md` (secciones F.4, F.5): badges/pills y card bento
- `spec/design/design-system.md` (sección D.3): grid bento 12-col
- Datos de proyectos existentes (Chambecas, SebaTatto, Tragaperras)

## 3. Requisitos (EARS)

| ID | Tipo | Requisito |
|---|---|---|
| REQ-001 | Ubiquitous | El grid **shall** usar `grid-cols-12` con Chambecas `col-span-7 row-span-2`, SebaTatto `col-span-5`, Tragaperras `col-span-5` |
| REQ-002 | Ubiquitous | Cada card **shall** tener: thumbnail (`aspect-ratio: 16/10`, featured 16/8), título Space Grotesk h3, descripción `--text-sm --muted-foreground`, tech pills, badge producción/local, link `VER CASO ↗` mono |
| REQ-003 | Ubiquitous | El hover de cada card **shall** aplicar `translateY(-4px)` + `border-color: rgba(251,191,36,0.4)` + thumbnail `scale(1.03)` interno |
| REQ-004 | Ubiquitous | El grid **shall** incluir tira "50+ proyectos locales" con pills compactas scrollables + link GitHub ↗ |
| REQ-005 | Ubiquitous | Cada card **shall** usar `<article>` con `<a>` stretch (whole card clickable via `::after`) |
| REQ-006 | Event | When viewport < lg, el grid **shall** renderizar en 1 columna apilada |
| REQ-007 | Ubiquitous | El grid **shall** usar `next/image` para thumbnails con `priority` en Chambecas (featured) |

## 4. Contrato de interfaz (si aplica)

```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;        // path relativo
  tech: string[];           // ["Next.js", "Tailwind", "Vercel"]
  status: "production" | "local";
  href: string;             // "/projects/chambecas"
  featured?: boolean;       // true = col-span-7 row-span-2
}

// ProjectCard
export default function ProjectCard({ project }: { project: Project }): JSX.Element

// Badge
export default function Badge({ variant }: { variant: "production" | "local" }): JSX.Element

// ProjectsGrid
export default function ProjectsGrid(): JSX.Element
```

## 5. Límites explícitos (guardrails)

- No usar sombras en cards (regla anti-IA: `default-card-shadow`)
- No usar `scale()` en la card completa — solo en el thumbnail interno (dentro de `overflow-hidden`)
- No usar cards anidadas — patrón plano
- No animar `box-shadow` — solo `transform` y `border-color`
- Thumbnail con `object-cover` y `overflow-hidden` en el contenedor

## 6. Plan de tareas (checklist atómico)

- [ ] T01: Crear `Badge.tsx` (producción: dot emerald + borde; local: mono muted + borde) → verifica: REQ badges design system
- [ ] T02: Crear `ProjectCard.tsx` con article + a stretch, thumbnail, contenido, pills, badge, hover states → verifica: `REQ-002`, `REQ-003`, `REQ-005`
- [ ] T03: Crear `ProjectsGrid.tsx` con grid 12-col, mapeo de proyectos (featured first), tira 50+ → verifica: `REQ-001`, `REQ-004`, `REQ-007`
- [ ] T04: Añadir responsive mobile (1 columna apilada) → verifica: `REQ-006`

## 7. Cambios de dependencias / entorno

- Ninguno.

## 8. Criterios de verificación (lo que corre el Verifier)

```bash
npm run typecheck
npm run lint
npm run build
```

- [ ] Bento renderiza 3 cards con dimensiones correctas (7/5/5)
- [ ] Chambecas ocupa 2 filas (row-span-2)
- [ ] Hover: translateY(-4px) + borde ámbar + thumbnail scale(1.03)
- [ ] Badge producción: dot emerald + borde
- [ ] Tira 50+ con pills scrollables
- [ ] Mobile: 1 columna apilada
- [ ] Cards son links clickeables completos

## 9. Salida esperada al finalizar

- `ProjectCard.tsx`: ~60 líneas, card bento reutilizable
- `Badge.tsx`: ~20 líneas, badge producción/local
- `ProjectsGrid.tsx`: ~80 líneas, grid bento + tira
- 3 proyectos en producción visibles con jerarquía correcta
