"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "fa", name: "Farsi", flag: "/assets/farsi.png" },
  { code: "pa", name: "Pashto", flag: "/assets/pashto.png" },
  { code: "en", name: "English", flag: "/assets/english.png" },
];

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const [selected, setSelected] = useState(languages[2]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("selectedLanguage") || "en";
    const language =
      languages.find((lng) => lng.code === savedLang) || languages[2];
    setSelected(language);
    i18n.changeLanguage(language.code);
  }, []);

  const changeLanguage = (language: {
    code: string;
    name: string;
    flag: string;
  }) => {
    setSelected(language);
    i18n.changeLanguage(language.code);
    localStorage.setItem("selectedLanguage", language.code);
    setIsOpen(false);
  };

  return (
    <div
      className="relative bg-white rounded-full w-24 h-8 flex items-center justify-center cursor-pointer px-2"
      onClick={() => setIsOpen(!isOpen)}
    >
      <Image src={selected.flag} alt={selected.name} width={25} height={25} />
      <span className="ml-0.5 text-sm text-black">{t(selected.name)}</span>

      {isOpen && (
        <div className="absolute top-8 left-0 w-32 bg-white shadow-md rounded-md mt-1">
          {languages.map((lng) => (
            <div
              key={lng.code}
              className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => changeLanguage(lng)}
            >
              <Image src={lng.flag} alt={lng.name} width={20} height={20} />
              <span>{t(lng.name)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
