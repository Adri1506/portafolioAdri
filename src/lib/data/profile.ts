import { Stat } from "@/types";

export const profile = {
  name: "Adrián Zamorano",
  age: 35,
  title: "Ingeniero en Informática",
  subtitle: "Spec-Driven Development con IA",
  bio: `Ingeniero en Informática especializado en desarrollo de software con inteligencia artificial y Spec-Driven Development (SDD).

Mi enfoque parte de una idea simple: la especificación es la fuente de verdad del proyecto. Antes de implementar, se define qué debe construirse, se establece su arquitectura, se descompone el trabajo en tareas y se determinan los criterios que permitirán validar cada resultado. Esto permite mantener una dirección clara durante todo el proceso y reducir desviaciones respecto al objetivo original.

He desarrollado un sistema de trabajo basado en agentes de IA especializados, donde cada agente cumple una responsabilidad concreta dentro del proceso de desarrollo. La planificación, diseño, implementación, testing y validación forman parte de un flujo coordinado, en lugar de depender de un único agente encargado de resolver todo el proyecto.

Este enfoque me permite utilizar la inteligencia artificial no solamente para generar código, sino como parte de un proceso estructurado de ingeniería de software, manteniendo control sobre lo que se construye, cómo se construye y cómo se verifica.

Actualmente aplico este enfoque para desarrollar soluciones digitales para emprendedores y pequeños negocios, desde sitios web y catálogos hasta sistemas de pedidos, tiendas online e inventarios.`,
  stats: [
    { number: "50+", label: "Proyectos" },
    { number: "4", label: "En Producción" },
    { number: "2", label: "Años SDD" },
    { number: "SDD", label: "Metodología" },
  ] as Stat[],
  image: "/images/profile/photo.png",
};
