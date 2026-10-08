export interface Profile {
  name: string;
  role: string;
  subtitle: string;
  location: string;
  status: string;
  email: string;
  linkedin: string;
  linkedinUrl: string;
  github: string;
  githubUrl: string;
  cvPath: string;
  avatarPath: string;
}

export const profile: Profile = {
  name: "Ivan Ezequiel Rufino",
  role: "Desarrollador Fullstack",
  subtitle: "React · TypeScript · Node.js · Render · Firebase · Supabase/PostgreSQL",
  location: "Zona Sur, Buenos Aires, Argentina",
  status: "disponible, remoto full-time",
  email: "ivanrufinocontac@gmail.com",
  linkedin: "linkedin.com/in/rufinodev",
  linkedinUrl: "https://www.linkedin.com/in/rufinodev",
  github: "github.com/CuatroSeis",
  githubUrl: "https://github.com/CuatroSeis",
  cvPath: "/cv.pdf",
  avatarPath: "/avatar.jpg",
};

export const about: string =
  "Construyo y despliego aplicaciones web completas de punta a punta: React y TypeScript en el frontend; Node.js en el backend, con Firebase o Supabase/PostgreSQL para datos y autenticación (reglas de seguridad multi-tenant, JWT y RLS); CI/CD con GitHub Actions sobre despliegues en Vercel y Render. Tengo 3 apps desplegadas y más de 290 tests automatizados, incorporando IA como acelerador de mi propio flujo de trabajo, siempre bajo mi revisión y validación.";

export interface Metric {
  value: string;
  label: string;
}

export const metrics: Metric[] = [
  { value: "3", label: "apps desplegadas" },
  { value: "294", label: "tests en un solo proyecto" },
  { value: "+290", label: "tests automatizados en total" },
];
