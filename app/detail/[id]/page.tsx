"use client";

import React, { useEffect, useState } from "react";
import projectsData from "../../../public/data/projects-overwiev.json";

import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

interface DetailParams {
  params: Promise<{
    id: string;
  }>;
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
  const [project, setProject] = useState<DetailProject | undefined>(undefined);

  const fetchParams = async () => {
    const resolveParams = await params;
    const foundProject = projectsData.find(
      (item) => item.id === resolveParams.id
    );

    setProject(foundProject);
  };

  useEffect(() => {
    fetchParams();
  }, [params]);

  if (!project) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-highBlack text-white text-3xl">
        Proje bulunamadı!
      </div>
    );
  }
  return (
    <div className="w-11/12 h-screen flex flex-col items-center justify-evenly text-white pt-8">
      {project && (
        <>
          <div className="w-full p-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
            <video
              src={project.video}
              className="w-full rounded-lg  z-10"
              controls
            />
          </div>

          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full flex items-center justify-between my-8">
              <div className="w-2/12 h-full flex flex-col items-start justify-start md:justify-center">
                <div className="w-full h-2/5 flex items-start md:items-center justify-start mb-2">
                  <p className="text-xl font-bold">Linkler</p>
                </div>

                <div className="w-full h-2/5 flex items-start md:items-center justify-start text-lg">
                  <Link
                    href={project.live}
                    className="mr-4 text-purple-500  hover:text-neutral-500"
                  >
                    <TbWorld />
                  </Link>

                  <Link
                    href={project.github}
                    className="mr-4 text-blue-500  hover:text-neutral-500"
                  >
                    <FaGithub />
                  </Link>
                </div>
              </div>
              <div className="w-8/12 md:w-10/12 flex flex-col">
                <div className="w-full h-2/5 flex items-center justify-start mb-2">
                  <p className="text-xl font-bold">Açıklama</p>
                </div>

                <div className="w-full h-2/5 flex items-center justify-start">
                  <p className="text-sm text-neutral-300">
                    {project.description.title}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex md:flex-row flex-col">
              <div className="w-full md:w-6/12 flex flex-col my-4">
                <p className="text-xl font-bold m-2">Özellikler</p>
                {project.description.Features.map((item, index) => (
                  <p className="text-neutral-300 flex" key={index}>
                    {item}
                  </p>
                ))}
              </div>

              <div className="w-full md:w-6/12 flex flex-col my-4">
                <p className="text-xl font-bold m-2">Teknolojiler</p>
                {project.description.technologies.map((item, index) => (
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
