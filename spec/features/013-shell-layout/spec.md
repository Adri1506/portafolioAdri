---
id: "013-shell-layout"
title: "Shell Layout (sidebar + content area)"
status: draft
owner: "Developer"
created: "2026-08-11"
updated: "2026-08-11"
priority: high
depends_on: ["012-design-system-core"]
touches_files:
  - "src/app/layout.tsx"
  - "src/components/organisms/Sidebar.tsx"
  - "src/components/organisms/Topbar.tsx"
  - "src/components/organisms/MobileMenu.tsx"
  - "src/components/molecules/DarkLightToggle.tsx"
out_of_scope_files:
  - "src/app/globals.css"
  - "src/components/organisms/Hero.tsx"
  - "src/components/organisms/Header.tsx"
---

# Spec: Shell Layout (sidebar + content area)

## 1. Intent (una frase, sin ambigüedad)

Crear el shell de layout con sidebar sticky en desktop (lg+), topbar + overlay en móvil, y reestructurar `layout.tsx` para el nuevo patrón de layout.

## 2. Contexto necesario

- `spec/design/design-system.md` (sección D.3): layout shell desktop con sidebar 300–320px + contenido
- `spec/design/screens-and-flows.md` (sección 1): wireframe del shell desktop
- `spec/design/design-system.md` (sección F.1): especificación de navegación sidebar/topbar
- `src/app/layout.tsx` actual: layout con Header + main + Footer (v1)
- `src/components/organisms/Header.tsx`: header topbar v1 — se reemplaza

## 3. Requisitos (EARS)

| ID | Tipo | Requisito |
|---|---|---|
| REQ-001 | Ubiquitous | El shell **shall** renderizar sidebar sticky de 300px (lg) / 320px (xl) en desktop con `height: 100vh` y `position: sticky; top: 0` |
| REQ-002 | Ubiquitous | El shell **shall** renderizar topbar fija de 64px en móvil (<lg) con monograma AZ. y botón hamburguesa |
| REQ-003 | Ubiquitous | El shell **shall** renderizar overlay full-screen en móvil al abrir menú, con links numerados Space Grotesk 2rem |
| REQ-004 | Ubiquitous | El shell **shall** incluir dark/light toggle (sol/luna) en sidebar (desktop) y topbar (móvil) |
| REQ-005 | Ubiquitous | El shell **shall** persistir preferencia dark/light en `localStorage` y respetar `prefers-color-scheme` si no hay preferencia |
| REQ-006 | Ubiquitous | El shell **shall** mostrar nav links numerados: `01. Sobre Mí`, `02. Proyectos`, `03. Habilidades`, `04. Metodología`, `05. Contacto` |
| REQ-007 | Ubiquitous | El shell **shall** mostrar status pill `● Disponible para proyectos` en sidebar |
| REQ-008 | Ubiquitous | El shell **shall** mostrar links sociales `GitHub ↗`, `LinkedIn ↗`, `Email ↗` en mono con underline draw |
| REQ-009 | Event | When el usuario hace click en un nav link, el shell **shall** hacer smooth scroll a la sección correspondiente |
| REQ-010 | Event | When el usuario abre el menú móvil, el shell **shall** bloquear scroll del body |

## 4. Contrato de interfaz (si aplica)

```typescript
// Sidebar — desktop only (lg+)
export default function Sidebar(): JSX.Element

// Topbar — mobile only (<lg)
export default function Topbar({ onMenuToggle, isOpen }: { onMenuToggle: () => void; isOpen: boolean }): JSX.Element

// MobileMenu — overlay
export default function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }): JSX.Element

// DarkLightToggle
export default function DarkLightToggle(): JSX.Element
```

## 5. Límites explícitos (guardrails)

- No modificar `globals.css` (feature 012)
- No modificar `Hero.tsx` ni otros componentes de contenido
- No usar glassmorphism decorativo — solo `glass-sticky` funcional en topbar/sidebar
- No usar borde lateral indicador en nav links (regla anti-IA)
- Sidebar desktop se oculta en <lg via `hidden lg:flex`
- Topbar se oculta en lg+ via `lg:hidden`

## 6. Plan de tareas (checklist atómico)

- [ ] T01: Crear `DarkLightToggle.tsx` con lógica localStorage + toggle `.light` en `<html>` → verifica: `REQ-004`, `REQ-005`
- [ ] T02: Crear `Sidebar.tsx` con monograma, nav numerado, status pill, sociales, toggle → verifica: `REQ-001`, `REQ-006`, `REQ-007`, `REQ-008`
- [ ] T03: Crear `Topbar.tsx` con AZ., hamburguesa 2 líneas, toggle → verifica: `REQ-002`, `REQ-004`
- [ ] T04: Crear `MobileMenu.tsx` overlay full-screen con links numerados → verifica: `REQ-003`, `REQ-006`
- [ ] T05: Reestructurar `layout.tsx` con shell: sidebar lg+ | topbar <lg + contenido → verifica: `REQ-001`, `REQ-002`, `REQ-009`, `REQ-010`

## 7. Cambios de dependencias / entorno

- `lucide-react` ya instalado (usado en Header actual) — usar para iconos sol/luna, hamburguesa, cerrar

## 8. Criterios de verificación (lo que corre el Verifier)

```bash
npm run typecheck
npm run lint
npm run build
```

- [ ] Sidebar visible en viewport ≥1024px, oculta en <1024px
- [ ] Topbar visible en viewport <1024px, oculta en ≥1024px
- [ ] MobileMenu se abre/cierra con hamburguesa, bloquea scroll
- [ ] Dark/light toggle cambia `.light` en `<html>` y persiste en localStorage
- [ ] Nav links hacen smooth scroll a secciones
- [ ] Status pill visible en sidebar
- [ ] Socials con `↗` y underline draw

## 9. Salida esperada al finalizar

- 5 archivos creados/modificados: `Sidebar.tsx`, `Topbar.tsx`, `MobileMenu.tsx`, `DarkLightToggle.tsx`, `layout.tsx`
- Shell funcional: sidebar desktop + topbar móvil + overlay
- Dark/light toggle operativo con persistencia
- Header v1 (`Header.tsx`) ya no se importa en layout (puede quedarse sin usar para referencia)
