import type { ReactNode } from "react";
import type { JourneyItem } from "../../data/journey";

interface TimelineItemProps {
  item: JourneyItem;
  isHead?: boolean;
}

export function TimelineItem({ item, isHead = false }: TimelineItemProps): ReactNode {
  return (
    <li className="relative pl-8">
      <span
        aria-hidden="true"
        className={`absolute top-1.5 left-0 h-3 w-3 rounded-full border-2 ${
          isHead ? "border-teal bg-teal/30" : "border-muted bg-transparent"
        }`}
      />
      <span
        aria-hidden="true"
        className="absolute top-6 bottom-[-1.5rem] left-[5px] w-px bg-border"
      />
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={`rounded px-1.5 py-0.5 font-mono text-[11px] font-bold ${
            isHead ? "bg-amber/15 text-amber" : "bg-surface2 text-muted"
          }`}
        >
          {item.ref}
        </span>
        <h3 className="font-mono text-sm font-bold text-ink">{item.title}</h3>
      </div>
      <p className="mt-1 font-mono text-xs text-amber">{item.meta}</p>
      <ul className="mt-2 space-y-1 text-sm text-muted">
        {item.bullets.map((b) => (
          <li key={b.slice(0, 32)} className="leading-relaxed">
            <span aria-hidden="true" className="mr-1.5 text-teal">
              +
            </span>
            {b}
          </li>
        ))}
      </ul>
    </li>
  );
}
