import type { ReactNode } from "react";
import { education, journey } from "../../data/journey";
import { SectionTitle } from "../ui/SectionTitle";
import { TerminalWindow } from "../ui/TerminalWindow";
import { TimelineItem } from "../ui/TimelineItem";

export function Journey(): ReactNode {
  return (
    <section id="journey" aria-label="Trayectoria" className="scroll-mt-20">
      <SectionTitle command="git log --journey" />
      <TerminalWindow title="~/ivan — git log --journey">
        <ol className="space-y-6">
          {journey.map((item, i) => (
            <TimelineItem key={item.ref} item={item} isHead={i === 0} />
          ))}
        </ol>
        <div className="mt-6 border-t border-border pt-4 text-sm text-muted">
          <p>
            <span className="font-mono text-violet">formación:</span> {education.formal}
          </p>
          <p className="mt-1">
            <span className="font-mono text-violet">idiomas:</span> {education.languages}
          </p>
          <p className="mt-1">
            <span className="font-mono text-violet">herramientas:</span> {education.tools}
          </p>
        </div>
      </TerminalWindow>
    </section>
  );
}
