# Screens & Flows — Portafolio Adrián Zamorano

## User Flows

### Flow Principal (Reclutador / Visitante)
```
Home (Hero) 
  → Sobre Mí (conoce al ingeniero)
  → Proyectos (ve el trabajo en producción)
    → Caso Chambecas (detalle)
    → Caso SebaTatto (detalle)  
    → Caso Tragaperras (detalle)
  → Skills (stack técnico y metodología)
  → Metodología SDD (entiende el enfoque diferencial)
  → Contacto (para contratar/conectar)
```

### Flow Secundario (Cliente potencial)
```
Home (Hero)
  → Metodología SDD (qué ofrezco)
  → Proyectos (prueba social)
    → Casos de estudio específicos
  → Contacto (solicitar cotización/consulta)
```

### Flow Rápido (Dev reclutador)
```
Home → Proyectos → Skills → Contacto
```

---

## Screens / Páginas

### 1. Home / Hero (Landing)
```
┌─────────────────────────────────────────────────┐
│ [Nav: Logo | About | Projects | Skills | Métod] │
│                                                   │
│  ╔═══════════════════════════════════════════╗    │
│  ║  Adrián Zamorano                         ║    │
│  ║  Ingeniero en Informática                ║    │
│  ║  Spec-Driven Development con IA          ║    │
│  ║                                           ║    │
│  ║  [Ver Proyectos] [Contactar]             ║    │
│  ╚═══════════════════════════════════════════╝    │
│                                                   │
│  ─── scroll indicator ───                         │
└─────────────────────────────────────────────────┘
```

**Elementos:**
- Gradient hero azul profundo → azul medio
- Nombre grande con Space Grotesk weight 700
- Subtítulo: "Ingeniero en Informática · SDD con IA"
- 2 CTAs: "Ver Proyectos" (primario) y "Contactar" (outline)
- Mini showcase de logos de stack (opcional)

---

### 2. Sobre Mí
```
┌─────────────────────────────────────────────────┐
│  Sobre Mí                                        │
│                                                    │
│  ┌──────┐  Adrián Zamorano                       │
│  │ Foto │  35 años · Ingeniero en Informática    │
│  └──────┘                                        │
│                                                    │
│  Texto personal: quién soy, qué hago,              │
│  mi enfoque SDD, 2 años con IA,                   │
│  50+ proyectos, 3 en producción.                  │
│                                                    │
│  "No tengo experiencia formal en empresas,         │
│   pero he construido más que muchos devs           │
│   con 5 años de experiencia."                      │
│                                                    │
│  Stats:                                            │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐            │
│  │ 50+  │ │  3   │ │  2   │ │  SDD │            │
│  │ Proy │ │ Prod │ │ Años │ │  Met │            │
│  └──────┘ └──────┘ └──────┘ └──────┘            │
└─────────────────────────────────────────────────┘
```

---

### 3. Proyectos (Grid)
```
┌─────────────────────────────────────────────────┐
│  Proyectos                                        │
│                                                    │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐   │
│  │ 🖼️         │ │ 🖼️         │ │ 🖼️         │   │
│  │ Chambecas  │ │ SebaTatto  │ │ Tragaperras │   │
│  │ 🟢 Producc │ │ 🟢 Producc │ │ 🟢 Producc │   │
│  │ Next.js    │ │ Next.js    │ │ Next.js    │   │
│  │ Tailwind   │ │ Tailwind   │ │ Tailwind   │   │
│  └────────────┘ └────────────┘ └────────────┘   │
│                                                    │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐   │
│  │ 🖼️         │ │ 🖼️         │ │ 🖼️         │   │
│  │ Proyecto   │ │ Proyecto   │ │ Proyecto   │   │
│  │ Local 04   │ │ Local 05   │ │ Local 06   │   │
│  └────────────┘ └────────────┘ └────────────┘   │
└─────────────────────────────────────────────────┘
```

**Cards:**
- Imagen thumbnail (16:9)
- Título + descripción corta
- Badge "En producción" (cyan) o "Local" (slate)
- Tags de stack (Next.js, Tailwind, etc.)
- Hover: shadow + scale(1.02)

---

### 4. Caso de Estudio (detalle de proyecto)
```
┌─────────────────────────────────────────────────┐
│  ← Volver a Proyectos                            │
│                                                    │
│  ┌──────────────────────────────────────────┐    │
│  │  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │    │
│  │  ▓          Screenshot           ▓       │    │
│  │  ▓          del proyecto         ▓       │    │
│  │  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │    │
│  └──────────────────────────────────────────┘    │
│                                                    │
│  Chambecas — Fiestas Infantiles                    │
│  🔗 chambecas.vercel.app                           │
│                                                    │
│  ┌─── Stack ───────────────────────────────┐     │
│  │ Next.js  ·  Tailwind  ·  Vercel         │     │
│  └─────────────────────────────────────────┘     │
│                                                    │
│  ┌─── ¿Qué hace? ─────────────────────────┐     │
│  │ E-commerce para artículos de fiesta,     │     │
│  │ sublimación y cotillón. Catálogo con     │     │
│  │ galería, servicios y WhatsApp.           │     │
│  └─────────────────────────────────────────┘     │
│                                                    │
│  ┌─── SDD Cycle ──────────────────────────┐     │
│  │ 📋 Spec → 📝 Plan → ✅ Tasks →         │     │
│  │ 💻 Implement → 🔍 Verify               │     │
│  └─────────────────────────────────────────┘     │
│                                                    │
│  ┌─── Lo que aprendí ─────────────────────┐     │
│  │ - Manejo de galerías de imágenes        │     │
│  │ - Integración con WhatsApp API          │     │
│  │ - SEO para e-commerce local             │     │
│  └─────────────────────────────────────────┘     │
└─────────────────────────────────────────────────┘
```

---

### 5. Skills Técnicas
```
┌─────────────────────────────────────────────────┐
│  Skills                                           │
│                                                    │
│  Frontend                     SDD & IA             │
│  ┌──┐ ┌──┐ ┌──┐ ┌──┐        ┌──┐ ┌──┐ ┌──┐    │
│  │Ng│ │Ts│ │Tw│ │Rl│        │SD│ │Ag│ │Sp│    │
│  └──┘ └──┘ └──┘ └──┘        └──┘ └──┘ └──┘    │
│                                                    │
│  Tools                        Deploy               │
│  ┌──┐ ┌──┐ ┌──┐              ┌──┐ ┌──┐          │
│  │Gi│ │Fs│ │No│              │Ve│ │Ng│          │
│  └──┘ └──┘ └──┘              └──┘ └──┘          │
└─────────────────────────────────────────────────┘
```

---

### 6. Metodología SDD
```
┌─────────────────────────────────────────────────┐
│  Metodología SDD                                   │
│  Spec-Driven Development con IA                    │
│                                                    │
│  ┌─────┐   ┌─────┐   ┌─────┐   ┌─────┐   ┌────┐│
│  │ 📋  │ → │ 📝  │ → │ ✅  │ → │ 💻  │ → │ 🔍 ││
│  │Spec │   │Plan │   │Tasks│   │Impl │   │Ver ││
│  └─────┘   └─────┘   └─────┘   └─────┘   └────┘│
│                                                    │
│  Explicación de cómo funciona SDD:                │
│  - Especificar antes de codificar                  │
│  - Spec como fuente de verdad                      │
│  - Cada feature pasa por las 5 etapas              │
│  - Agentes especializados por etapa                │
│                                                    │
│  Beneficios:                                       │
│  ✅ Cero scope creep                               │
│  ✅ Trazabilidad completa                          │
│  ✅ Calidad consistente                            │
│  ✅ Rápida iteración                               │
└─────────────────────────────────────────────────┘
```

---

### 7. Contacto
```
┌─────────────────────────────────────────────────┐
│  Contacto                                         │
│                                                    │
│  ┌─────────────────────┐                          │
│  │ Nombre              │                          │
│  ├─────────────────────┤                          │
│  │ Email               │                          │
│  ├─────────────────────┤                          │
│  │ Mensaje             │                          │
│  ├─────────────────────┤                          │
│  │ [Enviar Mensaje]    │                          │
│  └─────────────────────┘                          │
│                                                    │
│  O contáctame directo:                             │
│  📧 email@ejemplo.com                             │
│  💬 WhatsApp                                      │
│  🔗 LinkedIn · GitHub                             │
└─────────────────────────────────────────────────┘
```

---

### 8. Timeline / Trayectoria
```
┌─────────────────────────────────────────────────┐
│  Mi Trayectoria                                    │
│                                                    │
│  2024                                              │
│  │ ● Primer proyecto con SDD                       │
│  │ ● Descubrimiento de programación agéntica       │
│  │                                                 │
│  2025                                              │
│  │ ● 30+ proyectos                                │
│  │ ● Primer deploy en Vercel                      │
│  │ ● Chambecas en producción                      │
│  │                                                 │
│  2026                                              │
│  │ ● SebaTatto + Tragaperras en producción        │
│  │ ● 50+ proyectos alcanzados                     │
│  │ ● Maestría en SDD y agentes                    │
│  │ ● Portafolio profesional 🎯                    │
└─────────────────────────────────────────────────┘
```

---

### 9. Footer
```
┌─────────────────────────────────────────────────┐
│  Adrián Zamorano · © 2026                         │
│  Ingeniero en Informática · SDD con IA            │
│                                                    │
│  [GitHub] [LinkedIn] [Email] [WhatsApp]           │
└─────────────────────────────────────────────────┘
```

## Mobile Adaptations

| Componente | Desktop | Mobile |
|------------|---------|--------|
| Navigation | Horizontal links | Hamburger + slide panel |
| Hero title | 4.5rem | 2.5rem |
| Project grid | 3 columns | 1 column |
| Case study layout | 2/3 image + 1/3 text | Stacked (image full, text below) |
| Skills | 4 column grid | 2 column grid |
