import React from "react";
import projectsData from "../../../public/data/projects-overwiev.json";

interface DetailParams {
  params: {
    id: string;
  };
}

interface DetailProject {
  id: string;
  name: string;
  used: string[];
  github: string;
  live: string;
  image: string;
  video: string;
  description: {
    title: string;
    Features: string[];
    technologies: string[];
  };
}

const Detail: React.FC<DetailParams> = ({ params }) => {
  const proje: DetailProject | undefined = projectsData.find(
    (item) => item.id === params.id
  );

  if (!proje) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-highBlack text-white text-3xl">
        Proje bulunamadı!
      </div>
    );
  }
  return (
    <div className="w-11/12 h-screen flex flex-col items-center justify-evenly text-white pt-8">
      {proje && (
        <>
          <div className="w-full p-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
            <video
              src={proje.video}
              className="w-full rounded-lg  z-10"
              controls
            />
          </div>

          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full flex flex-col my-4">
              <p className="text-xl font-bold m-2">Açıklama</p>
              <p className="p-2 text-neutral-300">{proje.description.title}</p>
            </div>

            <div className="w-full flex md:flex-row flex-col">
              <div className="w-full md:w-6/12 flex flex-col my-4">
                <p className="text-xl font-bold m-2">Özellikler</p>
                {proje.description.Features.map((item, index) => (
                  <p className="text-neutral-300 flex" key={index}>
                    {item}
                  </p>
                ))}
              </div>

              <div className="w-full md:w-6/12 flex flex-col my-4">
                <p className="text-xl font-bold m-2">Teknolojiler</p>
                {proje.description.technologies.map((item, index) => (
                  <p className="text-neutral-300 ml-2" key={index}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
