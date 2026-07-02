# Tasks — Proyectos

## TASK-001: Crear tipos de proyecto
- Archivo: `src/types/index.ts`
- Interfaz Project con: id, title, description, image, tags, status, url, category

## TASK-002: Crear datos de proyectos
- Archivo: `src/lib/data/projects.ts`
- Array con todos los proyectos (priorizar los 3 en producción)

## TASK-003: Crear componente Badge
- Archivo: `src/components/atoms/Badge.tsx`
- Props: variant ("production" | "local"), children

## TASK-004: Crear componente Tag
- Archivo: `src/components/atoms/Tag.tsx`
- Props: label

## TASK-005: Crear componente ProjectCard
- Archivo: `src/components/molecules/ProjectCard.tsx`
- Props: project (tipo Project)
- Incluir hover effects

## TASK-006: Crear ProjectsGrid
- Archivo: `src/components/organisms/ProjectsGrid.tsx`
- Grid responsive con mapeo de proyectos

## TASK-007: Crear página /projects
- Archivo: `src/app/projects/page.tsx`
- Renderizar ProjectsGrid
