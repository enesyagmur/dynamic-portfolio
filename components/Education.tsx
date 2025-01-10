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
        "Web Tasarım : Yazılım ile tanışmam lisede gerçekleşti ve burada bilgisayar bileşenlerinin temelini ve algoritma mantığını öğrendim.",
    },
    {
      title: "Balıkesir Üniversitesi",
      content:
        "Bilgisayar Programcılığı : Üniversite de bilgisayar programlama, veri tabanı yönetimi, nesneye dayalı programlama ve internet teknolojileri konularında bilgi sahibi. Bilgisayar ağ sistemleri, elektronik elemanlar ve devreler üzerine temel teknik bilgiye sahip. Görsel programlama ve internet programcılığı ile uygulama geliştirme konulurında temel seviyede bilgiler öğrendim.",
    },
    {
      title: "Anadolu Üniversitesi",
      content:
        "Yönetim Bilişim Sistemleri : İşletme yönetimi, üretim süreçleri, girişimcilik, yenilik yönetimi, müşteri ilişkileri, kullanıcı deneyimi tasarımı, sistem analizi,karar destek sistemleri, veri tabanı programlama, veri madenciliği, web ve ileri programlama, ağ yönetimi, bilgi güvenliği, sosyal ağ analizi konularında eğitim alarak başlangıç seviyesinde bilgi sahibi sahibi oldum.",
    },
  ];

  return (
    <div className="w-full  bg-neutral-900 flex items-center justify-center py-16">
      <Timeline data={newData} />
    </div>
  );
};

export default Education;
