const educationData = [
  {
    title: "İsmet Aktar Mesleki Teknik Anadolu Lisesi",
    content:
      "Web Tasarım - Yazılım ile tanışmam lisede gerçekleşti. Temel bilgisayar bileşenleri, algoritma mantığı ve giriş seviye kodlama eğitimi aldım.",
    year: "2013-2017",
    icon: "🎓",
  },
  {
    title: "Balıkesir Üniversitesi",
    content:
      "Bilgisayar Programcılığı - Tasarım, veri tabanı sistemleri ve internet programcılığı alanlarında temel seviye bilgi edindim ve uygulamalar geliştirdim.",
    year: "2017-2019",
    icon: "💻",
  },
  {
    title: "Anadolu Üniversitesi Açıköğretim",
    content:
      "Yönetim Bilişim Sistemleri (Devam ediyor) - Yazılımın yanında işletme yönetimi, girişimcilik ve müşteri ilişkileri gibi alanlarda bilgi sahibi oluyorum.",
    year: "2025-",
    icon: "📚",
  },
  {
    title: "Bilgen Yazılım Akademi",
    content:
      "React ile Front-End Geliştirme Bootcamp - Modern JavaScript, ileri seviye React, form yönetimi, Redux, REST API entegrasyonu, JWT authentication, React Query, performans optimizasyonları, TypeScript, Next.js, Docker, deployment ve kariyer rehberliği konularını içeren yoğun bir eğitim almaya devam ediyorum.",
    year: "2025",
    icon: "🗺️",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Eğitim
          </span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full" />
      </div>

      <div className="space-y-8 relative">
        {/* Timeline */}
        <div className="absolute left-4 sm:left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-200 to-indigo-200 -translate-x-1/2 hidden sm:block" />

        {educationData.map((edu, index) => (
          <div
            key={index}
            className="relative flex flex-col sm:flex-row items-start gap-6 group"
          >
            {/* Timeline dot */}
            <div className="absolute left-4 sm:left-1/2 top-6 w-3 h-3 rounded-full bg-indigo-600 -translate-x-1/2 z-10 hidden sm:block" />

            {/* Icon (mobile) */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-xl sm:hidden">
              {edu.icon}
            </div>

            {/* Content */}
            <div
              className={`flex-1 ${
                index % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8"
              } transition-all duration-300 group-hover:scale-[1.02]`}
            >
              <div
                className={`p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-indigo-100 hover:shadow-md transition-all ${
                  index % 2 === 0 ? "sm:mr-6" : "sm:ml-6"
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {edu.title}
                  </h3>
                  <span className="text-xs font-medium bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                    {edu.year}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {edu.content}
                </p>
              </div>
            </div>

            {/* Icon (desktop) */}
            <div
              className={`w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-xl absolute ${
                index % 2 === 0 ? "sm:-right-6" : "sm:-left-6"
              } top-6 hidden sm:flex`}
            >
              {edu.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
