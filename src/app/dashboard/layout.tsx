"use client";
import NavBar from "@/components/NavBar";
import Sidebar from "@/components/SideBar";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.push("/login");
    }
  }, [session, status, router]);

  if (status === "loading") return <Loading />; // Prevent flicker

  return (
    <div className="h-screen flex overflow-auto">
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
