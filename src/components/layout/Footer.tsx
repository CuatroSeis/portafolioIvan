import type { ReactNode } from "react";

export function Footer(): ReactNode {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-6 font-mono text-xs text-muted">
        <p>
          <span className="text-teal">$</span> exit 0 — gracias por scrollear hasta acá, el
          mate lo pongo yo 🧉
        </p>
        <p className="mt-1">© 2026 Ivan Ezequiel Rufino · hecho con React, TypeScript y mate</p>
      </div>
    </footer>
  );
}
