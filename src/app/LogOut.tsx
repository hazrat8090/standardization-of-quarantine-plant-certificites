"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useTranslation } from "react-i18next";

const LogOut = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/login");
  };
  return (
    <button
      onClick={handleLogout}
      className="bg-red-400 text-white px-4 py-1 rounded cursor-pointer"
    >
      {t("LogOut")}
    </button>
  );
};

export default LogOut;
