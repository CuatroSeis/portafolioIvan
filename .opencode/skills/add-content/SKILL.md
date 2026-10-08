---
name: add-content
description: Agrega o quita proyectos y tecnologías del stack editando solo src/data. Usar cuando el usuario pida agregar/sacar un proyecto o un item del stack.
---

# Agregar / quitar contenido (proyectos y stack)

Regla de oro: el contenido vive SOLO en `src/data`. Nunca toques componentes
(`ProjectCard`, `TechBadge`, secciones) para estos cambios.

## Agregar un proyecto

1. Si lleva captura: guardala en `public/projects/<slug>.webp` (1280×720, <200 KB,
   `alt` descriptivo). Si no hay captura, omití el campo `image`.
2. Editá SOLO `src/data/projects.ts` y agregá un objeto `Project`:

```ts
{
  slug: "mi-proyecto",            // único, kebab-case
  name: "Mi Proyecto",
  description: "Una línea, sin inventar métricas.",
  stack: ["React", "TypeScript"], // se muestran como #tags
  achievements: ["Logro verificable 1.", "Logro verificable 2."],
  demoUrl: "https://...",         // OPCIONAL: si falta, no se muestra botón Demo
  repoUrl: "https://github.com/CuatroSeis/mi-proyecto",
  featured: true, // OPCIONAL: card grande destacada. Sin esto: card compacta.
  images: [                       // OPCIONAL (solo luce en destacadas)
    { src: "/projects/mi-proyecto-1.webp", alt: "Descripción de la captura 1" },
    { src: "/projects/mi-proyecto-2.webp", alt: "Descripción de la captura 2" },
  ],
}
```

3. Para quitar: borrá el objeto del array. Nada más.

## Agregar / quitar tecnología del stack

Editá SOLO `src/data/stack.ts`:

- Para agregar un item a una categoría existente: sumá `{ name: "...", icon: "<clave>" }`
  a su `items`. Claves válidas (`TechIconKey`): `code, atom, wind, zap, markup,
  style, component, motion, server, function, plug, socket, shield, database,
  cloud, box, flask, terminal, bot`. El `icon` es visual; si dudás, usá `box`.
- Para agregar una categoría: sumá un `StackCategory { id, label, items }`.
  El árbol `├─ / └─` y el cierre `status: ready` se calculan solos.
- Para quitar: borrá el item o la categoría del array.

## Verificación obligatoria

```sh
pnpm test && pnpm build
```

Ambos en verde antes de dar por terminado. Sin `any`, sin datos inventados.
