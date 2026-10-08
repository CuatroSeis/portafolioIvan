export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  achievements: string[];
  demoUrl?: string;
  repoUrl: string;
  /** Galería opcional en /public. Si falta o está vacía, la card no muestra imágenes. */
  images?: ProjectImage[];
  /** Destacado: card grande a ancho completo. Sin esto: card compacta. */
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "easyeventqr",
    name: "EasyEventQR",
    featured: true,
    description:
      "Plataforma multi-tenant de venta y reserva de entradas con validación por QR.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Firebase (Firestore, Auth)",
      "Vercel Functions",
    ],
    achievements: [
      "Plataforma pensada para alquilarse a organizadores de eventos, con aislamiento de datos entre clientes mediante reglas de seguridad de Firestore verificadas con tests automatizados.",
      "Reserva con control de cupo en transacción atómica y validación de entradas por QR (token hasheado con SHA-256), con escáner en puerta que impide el doble uso.",
      "Widget embebible (Web Component con Shadow DOM), theming dinámico por evento y panel de super-admin.",
    ],
    demoUrl: "https://easyeventqr.vercel.app",
    repoUrl: "https://github.com/CuatroSeis/EasyEventQR",
    images: [
      { src: "/projects/easyeventqr-1.webp", alt: "Portada de EasyEventQR con opciones para crear evento o usar un código" },
      { src: "/projects/easyeventqr-2.webp", alt: "Segunda captura de la plataforma EasyEventQR" },
    ],
  },
  {
    slug: "finops-ai-dashboard",
    name: "FinOps AI Dashboard",
    description: "Dashboard de costos y optimización de tokens para LLMs.",
    stack: ["React 19", "TypeScript", "Supabase/PostgreSQL", "Recharts", "React Query"],
    achievements: [
      "Panel de analíticas de costos y optimización del consumo de tokens, con arquitectura desacoplada y escalable (routes/controllers/services/repositories).",
      "Filtros dinámicos sobre los datos con React Query y visualizaciones con Recharts.",
    ],
    repoUrl: "https://github.com/CuatroSeis/finops-ai-dashboard",
  },
  {
    slug: "regicide-web",
    name: "Regicide Web",
    description: "Juego de cartas multijugador en tiempo real (2 a 4 jugadores).",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Socket.io",
      "Supabase",
      "PostgreSQL",
      "Vitest",
      "monorepo pnpm",
    ],
    achievements: [
      "Motor de reglas en TypeScript puro, cubierto por 294 tests automatizados (Vitest).",
      "Salas en tiempo real con Socket.io y autenticación JWT, datos persistidos en PostgreSQL (Supabase), en un monorepo con pnpm workspaces.",
      "Desplegado en Render con deploy continuo automático desde GitHub.",
    ],
    repoUrl: "https://github.com/CuatroSeis/regicide-web",
  },
];
