"use client";

import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white text-zinc-800 scroll-smooth">
      <Hero />
      <Skills />
      <Tools />
      <Services />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
