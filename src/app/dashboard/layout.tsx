"use client";
import NavBar from "@/components/NavBar";
import Sidebar from "@/components/SideBar";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";
import i18next from "i18next";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.push("/login");
    }
  }, [session, status, router]);

  const updateDirection = (lang: string) => {
    const newDirection = lang === "fa" || lang === "pa" ? "rtl" : "ltr";
    setDirection(newDirection);
    document.documentElement.dir = newDirection; // Set global direction
  };
  // selecting the language
  useEffect(() => {
    const savedLang = localStorage.getItem("selectedLanguage") || "en";
    i18next.changeLanguage(savedLang);
    updateDirection(savedLang);

    const handleLanguageChange = (lng: string) => {
      updateDirection(lng);
    };

    i18next.on("languageChanged", handleLanguageChange);
    return () => {
      i18next.off("languageChanged", handleLanguageChange);
    };
  }, []);

  if (status === "loading") return <Loading />;

  return (
    <div
      className={`h-screen flex overflow-auto ${
        direction === "rtl" ? "rtl" : "ltr"
      }`}
    >
      {/* left content */}
      <Sidebar />
      {/* right content */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <NavBar />
        {children}
      </div>
    </div>
  );
}
