import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState, type ReactNode } from "react";
import type { Project } from "../../data/projects";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { GithubIcon } from "./BrandIcons";
import { Tag } from "./Tag";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps): ReactNode {
  const reduced = useReducedMotion();
  const [selected, setSelected] = useState<number>(0);
  const images = project.images ?? [];
  const current = images[selected];
  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 16 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
      className="flex flex-col rounded-xl border border-border bg-surface p-5 transition-colors hover:border-teal/60"
    >
      {current ? (
        <figure className="mb-4">
          <img
            src={current.src}
            alt={current.alt}
            loading="lazy"
            className="aspect-video w-full rounded-lg border border-border object-cover object-top"
          />
          {images.length > 1 ? (
            <div className="mt-2 flex gap-2" role="group" aria-label={`Capturas de ${project.name}`}>
              {images.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setSelected(i)}
                  aria-label={`Ver captura ${i + 1} de ${project.name}`}
                  aria-pressed={i === selected}
                  className={`overflow-hidden rounded-md border transition-colors ${
                    i === selected ? "border-teal" : "border-border hover:border-teal/50"
                  }`}
                >
                  <img
                    src={img.src}
                    alt=""
                    loading="lazy"
                    className="h-12 w-20 object-cover object-top"
                  />
                </button>
              ))}
            </div>
          ) : null}
        </figure>
      ) : null}
      <h3 className="font-mono text-lg font-bold text-teal">{project.name}</h3>
      <p className="mt-1 text-sm text-ink">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-1.5" aria-label={`Stack de ${project.name}`}>
        {project.stack.map((t) => (
          <Tag key={t}>#{t}</Tag>
        ))}
      </div>
      <ul className="mt-3 space-y-1.5 text-sm text-muted">
        {project.achievements.map((a) => (
          <li key={a.slice(0, 32)} className="leading-relaxed">
            <span aria-hidden="true" className="mr-1.5 text-teal">
              ›
            </span>
            {a}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2 pt-1">
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-teal px-3 py-1.5 font-mono text-xs font-bold text-[#06231f] transition-opacity hover:opacity-90"
          >
            <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
            Demo
          </a>
        ) : null}
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 font-mono text-xs text-ink transition-colors hover:border-teal/60 hover:text-teal"
        >
          <GithubIcon className="h-3.5 w-3.5" />
          GitHub
        </a>
      </div>
    </motion.article>
  );
}
