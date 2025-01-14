import React from "react";
import { Spotlight } from "../components/ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from "next/image";
import officalProfile from "../public/data/images/officalProfile.png";
import casualProfile from "../public/data/images/casualProfile.png";

const Hero = () => {
  const randomProfile = Math.round(Math.random());
  return (
    <div className="w-full h-[700px] md:h-screen flex flex-col lg:flex-row items-center justify-between md:justify-center relative  overflow-hidden">
      {/* grid background */}
      <div className="w-full h-full bg-grid-white/[0.06] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* spotlights */}
      <div>
        {/* Blue */}
        <Spotlight
          className="top-20 left-8 lg:top-0 lg:left-8 lg:w-full w-[800px]"
          fill="#3b82f6"
        />
        {/* White */}
        <Spotlight
          className="top-20 left-40 lg:top-0 lg:left-56 lg:w-full w-[800px]"
          fill="#8b5cf6"
        />

        {/* Purple */}
        {
          <Spotlight
            className="top-20 left-64 lg:top-0 lg:left-96 lg:w-full w-[800px]"
            fill="#a855f7"
          />
        }
      </div>
      <TextGenerateEffect
        words="Merhaba, Ben Enes Frontend Developer'ım."
        className="w-10/12 h-1/6 lg:w-4/12 lg:h-4/6 flex items-end md:items-start lg:items-center justify-center text-center lg:text-center text-xl md:text-4xl lg:text-5xl"
      />

      <div className="w-[300px] h-[300px] flex flex-col items-center justify-center relative">
        <div className="w-[250px] h-[250px] opacity-80  rounded-full bg-neutral-900 z-10 "></div>
        <div className="w-[300px] h-[300px]  rounded-full bg-neutral-950 absolute"></div>

        {randomProfile === 0 ? (
          <Image
            src={officalProfile}
            width={300}
            height={300}
            className="profile-image object-cover absolute z-20 ml-28 scale-110"
            alt="Profil Resmi"
          />
        ) : (
          <Image
            src={casualProfile}
            width={300}
            height={300}
            className="profile-image object-cover absolute z-20"
            alt="Profil Resmi"
          />
        )}

        <button className="w-[120px] h-[40px] lg:w-[180px] lg:h-[50px] rounded-xl bg-highBlack border-[2px] border-neutral-600 absolute -bottom-16 md:-bottom-44 z-50  hover:animate-borderHover">
          İletişim
        </button>
      </div>

      <p className="w-9/12 md:w-8/12 lg:w-4/12 h-1/6 lg:h-4/6 lg:px-4 flex items-center justify-center md:tracking-wider text-sm  lg:text-[16px] mt-4 text-center lg:text-center text-neutral-400">
        React, Typescript, Tailwind ve Firebase ile web projeleri
        geliştiriyorum. Sürekli öğrenerek kendimi geliştirmeyi ve bu alanda bir
        kariyer hedefliyorum.
      </p>
    </div>
  );
};

export default Hero;
