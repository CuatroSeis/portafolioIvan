import {
  Atom,
  Box,
  Bot,
  Cloud,
  Code2,
  Component,
  Database,
  FileCode2,
  FlaskConical,
  Palette,
  Plug,
  Radio,
  Server,
  ShieldCheck,
  SquareFunction,
  Terminal,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import type { TechIconKey } from "../../data/stack";

const ICONS: Record<TechIconKey, LucideIcon> = {
  code: Code2,
  atom: Atom,
  wind: Wind,
  zap: Zap,
  markup: FileCode2,
  style: Palette,
  component: Component,
  motion: Radio,
  server: Server,
  function: SquareFunction,
  plug: Plug,
  socket: Radio,
  shield: ShieldCheck,
  database: Database,
  cloud: Cloud,
  box: Box,
  flask: FlaskConical,
  terminal: Terminal,
  bot: Bot,
};

interface TechBadgeProps {
  name: string;
  icon: TechIconKey;
}

export function TechBadge({ name, icon }: TechBadgeProps): ReactNode {
  const Icon = ICONS[icon];
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface2 px-2.5 py-1.5 font-mono text-xs text-ink">
      <Icon aria-hidden="true" className="h-3.5 w-3.5 text-violet" />
      {name}
    </span>
  );
}
