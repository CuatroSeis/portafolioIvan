import type { ReactNode } from "react";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Hero } from "./components/sections/Hero";
import { Journey } from "./components/sections/Journey";
import { Projects } from "./components/sections/Projects";
import { Stack } from "./components/sections/Stack";
import { Reveal } from "./components/ui/Reveal";

export default function App(): ReactNode {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-5xl space-y-14 px-4 py-10 sm:py-14">
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Stack />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Journey />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
