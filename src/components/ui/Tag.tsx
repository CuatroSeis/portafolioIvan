import type { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
}

export function Tag({ children }: TagProps): ReactNode {
  return (
    <span className="inline-block rounded-md border border-border bg-surface2 px-2 py-0.5 font-mono text-xs text-teal">
      {children}
    </span>
  );
}
