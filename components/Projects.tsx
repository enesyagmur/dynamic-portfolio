"use client";
import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import { TracingBeam } from "./ui/tracing-beam";
import projectsOverwiev from "../data/projects-overwiev.json";
import codeEditorImage from "../data/images/code-editor.png";
import adamAsmacaImage from "../data/images/adam-asmaca.png";
import youtubeCloneImage from "../data/images/yotube-clone.png";
import mutfaktaNeVarImage from "../data/images/mutfakta-ne-var.png";
import polyTranslateImage from "../data/images/poly-translate.png";
import bisikletDunyamImage from "../data/images/bisiklet-dunyam.png";
import dreamWorld from "../data/images/dream-world.png";
import paraHarcama from "../data/images/para-harcama.png";
import whatsappClone from "../data/images/whatsapp-clone.png";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import { ProjectsTitle } from "./ProjectsTitle";

interface Icons {
  name: string;
  component: ReactNode;
}

export function Projects() {
  const images: StaticImageData[] = [
    codeEditorImage,
    mutfaktaNeVarImage,
    adamAsmacaImage,
    youtubeCloneImage,
    polyTranslateImage,
    bisikletDunyamImage,
    whatsappClone,
    paraHarcama,
    dreamWorld,
  ];

  const iconList: Icons[] = [
    { name: "css", component: <FaCss3Alt className="text-blue-400" /> },
    { name: "scss", component: <FaSass className="text-pink-500" /> },
    {
      name: "tailwind",
      component: <RiTailwindCssFill className="text-teal-600" />,
    },
    {
      name: "javascript",
      component: <RiJavascriptFill className="text-yellow-600  ml-2" />,
    },
    { name: "react", component: <FaReact className="text-blue-700  ml-2" /> },
    {
      name: "typescript",
      component: <BiLogoTypescript className="text-blue-500  ml-2" />,
    },
    {
      name: "nextjs",
      component: <RiNextjsFill className="text-white  ml-2" />,
    },
    {
      name: "firebase",
      component: <IoLogoFirebase className="text-yellow-500  ml-2" />,
    },
  ];

  return (
    <>
      <TracingBeam className="px-6">
        <ProjectsTitle />
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {projectsOverwiev.map((item, index) => (
            <div
              key={`content-${index}`}
              className="mb-10 bg-neutral-900 p-4 rounded-xl"
            >
              <div className="text-sm prose prose-sm dark:prose-invert">
                <p
                  className={twMerge("text-xl md:text-2xl mb-4 cursor-pointer")}
                >
                  {item.name}
                </p>
                {images[index] && (
                  <Image
                    src={images[index]}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover cursor-pointer"
                  />
                )}
              </div>

              <div className="w-full h-[250px] md:h-[200px] flex flex-col items-center justify-evenly">
                <div className="w-11/12 h-2/6 flex items-center justify-center">
                  <div className="w-4/12 h-full flex items-center justify-start text-2xl">
                    <Link
                      href={item.live}
                      className="mr-4  hover:text-blue-500"
                      title="Site Linki"
                    >
                      <TbWorld />
                    </Link>

                    <Link
                      href={item.github}
                      className="mr-4 hover:text-neutral-500"
                      title="Code Linki"
                    >
                      <FaGithub />
                    </Link>
                  </div>

                  <div className="w-4/12 h-full flex items-center justify-center text-2xl">
                    {iconList.map((icon, index) =>
                      item.used.includes(icon.name) ? (
                        <p key={index}>{icon.component}</p>
                      ) : null
                    )}
                  </div>

                  <Link
                    href={item.live}
                    className="w-4/12 h-full flex items-center justify-end  "
                    title="Detay Linki"
                  >
                    <GoArrowRight
                      className="text-2xl hover:text-purple-500"
                      title="Proje Detayları"
                    />
                  </Link>
                </div>
                <div className="w-11/12 h-3/6 flex items-center justify-center text-sm lg:text-[16px]">
                  <p>{item.description.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </>
  );
}