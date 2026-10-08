import type { ReactNode } from "react";

interface SectionTitleProps {
  command: string;
  id?: string;
}

export function SectionTitle({ command, id }: SectionTitleProps): ReactNode {
  return (
    <h2
      id={id}
      className="mb-6 flex flex-wrap items-center gap-3 font-mono text-lg sm:text-xl"
    >
      <span aria-hidden="true" className="font-bold text-teal">
        $
      </span>
      <code className="rounded-md border border-border bg-surface px-3 py-1 text-sm text-ink sm:text-base">
        {command}
      </code>
    </h2>
  );
}
