"use client";
import React, { useState } from "react";

const FormContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    const response = await fetch("/api/sendEmail.ts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    if (result.success) {
      setStatus("E-posta gönderildi");
    } else {
      setStatus("E-posta gönderilemedi X");
    }
  };

  return (
    <form
      className="w-full h-4/6 md:w-10/12 lg:w-8/12 md:h-full flex flex-col items-center md:items-start justify-evenly md:justify-between text-black"
      action=""
      onSubmit={handleSubmit}
    >
      <div className="w-11/12 h-[50px] flex items-center justify-between">
        <input
          type="text"
          className="w-4/12 h-full bg-white pl-2 rounded-lg"
          placeholder="İsim:"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          className="w-7/12 h-full bg-white pl-2 rounded-lg"
          placeholder="Email:"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <input
        type="text"
        className="w-11/12 h-[50px] bg-white pl-2 rounded-lg"
        placeholder="Konu:"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
      />
      <textarea
        className="w-11/12 bg-white p-2 rounded-lg"
        placeholder="Mesaj:"
        id=""
        rows={5}
        name="message"
        value={formData.message}
        onChange={handleChange}
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
