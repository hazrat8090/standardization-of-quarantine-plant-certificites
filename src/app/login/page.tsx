"use client";
import React, { useEffect } from "react";
import Form from "./Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard"); // Redirect to home if logged in
    }
  }, [session, status, router]);

  if (status === "loading") return <p>Loading...</p>;

  return <Form />;
}
