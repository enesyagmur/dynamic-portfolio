import { FaLinkedin, FaEnvelope, FaUser, FaCode } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";
import { IoLocationSharp } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import Link from "next/link";
import FormContact from "./FormContact";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      {/* Basitleştirilmiş arka plan */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50/20 via-white/20 to-purple-50/20 -z-10" />

      {/* Ana içerik */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm mb-6">
            <HiSparkles className="text-purple-500 text-lg" />
            <span className="text-sm font-medium text-gray-700">İletişim</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Benimle İletişime
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
              Geçin
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto rounded-full mb-6" />

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Projeleriniz hakkında konuşmak veya birlikte çalışmak için benimle
            iletişime geçebilirsiniz.
          </p>
        </div>

        {/* Ana içerik - Grid tabanlı düzen */}
        <div className="grid grid-cols-1 xl:grid-cols-[3fr_2fr] gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="order-1 xl:order-none">
            <FormContact />
          </div>

          {/* Contact Info */}
          <div className="order-2 xl:order-none">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100">
              {/* Profile Section */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <FaUser className="text-white text-xl lg:text-2xl" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                  Enes Yağmur
                </h3>
                <div className="flex items-center justify-center gap-2 text-blue-600 font-medium">
                  <FaCode className="text-sm" />
                  <span className="text-sm lg:text-base">
                    Frontend Developer
                  </span>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 lg:space-y-6 mb-8">
                {/* Email */}
                <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-white text-lg" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs lg:text-sm font-medium text-gray-500 mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:enesyagmuroffical@gmail.com"
                      className="text-sm lg:text-base text-gray-900 font-medium hover:text-blue-600 transition-colors duration-200 break-all"
                    >
                      enesyagmuroffical@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IoLocationSharp className="text-white text-lg" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs lg:text-sm font-medium text-gray-500 mb-1">
                      Konum
                    </p>
                    <p className="text-sm lg:text-base text-gray-900 font-medium">
                      İstanbul, Türkiye
                    </p>
                  </div>
                </div>

                {/* Availability */}
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BiWorld className="text-white text-lg" />
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                        Çalışma Durumu
                      </h3>

                      <ul className="space-y-8">
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                          <span className="text-gray-800 font-medium">
                            Remote İşler İçin Uygun
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                          <span className="text-gray-800 font-medium">
                            İstanbul / Avrupa Konumundaki İşler İçin Uygun
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                          <span className="text-gray-800 font-medium">
                            Freelancer İşler İçin Uygun
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sosyal Medya */}
        <div className="mt-12 lg:mt-16">
          <div className="text-center mb-8">
            <h4 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">
              Sosyal Medya
            </h4>
            <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Link
              href="https://www.linkedin.com/in/enes-ya%C4%9Fmur-4b6201249/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white hover:bg-gray-50 rounded-xl transition-colors duration-200 border border-gray-200"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaLinkedin className="text-white text-xl" />
              </div>
              <div>
                <p className="text-sm font-medium text-blue-600 mb-1">
                  LinkedIn
                </p>
                <p className="text-sm text-blue-800 font-medium">
                  Profesyonel Profil
                </p>
              </div>
            </Link>

            <Link
              href="https://github.com/enesyagmur"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white hover:bg-gray-50 rounded-xl transition-colors duration-200 border border-gray-200"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center flex-shrink-0">
                <FaSquareGithub className="text-white text-xl" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">GitHub</p>
                <p className="text-sm text-gray-800 font-medium">
                  Kod Portföyü
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
