import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { LampContainer } from "@/components/ui/lamp";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center  text-white">
      <Hero />
      <Projects />
      <LampContainer />
      <Education />
      <Contact />
    </div>
  );
}

// eğitim ve iletişim alanını responsive yapıyorum
