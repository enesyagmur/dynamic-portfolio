import React, { RefObject } from "react";
import { WavyBackground } from "./ui/wavy-background";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import Link from "next/link";
import FormContact from "./FormContact";

interface ContactProps {
  reference: RefObject<HTMLDivElement | null>;
}

const Contact: React.FC<ContactProps> = ({ reference }) => {
  return (
    <div
      ref={reference}
      className="w-full h-[800px]  flex items-center justify-center relative overflow-hidden md:mt-8"
    >
      <WavyBackground />
      <div className="w-full h-full  md:w-10/12 lg:w-8/12 md:h-5/6   lg:h-3/6  flex flex-col-reverse md:flex-row items-center justify-center rounded-lg z-10 ">
        <FormContact />
        <div className="w-11/12 md:w-4/12 md:h-full h-1/6 flex flex-col items-center justify-start">
          <p className="w-full h-[50px] flex items-center justify-start">
            Frontend Developer
          </p>
          <p className="w-full h-[50px] flex items-center justify-start">
            enesyagmuroffical@gmail.com
          </p>
          <div className="w-full h-[50px] flex justify-start items-center text-2xl">
            <Link href="https://www.linkedin.com/in/enes-ya%C4%9Fmur-4b6201249/">
              <FaLinkedin className="hover:text-blue-500 cursor-pointer" />
            </Link>

            <Link href="https://github.com/enesyagmur">
              <FaSquareGithub className="ml-2 hover:text-purple-500 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
