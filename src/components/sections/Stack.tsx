import type { ReactNode } from "react";
import { stack } from "../../data/stack";
import { SectionTitle } from "../ui/SectionTitle";
import { TechBadge } from "../ui/TechBadge";
import { TerminalWindow } from "../ui/TerminalWindow";

export function Stack(): ReactNode {
  return (
    <section id="stack" aria-label="Stack tecnológico" className="scroll-mt-20">
      <SectionTitle command="cat tech-stack.yaml" />
      <TerminalWindow title="~/ivan — tech-stack.yaml">
        <dl className="space-y-4">
          {stack.map((cat, ci) => {
            const last = ci === stack.length - 1;
            return (
              <div key={cat.id}>
                <dt className="font-mono text-sm">
                  <span aria-hidden="true" className="mr-2 text-teal">
                    {last ? "└─" : "├─"}
                  </span>
                  <span className="font-bold text-violet">{cat.label}:</span>
                </dt>
                <dd className="mt-2 flex flex-wrap gap-1.5 pl-6">
                  {cat.items.map((t) => (
                    <TechBadge key={t.name} name={t.name} icon={t.icon} />
                  ))}
                </dd>
              </div>
            );
          })}
        </dl>
        <p className="mt-6 border-t border-border pt-4 font-mono text-xs text-muted">
          status: <span className="text-teal">ready</span> · environment:{" "}
          <span className="text-teal">production</span>
        </p>
      </TerminalWindow>
    </section>
  );
}
