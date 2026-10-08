import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "../App";
import { projects } from "../data/projects";

describe("portfolio", () => {
  it("renderiza las secciones principales", () => {
    render(<App />);
    expect(screen.getByRole("navigation", { name: "Navegación principal" })).toBeInTheDocument();
    expect(screen.getByLabelText("Presentación")).toBeInTheDocument();
    expect(screen.getByText("cat about.md")).toBeInTheDocument();
    expect(screen.getByText("cat tech-stack.yaml")).toBeInTheDocument();
    expect(screen.getByText("ls projects/")).toBeInTheDocument();
    expect(screen.getByText("git log --journey")).toBeInTheDocument();
    expect(screen.getByText("connect --socials")).toBeInTheDocument();
  });

  it("los links de proyectos apuntan a las URLs correctas", () => {
    render(<App />);
    for (const p of projects) {
      const repo = screen.getByRole("link", { name: (_content, el) => el?.getAttribute("href") === p.repoUrl });
      expect(repo).toHaveAttribute("href", p.repoUrl);
      if (p.demoUrl) {
        const demo = screen.getByRole("link", { name: (_content, el) => el?.getAttribute("href") === p.demoUrl });
        expect(demo).toHaveAttribute("href", p.demoUrl);
      }
    }
    // Solo EasyEventQR tiene demo pública
    expect(screen.getAllByRole("link", { name: /Demo/ })).toHaveLength(1);
  });

  it("el menú mobile abre y cierra", async () => {
    const user = userEvent.setup();
    render(<App />);
    const btn = screen.getByRole("button", { name: /menú/i });
    expect(btn).toHaveAttribute("aria-expanded", "false");
    await user.click(btn);
    expect(btn).toHaveAttribute("aria-expanded", "true");
    await user.click(btn);
    expect(btn).toHaveAttribute("aria-expanded", "false");
  });

  it("la galería de EasyEventQR cambia la imagen principal", async () => {
    const user = userEvent.setup();
    render(<App />);
    const thumb2 = screen.getByRole("button", { name: "Ver captura 2 de EasyEventQR" });
    expect(thumb2).toHaveAttribute("aria-pressed", "false");
    await user.click(thumb2);
    expect(thumb2).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("img", { name: "Segunda captura de la plataforma EasyEventQR" })).toBeInTheDocument();
  });

  it("los proyectos sin imágenes no muestran galería", () => {
    render(<App />);
    expect(screen.queryByRole("group", { name: /Capturas de FinOps/ })).not.toBeInTheDocument();
    expect(screen.queryByRole("group", { name: /Capturas de Regicide/ })).not.toBeInTheDocument();
  });

  it("el destacado muestra logros y galería; las compactas no", () => {
    render(<App />);
    // EasyEventQR es destacado: achievements + galería visibles
    expect(screen.getByText(/aislamiento de datos entre clientes/)).toBeInTheDocument();
    expect(screen.getByRole("group", { name: "Capturas de EasyEventQR" })).toBeInTheDocument();
    // FinOps y Regicide son compactas: sin achievements largos
    expect(screen.queryByText(/Motor de reglas en TypeScript puro/)).not.toBeInTheDocument();
    expect(screen.queryByText(/arquitectura desacoplada y escalable/)).not.toBeInTheDocument();
  });

  it("los destacados van antes que las compactas", () => {
    render(<App />);
    const headings = screen.getAllByRole("heading", { level: 3 }).map((h) => h.textContent);
    expect(headings[0]).toBe("EasyEventQR");
  });

  it("el contenido sigue en el DOM con la animación de scroll", () => {
    // Reveal nunca desmonta: anclas, scroll-spy y find-in-page funcionan
    render(<App />);
    expect(screen.getByText("cat tech-stack.yaml")).toBeInTheDocument();
    expect(screen.getByText(/aislamiento de datos entre clientes/)).toBeInTheDocument();
  });

  it("el scroll-spy marca la sección activa en el nav", () => {
    render(<App />);
    const nav = screen.getByRole("navigation", { name: "Navegación principal" });
    expect(nav.querySelector('a[aria-current="true"]')).toBeInTheDocument();
  });
});
