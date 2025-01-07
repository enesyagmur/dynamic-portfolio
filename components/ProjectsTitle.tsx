"use client";
import React from "react";
import { SparklesCore } from "./ui/Sparkles";

export function ProjectsTitle() {
  return (
    <div className="h-[100px] relative w-[95%] ml-4 md:ml-0 md:w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md mb-4">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-5xl text-3xl  font-bold text-center text-white relative z-20">
        PROJELER
      </h1>
    </div>
  );
}
