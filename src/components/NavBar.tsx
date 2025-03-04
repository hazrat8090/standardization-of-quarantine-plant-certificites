"use client";
import Image from "next/image";
import React, { useState } from "react";

const languages = [
  { code: "fa", name: "Farsi", flag: "/assets/farsi.png" },
  { code: "pa", name: "Pashto", flag: "/assets/pashto.png" },
  { code: "en", name: "English", flag: "/assets/english.png" },
];

const NavBar = () => {
  const [selected, setSelected] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

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
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none text-white"
        />
      </div>

      <div className="flex items-center gap-6 justify-end w-full">
        <div
          className="relative bg-white rounded-full w-24 h-8 flex items-center justify-center cursor-pointer px-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image
            src={selected.flag}
            alt={selected.name}
            width={35}
            height={35}
          />
          <span className="ml-2 text-sm text-black">{selected.name}</span>

          {isOpen && (
            <div className="absolute top-9 left-0 w-32 bg-white shadow-md rounded-md mt-1">
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelected(lang);
                    setIsOpen(false);
                  }}
                >
                  <Image
                    src={lang.flag}
                    alt={lang.name}
                    width={20}
                    height={20}
                  />
                  <span>{lang.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

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

        {/* User Info */}
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium text-white">
            Hazrat Sultani
          </span>
          <span className="text-[10px] text-gray-200 text-right">Admin</span>
        </div>

        {/* User Avatar */}
        <Image
          src="/assets/avatar1.png"
          alt="User Avatar"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default NavBar;
