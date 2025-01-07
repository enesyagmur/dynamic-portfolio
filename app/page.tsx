import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";

import { LampContainer } from "@/components/ui/lamp";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center  text-white">
      <Hero />
      <LampContainer />
      <Projects />
    </div>
  );
}
