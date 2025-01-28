import React, { ReactNode } from "react";
import Image from "next/image";
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

interface ProjectProps {
  item: {
    id: string;
    name: string;
    used: string[];
    github: string;
    live: string;
    image: string;
    video: string;
    description: {
      title: string;
      Features: string[];
      technologies: string[];
    };
  };
}

interface Icons {
  name: string;
  component: ReactNode;
}

const SingleProject: React.FC<ProjectProps> = ({ item }) => {
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
    <div className="w-[400px] md:w-[450px] z-30 mb-10 bg-neutral-900 p-4 rounded-xl hover:bg-neutral-800 mx-auto">
      <div className="text-sm prose prose-sm dark:prose-invert">
        <p className={"text-xl mb-4 cursor-pointer text-neutral-200"}>
          {item.name}
        </p>
        {
          <Image
            src={item.image}
            alt="Proje Resmi"
            height="1000"
            width="1000"
            className="rounded-lg mb-10 object-cover cursor-pointer"
          />
        }
      </div>

      <div className="w-full h-[200px] md:h-[150px] flex flex-col items-center justify-evenly">
        <div className="w-11/12 h-2/6 flex items-center justify-center">
          <div className="w-4/12 h-full flex items-center justify-start text-2xl text-neutral-200">
            <Link href={item.live} className="mr-4  hover:text-blue-500">
              <TbWorld />
            </Link>

            <Link href={item.github} className="mr-4 hover:text-neutral-500">
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
            href={`/detail/${item.id}`}
            className="w-4/12 h-full flex items-center justify-end  "
          >
            <GoArrowRight
              className="text-2xl text-purple-500 hover:text-blue-500"
              title="Proje Detayları"
            />
          </Link>
        </div>
        <div className="w-11/12 h-3/6 flex items-center justify-center text-sm text-neutral-400">
          <p>{item.description.title}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
