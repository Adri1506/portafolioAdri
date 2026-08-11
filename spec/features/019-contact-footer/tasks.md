# Tasks: Contact & Footer

> Feature: `019-contact-footer` | Spec: `spec.md`

---

## Tareas

- [ ] **T01** — Crear `src/components/organisms/ContactSection.tsx`: `<section>` con SectionHeader `number="05." title="Contacto"`. Dos columnas: izquierda formulario, derecha links directos. Formulario: 3 campos (NOMBRE, EMAIL, MENSAJE) con labels visibles mono `text-mono-sm text-primary uppercase`, inputs `bg-muted border border-border rounded-sm min-h-[48px] px-4`, focus `border-primary ring-2 ring-primary/30`. Submit button primary. Estado éxito: "Mensaje enviado ✓ — respondo en < 24h". Estado error: texto `text-danger` + borde `border-danger`. Derecha: links (email, WhatsApp, LinkedIn, GitHub) con `↗` mono, `link-underline`, borde inferior
  - Verifica: `REQ-001`, `REQ-002`, `REQ-003`, `REQ-007`, `REQ-008`
  - Archivos: `src/components/organisms/ContactSection.tsx`
  - Dependencias: ninguna

- [ ] **T02** — Crear `src/components/organisms/Footer.tsx`: `<footer>` con `bg-gradient-abyss`, borde superior `border-t border-border`, padding `py-12`. Interior: flex justify-between. Izquierda: monograma `AZ.` + nombre `Adrián Zamorano` + copyright `© 2026` + tagline mono `Hecho con specs y agentes`. Derecha: links sociales mono con `↗` + `link-underline`. Ubicación: `Valparaíso, Chile 🇨🇱` (un solo emoji). Añadir `texture-dots` sutil en borde superior
  - Verifica: `REQ-004`, `REQ-005`, `REQ-006`
  - Archivos: `src/components/organisms/Footer.tsx`
  - Dependencias: ninguna

---

## Estado

| Tarea | Estado | Verificada por |
|-------|--------|----------------|
| T01 | ⬜ pendiente | — |
| T02 | ⬜ pendiente | — |

**Leyenda:**
- ⬜ pendiente
- 🔄 en progreso
- ✅ hecha (Doctor aprobó)
- ❌ rechazada (Doctor rechazó)
