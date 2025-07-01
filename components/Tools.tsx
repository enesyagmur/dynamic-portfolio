import React from "react";
import { FaGithub, FaCode, FaCloud } from "react-icons/fa";
import { SiNetlify, SiCanva, SiDeepnote, SiOpenai } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { RiGeminiFill } from "react-icons/ri";
import { RiCreativeCommonsZeroLine } from "react-icons/ri";
import { RiTestTubeFill } from "react-icons/ri";
import { SiDelicious } from "react-icons/si";
import { GiPapers } from "react-icons/gi";
import { GiWhaleTail } from "react-icons/gi";
import { TbHexagon3D } from "react-icons/tb";

// Tool tipini tanımla
interface Tool {
  name: string;
  icon: React.ReactNode;
  category: keyof typeof categoryColors;
  description: string;
}

const tools: Tool[] = [
  {
    name: "VS Code",
    icon: <VscVscode className="text-blue-600" />,
    category: "IDE",
    description: "Kod editörü",
  },
  {
    name: "Cursor",
    icon: <TbHexagon3D className="text-purple-600" />,
    category: "IDE",
    description: "AI destekli editör",
  },
  {
    name: "WindSurf",
    icon: <SiDeepnote className="text-teal-600" />,
    category: "IDE",
    description: "Yeni nesil editör",
  },
  {
    name: "GPT",
    icon: <SiOpenai className="text-green-600" />,
    category: "AI",
    description: "Yapay zeka asistanı",
  },
  {
    name: "DeepSeek",
    icon: <GiWhaleTail className="text-blue-500" />,
    category: "AI",
    description: "AI asistanı",
  },
  {
    name: "Claude Sonnet",
    icon: <FaCloud className="text-amber-600" />,
    category: "AI",
    description: "AI asistanı",
  },
  {
    name: "Gemini",
    icon: <RiGeminiFill className="text-indigo-600" />,
    category: "AI",
    description: "AI asistanı",
  },
  {
    name: "Perplexity",
    icon: <GiPapers className="text-gray-700" />,
    category: "AI",
    description: "AI arama motoru",
  },
  {
    name: "v0",
    icon: <RiCreativeCommonsZeroLine className="text-slate-600" />,
    category: "Design",
    description: "UI generator",
  },
  {
    name: "Vercel",
    icon: <IoLogoVercel className="text-black" />,
    category: "Deploy",
    description: "Deployment platformu",
  },
  {
    name: "Netlify",
    icon: <SiNetlify className="text-teal-500" />,
    category: "Deploy",
    description: "Static site hosting",
  },
  {
    name: "Render",
    icon: <SiDelicious className="text-render-600" />,
    category: "Deploy",
    description: "Cloud hosting",
  },
  {
    name: "Stitch",
    icon: <RiTestTubeFill className="text-violet-600" />,
    category: "Deploy",
    description: "UI asistan",
  },
  {
    name: "Canva",
    icon: <SiCanva className="text-blue-500" />,
    category: "Design",
    description: "Grafik tasarım",
  },
  {
    name: "Recraft",
    icon: <FaCode className="text-emerald-600" />,
    category: "Design",
    description: "AI tasarım aracı",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-800" />,
    category: "Version Control",
    description: "Kod repository",
  },
];

const categoryColors = {
  IDE: "bg-blue-50 border-blue-200",
  AI: "bg-purple-50 border-purple-200",
  Deploy: "bg-green-50 border-green-200",
  Design: "bg-orange-50 border-orange-200",
  "Version Control": "bg-gray-50 border-gray-200",
} as const;

const Tools: React.FC = () => {
  return (
    <section
      id="tools"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Kullandığım Araçlar
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Projelerimi hayata geçirirken kullandığım modern araçlar ve
          teknolojiler
        </p>
      </div>

      {/* Tools Grid - Mobile First Approach */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="group relative bg-white rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:-translate-y-2 cursor-pointer"
          >
            {/* Category Badge */}
            <div
              className={`absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-medium ${
                categoryColors[tool.category]
              } border`}
            >
              {tool.category}
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="text-4xl sm:text-5xl lg:text-6xl transform group-hover:scale-110 transition-transform duration-300">
                {tool.icon}
              </div>
            </div>

            {/* Tool Name */}
            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 text-center mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors">
              {tool.name}
            </h3>

            {/* Description - Hidden on mobile, shown on hover on larger screens */}
            <p className="text-xs sm:text-sm text-gray-500 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
              {tool.description}
            </p>

            {/* Mobile Description - Always visible on mobile */}
            <p className="text-xs text-gray-500 text-center sm:hidden">
              {tool.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
