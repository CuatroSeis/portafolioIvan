import type { ReactNode } from "react";
import { about } from "../../data/profile";
import { SectionTitle } from "../ui/SectionTitle";

export function About(): ReactNode {
  return (
    <section id="about" aria-label="Acerca de mí" className="scroll-mt-20">
      <SectionTitle command="cat about.md" />
      <blockquote className="rounded-r-xl border-l-4 border-teal bg-surface p-5 text-[15px] leading-relaxed text-ink sm:p-6">
        {about}
      </blockquote>
    </section>
  );
}
