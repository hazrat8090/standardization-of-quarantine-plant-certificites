"use client";
import { useState } from "react";
import "../lib/menuItems";
import menuItems from "../lib/menuItems";
import { MdMenuOpen } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const { t } = useTranslation();

  return (
    <nav
      className={`shadow-md min-h-screen p-2 flex flex-col duration-500 bg-lime-700 rounded-sm text-white ${
        open ? "w-60" : "w-16"
      }`}
    >
      {/* Header */}
      <div className=" px-3 py-2 h-20 flex justify-between items-center">
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width={30}
          height={30}
          className={`${open ? "w-16" : "w-0"} rounded-md`}
        />
        <div>
          <MdMenuOpen
            size={34}
            className={`duration-500 cursor-pointer ${!open && " rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>
      <ul className="flex-1">
        {menuItems.map((item, index) => {
          const IconComponent = item.icons;
          return (
            <li
              key={index}
              className="px-3 py-1 my-2 hover:bg-lime-500 rounded-md duration-300 cursor-pointer flex gap-6 items-center relative group"
            >
              <div>
                <IconComponent size={20} />
              </div>
              <Link
                href={item.href ?? "#"}
                key={item.label}
                className="flex items-center lg:justify-start gap-2 text-white md:px-2 rounded-md hover:bg-lamaSkyLight"
              >
                {" "}
                <span
                  className={`${
                    !open && "w-0 translate-x-24"
                  } duration-500 overflow-hidden `}
                >
                  {t(item.label.toLowerCase())}
                </span>
              </Link>

              <p
                className={`${
                  open && "hidden"
                } absolute left-32 shadow-md rounded-md
                   w-0 p-0 text-black bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16
                  `}
              >
                {t(item.label.toLowerCase())}
              </p>
            </li>
          );
        })}
      </ul>
      {/* footer */}
      <div className="flex items-center gap-2 px-3 py-2">
        <div>
          {/* <FaUserCircle size={30} /> */}
          <Image
            className="rounded-full"
            src="/assets/avatar1.png"
            alt="user"
            width={45}
            height={45}
          />
        </div>
        <div
          className={`leading-5 ${
            !open && "w-0 translate-x-24"
          } duration-500 overflow-hidden`}
        >
          <p>Sultan</p>
          <span className="text-xs">sultan@gmail.com</span>
        </div>
      </div>
    </nav>
  );
}
