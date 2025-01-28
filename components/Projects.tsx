"use client";
import React from "react";
import projectsOverwiev from "../public/data/projects-overwiev.json";
import { SparklesCore } from "./ui/Sparkles";
import SingleProject from "./SingleProject";

export function Projects() {
  return (
    <div className="w-full flex flex-col items-center justify-center relative">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.1}
        maxSize={1}
        particleDensity={100}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />

      <div className="w-full h-[150px] flex items-center justify-center">
        <p className="text-3xl md:text-5xl">PROJELER</p>
      </div>

      <div className="w-full md:w-10/12 flex flex-wrap">
        {projectsOverwiev.map((item, index) => (
          <SingleProject key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
