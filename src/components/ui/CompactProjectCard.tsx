import { GithubIcon } from "./BrandIcons";
import { Tag } from "./Tag";
import type { ReactNode } from "react";
import type { Project } from "../../data/projects";

interface CompactProjectCardProps {
  project: Project;
}

/** Versión mínima para proyectos sin demo: nombre, una línea, tags y repo. */
export function CompactProjectCard({ project }: CompactProjectCardProps): ReactNode {
  return (
    <article className="flex flex-col rounded-xl border border-border bg-surface p-4 transition-colors hover:border-teal/60">
      <h3 className="font-mono text-base font-bold text-teal">{project.name}</h3>
      <p className="mt-1 line-clamp-2 text-sm text-muted">{project.description}</p>
      <div className="mt-2.5 flex flex-wrap gap-1.5" aria-label={`Stack de ${project.name}`}>
        {project.stack.map((t) => (
          <Tag key={t}>#{t}</Tag>
        ))}
      </div>
      <a
        href={project.repoUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-flex w-fit items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-teal"
      >
        <GithubIcon className="h-3.5 w-3.5" />
        {project.repoUrl.replace("https://github.com/", "")}
      </a>
    </article>
  );
}
