"use client";

import { auth } from "@/firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  const loginHandle = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;

      if (user) {
        console.log("Giriş başarılı");
        router.push("/admin");
      }
    } catch (err) {
      console.log("Google ile girişte hata ", err);
    }
  };

  return (
    <div className="w-full h-screen bg-black text-white flex items-center justify-center">
      <div className="w-80 h-32 flex flex-col items-center justify-evenly">
        <input
          type="text"
          placeholder="Email"
          className="w-80 h-8 p-2 text-black"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Şifre"
          className="w-80 h-8 p-2 text-black"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-64 h-10 p-2 bg-gray-500" onClick={loginHandle}>
          Kayıt
        </button>
      </div>
    </div>
  );
};

export default Login;
