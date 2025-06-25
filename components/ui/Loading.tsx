"use client";
import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center min-h-[200px]">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-transparent border-t-blue-500 border-l-blue-500 rounded-full animate-spin dark:border-t-purple-400 dark:border-l-purple-400"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="w-6 h-6 bg-blue-500 dark:bg-purple-400 rounded-full opacity-80"></span>
          </div>
        </div>
        <span className="mt-4 text-neutral-600 dark:text-neutral-300 text-base font-medium tracking-wide animate-pulse">
          Yükleniyor...
        </span>
      </div>
    </div>
  );
};

export default Loading;
