"use client";
import React from "react";

const FormContact = () => {
  const formLink: string = `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORM_ID}`;

  return (
    <form
      className="w-full h-4/6 md:w-10/12 lg:w-8/12 md:h-full flex flex-col items-center md:items-start justify-evenly md:justify-between text-black"
      action={formLink}
      method="POST"
    >
      <div className="w-11/12 h-[50px] flex items-center justify-between">
        <input
          type="text"
          className="w-4/12 h-full bg-white pl-2 rounded-lg"
          placeholder="İsim:"
          name="name"
        />
        <input
          type="email"
          className="w-7/12 h-full bg-white pl-2 rounded-lg"
          placeholder="Email:"
          name="email"
        />
      </div>
      <input
        type="text"
        className="w-11/12 h-[50px] bg-white pl-2 rounded-lg"
        placeholder="Konu:"
        name="subject"
      />
      <textarea
        className="w-11/12 bg-white p-2 rounded-lg"
        placeholder="Mesaj:"
        id=""
        rows={4}
        name="message"
      ></textarea>
      <button
        type="submit"
        className="w-11/12 h-[40px] bg-purple-500 text-white hover:bg-blue-500 rounded-lg"
      >
        Gönder
      </button>
    </form>
  );
};

export default FormContact;
