import { IoHomeOutline } from "react-icons/io5";
import { FaProductHunt } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { IoLogoBuffer } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import { FaFileInvoice } from "react-icons/fa";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { GoListOrdered } from "react-icons/go";
import { MdOutlinePriceChange } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import { TbListDetails } from "react-icons/tb";

const menuItems = [
  {
    icons: IoHomeOutline,
    label: "Home",
  },
  {
    icons: MdOutlineDashboard,
    label: "Dashboard",
  },
  {
    icons: FaFileInvoice,
    label: "Invoices",
  },
  {
    icons: LiaFileInvoiceDollarSolid,
    label: "Quotes",
  },
  {
    icons: GoListOrdered,
    label: "Purchase Orders",
  },
  {
    icons: MdOutlinePriceChange,
    label: "Landed Costs",
  },
  {
    icons: FaProductHunt,
    label: "Products",
  },
  {
    icons: IoIosContacts,
    label: "Contacts",
  },
  {
    icons: TbListDetails,
    label: "Details",
  },
  {
    icons: CiSettings,
    label: "Setting",
  },
  {
    icons: IoLogoBuffer,
    label: "Log",
  },
  {
    icons: TbReportSearch,
    label: "Report",
  },
];

export default menuItems;
