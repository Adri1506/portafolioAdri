"use client";

import { useState } from "react";
import { projects } from "@/lib/data/projects";
import { Project } from "@/types";
import ProjectCard from "@/components/molecules/ProjectCard";
import ProjectModal from "@/components/organisms/ProjectModal";

export default function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="proyectos" className="py-20 scroll-mt-20 bg-blue-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold font-display text-navy-900 mb-4 text-center">
          Proyectos
        </h2>
        <p className="text-slate-500 text-center mb-12 max-w-xl mx-auto">
          Proyectos en producción y locales que muestran mi trabajo con la
          metodología SDD.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
