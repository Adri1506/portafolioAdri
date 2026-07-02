"use client";

import { useEffect, useState } from "react";
import CTAButton from "@/components/atoms/CTAButton";
import ParticleNetwork from "@/components/organisms/ParticleNetwork";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-0"
      role="banner"
    >
      {/* Particle network background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1929] via-[#0F2640] to-[#1A56DB]" />
      <ParticleNetwork />

      {/* Overlay gradient para legibilidad del texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929]/60 via-transparent to-[#0A1929]/30" />

      <div
        className={`relative z-10 text-center px-4 max-w-3xl transition-all duration-1000 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-display text-white mb-4 leading-tight">
          Adrián Zamorano
        </h1>
        <p className="text-lg sm:text-xl text-blue-200 font-medium mb-2">
          Ingeniero en Informática
        </p>
        <p className="text-base sm:text-lg text-blue-300/80 font-mono mb-10">
          Spec-Driven Development con IA
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CTAButton href="/projects" variant="primary">
            Ver Proyectos
          </CTAButton>
          <CTAButton href="/contact" variant="outline">
            Contactar
          </CTAButton>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
