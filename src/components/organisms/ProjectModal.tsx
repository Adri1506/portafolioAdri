"use client";

import { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Project } from "@/types";
import Badge from "@/components/atoms/Badge";
import Tag from "@/components/atoms/Tag";
import SDDCycle from "@/components/molecules/SDDCycle";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors"
          aria-label="Cerrar"
        >
          <X size={20} className="text-slate-600" />
        </button>

        {/* Image */}
        <div className="relative aspect-video bg-slate-100 rounded-t-2xl overflow-hidden">
          <Image
            src={project.imageFull || project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <Badge variant={project.status}>
              {project.status === "production" ? "En producción" : "Local"}
            </Badge>
            <span className="text-xs text-slate-400 font-mono">
              {project.category}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-display text-navy-900 mb-1">
            {project.title}
          </h2>
          <p className="text-slate-500 mb-4">{project.subtitle}</p>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-500 font-medium text-sm mb-6"
            >
              <ExternalLink size={16} />
              {project.url}
            </a>
          )}

          <p className="text-slate-600 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Features */}
          {project.features && (
            <div className="mb-6">
              <h3 className="text-lg font-bold font-display text-navy-900 mb-3">
                Características
              </h3>
              <ul className="space-y-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-slate-600"
                  >
                    <span className="text-blue-500 mt-1">▸</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Stack + SDD */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-100 rounded-xl p-5">
              <h3 className="text-xs font-semibold font-mono text-slate-500 uppercase tracking-wider mb-3">
                Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
            </div>
            <div className="bg-slate-100 rounded-xl p-5">
              <h3 className="text-xs font-semibold font-mono text-slate-500 uppercase tracking-wider mb-3">
                Ciclo SDD
              </h3>
              <SDDCycle />
            </div>
          </div>

          {/* Learnings */}
          {project.learnings && (
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-5 border border-blue-100">
              <h3 className="text-lg font-bold font-display text-navy-900 mb-3">
                Lo que aprendí
              </h3>
              <ul className="space-y-2">
                {project.learnings.map((learning) => (
                  <li
                    key={learning}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <span className="text-blue-500 mt-0.5">✦</span>
                    {learning}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
