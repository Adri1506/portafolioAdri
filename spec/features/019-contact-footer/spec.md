---
id: "019-contact-footer"
title: "Contact & Footer"
status: draft
owner: "Developer"
created: "2026-08-11"
updated: "2026-08-11"
priority: medium
depends_on: ["017-section-headers"]
touches_files:
  - "src/components/organisms/ContactSection.tsx"
  - "src/components/organisms/Footer.tsx"
out_of_scope_files:
  - "src/app/globals.css"
  - "src/components/molecules/SectionHeader.tsx"
---

# Spec: Contact & Footer

## 1. Intent (una frase, sin ambigüedad)

Reescribir la sección Contacto con formulario rediseñado y el Footer con layout compacto, incluyendo ubicación, links sociales con ↗ y status pill.

## 2. Contexto necesario

- `spec/design/screens-and-flows.md` (secciones 8, 9): wireframes de Contacto y Footer
- `spec/design/design-system.md` (secciones F.10, F.12): formulario y links con ↗
- `src/components/organisms/Footer.tsx` actual: footer v1 — se reescribe

## 3. Requisitos (EARS)

| ID | Tipo | Requisito |
|---|---|---|
| REQ-001 | Ubiquitous | Contacto **shall** renderizar formulario con labels visibles mono `0.75rem` uppercase (nunca placeholder como label) |
| REQ-002 | Ubiquitous | Campos del formulario **shall** usar `bg: var(--muted)`, `border: 1px var(--border)`, `radius-sm`, `min-height: 48px`, focus `border: --primary` + ring |
| REQ-003 | Ubiquitous | Contacto **shall** incluir links directos: email, WhatsApp, LinkedIn, GitHub con `↗` y underline draw |
| REQ-004 | Ubiquitous | Footer **shall** renderizar layout compacto con monograma `AZ.`, nombre, copyright, links sociales, tagline |
| REQ-005 | Ubiquitous | Footer **shall** incluir ubicación: `Valparaíso, Chile 🇨🇱` |
| REQ-006 | Ubiquitous | Footer **shall** usar `--gradient-abyss` como fondo y borde superior |
| REQ-007 | Event | When formulario se envía OK, el sistema **shall** mostrar "Mensaje enviado ✓ — respondo en < 24h" |
| REQ-008 | Event | When hay error de validación, el sistema **shall** mostrar texto `--danger` debajo del campo + borde `--danger` |

## 4. Contrato de interfaz (si aplica)

```typescript
// ContactSection
export default function ContactSection(): JSX.Element

// Footer
export default function Footer(): JSX.Element

// Form state
interface ContactForm {
  name: string;
  email: string;
  message: string;
}
```

## 5. Límites explícitos (guardrails)

- No usar glassmorphism en el formulario
- No usar placeholders como labels (regla anti-IA)
- No usar sombras en el formulario
- Footer sin constellation — solo gradient-abyss + texture-dots sutil

## 6. Plan de tareas (checklist atómico)

- [ ] T01: Crear `ContactSection.tsx` con SectionHeader `05.`, formulario + links directos → verifica: `REQ-001`, `REQ-002`, `REQ-003`, `REQ-007`, `REQ-008`
- [ ] T02: Crear `Footer.tsx` con layout compacto, gradient-abyss, ubicación, sociales → verifica: `REQ-004`, `REQ-005`, `REQ-006`

## 7. Cambios de dependencias / entorno

- Ninguno.

## 8. Criterios de verificación (lo que corre el Verifier)

```bash
npm run typecheck
npm run lint
```

- [ ] Formulario con labels visibles mono uppercase
- [ ] Campos: bg-muted, border, radius-sm, min-height 48px
- [ ] Links directos con ↗ y underline draw
- [ ] Footer: gradient-abyss, monograma, copyright, ubicación
- [ ] Estados de formulario: éxito y error

## 9. Salida esperada al finalizar

- `ContactSection.tsx`: ~80 líneas, formulario + links
- `Footer.tsx`: ~40 líneas, layout compacto
- Footer v1 puede eliminarse o dejarse sin usar
