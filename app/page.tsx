"use client";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { LampContainer } from "@/components/ui/lamp";
import { useRef } from "react";

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center  text-white">
      <Hero scrollToContact={scrollToContact} />
      <Projects />
      <LampContainer />
      <Education />
      <Contact reference={contactRef} />
    </div>
  );
}
