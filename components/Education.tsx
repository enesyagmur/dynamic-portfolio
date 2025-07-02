const educationData = [
  {
    title: "İsmet Aktar Teknik Anadolu Lisesi",
    content:
      "Bilişim Teknolojileri - Web Programcılığı (2013-2017)\n" +
      "Eğitim süresince algoritma mantığı ve problem çözme, C# ile temel programlama, SQL ile veritabanı giriş, HTML & CSS ile basit web sayfaları oluşturma, Dreamweaver ve Flash gibi araçlarla temel tasarım uygulamaları konularında giriş seviyesinde bilgi edindim. Not: Bu konularda eğitim aldım ancak bazılarını aktif kullanmadığım için bilgimi güncellemem gerekebilir.",
    year: "2013 - 2017",
    icon: "🎓",
  },
  {
    title: "Balıkesir Üniversitesi",
    content:
      "Bilgisayar Programcılığı (2018-2020)\n" +
      "Programlama temelleri, ofis yazılımları, ağ temelleri, veritabanı giriş (SQL), HTML-CSS ile web tasarım temelleri, bilgisayar donanımı ve yazılım kurulumu, nesne tabanlı programlamaya giriş (OOP), grafik tasarıma giriş, yazılım mimarilerine giriş gibi konularda temel düzeyde bilgi ve beceri kazandım. Bu eğitim süreci, frontend alanına yönelmeden önce teknik altyapımı oluşturdu.",
    year: "2018 - 2020",
    icon: "💻",
  },
  {
    title: "Bilgen Yazılım Akademi",
    content:
      "React ile Front-End Geliştirme Bootcamp (2025)\n" +
      "Modern JavaScript (ES6+), ileri seviye React, form yönetimi, Redux, React Query ile global ve sunucu durumu yönetimi, REST API entegrasyonu, JWT authentication, TypeScript ile tip güvenliği, Next.js ile SSR ve SEO, performans optimizasyonları, lazy loading, memoization, Docker, deployment süreçleri, iş başvurusu ve teknik mülakat hazırlığı gibi birçok konuda derinlemesine eğitim alıyorum. Bu eğitim, hem teknik bilgi derinliğimi hem de gerçek dünya projelerine hazır olma yetkinliğimi artırmaktadır.",
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
