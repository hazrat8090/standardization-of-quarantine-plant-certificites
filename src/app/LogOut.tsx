"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const LogOut = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/login");
  };
  return (
    <button
      onClick={handleLogout}
      className="bg-red-400 text-white px-4 py-1 rounded cursor-pointer"
    >
      Logout
    </button>
  );
};

export default LogOut;
