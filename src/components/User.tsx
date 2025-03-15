"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

const User = () => {
  const { data: session } = useSession();

  return (
    <>
      {session?.user && (
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium text-white">
            {session.user.name}
          </span>
          <span className="text-[10px] text-gray-200 text-right">
            {session.user.role}
          </span>
        </div>
      )}
      <Image
        src="/assets/avatar1.png"
        alt="User Avatar"
        width={35}
        height={35}
        className="rounded-full"
      />
    </>
  );
};

export default User;
