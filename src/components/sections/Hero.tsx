import { motion } from "framer-motion";
import { ArrowDown, Download, MapPin } from "lucide-react";
import { useState, type ReactNode } from "react";
import { metrics, profile } from "../../data/profile";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useTypewriter } from "../../hooks/useTypewriter";
import { TerminalWindow } from "../ui/TerminalWindow";

const BOOT_LINES = [
  "$ whoami",
  `nombre: ${profile.name}`,
  `rol: ${profile.role}`,
  `ubicación: ${profile.location}`,
  `estado: ${profile.status}`,
];

export function Hero(): ReactNode {
  const reduced = useReducedMotion();
  const [imgOk, setImgOk] = useState<boolean>(true);
  const full = BOOT_LINES.join("\n");
  const typed = useTypewriter(full, 14, reduced);
  const lines = typed.split("\n");

  return (
    <section id="whoami" aria-label="Presentación" className="scroll-mt-20">
      <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
        <TerminalWindow title="ivan@portfolio:~ — boot.sh">
          <div aria-live="polite" className="min-h-44 font-mono text-sm leading-7">
            {lines.map((line, i) =>
              line.startsWith("$") ? (
                <p key={i} className="text-ink">
                  <span className="mr-2 font-bold text-teal">$</span>
                  {line.slice(2)}
                  {i === lines.length - 1 && !reduced ? (
                    <span aria-hidden="true" className="ml-1 inline-block h-4 w-2 animate-pulse bg-teal" />
                  ) : null}
                </p>
              ) : (
                <p key={i} className="text-muted">
                  <span className="text-violet">{line.split(":")[0]}:</span>
                  {line.slice(line.indexOf(":") + 1)}
                </p>
              ),
            )}
          </div>
          <p className="mt-4 border-t border-border pt-4 text-sm text-muted">{profile.subtitle}</p>
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs text-amber" aria-label="Métricas destacadas">
            {metrics.map((m) => (
              <span key={m.label}>
                {m.value} {m.label}
              </span>
            ))}
          </div>
        </TerminalWindow>

        <motion.aside
          initial={reduced ? false : { opacity: 0, scale: 0.97 }}
          animate={reduced ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative rounded-xl border border-border bg-surface p-5"
          aria-label="Tarjeta de perfil"
        >
          <span aria-hidden="true" className="absolute top-2 left-2 h-4 w-4 border-t-2 border-l-2 border-teal" />
          <span aria-hidden="true" className="absolute top-2 right-2 h-4 w-4 border-t-2 border-r-2 border-teal" />
          <span aria-hidden="true" className="absolute bottom-2 left-2 h-4 w-4 border-b-2 border-l-2 border-teal" />
          <span aria-hidden="true" className="absolute right-2 bottom-2 h-4 w-4 border-r-2 border-b-2 border-teal" />
          <div className="relative mx-auto aspect-square w-36 overflow-hidden rounded-lg border border-border bg-surface2">
            <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center font-mono text-3xl font-bold text-violet">
              IR
            </span>
            {imgOk ? (
              <img
                src={profile.avatarPath}
                alt={`Foto de ${profile.name}`}
                className="absolute inset-0 h-full w-full object-cover"
                onError={() => setImgOk(false)}
              />
            ) : null}
          </div>
          <p className="mt-4 text-center font-mono text-sm font-bold text-ink">{profile.name}</p>
          <p className="text-center text-sm text-muted">{profile.role}</p>
          <p className="mt-1 flex items-center justify-center gap-1 text-center text-xs text-muted">
            <MapPin aria-hidden="true" className="h-3.5 w-3.5" />
            {profile.location}
          </p>
          <p className="mx-auto mt-3 w-fit rounded-full border border-teal/40 bg-teal/10 px-3 py-1 font-mono text-xs text-teal">
            <span aria-hidden="true">● </span>disponible · remoto full-time
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-teal px-4 py-2 font-mono text-sm font-bold text-[#06231f] transition-opacity hover:opacity-90"
            >
              <ArrowDown aria-hidden="true" className="h-4 w-4" />
              ver proyectos
            </a>
            <a
              href={profile.cvPath}
              download
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border px-4 py-2 font-mono text-sm text-ink transition-colors hover:border-teal/60 hover:text-teal"
            >
              <Download aria-hidden="true" className="h-4 w-4" />
              descargar CV
            </a>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
