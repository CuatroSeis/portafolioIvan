# AGENTS.md — Portafolio terminal de Ivan Ezequiel Rufino

SPA: React 19 + TypeScript strict + Vite + Tailwind CSS v4 + Framer Motion.
Tests: Vitest + Testing Library. Package manager: pnpm. Deploy: Vercel.

## Estructura

- `src/components/ui/` — TerminalWindow, SectionTitle, Tag, TechBadge, BrandIcons, ProjectCard (destacados), CompactProjectCard, TimelineItem. Solo reciben props, nunca importan `src/data`.
- `src/components/layout/` — Navbar (scroll-spy + menú mobile), Footer.
- `src/components/sections/` — Hero, About, Stack, Projects, Journey, Contact. Cada una lee su archivo de `src/data`, nada más.
- `src/data/` — `profile.ts`, `stack.ts`, `projects.ts`, `journey.ts`. Todo el contenido vive acá, tipado strict.
- `src/hooks/` — useScrollSpy, useTypewriter, useReducedMotion.
- `src/styles/tokens.css` — tokens CSS (`:root`). Se extienden en `src/index.css` vía `@theme`.
- `public/` — `avatar.jpg`, `cv.pdf`, `favicon.svg`, `og-cover.svg`, `projects/*.webp`.

## Reglas

- Sin `any`. Componentes chicos, una sola responsabilidad.
- Agregar/quitar un proyecto o item del stack = editar SOLO el archivo de `src/data` correspondiente. Ver `.opencode/skills/add-content/SKILL.md`.
- No inventar empresas, cargos, métricas ni tecnologías. No publicar teléfono.
- `demoUrl` es opcional: si falta, la card no muestra botón Demo.
- `featured: true` = card grande a ancho completo (galería, logros, Demo+GitHub). Sin el flag = card compacta (nombre, 1 línea, tags, repo).
- `images` es opcional: array `{ src, alt }` con capturas en `public/projects/<slug>-N.webp` (1280px, <200 KB c/u). Si falta o está vacío, la card no muestra imágenes. Con 2+ hay miniaturas clicables.
- Respetar `prefers-reduced-motion` (ya hay hook + CSS global).
- Contraste mínimo 4.5:1 en texto.

## Comandos

- `pnpm dev` / `pnpm build` / `pnpm preview` / `pnpm test` / `pnpm lint`
- Toda etapa termina con `pnpm test` + `pnpm build` en verde.
