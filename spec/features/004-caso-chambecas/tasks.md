# Tasks — Caso Chambecas

## TASK-001: Crear componente SDDCycle
- Archivo: `src/components/molecules/SDDCycle.tsx`
- Diagrama visual: Spec → Plan → Tasks → Implement → Verify
- Diseño horizontal en desktop, vertical en mobile

## TASK-002: Crear componente CaseStudy
- Archivo: `src/components/organisms/CaseStudy.tsx`
- Props: project (tipo Project)
- Layout asimétrico, breadcrumb, screenshot

## TASK-003: Crear página dinámica /projects/[id]
- Archivo: `src/app/projects/[id]/page.tsx`
- generateStaticParams para pre-renderizar proyectos
- Buscar proyecto por id y renderizar CaseStudy

## TASK-004: Verificar navegación desde /projects
- Click en card navega a /projects/[id]
- Breadcrumb vuelve a /projects
