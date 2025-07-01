import React, { ReactNode, useMemo, memo } from "react";
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
import { HiOutlineExternalLink } from "react-icons/hi";
import type { Project } from "@/lib/types";

interface ProjectProps {
  item: Project;
}

interface Icons {
  name: string;
  component: ReactNode;
}

const SingleProject: React.FC<ProjectProps> = memo(({ item }) => {
  const iconList: Icons[] = useMemo(
    () => [
      {
        name: "css",
        component: <FaCss3Alt className="text-blue-500" title="CSS3" />,
      },
      {
        name: "scss",
        component: <FaSass className="text-pink-500" title="SCSS" />,
      },
      {
        name: "tailwind",
        component: (
          <RiTailwindCssFill className="text-cyan-500" title="Tailwind CSS" />
        ),
      },
      {
        name: "javascript",
        component: (
          <RiJavascriptFill className="text-yellow-500" title="JavaScript" />
        ),
      },
      {
        name: "react",
        component: <FaReact className="text-blue-600" title="React" />,
      },
      {
        name: "typescript",
        component: (
          <BiLogoTypescript className="text-blue-600" title="TypeScript" />
        ),
      },
      {
        name: "nextjs",
        component: <RiNextjsFill className="text-black" title="Next.js" />,
      },
      {
        name: "firebase",
        component: (
          <IoLogoFirebase className="text-orange-500" title="Firebase" />
        ),
      },
    ],
    []
  );

  return (
    <article className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* Image Container */}
      <div className="relative overflow-hidden">
        <div className="relative w-full h-48 sm:h-56">
          <Image
            src={item.image}
            alt={`${item.name} project screenshot`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            priority
          />
          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Floating Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <Link
            href={item.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 backdrop-blur-sm p-2.5 rounded-full text-gray-700 hover:text-blue-600 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            aria-label="View live project"
          >
            <HiOutlineExternalLink className="w-4 h-4" />
          </Link>
          <Link
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 backdrop-blur-sm p-2.5 rounded-full text-gray-700 hover:text-gray-900 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            aria-label="View GitHub repository"
          >
            <FaGithub className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        {/* Project Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {item.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {item.description.title}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {iconList.map(
            (icon, idx) =>
              item.used.includes(icon.name) && (
                <div
                  key={idx}
                  className="bg-gray-50 hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200 group/icon"
                  title={icon.name}
                >
                  <span className="text-lg group-hover/icon:scale-110 transition-transform duration-200 inline-block">
                    {icon.component}
                  </span>
                </div>
              )
          )}
        </div>

        {/* Bottom Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          {/* Links */}
          <div className="flex gap-4">
            <Link
              href={item.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200"
              aria-label="View live project"
            >
              <TbWorld className="w-4 h-4" />
              Live
            </Link>
            <Link
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200"
              aria-label="View GitHub repository"
            >
              <FaGithub className="w-4 h-4" />
              Code
            </Link>
          </div>

          {/* Details Link */}
          <Link
            href={`/detail/${item.id}`}
            className="flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            aria-label="View project details"
          >
            Details
            <GoArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-200 to-yellow-200 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
    </article>
  );
});

SingleProject.displayName = "SingleProject";
export default memo(SingleProject);
