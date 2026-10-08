import type { ReactNode } from "react";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Hero } from "./components/sections/Hero";
import { Journey } from "./components/sections/Journey";
import { Projects } from "./components/sections/Projects";
import { Stack } from "./components/sections/Stack";

export default function App(): ReactNode {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-5xl space-y-14 px-4 py-10 sm:py-14">
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
