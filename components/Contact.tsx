import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="w-full h-[800px]  flex items-center justify-center relative overflow-hidden md:mt-8">
      <WavyBackground />
      <div className="w-full h-full  md:w-10/12 lg:w-8/12 md:h-5/6   lg:h-3/6  flex flex-col-reverse md:flex-row items-center justify-center rounded-lg z-10 ">
        <form
          className="w-full h-4/6 md:w-10/12 lg:w-8/12 md:h-full flex flex-col items-center md:items-start justify-evenly md:justify-between "
          action=""
        >
          <div className="w-11/12 h-[50px] flex items-center justify-between">
            <input
              type="text"
              className="w-4/12 h-full bg-white pl-2"
              placeholder="İsim:"
            />
            <input
              type="text"
              className="w-7/12 h-full bg-white pl-2"
              placeholder="Email:"
            />
          </div>
          <input
            type="text"
            className="w-11/12 h-[50px] bg-white pl-2"
            placeholder="Konu:"
          />
          <textarea
            className="w-11/12 bg-white p-2"
            placeholder="Mesaj:"
            name="message"
            id=""
            rows={5}
          ></textarea>
          <button className="w-11/12 h-[40px] bg-purple-500 text-white hover:bg-blue-500">
            Gönder
          </button>
        </form>
        <div className="w-11/12 md:w-4/12 md:h-full h-1/6 flex flex-col items-center justify-start">
          <p className="w-full h-[50px] flex items-center justify-start">
            Frontend Developer
          </p>
          <p className="w-full h-[50px] flex items-center justify-start">
            enesyagmuroffical@gmail.com
          </p>
          <div className="w-full h-[50px] flex justify-start items-center text-2xl">
            <FaLinkedin className="hover:text-blue-500 cursor-pointer" />
            <FaSquareGithub className="ml-2 hover:text-purple-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
