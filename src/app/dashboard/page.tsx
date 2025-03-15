import CertificatesChart from "@/components/charts/CertificatesChart";
import InvoicesChart from "@/components/charts/InvoicesChart";
import NotificationsChart from "@/components/charts/NotificationsChart";
import ReportsChart from "@/components/charts/ReportsChart";
import SystemLogs from "@/components/charts/SystemLogs";
import UsersChart from "@/components/charts/UsersChart";
import React from "react";

const Admin = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row bg-lime-100">
      <div className="w-full lg:w-3/3 flex flex-col gap-6">
        {/* user card */}
        <div className="flex gap-4 flex-wrap ">
          <div className=" flex flex-row w-3/3 gap-2 min-w-[150px] h-[200px]">
            <UsersChart count={13} descriptionKey="users_online" />
            <UsersChart count={27} descriptionKey="users_offline" />
            <UsersChart count={40} descriptionKey="users_total" />
          </div>
        </div>

        {/* middle chart */}
        <div>
          <div className="flex gap-4 flex-col lg:flex-row ">
            <div className="flex flex-row gap-2 lg:w-2/3 h-[450px]">
              <InvoicesChart />
              <CertificatesChart />
              <SystemLogs />
            </div>
          </div>
          <div className="flex gap-2 flex-col w-200 lg:flex-row">
            <div className="flex flex-row mt-2 lg:w-2/3 h-[450px]">
              {/* <Announcements /> */}
              <ReportsChart />
            </div>
            <div className="flex flex-row mt-2 lg:w-2/3 h-[450px]">
              {/* <Announcements /> */}
              <NotificationsChart />
            </div>
          </div>
        </div>

        {/* bottom chart */}
        <div className="w-full h-[500px]">{/* <FinanceChart /> */}</div>
      </div>
    </div>
  );
};

export default Admin;
