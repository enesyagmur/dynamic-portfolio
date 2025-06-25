"use client";
import React, { useEffect } from "react";
import { SparklesCore } from "./ui/Sparkles";
import SingleProject from "./SingleProject";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/store";
import { fetchProjects } from "@/features/projectsThunk";
import Loading from "./ui/Loading";
import SomethingWrong from "./ui/SomethingWrong";
import NoData from "./ui/NoData";

export function Projects() {
  const dispatch = useDispatch<AppDispatch>();
  const { projects, loading, error } = useSelector(
    (state: RootState) => state.projects
  );

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  let content = null;
  if (loading) {
    content = <Loading />;
  } else if (error) {
    content = <SomethingWrong message={error} />;
  } else if (!projects.length) {
    content = <NoData />;
  } else {
    content = (
      <div className="w-full md:w-10/12 flex flex-wrap">
        {projects.map((item) => (
          <SingleProject key={item.id} item={item} />
        ))}
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center relative">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.1}
        maxSize={1}
        particleDensity={100}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />

      <div className="w-full h-[150px] flex items-center justify-center">
        <p className="text-3xl md:text-5xl">PROJELER</p>
      </div>

      {content}
    </div>
  );
}
