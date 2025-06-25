"use client";

import React, { useMemo, useState } from "react";
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/store";
import { fetchProjects } from "@/features/projectsThunk";
import Loading from "@/components/ui/Loading";
import NoData from "@/components/ui/NoData";
import type { Project } from "@/lib/types";
import SomethingWrong from "@/components/ui/SomethingWrong";

interface DetailPageProps {
  params: Promise<{ id: string }>;
}

const Detail: React.FC<DetailPageProps> = ({ params }) => {
  const { id } = React.use(params);

  const dispatch = useDispatch<AppDispatch>();
  const { projects, loading, error } = useSelector(
    (state: RootState) => state.projects
  );

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  React.useEffect(() => {
    if (!projects.length) {
      dispatch(fetchProjects());
    }
  }, [dispatch, projects.length]);

  const project: Project | undefined = useMemo(
    () => projects.find((item) => item.id === id),
    [projects, id]
  );

  if (loading) return <Loading />;
  if (error) return <SomethingWrong message={error} />;
  if (!project) return <NoData />;

  return (
    <div className="w-11/12 min-h-screen flex flex-col items-center justify-evenly text-white pt-8">
      <div className="w-full p-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
        <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
          {!isVideoLoaded && (
            <>
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover rounded-lg opacity-80"
                sizes="(max-width: 768px) 100vw, 700px"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <Loading />
              </div>
            </>
          )}
          <video
            src={project.video}
            className="absolute inset-0 w-full h-full object-cover rounded-lg z-10"
            controls
            onLoadedData={() => setIsVideoLoaded(true)}
            style={{
              display: isVideoLoaded ? "block" : "none",
            }}
          />
        </div>
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
                className="mr-4 text-purple-500 hover:text-neutral-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbWorld />
              </Link>
              <Link
                href={project.github}
                className="mr-4 text-blue-500 hover:text-neutral-500"
                target="_blank"
                rel="noopener noreferrer"
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
    </div>
  );
};

export default Detail;
