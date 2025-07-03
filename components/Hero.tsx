"use client";

import { useEffect, useState, memo, useCallback, useMemo, useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import Image from "next/image";

const Hero = memo(() => {
  const [currentText, setCurrentText] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Memoized static data
  const dynamicTexts = useMemo(
    () => [
      "React Uygulamaları Geliştirme",
      "TypeScript ile Güvenli Kodlama",
      "Next.js ile SEO Dostu Siteler",
      "Tailwind CSS ile Şık Tasarımlar",
      "Responsive Web Tasarımı",
      "UI/UX Temel Tasarım Çözümleri",
      "Performans Optimizasyonu",
    ],
    []
  );

  const stats = useMemo(
    () => [
      { value: "6+", label: "Technologies" },
      { value: "8+", label: "Tools" },
      { value: "2+", label: "Years Coding" },
      { value: "15+", label: "Projects" },
      { value: "1100+", label: "Commits" },
    ],
    []
  );

  const socialLinks = useMemo(
    () => [
      {
        icon: FaGithub,
        href: "https://github.com/enesyagmur",
        color: "hover:text-gray-900",
      },
      {
        icon: FaLinkedin,
        href: "https://linkedin.com/in/enes-yağmur-4b6201249/",
        color: "hover:text-blue-600",
      },
      {
        icon: FaEnvelope,
        href: "mailto:enesyagmuroffical@gmail.com",
        color: "hover:text-red-500",
      },
    ],
    []
  );

  // Optimized callbacks
  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const downloadCV = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/enes-yagmur-cv.pdf";
    link.download = "Enes_Yagmur_CV.pdf";
    link.click();
  }, []);

  const handleProjectsClick = useCallback(
    () => scrollToSection("projects"),
    [scrollToSection]
  );
  const handleContactClick = useCallback(
    () => scrollToSection("contact"),
    [scrollToSection]
  );

  useEffect(() => {
    setIsLoaded(true);
    intervalRef.current = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [dynamicTexts.length]);

  // Profil resmi yüklenemezse fallback göster
  const handleImgError = useCallback(() => {
    setImgError(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Simplified background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-60"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-60"></div>
      </div>

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Text Content */}
          <div
            className={`space-y-4 order-2 lg:order-1 transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {/* Compact Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm w-max">
              <HiSparkles className="text-yellow-500 text-xs" />
              <span className="text-xs font-medium text-gray-700">
                Hello World!
              </span>
            </div>

            {/* Compact heading */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Enes Yağmur
                </span>
              </h1>

              {/* Dynamic text */}
              <div className="h-6 sm:h-7 overflow-hidden">
                <p className="text-base sm:text-lg text-gray-600 font-medium transition-all duration-500">
                  {dynamicTexts[currentText]}
                </p>
              </div>
            </div>

            {/* Compact description */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
              Frontend geliştirici olarak, kullanıcı dostu ve modern web
              uygulamaları yaratmaya odaklanıyorum. Yazılım yolculuğuma lise
              yıllarında web tasarımıyla başladım ve Balıkesir Üniversitesi
              Bilgisayar Programcılığı bölümünde eğitim aldım. Şu anda Bilgen
              Yazılım Akademi de frontend bootcamp eğitimimi tamamlamak
              üzereyim. HTML, CSS, JavaScript ve React başta olmak üzere;
              Tailwind CSS, Firebase, TypeScript ve Next.js gibi teknolojilerle
              projeler geliştiriyorum. Yazılım, benim için sadece bir meslek
              değil, tutku ve sürekli öğrenme yolculuğu.
            </p>

            {/* Compact Stats */}
            <div className="flex flex-wrap gap-2 py-2">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex-1 min-w-[90px] max-w-[110px] p-2 sm:p-3 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:scale-105 transition-all duration-300 text-center"
                >
                  <div className="font-bold text-sm sm:text-base text-gray-800">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Compact Buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <button
                onClick={handleProjectsClick}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Projeler
              </button>
              <button
                onClick={handleContactClick}
                className="px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-lg text-sm font-medium border border-gray-200 hover:bg-white hover:shadow-md transition-all duration-300"
              >
                İletişim
              </button>
              <button
                onClick={downloadCV}
                className="px-4 py-2 flex items-center gap-1.5 bg-white/80 backdrop-blur-sm text-gray-700 rounded-lg text-sm font-medium border border-gray-200 hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <FaDownload size={12} />
                CV İndir
              </button>
            </div>

            {/* Compact Social Links */}
            <div className="flex gap-2 pt-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={
                    social.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    social.href.startsWith("mailto:") ? undefined : "noopener"
                  }
                  className={`p-2.5 bg-white/70 backdrop-blur-sm rounded-lg text-gray-600 ${social.color} transition-all duration-300 hover:shadow-md hover:scale-110 border border-gray-100`}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Compact Image Section */}
          <div
            className={`relative order-1 lg:order-2 transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="relative group">
              <div className="relative h-64 sm:h-80 lg:h-96 w-full max-w-sm mx-auto lg:max-w-none rounded-xl overflow-hidden shadow-xl">
                {!imgError ? (
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-36161.firebasestorage.app/o/images%2FofficalProfile.png?alt=media&token=384d881e-b2d3-47bb-9589-5817344619a8"
                    alt="Enes Yağmur"
                    fill
                    className="object-cover ml-16 object-center group-hover:scale-105 transition-transform duration-500"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    quality={85}
                    onError={handleImgError}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full w-full bg-gray-100 dark:bg-gray-800">
                    <span className="text-gray-400 dark:text-gray-500 text-sm">
                      Profil resmi yüklenemedi
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              </div>

              {/* Simplified decorative elements */}
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
