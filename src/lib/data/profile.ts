import { Stat } from "@/types";

export const profile = {
  name: "Adrián Zamorano",
  age: 35,
  title: "Ingeniero en Informática",
  subtitle: "Spec-Driven Development con IA",
  bio: `Ingeniero en Informática especializado en Spec-Driven Development (SDD) con inteligencia artificial. 

Durante 2 años he construido más de 50 proyectos aplicando una metodología donde la especificación es la fuente de verdad: primero se especifica, luego se planifica, se descompone en tareas, se implementa con agentes de IA y se verifica contra los criterios de aceptación.

Actualmente tengo 3 proyectos en producción en Vercel y un dominio profundo de skills, agentes y specs. Mi enfoque SDD me permite entregar software con cero scope creep, trazabilidad completa y calidad consistente.

Busco oportunidades donde pueda aportar mi experiencia en desarrollo agéntico con IA y metodologías basadas en especificaciones.`,
  stats: [
    { number: "50+", label: "Proyectos" },
    { number: "3", label: "En Producción" },
    { number: "2", label: "Años SDD" },
    { number: "SDD", label: "Metodología" },
  ] as Stat[],
  image: "/images/profile/photo.png",
};
