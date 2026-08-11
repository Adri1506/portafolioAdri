import Image from "next/image";
import { Project } from "@/types";
import Badge from "@/components/molecules/Badge";

interface ProjectCardProps {
  project: Project;
}

/**
 * Card bento de proyecto (design system F.5).
 * - article + a stretch (whole card clickable via ::after)
 * - sin sombras (regla anti-IA)
 * - hover: translateY(-4px) + border ámbar + thumbnail scale(1.03) interno
 */
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-md border border-white/[0.06] bg-card transition-[transform,border-color] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[rgba(251,191,36,0.3)]">
      <div className="relative overflow-hidden aspect-[16/10]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 48vw"
          className="object-cover transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Badge variant={project.status} />
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            {project.category}
          </span>
        </div>

        <h3 className="mt-4 font-display text-h3 font-semibold leading-tight text-foreground">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} — ver caso`}
          className="mt-auto inline-flex items-center gap-2 pt-6 font-mono text-xs uppercase tracking-wider text-primary transition-colors duration-200 hover:text-primary-hover after:absolute after:inset-0"
        >
          Ver caso
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
