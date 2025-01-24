"use client";

import { useState } from "react";

const FormContact = () => {
  const [formStatus, setFormStatus] = useState<"default" | "success" | "error">(
    "default"
  );
  const [key, setKey] = useState(0);

  const formLink = `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORM_ID}`;

  const resetKey = () => {
    setTimeout(() => {
      setKey((prevKey) => prevKey + 1);
    }, 1000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const response = await fetch(formLink, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setFormStatus("success");
      resetKey();
    } else {
      setFormStatus("error");
      resetKey();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      key={key}
      className="w-full h-4/6 md:w-10/12 lg:w-8/12 md:h-full flex flex-col items-center md:items-start justify-evenly md:justify-between text-black"
    >
      <div className="w-11/12 h-[50px] flex items-center justify-between">
        <input
          type="text"
          className="w-4/12 h-full bg-white pl-2 rounded-lg"
          placeholder="İsim:"
          name="name"
          aria-label="İsim"
          required
        />
        <input
          type="email"
          className="w-7/12 h-full bg-white pl-2 rounded-lg"
          placeholder="Email:"
          name="email"
          aria-label="Email"
          required
        />
      </div>
      <input
        type="text"
        className="w-11/12 h-[50px] bg-white pl-2 rounded-lg"
        placeholder="Konu:"
        name="subject"
        aria-label="Konu"
        required
      />
      <textarea
        className="w-11/12 bg-white p-2 rounded-lg"
        placeholder="Mesaj:"
        rows={4}
        name="message"
        aria-label="Mesaj"
        required
      ></textarea>
      <button
        type="submit"
        className="w-11/12 h-[40px] bg-purple-500 text-white hover:bg-blue-500 rounded-lg"
      >
        Gönder
      </button>
      {formStatus === "success" && (
        <p className="text-green-500 mt-2">Mesajınız başarıyla gönderildi!</p>
      )}
      {formStatus === "error" && (
        <p className="text-red-500 mt-2">
          Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.
        </p>
      )}
    </form>
  );
};

export default FormContact;
