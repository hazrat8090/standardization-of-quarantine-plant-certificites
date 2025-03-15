import { IoHomeOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { TbReportSearch } from "react-icons/tb";
import { FaFileInvoice } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";
import { GrCertificate } from "react-icons/gr";
import { IoNotificationsSharp } from "react-icons/io5";
import { MdContactSupport } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";

const menuItems = [
  {
    icons: IoHomeOutline,
    label: "Home",
    href: "/dashboard",
  },
  {
    icons: FaUsers,
    label: "Users",
    href: "/dashboard/list/users",
  },
  {
    icons: FaFileInvoice,
    label: "Invoices",
    href: "/dashboard/list/invoices",
  },
  {
    icons: VscGitPullRequestNewChanges,
    label: "Applications",
    href: "/dashboard/list/applications",
  },
  {
    icons: GrCertificate,
    label: "Certificates",
    href: "/dashboard/list/certificates",
  },
  {
    icons: TbReportSearch,
    label: "Reports",
    href: "/dashboard/list/reports",
  },
  {
    icons: IoNotificationsSharp,
    label: "Notifications",
    href: "/dashboard/list/notifications",
  },
  {
    icons: MdContactSupport,
    label: "helpandsupport",
    href: "/dashboard/list/helpandsupport",
  },

  {
    icons: CiSettings,
    label: "Settings",
  },
];

export default menuItems;
