# ~/ivan$ — Portafolio personal

SPA con estética de **terminal de desarrollador**: React 19 + TypeScript strict +
Vite + Tailwind CSS v4 + Framer Motion. Tests con Vitest + Testing Library.
Deploy en Vercel.

## Cómo correrlo

```sh
pnpm install
pnpm dev      # desarrollo
pnpm test     # tests (watch: pnpm test:watch)
pnpm lint     # linter
pnpm build    # build de producción
pnpm preview  # previsualizar el build
```

## Cómo editar el contenido

Todo el contenido vive en `src/data/*.ts` (tipado strict). No toques componentes:

| Quiero... | Edito solo |
|---|---|
| Agregar/quitar un proyecto | `src/data/projects.ts` |
| Agregar/quitar tecnología o categoría | `src/data/stack.ts` |
| Nombre, rol, email, links, métricas | `src/data/profile.ts` |
| Trayectoria, formación | `src/data/journey.ts` |

- `demoUrl` e `images` en un proyecto son **opcionales**: sin `demoUrl` no hay
  botón Demo; sin `images` (o vacío) no hay imágenes. Con 2+ capturas la card
  muestra miniaturas clicables.
- Capturas: `public/projects/<slug>-N.webp`, 1280px de ancho, <200 KB c/u,
  cada una con su `alt` descriptivo.
- Hay una skill con el paso a paso: `.opencode/skills/add-content/SKILL.md`.

## Cómo desplegar en Vercel

1. Subí el repo a GitHub.
2. En Vercel: **Add New → Project → Import** y elegí el repo.
3. Framework preset: **Vite**. Build command: `pnpm build`. Output: `dist`.
4. Deploy. Cada push a `main` redespliega solo.

## Assets pendientes de reemplazar en `/public`

Ninguno: `avatar.jpg` (foto real, crop cuadrado 800×800), `cv.pdf` (CV real) y
`projects/easyeventqr-1.webp` + `easyeventqr-2.webp` (capturas reales 1280px)
ya están en su lugar.
