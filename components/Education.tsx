import React from "react";
import { Timeline } from "./ui/timeline";

interface EducationData {
  title: string;
  content: string;
}

const Education = () => {
  const newData: EducationData[] = [
    {
      title: "İsmet Aktar Mesleki Teknik Anadolu Lisesi",
      content:
        "Web Tasarım : Yazılım ile tanışmam lisede gerçekleşti, burada bilgisayar bileşenlerinin temelini, çalışma mantığını, yazılımın hangi alanlarda nasıl kullanıldığına dair örnekler ile çoğunlukla işin teorik kısmı ve giriş seviyesinde algoritma mantığı ile kodlama hakkında bilgi edinme fırsatı buldum.",
    },
    {
      title: "Balıkesir Üniversitesi",
      content:
        "Bilgisayar Programcılığı : Üniversite de tasarım, veri tabanı sistemleri ve internet programcılığı gibi farklı alanlarda yine temel seviye bilgi sahibi olarak basit uygulamalar geliştirme imkanı buldum.",
    },
    {
      title: "Anadolu Üniversitesi Açıköğretim (devam ediyor)",
      content:
        "Yönetim Bilişim Sistemleri : Aktif olarak devam eden bu bölümde, yazılımın yanında İşletme yönetimi, girişimcilik, müşteri ilişkileri, gibi daha önce karşılaşmadığım farklı alanlarda temel seviyede bilgi sahibi olma fırsatı buldum.",
    },
  ];

  return (
    <div className="w-full bg-neutral-900 flex items-center justify-center py-16 rounded-lg z-20">
      <Timeline data={newData} />
    </div>
  );
};

export default Education;
