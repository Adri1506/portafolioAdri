---
id: "012-design-system-core"
title: "Design System Core (globals.css)"
status: draft
owner: "Developer"
created: "2026-08-11"
updated: "2026-08-11"
priority: high
depends_on: []
touches_files:
  - "src/app/globals.css"
  - "src/app/layout.tsx"
out_of_scope_files: []
---

# Spec: Design System Core (globals.css)

## 1. Intent (una frase, sin ambigüedad)

Reescribir `globals.css` con el design system "Constelación Técnica" v2: tokens semánticos dark-first, modo light vía clase `.light`, CSS de constelación, motion tokens y utilidades reutilizables.

## 2. Contexto necesario

- `spec/design/design-system.md` (sección G): bloque CSS completo listo para copy-paste
- `spec/design/design-system.md` (secciones A–F): tipografía, color, motion, composición
- `src/app/globals.css` actual: 48 líneas, theme con navy/blue/slate (v1) — se reemplaza completamente
- `src/app/layout.tsx`: carga 3 fuentes (Space Grotesk, Inter, JetBrains Mono) — necesita añadir Instrument Serif

## 3. Requisitos (EARS)

| ID | Tipo | Requisito |
|---|---|---|
| REQ-001 | Ubiquitous | El CSS **shall** definir dark como default (`:root`) con fondo `#0A1929` y texto `#F1F5F9` |
| REQ-002 | Ubiquitous | El CSS **shall** definir light como variante `.light` en `<html>` con fondo `#F5F7FA` y texto `#0A1929` |
| REQ-003 | Ubiquitous | El CSS **shall** exponer tokens semánticos: `--background`, `--foreground`, `--card`, `--muted`, `--border`, `--primary`, `--secondary`, `--success`, `--danger` |
| REQ-004 | Ubiquitous | El CSS **shall** incluir escalas crudas: neutral (50–950), ámbar (50–950), acero azul (50–950) |
| REQ-005 | Ubiquitous | El CSS **shall** incluir motion tokens: `--duration-micro/fast/standard/slow/reveal` y easings `--ease-expo/quart/standard` |
| REQ-006 | Ubiquitous | El CSS **shall** incluir gradientes: `--gradient-brand`, `--gradient-underline`, `--gradient-sky`, `--gradient-abyss`, `--gradient-section` |
| REQ-007 | Ubiquitous | El CSS **shall** incluir utilidades: `.constellation`, `.texture-dots`, `.glass-sticky`, `.link-underline` |
| REQ-008 | Ubiquitous | El CSS **shall** incluir `@media (prefers-reduced-motion: reduce)` que desactive animaciones y transiciones |
| REQ-009 | Ubiquitous | El CSS **shall** mapear tokens semánticos a utilidades Tailwind vía `@theme inline` |
| REQ-010 | Ubiquitous | El CSS **shall** incluir `@custom-variant light (&:where(.light, .light *))` para dark/light |

## 4. Contrato de interfaz (si aplica)

```css
/* Tokens semánticos — dark (:root) */
--background: #0A1929;
--foreground: #F1F5F9;
--card: #0F2640;
--card-foreground: #F1F5F9;
--muted: #0C1E33;
--muted-foreground: #A8B8C9;
--border: #1C304C;
--border-strong: #2B4365;
--primary: #FBBF24;
--primary-hover: #FCD34D;
--primary-foreground: #0A1929;
--secondary: #8FB5DC;
--secondary-hover: #B9D0E8;
--success: #34D399;
--danger: #F87171;
--info: #8FB5DC;

/* Tokens semánticos — light (.light) */
--background: #F5F7FA;
--foreground: #0A1929;
--primary: #B45309;
/* ...resto según design-system.md B.2*/

/* Tailwind @theme inline */
--font-display: var(--font-space-grotesk), "Space Grotesk", sans-serif;
--font-serif: var(--font-instrument-serif), "Instrument Serif", Georgia, serif;
--font-body: var(--font-inter), "Inter", sans-serif;
--font-mono: var(--font-jetbrains-mono), "JetBrains Mono", monospace;
```

## 5. Límites explícitos (guardrails)

- No modificar archivos fuera de `touches_files` (`globals.css`, `layout.tsx`)
- No usar hex `#000000` ni `#FFFFFF` puro — siempre navy `#0A1929` y off-white `#F1F5F9`
- No usar colores fuera del design system (no cyan, no magenta, no púrpura)
- No añadir dependencias npm nuevas
- No eliminar la funcionalidad existente de fuentes en `layout.tsx` — solo añadir Instrument Serif

## 6. Plan de tareas (checklist atómico)

- [ ] T01: Reemplazar bloque `@theme inline` con tokens del design system v2 → verifica: `REQ-009`
- [ ] T02: Añadir bloque `:root` con tokens semánticos dark → verifica: `REQ-001`, `REQ-003`
- [ ] T03: Añadir bloque `.light` con tokens semánticos light → verifica: `REQ-002`
- [ ] T04: Añadir escalas crudas (neutral, ámbar, acero) → verifica: `REQ-004`
- [ ] T05: Añadir motion tokens y gradientes → verifica: `REQ-005`, `REQ-006`
- [ ] T06: Añadir utilidades CSS (constellation, texture-dots, glass-sticky, link-underline) → verifica: `REQ-007`
- [ ] T07: Añadir `@custom-variant light` y `@media prefers-reduced-motion` → verifica: `REQ-008`, `REQ-010`
- [ ] T08: Añadir Instrument Serif a `layout.tsx` con `next/font/google` → verifica: REQ de tipografía del design system

## 7. Cambios de dependencias / entorno

- Ninguno. Las 4 fuentes ya están en `next/font/google` (Instrument Serif se añade con el mismo patrón).

## 8. Criterios de verificación (lo que corre el Verifier)

```bash
npm run typecheck
npm run lint
```

- [ ] `globals.css` compila sin errores de CSS
- [ ] `layout.tsx` tiene 4 variables de fuente (`--font-space-grotesk`, `--font-instrument-serif`, `--font-inter`, `--font-jetbrains-mono`)
- [ ] Todos los tokens del design system están presentes en `:root` y `.light`
- [ ] `prefers-reduced-motion: reduce` desactiva animaciones y transiciones
- [ ] No hay colores fuera del design system (no `#000`, no `#FFF`, no `#0EA5E9`, no `#2563EB`)

## 9. Salida esperada al finalizar

- `globals.css`: ~200-250 líneas con todo el design system v2
- `layout.tsx`: 4 fuentes cargadas, variable CSS para Instrument Serif añadida
- Sin errores de typecheck ni lint
- Los colores v1 (navy-950, blue-700, slate-*) ya no existen en el CSS
