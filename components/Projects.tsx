"use client";

import React, { useEffect, memo, useState, useRef } from "react";
import SingleProject from "./SingleProject";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import type { RootState, AppDispatch } from "@/store";
import { fetchProjects } from "@/features/projectsThunk";
import { HiSparkles } from "react-icons/hi2";
import type { Project } from "@/lib/types";

export const Projects = memo(function Projects() {
  const dispatch = useDispatch<AppDispatch>();
  const { projects, loading, error } = useSelector(
    (state: RootState) => state.projects,
    shallowEqual
  );

  const [isVisible, setIsVisible] = useState(false);
  const fetchedRef = useRef(false);

  useEffect(() => {
    if (!fetchedRef.current) {
      dispatch(fetchProjects());
      fetchedRef.current = true;
    }
    setIsVisible(true);
  }, [dispatch]);

  const safeProjects = Array.isArray(projects) ? projects : [];

  return (
    <section
      id="projects"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-10 blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-15 blur-xl animate-pulse delay-1000"></div>

      {/* Header */}
      <div
        className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm mb-6">
          <HiSparkles className="text-purple-500 text-lg" />
          <span className="text-sm font-medium text-gray-700">Portföyüm</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Projelerim
          </span>
        </h2>

        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto rounded-full mb-6"></div>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Geliştirdiğim modern web projeleri ve çözümler. Her biri farklı
          teknolojiler ve yaratıcı yaklaşımlar içeriyor.
        </p>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin"></div>
            <div className="absolute top-0 left-0 w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-gray-600 text-lg mt-4 animate-pulse">
            Projeler yükleniyor...
          </p>
        </div>
      )}

      {/* Error State */}
      {!loading && error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
          <div className="text-red-600 text-lg font-semibold mb-2">
            Üzgünüz, bir hata oluştu
          </div>
          <p className="text-red-500">{error}</p>
        </div>
      )}

      {/* Projects Grid */}
      {!loading && !error && safeProjects.length > 0 && (
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {safeProjects.map((item: Project, index: number) => (
            <div
              key={item.id || index}
              className="transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <SingleProject item={item} />
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && safeProjects.length === 0 && (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Bu kategoride proje bulunamadı
          </h3>
          <p className="text-gray-500">
            Diğer kategorileri kontrol edebilir veya tüm projeleri
            görüntüleyebilirsiniz.
          </p>
        </div>
      )}
    </section>
  );
});
