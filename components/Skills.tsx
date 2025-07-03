import React, { useMemo } from "react";
import { FaCss3Alt, FaSass, FaReact } from "react-icons/fa";
import {
  RiTailwindCssFill,
  RiJavascriptFill,
  RiNextjsFill,
} from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";

const categoryColors = {
  Styling: "from-blue-500 to-cyan-500",
  Programming: "from-yellow-500 to-orange-500",
  Framework: "from-purple-500 to-pink-500",
  Backend: "from-green-500 to-teal-500",
  "Veritabanı servisi": "from-amber-500 to-yellow-600",
} as const;

// Skill ve kategori tiplerini tanımla
interface Skill {
  name: string;
  icon: React.ReactNode;
  category: keyof typeof categoryColors;
  description: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = useMemo(
    () => [
      {
        name: "CSS3",
        icon: <FaCss3Alt className="text-blue-600" />,

        category: "Styling",
        description: "Modern CSS özellikleri, responsive tasarım",
      },
      {
        name: "SCSS",
        icon: <FaSass className="text-pink-600" />,

        category: "Styling",
        description: "Verimli Css yapısı, mixin, variables, nested rules",
      },
      {
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill className="text-teal-600" />,

        category: "Styling",
        description: "Utility-first CSS framework, responsive tasarım",
      },
      {
        name: "JavaScript",
        icon: <RiJavascriptFill className="text-yellow-400" />,

        category: "Programming",
        description: "Modern ES6+ JavaScript",
      },
      {
        name: "React",
        icon: <FaReact className="text-blue-500" />,

        category: "Framework",
        description: "Component yapısı, state yönetimi",
      },
      {
        name: "TypeScript",
        icon: <BiLogoTypescript className="text-blue-700" />,

        category: "Programming",
        description: "Güvenli tip yapısı, interface",
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-gray-900" />,

        category: "Framework",
        description: "Seo Optimizasyonu, React Framework",
      },
      {
        name: "Firebase",
        icon: <IoLogoFirebase className="text-yellow-400" />,

        category: "Veritabanı servisi",
        description: "Backend servis platformu, veritabanı yönetimi",
      },
    ],
    []
  );

  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 "
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Yeteneklerim
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Kullandığım teknolojiler ve yeterlilik seviyelerim
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-16">
        {skills.map((skill, index) => (
          <div
            key={skill.name + index}
            className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="text-5xl sm:text-6xl transform group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
            </div>

            {/* Skill Name */}
            <h3 className="text-xl font-bold text-gray-900 text-center mb-2 group-hover:text-purple-600 transition-colors">
              {skill.name}
            </h3>

            {/* Category */}
            <div className="text-center mb-4">
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${
                  categoryColors[skill.category]
                }`}
              >
                {skill.category}
              </span>
            </div>

            {/* Description & Experience */}
            <div className="text-center space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm text-gray-600">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
