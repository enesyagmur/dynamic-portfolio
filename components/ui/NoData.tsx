"use client";
import React from "react";
import { MdOutlineSearchOff } from "react-icons/md";

const NoData: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12">
      <MdOutlineSearchOff className="w-16 h-16 text-blue-400 dark:text-purple-400 mb-2" />
    </div>
  );
};

export default NoData;
