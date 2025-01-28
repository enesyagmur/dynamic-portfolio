"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";

export const LampContainer = () => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-highBlack pt-[300px]  w-full rounded-md z-0 "
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-blue-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-highBlack h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-highBlack  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem]  from-transparent via-transparent to-purple-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-highBlack  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-highBlack h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-highBlack blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-blue-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-purple-500 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-blue-500 "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-highBlack "></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="w-11/12 lg:w-8/12  flex flex-col items-center justify-evenly pt-[300px]"
        >
          <h1 className="md:text-5xl text-3xl">HAKKIMDA</h1>
          <p className="text-sm lg:text-[16px] lg:leading-6 mt-16 md:mt-12 text-neutral-400">
            Merhaba! Ben 3 Şubat 1999 doğumluyum ve İstanbul’da yaşıyorum.
            Yazılım serüvenim, lise yıllarında web tasarım bölümü ile başladı ve
            Balıkesir Üniversitesi’nde Bilgisayar Programcılığı eğitimi alarak
            devam etti. Uzun süre yazılımı bir kariyer olarak düşünmesem de, iş
            hayatına atıldıktan sonra para kazanmaktan ziyade sevdiğim işi
            yapmanın önemini fark ettim. Bu anlayışla, Haziran 2022’den itibaren
            işimden arta kalan zamanlarda yazılım öğrenmeye ve İngilizcemi
            geliştirmeye başladım. Frontend geliştirme ile başladığım bu
            yolculukta HTML ve CSS ile temel projeler geliştirdikten sonra,
            JavaScripte odaklandım. JavaScript’i derinlemesine öğrenmek ve
            kendimi bu alanda geliştirmek için çok zaman harcadım. Ardından,
            React framework’üne geçtim ve React ile birçok proje geliştirerek
            kendimi bu alanda da ileri taşıdım. CSS konusunda da SASS ve
            Tailwind CSS gibi modern araçları kullandım ve projelerimde daha
            fazla esneklik sağlamak için Tailwind’i tercih ettim. Projelerimi
            daha kapsamlı hale getirmek adına Firebase’i öğrenerek kullanıcı
            işlemleri ve veritabanı entegrasyonlarını projelerime ekledim ve son
            olarak Typescript öğrenerek şu anda Next.js üzerinde çalışarak
            kendimi daha da geliştirmekteyim. Ayrıca, başlangıçta A0 seviyesinde
            olan İngilizcemi zorda olsa yaklaşık B1 seviyesine yükselttim.
            Yazılım öğrenmeye başladığımdan bu yana sosyal hayatımdan ve
            uykumdan fedakârlık ederek kendimi geliştirmeye odaklandım. Henüz
            yazılımdan maddi bir kazanç elde etmemiş olsam da, yazılım
            geliştirmek benim için bir tutku ve bu yolda kararlılıkla ilerlemeye
            devam ediyorum...
          </p>
          <div className="w-full h-[40px] flex items-center justify-evenly text-3xl mt-4">
            <FaHtml5 className="text-orange-700" />
            <FaCss3Alt className="text-blue-400" />
            <FaSass className="text-pink-500" />
            <RiTailwindCssFill className="text-teal-600" />
            <RiJavascriptFill className="text-yellow-600" />
            <FaReact className="text-blue-700" />
            <BiLogoTypescript className="text-blue-500" />
            <RiNextjsFill className="text-white" />
            <IoLogoFirebase className="text-yellow-500" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
