---
id: "020-motion-interactions"
title: "Motion & Interactions"
status: draft
owner: "Developer"
created: "2026-08-11"
updated: "2026-08-11"
priority: low
depends_on: ["012-design-system-core"]
touches_files:
  - "src/components/molecules/ScrollReveal.tsx"
  - "src/app/globals.css"
out_of_scope_files:
  - "src/components/organisms/Constellation.tsx"
  - "src/components/organisms/Hero.tsx"
---

# Spec: Motion & Interactions

## 1. Intent (una frase, sin ambigüedad)

Crear un componente `ScrollReveal` reutilizable con Framer Motion, implementar reduced-motion global y definir hover states para cards, links y botones.

## 2. Contexto necesario

- `spec/design/design-system.md` (sección C): motion tokens, patrones, reglas de rendimiento
- `src/app/globals.css` (feature 012): ya incluye `prefers-reduced-motion: reduce`
- Componentes que usarán ScrollReveal: Hero, SectionHeader, ProjectsGrid, SkillsSection, etc.

## 3. Requisitos (EARS)

| ID | Tipo | Requisito |
|---|---|---|
| REQ-001 | Ubiquitous | ScrollReveal **shall** animar `opacity` (0→1) y `translateY` (24px→0) con duración 650ms y easing expo |
| REQ-002 | Ubiquitous | ScrollReveal **shall** ejecutar animación una sola vez (`viewport: { once: true }`) |
| REQ-003 | Event | When `prefers-reduced-motion: reduce`, ScrollReveal **shall** renderizar sin animación (visible por defecto) |
| REQ-004 | Ubiquitous | Hover de cards **shall** usar `translateY(-4px)` + `border-color` (no sombra, no scale completo) |
| REQ-005 | Ubiquitous | Hover de links **shall** usar underline draw (`background-size` 0→100%) |
| REQ-006 | Ubiquitous | Hover de botones **shall** usar `background-color` + `translateY(-2px)` |
| REQ-007 | Ubiquitous | Press de botones **shall** usar `translateY(0)` (feedback táctil) |

## 4. Contrato de interfaz (si aplica)

```typescript
interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;          // default: 0
  direction?: "up" | "down" | "left" | "right";  // default: "up"
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up"
}: ScrollRevealProps): JSX.Element
```

## 5. Límites explícitos (guardrails)

- No animar `width`, `height`, `box-shadow`, `background-position` en loops
- No usar bounce/elastic easing — solo `--ease-expo`
- No añadir dependencias npm nuevas
- No hacer overrides de `prefers-reduced-motion` en componentes individuales

## 6. Plan de tareas (checklist atómico)

- [ ] T01: Crear `ScrollReveal.tsx` con Framer Motion → verifica: `REQ-001`, `REQ-002`, `REQ-003`
- [ ] T02: Verificar/añadir hover states en globals.css (cards, links, botones) → verifica: `REQ-004`, `REQ-005`, `REQ-006`, `REQ-007`

## 7. Cambios de dependencias / entorno

- Ninguno. Framer Motion ya instalado.

## 8. Criterios de verificación (lo que corre el Verifier)

```bash
npm run typecheck
npm run lint
```

- [ ] ScrollReveal anima opacity + translateY en scroll
- [ ] Animación ejecuta una sola vez
- [ ] Reduced-motion desactiva animación
- [ ] Hover cards: translateY(-4px) + border-color
- [ ] Hover links: underline draw
- [ ] Hover botones: translateY(-2px)

## 9. Salida esperada al finalizar

- `ScrollReveal.tsx`: ~30–40 líneas, componente reutilizable
- Verificación de hover states en CSS existente
