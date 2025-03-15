"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const UsersChart = ({ count = 3, descriptionKey = "users_online" }) => {
  const { t } = useTranslation();
  return (
    <div className=" flex flex-col justify-center items-center rounded-2xl bg-purple-200 p-4 flex-1 min-w-[130px]">
      <div className="w-32 h-32 bg-cyan-400 rounded-full flex flex-col items-center justify-center shadow-lg">
        <Image
          src="/assets/student.png"
          width={40}
          height={40}
          alt="users"
          className="text-white"
        />
        <span className="text-white text-3xl font-semibold">{count}</span>
      </div>
      {/* Label */}
      <p className="text-green-800 mt-2 text-lg font-medium">
        {t(descriptionKey)}
      </p>
    </div>
  );
};

export default UsersChart;
