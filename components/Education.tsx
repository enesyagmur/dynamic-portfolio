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
        "Bilgisayar Programcılığı : Üniversite eğitimimde hem tasarım hem de veri depolama için bazı temel dersler aldım.",
    },
    {
      title: "Anadolu Üniversitesi",
      content:
        "Yönetim Bilişim Sistemleri : Burada yazılım ve işletmenin harman olduğu bir eğitim almaya devam ediyorum.",
    },
  ];

  return (
    <div className="w-full h-[800px] flex items-center justify-center py-16">
      <Timeline data={newData} />
    </div>
  );
};

export default Education;
