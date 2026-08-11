---
id: "017-section-headers"
title: "Section Headers (editorial numbering)"
status: draft
owner: "Developer"
created: "2026-08-11"
updated: "2026-08-11"
priority: medium
depends_on: ["012-design-system-core"]
touches_files:
  - "src/components/molecules/SectionHeader.tsx"
out_of_scope_files:
  - "src/app/globals.css"
  - "src/components/organisms/*.tsx"
---

# Spec: Section Headers (editorial numbering)

## 1. Intent (una frase, sin ambigüedad)

Crear un componente reutilizable `SectionHeader` con número mono ámbar, título Space Grotesk, subrayado gradiente y scroll-reveal en cascada.

## 2. Contexto necesario

- `spec/design/design-system.md` (sección F.6): especificación del header de sección editorial
- `spec/design/screens-and-flows.md`: todos los headers de sección usan este patrón (01.–05.)
- `spec/design/design-system.md` (sección C): motion tokens para reveal

## 3. Requisitos (EARS)

| ID | Tipo | Requisito |
|---|---|---|
| REQ-001 | Ubiquitous | El componente **shall** renderizar: número mono `0.875rem` `--primary` + título Space Grotesk `--text-h2` + subrayado `--gradient-underline` (4rem × 2px) |
| REQ-002 | Ubiquitous | El componente **shall** aceptar props: `number` (string, p. ej. "01."), `title` (string) |
| REQ-003 | Ubiquitous | El componente **shall** incluir scroll-reveal: número → título → underline en cascada (500ms, stagger 80ms) |
| REQ-004 | Event | When `prefers-reduced-motion: reduce`, el componente **shall** renderizar sin animación |
| REQ-005 | Ubiquitous | El componente **shall** usar `<div>` semántico con `aria-label` que combine número y título |

## 4. Contrato de interfaz (si aplica)

```typescript
interface SectionHeaderProps {
  number: string;    // "01.", "02.", etc.
  title: string;     // "Sobre Mí", "Proyectos", etc.
  className?: string;
}

export default function SectionHeader({ number, title, className }: SectionHeaderProps): JSX.Element
```

## 5. Límites explícitos (guardrails)

- No incluir contenido de sección — solo el header (número + título + underline)
- No hardcodear números — recibir por props
- No usar animaciones JavaScript pesadas — Framer Motion `whileInView` once
- No usar `text-white` — siempre `text-foreground` y `text-primary`

## 6. Plan de tareas (checklist atómico)

- [ ] T01: Crear `SectionHeader.tsx` con estructura (número + título + underline) → verifica: `REQ-001`, `REQ-002`, `REQ-005`
- [ ] T02: Añadir scroll-reveal en cascada con Framer Motion → verifica: `REQ-003`
- [ ] T03: Implementar reduced-motion → verifica: `REQ-004`

## 7. Cambios de dependencias / entorno

- Ninguno.

## 8. Criterios de verificación (lo que corre el Verifier)

```bash
npm run typecheck
npm run lint
```

- [ ] Componente renderiza número + título + underline gradiente
- [ ] Scroll-reveal funciona en cascada (número → título → underline)
- [ ] Reduced-motion desactiva animación
- [ ] Componente es reutilizable (accepts number y title por props)

## 9. Salida esperada al finalizar

- `SectionHeader.tsx`: ~40–50 líneas, componente reutilizable
- Listo para usar en secciones 02–06 del landing
