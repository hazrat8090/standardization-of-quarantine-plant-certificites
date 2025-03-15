"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";
import { useTranslation } from "react-i18next";

const Form = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    console.log(response);
    if (!response?.error) {
      router.push("/dashboard");
      router.refresh();
    }
  };

  return (
    <div className="grid justify-center py-6 ">
      <form
        className="grid justify-center w-100 h-120 content-center rounded-md bg-lime-200"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col px-25 pb-4 ">
          <h1 className="grid justify-center">{t("login_page")}</h1>
          <Image
            className="grid justify-center pb-6"
            src="/assets/logo.png"
            width={70}
            height={70}
            alt="logo"
          />
        </div>
        <label>{t("Email")}:</label>
        <input
          className=" w-70 h-10 border-3 border-lime-500 rounded-md p-2"
          type="email"
          name="email"
          placeholder="enter email address"
        />
        <label>{t("Password")}:</label>
        <input
          className=" w-70 h-10 border-3 border-lime-500 rounded-md p-2"
          type="password"
          name="password"
          placeholder="enter password"
        />
        <button className="bg-amber-400 my-2 py-2 rounded-md cursor-pointer">
          {t("login")}
        </button>
      </form>
    </div>
  );
};

export default Form;
