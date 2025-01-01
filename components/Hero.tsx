import React from "react";
import { Spotlight } from "../components/ui/Spotlight";

const Hero = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center relative">
      {/* grid background */}
      <div className="w-full h-full bg-grid-white/[0.06] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-30 md:-top-20 h-screen"
          fill="#00ff00"
        />
        <Spotlight
          className="top-10 left-96  h-[100vh] w-[50vw]"
          fill="#00ffff"
        />
        <Spotlight
          className="top-28 left-80  h-[80vh] w-[50vw]"
          fill="#ff0000"
        />
      </div>
    </div>
  );
};

export default Hero;
