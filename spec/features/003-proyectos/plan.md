# Plan — Proyectos

## Componentes
- `src/components/organisms/ProjectsGrid.tsx` — Grid completo
- `src/components/molecules/ProjectCard.tsx` — Card individual
- `src/components/atoms/Badge.tsx` — Badge reutilizable (producción/local)
- `src/components/atoms/Tag.tsx` — Tag de stack

## Datos
- `src/lib/data/projects.ts` — Array de todos los proyectos

## Flujo
1. Página /projects renderiza ProjectsGrid
2. ProjectsGrid mapea projects array a ProjectCards
3. ProjectCard muestra badge según `project.status`

## Patrones
- Grid layout con Tailwind grid
- Dynamic routing a /projects/[id]
