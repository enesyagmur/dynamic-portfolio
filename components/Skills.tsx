import React, { useMemo, useState } from "react";
import { FaCss3Alt, FaSass, FaReact } from "react-icons/fa";
import {
  RiTailwindCssFill,
  RiJavascriptFill,
  RiNextjsFill,
} from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";

// Skill ve kategori tiplerini tanımla
interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  category: keyof typeof categoryColors;
  description: string;
}

const categoryColors = {
  Styling: "from-blue-500 to-cyan-500",
  Programming: "from-yellow-500 to-orange-500",
  Framework: "from-purple-500 to-pink-500",
  Backend: "from-green-500 to-teal-500",
} as const;

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skills: Skill[] = useMemo(
    () => [
      {
        name: "CSS3",
        icon: <FaCss3Alt className="text-blue-600" />,
        level: 70,
        category: "Styling",
        description: "Modern CSS özellikleri, responsive tasarım",
      },
      {
        name: "SCSS",
        icon: <FaSass className="text-pink-600" />,
        level: 30,
        category: "Styling",
        description: "Verimli Css yapısı, mixin, variables, nested rules",
      },
      {
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill className="text-teal-600" />,
        level: 70,
        category: "Styling",
        description: "Utility-first CSS framework, responsive tasarım",
      },
      {
        name: "JavaScript",
        icon: <RiJavascriptFill className="text-yellow-400" />,
        level: 50,
        category: "Programming",
        description: "Modern ES6+ JavaScript",
      },
      {
        name: "React",
        icon: <FaReact className="text-blue-500" />,
        level: 70,
        category: "Framework",
        description: "Component yapısı, state yönetimi",
      },
      {
        name: "TypeScript",
        icon: <BiLogoTypescript className="text-blue-700" />,
        level: 30,
        category: "Programming",
        description: "Güvenli tip yapısı, interface",
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-gray-900" />,
        level: 30,
        category: "Framework",
        description: "Seo Optimizasyonu, React Framework",
      },
      {
        name: "Firebase",
        icon: <IoLogoFirebase className="text-yellow-400" />,
        level: 70,
        category: "Veritabanı servisi",
        description: "Backend servis platformu, veritabanı yönetimi",
      },
    ],
    []
  );

  const getSkillLevelColor = (level: number) => {
    if (level >= 90) return "from-green-400 to-green-600";
    if (level >= 80) return "from-blue-400 to-blue-600";
    if (level >= 70) return "from-yellow-400 to-yellow-600";
    return "from-red-400 to-red-600";
  };

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
            key={skill.name}
            className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2"
            onMouseEnter={() => setHoveredSkill(index)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            {/* Skill Level Badge */}
            <div className="absolute -top-3 -right-3 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-gray-100">
              <span className="text-sm font-bold text-gray-700">
                {skill.level}%
              </span>
            </div>

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

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${getSkillLevelColor(
                    skill.level
                  )} transition-all duration-1000 ease-out`}
                  style={{
                    width: hoveredSkill === index ? `${skill.level}%` : "0%",
                    transitionDelay: hoveredSkill === index ? "200ms" : "0ms",
                  }}
                ></div>
              </div>
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
