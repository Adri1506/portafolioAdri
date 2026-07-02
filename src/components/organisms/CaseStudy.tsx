import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Project } from "@/types";
import Badge from "@/components/atoms/Badge";
import Tag from "@/components/atoms/Tag";
import SDDCycle from "@/components/molecules/SDDCycle";

interface CaseStudyProps {
  project: Project;
}

export default function CaseStudy({ project }: CaseStudyProps) {
  return (
    <article className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-blue-600 transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Volver a Proyectos
        </Link>

        <div className="mb-8">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={675}
            className="w-full rounded-xl border border-slate-200 shadow-lg"
            priority
          />
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <Badge variant={project.status}>
                {project.status === "production" ? "En producción" : "Local"}
              </Badge>
              <span className="text-xs text-slate-400 font-mono">
                {project.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-display text-navy-900 mb-2">
              {project.title}
            </h1>
            <p className="text-lg text-slate-500 mb-4">{project.subtitle}</p>

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

            <p className="text-slate-600 leading-relaxed mb-8">
              {project.description}
            </p>

            {project.features && (
              <div className="mb-8">
                <h2 className="text-xl font-bold font-display text-navy-900 mb-3">
                  Características
                </h2>
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
          </div>

          <div>
            <div className="bg-slate-100 rounded-xl p-6 mb-6">
              <h2 className="text-sm font-semibold font-mono text-slate-500 uppercase tracking-wider mb-3">
                Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
            </div>

            <div className="bg-slate-100 rounded-xl p-6">
              <h2 className="text-sm font-semibold font-mono text-slate-500 uppercase tracking-wider mb-3">
                Ciclo SDD
              </h2>
              <SDDCycle />
            </div>
          </div>
        </div>

        {project.learnings && (
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-100">
            <h2 className="text-xl font-bold font-display text-navy-900 mb-4">
              Lo que aprendí
            </h2>
            <ul className="space-y-3">
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
    </article>
  );
}
