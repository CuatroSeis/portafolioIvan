# MEMORY.md — Procesos en curso

## 2026-10-08 — Destacados + compactas + footer mate
- `Project.featured?: boolean`. EasyEventQR destacado (card grande); FinOps y Regicide en `CompactProjectCard` (nombre, 1 línea, tags, repo corto). Destacados primero, ordenados por posición en el array.
- Footer con mate: "el mate lo pongo yo 🧉" + "hecho con React, TypeScript y mate".
- Tests 8/8 (nuevos: destacada vs compactas, orden). Build verde. AGENTS + skill actualizados.

## 2026-10-08 — Construcción inicial del portafolio
- Etapa 1 (setup): scaffold Vite react-ts + Tailwind v4 (@tailwindcss/vite) + framer-motion + lucide-react + Vitest/TL/jsdom. pnpm. TS strict activado. `test`/`test:watch` agregados a package.json. `pnpm test` + `pnpm build` en verde.
- Decisiones:
  - Tailwind v4 con `@theme` en `src/index.css` (sin tailwind.config).
  - lucide-react 1.x eliminó iconos de marca (Github/Linkedin undefined) → se crearon `GithubIcon`/`LinkedinIcon` locales en `src/components/ui/BrandIcons.tsx` (paths simple-icons).
  - `TechBadge` usa mapa `TechIconKey → LucideIcon`, desacoplado del contenido.
  - Stub de `IntersectionObserver` en `src/test/setup.ts` (jsdom no lo tiene; lo exige framer-motion `whileInView`).
  - Hook `useReducedMotion` con guarda para entornos sin `matchMedia`.
- Placeholders generados: `public/avatar.jpg`, `public/projects/easyeventqr.webp`, `public/cv.pdf` (reemplazar por reales). FinOps y Regicide sin `image` a propósito.
- Skill creada: `.opencode/skills/add-content/SKILL.md`.

## 2026-10-08 — Assets reales + galería
- Usuario subió `avatar.jpeg` (1600×1080), `CV_Ivan_Rufino.pdf` (válido, 1 pág.) y 2 capturas con espacios en el nombre.
- Normalizado: crop cuadrado centrado → `public/avatar.jpg` 800×800 (62 KB); `public/cv.pdf`; capturas → `public/projects/easyeventqr-1.webp` (22 KB) y `easyeventqr-2.webp` (13 KB), 1280px. Referencias del código (`/avatar.jpg`, `/cv.pdf`) intactas.
- `Project.images?: { src, alt }[]` reemplaza a `image?`. `ProjectCard` con galería: principal + miniaturas (botones con `aria-pressed`). Sin imágenes, la card queda como antes.
- Tests 6/6 (nuevos: cambio de imagen en galería, sin galería en FinOps/Regicide). Build verde. Docs actualizados (AGENTS, skill, README).

## Pendiente del usuario (assets reales)
- [x] Reemplazar `public/avatar.jpg` por foto real.
- [x] Reemplazar `public/cv.pdf` por el CV real.
- [x] Reemplazar captura(s) de EasyEventQR.
- [ ] (Opcional) capturas para FinOps/Regicide si alguna vez las quiere.
