"use client";
import React from "react";
import { MdErrorOutline } from "react-icons/md";

const SomethingWrong: React.FC<{ message?: string }> = ({ message }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12">
      <MdErrorOutline className="w-16 h-16 text-red-500 dark:text-red-400 mb-2" />
      <span className="mt-2 text-base md:text-lg text-red-600 dark:text-red-400 font-semibold text-center">
        {message || "Bir hata oluştu. Lütfen tekrar deneyin."}
      </span>
    </div>
  );
};

export default SomethingWrong;
