"use client";
import LogOut from "@/app/LogOut";
import Image from "next/image";
import React from "react";
import User from "./User";
import Language from "./localization/LanguageSelector";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-between p-4 bg-lime-700 rounded-sm">
      {/* Search bar */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-200">
        <Image
          src="/assets/search1.png"
          className="px-2"
          height={35}
          width={35}
          alt="search"
        />
        <input
          type="text"
          placeholder={t("Search")}
          className="w-[200px] p-2 bg-transparent outline-none text-white"
        />
      </div>

      <div className="flex items-center gap-6 justify-end w-full">
        {/* language */}
        <Language />

        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image
            src="/assets/message1.png"
            alt="Messages"
            width={20}
            height={20}
          />
        </div>

        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image
            src="/assets/announcement1.png"
            alt="Notifications"
            width={20}
            height={20}
          />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-green-500 text-white rounded-full text-xs">
            9+
          </div>
        </div>
        {/* log out */}
        <LogOut />

        {/* User Info */}
        <User />
      </div>
    </div>
  );
};

export default NavBar;
