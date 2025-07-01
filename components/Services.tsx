import React from "react";
import { FaCss3Alt, FaSass, FaReact } from "react-icons/fa";
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";

const services = [
  {
    name: "Modern Web Tasarımı",
    description: "Responsive ve kullanıcı odaklı arayüzler tasarlıyorum.",
    icon: <FaCss3Alt className="text-blue-500 text-4xl" />,
  },
  {
    name: "SCSS & Tailwind CSS",
    description:
      "Özelleştirilebilir stiller ve hızlı geliştirme için Tailwind kullanıyorum.",
    icon: <FaSass className="text-pink-500 text-4xl" />,
  },
  {
    name: "JavaScript & TypeScript",
    description: "Temiz ve sürdürülebilir JS/TS kodları yazıyorum.",
    icon: <RiJavascriptFill className="text-yellow-400 text-4xl" />,
  },
  {
    name: "React Geliştirme",
    description: "Bileşen bazlı, modern React uygulamaları geliştiriyorum.",
    icon: <FaReact className="text-blue-600 text-4xl" />,
  },
  {
    name: "Next.js ile SSR",
    description: "SEO uyumlu ve hızlı web uygulamaları geliştiriyorum.",
    icon: <RiNextjsFill className="text-gray-900 text-4xl" />,
  },
  {
    name: "Firebase Entegrasyonu",
    description:
      "Gerçek zamanlı veritabanı, auth ve barındırma çözümleri sunuyorum.",
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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition"
            >
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-2">
                {service.name}
              </h3>
              <p className="text-zinc-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
