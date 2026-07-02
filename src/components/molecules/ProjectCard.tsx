import Image from "next/image";
import { Project } from "@/types";
import Badge from "@/components/atoms/Badge";
import Tag from "@/components/atoms/Tag";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <button
      onClick={() => onSelect(project)}
      className="group block w-full text-left bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 hover:scale-[1.02] cursor-pointer"
    >
      <div className="relative aspect-video bg-slate-100 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <Badge variant={project.status}>
            {project.status === "production" ? "En producción" : "Local"}
          </Badge>
          <span className="text-xs text-slate-400 font-mono">
            {project.category}
          </span>
        </div>
        <h3 className="text-lg font-semibold font-display text-navy-900 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-slate-500 mt-1 line-clamp-2">
          {project.subtitle}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </button>
  );
}
