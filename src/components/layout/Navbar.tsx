import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const LINKS = [
  { id: "whoami", label: "./whoami" },
  { id: "stack", label: "./stack" },
  { id: "projects", label: "./projects" },
  { id: "journey", label: "./journey" },
  { id: "contact", label: "./contact" },
];

export function Navbar(): ReactNode {
  const [open, setOpen] = useState<boolean>(false);
  const active = useScrollSpy(LINKS.map((l) => l.id));

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-md">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3"
      >
        <a href="#whoami" className="font-mono text-sm font-bold text-teal">
          ~/ivan$
        </a>
        <ul className="hidden items-center gap-5 md:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "true" : undefined}
                className={`font-mono text-xs transition-colors hover:text-teal ${
                  active === l.id ? "text-teal" : "text-muted"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="rounded-md border border-border p-1.5 text-ink md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </nav>
      {open ? (
        <ul className="space-y-1 border-t border-border px-4 py-3 md:hidden">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-2 py-2 font-mono text-sm ${
                  active === l.id ? "text-teal" : "text-muted"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
