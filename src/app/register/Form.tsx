"use client";
import Image from "next/image";
import { FormEvent } from "react";

const Form = () => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        username: formData.get("username"),
        role: formData.get("role"),
        phone_number: formData.get("phone_number"),
        password: formData.get("password"),
      }),
      headers: { "content-Type": "application/json" },
    });
    const data = await response.json();
    console.log({ data });
  };

  return (
    <div className="grid justify-center py-3">
      <form
        className="grid justify-center w-110 h-150 content-center rounded-md bg-lime-200"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col px-23 pb-4">
          <h1 className="grid justify-center">Register Page</h1>
          <Image
            className="grid justify-center"
            src="/assets/logo.png"
            width={70}
            height={70}
            alt="logo"
          />
        </div>
        <label className="text-sm font-serif">Name:</label>
        <input
          className=" w-70 h-10 border-3 border-lime-500 rounded-md p-2 text-sm"
          type="text"
          name="name"
          placeholder="enter name"
        />
        <label className="text-sm font-serif">Email Address:</label>
        <input
          className=" w-70 h-10 border-3 border-lime-500 rounded-md p-2 text-sm"
          type="email"
          name="email"
          placeholder="enter email"
        />
        <label className="text-sm font-serif">Username:</label>
        <input
          className=" w-70 h-10 border-3 border-lime-500 rounded-md p-2 text-sm"
          type="text"
          name="username"
          placeholder="enter username"
        />
        <label className="text-sm font-serif">Role:</label>
        <input
          className=" w-70 h-10 border-3 border-lime-500 rounded-md p-2 text-sm"
          type="text"
          name="role"
          placeholder="select the role"
        />
        <label className="text-sm font-serif">Phone Number:</label>
        <input
          className=" w-70 h-10 border-3 border-lime-500 rounded-md p-2 text-sm"
          type="number"
          name="phone_number"
          placeholder="enter the phone number"
        />
        <label className="text-sm font-serif">Password:</label>
        <input
          className=" w-70 h-10 border-3 border-lime-500 rounded-md p-2 text-sm"
          type="password"
          name="password"
          placeholder="enter password"
        />
        <button
          type="submit"
          className="bg-amber-400 my-2 py-2 rounded-md cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
