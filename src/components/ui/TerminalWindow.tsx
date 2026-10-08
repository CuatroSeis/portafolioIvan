import type { ReactNode } from "react";

interface TerminalWindowProps {
  title: string;
  children: ReactNode;
}

export function TerminalWindow({ title, children }: TerminalWindowProps): ReactNode {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <span aria-hidden="true" className="h-3 w-3 rounded-full bg-[#f87171]" />
        <span aria-hidden="true" className="h-3 w-3 rounded-full bg-[#facc15]" />
        <span aria-hidden="true" className="h-3 w-3 rounded-full bg-teal" />
        <span className="ml-2 truncate font-mono text-xs text-muted">{title}</span>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}
