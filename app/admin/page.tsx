"use client";

import { auth } from "@/firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Admin = () => {
  const router = useRouter();

  const checkUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.back();
      } else {
        console.log(user);
      }
    });
  };

  useEffect(() => {
    checkUser();
  }, []);

  return <div>Admin</div>;
};

export default Admin;
