import NavBar from "@/components/NavBar";
import Sidebar from "@/components/SideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex overflow-auto">
      {/* Left Sidebar */}
      {/* previousley it was this: classname: w-[16%] md:w-[8%] lg:w-[16%] xl:w-[19%] */}
      <div className="">
        {/* <Link href="/" className="flex justify-center items-center gap-2 mt-2">
          <Image src="/logo.png" width={30} height={30} alt="logo" />
          <span>SQPC</span>
        </Link> */}
        <Sidebar />
      </div>

      {/* Right Content */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <NavBar />
        {children}
      </div>
    </div>
  );
}
