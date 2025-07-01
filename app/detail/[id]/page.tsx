"use client";

import React, { useMemo, useState, useCallback } from "react";
import { TbArrowLeft, TbEye, TbCode } from "react-icons/tb";
import { HiSparkles } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/store";
import { fetchProjects } from "@/features/projectsThunk";
import type { Project } from "@/lib/types";
import { BiPause, BiPlay } from "react-icons/bi";

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
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null);

  React.useEffect(() => {
    if (!projects.length) {
      dispatch(fetchProjects());
    }
  }, [dispatch, projects.length]);

  const project: Project | undefined = useMemo(
    () => projects.find((item) => item.id === id),
    [projects, id]
  );

  const handleVideoPlay = useCallback(() => {
    if (videoRef) {
      if (isPlaying) {
        videoRef.pause();
      } else {
        videoRef.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [videoRef, isPlaying]);

  const handleVideoLoaded = useCallback(() => {
    setIsVideoLoaded(true);
  }, []);

  if (loading) return <Loading />;
  if (error) return <SomethingWrong message={error} />;
  if (!project) return <NoData />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200/50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 group"
          >
            <TbArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform duration-300"
            />
            <span className="text-sm font-medium">Projeler</span>
          </Link>

          <div className="flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm">
            <HiSparkles className="text-yellow-500 text-sm" />
            <span className="text-xs font-medium text-gray-700">
              Proje Detayı
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {project.name}
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            {project.description.title}
          </p>
        </div>

        {/* Video/Image Section */}
        <div className="relative mb-8 group">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-r from-blue-100 to-purple-100 p-1">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-white shadow-lg">
              {!isVideoLoaded && (
                <>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 1200px"
                    priority
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
                  </div>
                </>
              )}

              <video
                ref={setVideoRef}
                src={project.video}
                className="w-full h-full object-cover"
                onLoadedData={handleVideoLoaded}
                style={{ display: isVideoLoaded ? "block" : "none" }}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Custom Play Button */}
              {isVideoLoaded && (
                <button
                  onClick={handleVideoPlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg">
                    {isPlaying ? (
                      <BiPause size={24} className="text-gray-700" />
                    ) : (
                      <BiPlay size={24} className="text-gray-700 ml-1" />
                    )}
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                Proje Hakkında
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {project.description.title}
              </p>
            </div>

            {/* Features */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Özellikler
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.description.Features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white/50 rounded-lg hover:bg-white/80 transition-all duration-300 border border-gray-100"
                  >
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Stats */}
            <div className="bg-gradient-to-br from-white/70 to-gray-50/70 backdrop-blur-sm rounded-xl p-2 border border-gray-200/50 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Proje İstatistikleri
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2 bg-white/50 rounded-lg">
                  <span className="text-gray-600 text-sm">
                    Teknoloji Sayısı
                  </span>
                  <span className="text-gray-900 font-bold">
                    {project.description.technologies.length}
                  </span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white/50 rounded-lg">
                  <span className="text-gray-600 text-sm">Özellik Sayısı</span>
                  <span className="text-gray-900 font-bold">
                    {project.description.Features.length}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Quick Actions */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-gray-200/50 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Proje Linkleri
              </h3>
              <div className="space-y-3">
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                >
                  <TbEye
                    className="group-hover:scale-110 transition-transform duration-300"
                    size={18}
                  />
                  <span className="text-sm font-medium">Canlı Demo</span>
                </Link>

                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm text-gray-700 rounded-lg border border-gray-200 hover:bg-white hover:shadow-md hover:scale-105 transition-all duration-300 group"
                >
                  <TbCode
                    className="group-hover:scale-110 transition-transform duration-300"
                    size={18}
                  />
                  <span className="text-sm font-medium">Kaynak Kod</span>
                </Link>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-gray-200/50 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Teknolojiler
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.description.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-white/80 text-gray-700 rounded-full text-xs font-medium border border-gray-200 hover:bg-white hover:shadow-sm hover:scale-105 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Loading Component
const Loading = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mx-auto mb-4"></div>
      <p className="text-gray-600 font-medium">Yükleniyor...</p>
    </div>
  </div>
);

// Error Component
const SomethingWrong = ({ message }: { message: string }) => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
    <div className="text-center max-w-md mx-auto px-4">
      <div className="bg-white/70 backdrop-blur-sm border border-red-200 rounded-xl p-6 shadow-lg">
        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-red-500 text-xl">⚠️</span>
        </div>
        <h2 className="text-xl font-bold text-red-600 mb-2">Bir Hata Oluştu</h2>
        <p className="text-gray-600 text-sm mb-4">{message}</p>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          <TbArrowLeft size={16} />
          Projelere Dön
        </Link>
      </div>
    </div>
  </div>
);

// No Data Component
const NoData = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
    <div className="text-center max-w-md mx-auto px-4">
      <div className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-xl p-6 shadow-lg">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-gray-400 text-2xl">📁</span>
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Proje Bulunamadı
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Aradığınız proje mevcut değil veya kaldırılmış olabilir.
        </p>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          <TbArrowLeft size={16} />
          Projelere Dön
        </Link>
      </div>
    </div>
  </div>
);

export default Detail;
