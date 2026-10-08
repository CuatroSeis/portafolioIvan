import type { ReactNode } from "react";
import { projects } from "../../data/projects";
import { CompactProjectCard } from "../ui/CompactProjectCard";
import { ProjectCard } from "../ui/ProjectCard";
import { SectionTitle } from "../ui/SectionTitle";

export function Projects(): ReactNode {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <section id="projects" aria-label="Proyectos" className="scroll-mt-20">
      <SectionTitle command="ls projects/" />
      <div className="space-y-5">
        {featured.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
      {rest.length > 0 ? (
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {rest.map((p) => (
            <CompactProjectCard key={p.slug} project={p} />
          ))}
        </div>
      ) : null}
    </section>
  );
}
