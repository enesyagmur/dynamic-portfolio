"use client";

import { useState, useCallback, memo } from "react";
import {
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaTag,
  FaComment,
} from "react-icons/fa";
import { HiCheckCircle, HiExclamationCircle } from "react-icons/hi2";

const FormContact = memo(() => {
  const [formStatus, setFormStatus] = useState<"default" | "success" | "error">(
    "default"
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [key, setKey] = useState(0);

  const formLink = `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORM_ID}`;

  const resetKey = useCallback(() => {
    setTimeout(() => {
      setKey((prevKey) => prevKey + 1);
      setFormStatus("default");
    }, 3000);
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);
      const formData = new FormData(e.currentTarget);

      try {
        const response = await fetch(formLink, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          setFormStatus("success");
          resetKey();
        } else {
          setFormStatus("error");
          resetKey();
        }
      } catch (error) {
        setFormStatus("error");
        resetKey();
        console.log(error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [formLink, resetKey]
  );

  return (
    <div className="w-full h-full">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl border border-gray-100 h-full">
        {/* Form Header */}
        <div className="mb-6 lg:mb-8">
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
            Mesaj Gönder
          </h3>
          <p className="text-sm lg:text-base text-gray-600">
            Projeniz hakkında konuşmak için formu doldurun, en kısa sürede size
            geri dönüş yapacağım.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          key={key}
          className="space-y-5 lg:space-y-6"
        >
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {/* Name Input */}
            <div className="group">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                İsim *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="h-4 w-4 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full pl-10 pr-4 py-2.5 lg:py-3 text-sm lg:text-base bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 placeholder-gray-400"
                  placeholder="Adınız ve soyadınız"
                  aria-label="İsim"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="group">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-4 w-4 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full pl-10 pr-4 py-2.5 lg:py-3 text-sm lg:text-base bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 placeholder-gray-400"
                  placeholder="ornek@email.com"
                  aria-label="Email"
                />
              </div>
            </div>
          </div>

          {/* Subject Input */}
          <div className="group">
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Konu *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaTag className="h-4 w-4 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200" />
              </div>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full pl-10 pr-4 py-2.5 lg:py-3 text-sm lg:text-base bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 placeholder-gray-400"
                placeholder="Mesajınızın konusu"
                aria-label="Konu"
              />
            </div>
          </div>

          {/* Message Textarea */}
          <div className="group">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Mesaj *
            </label>
            <div className="relative">
              <div className="absolute top-3 left-3 pointer-events-none">
                <FaComment className="h-4 w-4 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200" />
              </div>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full pl-10 pr-4 py-3 text-sm lg:text-base bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 placeholder-gray-400 resize-none"
                placeholder="Projeniz hakkında detaylı bilgi verin..."
                aria-label="Mesaj"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 lg:py-4 px-6 rounded-xl font-semibold text-white text-sm lg:text-base transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-blue-500/30 ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Gönderiliyor...
                </>
              ) : (
                <>
                  <FaPaperPlane className="w-4 h-4" />
                  Mesajı Gönder
                </>
              )}
            </span>
          </button>

          {/* Status Messages */}
          {formStatus === "success" && (
            <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 animate-fadeIn">
              <HiCheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm lg:text-base">
                  Mesajınız başarıyla gönderildi!
                </p>
                <p className="text-xs lg:text-sm text-green-700">
                  En kısa sürede size geri dönüş yapacağım.
                </p>
              </div>
            </div>
          )}

          {formStatus === "error" && (
            <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 animate-fadeIn">
              <HiExclamationCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm lg:text-base">
                  Mesaj gönderilirken bir hata oluştu!
                </p>
                <p className="text-xs lg:text-sm text-red-700">
                  Lütfen tekrar deneyin veya doğrudan email gönderin.
                </p>
              </div>
            </div>
          )}
        </form>

        {/* Additional Info */}
        <div className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs lg:text-sm text-gray-500">
            <span>* Zorunlu alanlar</span>
            <span>Genellikle 24 saat içinde yanıtlarım</span>
          </div>
        </div>
      </div>
    </div>
  );
});

FormContact.displayName = "FormContact";

export default FormContact;
