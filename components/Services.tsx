import React from "react";
import { FaCss3Alt, FaSass } from "react-icons/fa";
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

const services = [
  {
    name: "Web Arayüz Geliştirme",
    description:
      "Kullanıcı odaklı, modern ve duyarlı (responsive) web arayüzleri tasarlar ve geliştiririm.",
    icons: [
      <FaCss3Alt key="css" className="text-blue-500 text-4xl" />,
      <FaSass key="scss" className="text-pink-500 text-4xl" />,
      <RiTailwindCssFill key="tailwind" className="text-teal-500 text-4xl" />,
    ],
  },
  {
    name: "Modern Frontend Geliştirme",
    description:
      "JavaScript, TypeScript, React ve Next.js kullanarak etkileşimli, performanslı ve güvenli web uygulamaları geliştiririm.",
    icons: [
      <RiJavascriptFill key="js" className="text-amber-400 text-4xl" />,
      <BiLogoTypescript key="typescript" className="text-blue-700 text-4xl" />,
      <FaReact key="react" className="text-blue-500 text-4xl" />,
      <RiNextjsFill key="nextjs" className="text-gray-900 text-4xl" />,
    ],
  },
  {
    name: "Firebase Entegrasyonları",
    description:
      "Firebase ile uygulamalarınız için kimlik doğrulama, gerçek zamanlı veri yönetimi ve barındırma** çözümleri entegre ederim.",
    icon: <IoLogoFirebase className="text-yellow-500 text-4xl" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-zinc-800 mb-4">Hizmetler</h2>
        <p className="text-zinc-600 mb-12">
          Sahip olduğum yeteneklerle projelerinize katkı sağlayabileceğim
          alanlar:
        </p>

        <div className="flex flex-wrap gap-8 justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition 
                 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)]" /* calc ile boşluklar ayarlandı */
            >
              <h3 className="text-xl font-semibold text-zinc-800 mb-2">
                {service.name}
              </h3>
              <div className="flex text-sm items-center justify-center mb-4 gap-x-4">
                {service.icons &&
                  service.icons.map((IconComponent, iconIndex) => (
                    <span key={iconIndex}>{IconComponent}</span>
                  ))}
                {service.icon && service.icon}
              </div>

              <p className="text-zinc-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
