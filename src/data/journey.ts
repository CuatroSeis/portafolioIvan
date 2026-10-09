export interface JourneyItem {
  ref: string;
  title: string;
  meta: string;
  bullets: string[];
}

export const journey: JourneyItem[] = [
  {
    ref: "HEAD",
    title: "Mentoría en Desarrollo Web Fullstack",
    meta: "con Sebastián Sperandio · 12 meses",
    bullets: [
      "React, TypeScript, Node.js, buenas prácticas de código.",
    ],
  },
  {
    ref: "HEAD~1",
    title: "Proyectos propios desplegados",
    meta: "EasyEventQR · FinOps AI Dashboard · Regicide Web",
    bullets: [
      "EasyEventQR, FinOps AI Dashboard y Regicide Web.",
    ],
  },
  {
    ref: "HEAD~2",
    title: "Formación autodidacta - Guia con Mentor",
    meta: "cursos de Udemy con proyectos prácticos",
    bullets: [
      "HTML, CSS, JavaScript moderno (ES6+), React, NODE.js y TypeScript.",
    ],
  },
];

export interface EducationInfo {
  formal: string;
  languages: string;
  tools: string;
}

export const education: EducationInfo = {
  formal: "Secundaria completa.",
  languages: "Español (nativo) · Inglés (lectura técnica de documentación y código).",
  tools: "VS Code, npm/pnpm.",
};
