export type TechIconKey =
  | "code"
  | "atom"
  | "wind"
  | "zap"
  | "markup"
  | "style"
  | "component"
  | "motion"
  | "server"
  | "function"
  | "plug"
  | "socket"
  | "shield"
  | "database"
  | "cloud"
  | "box"
  | "flask"
  | "terminal"
  | "bot";

export interface Tech {
  name: string;
  icon: TechIconKey;
}

export interface StackCategory {
  id: string;
  label: string;
  items: Tech[];
}

export const stack: StackCategory[] = [
  {
    id: "lenguajes",
    label: "lenguajes",
    items: [
      { name: "JavaScript (ES6+)", icon: "code" },
      { name: "TypeScript", icon: "code" },
    ],
  },
  {
    id: "frontend",
    label: "frontend",
    items: [
      { name: "React 19", icon: "atom" },
      { name: "Tailwind CSS", icon: "wind" },
      { name: "Vite", icon: "zap" },
      { name: "HTML5", icon: "markup" },
      { name: "CSS3", icon: "style" },
      { name: "Web Components", icon: "component" },
      { name: "Framer Motion", icon: "motion" },
    ],
  },
  {
    id: "backend",
    label: "backend",
    items: [
      { name: "Node.js", icon: "server" },
      { name: "Vercel Functions", icon: "function" },
      { name: "REST API", icon: "plug" },
      { name: "Socket.io (WebSockets)", icon: "socket" },
      { name: "autenticación JWT", icon: "shield" },
    ],
  },
  {
    id: "data",
    label: "data",
    items: [
      { name: "Firebase (Firestore, Auth, reglas de seguridad)", icon: "database" },
      { name: "PostgreSQL", icon: "database" },
      { name: "Supabase (Auth, RLS, Storage)", icon: "cloud" },
    ],
  },
  {
    id: "deploy_cloud",
    label: "deploy_cloud",
    items: [
      { name: "Render", icon: "cloud" },
      { name: "Vercel", icon: "zap" },
      { name: "GitHub Actions (CI/CD)", icon: "box" },
    ],
  },
  {
    id: "testing",
    label: "testing",
    items: [
      { name: "Vitest", icon: "flask" },
      { name: "Testing Library", icon: "flask" },
      { name: "Node test runner", icon: "flask" },
      { name: "Firebase Emulator", icon: "box" },
      { name: "monorepo con pnpm workspaces", icon: "box" },
    ],
  },
  {
    id: "devops",
    label: "devops",
    items: [
      { name: "Git/GitHub", icon: "terminal" },
      { name: "Linux (Ubuntu)", icon: "terminal" },
    ],
  },
  {
    id: "ia_aplicada",
    label: "ia_aplicada",
    items: [
      { name: "Desarrollo asistido por IA (opencode CLI)", icon: "bot" },
      { name: "generación de tests", icon: "bot" },
      { name: "refactoring y debugging", icon: "bot" },
    ],
  },
];
