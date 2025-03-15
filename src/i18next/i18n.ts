import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en",
    resources: {
      fa: {
        translation: {
          // Navigation bar Translation
          Farsi: "فارسی",
          Pashto: "پښتو",
          English: "انگلیسی",
          LogOut: "خروج از سیستم",
          Search: "جستجو...",
          //   Login Page Translation
          login_page: "صفحه ورود",
          Email: "ایمیل",
          Password: "رمز عبور",
          login: "ورود به سیستم",
          //   Registration Page Translation
          register_page: "صفحه ثبت نام ",
          name: "نام",
          username: "نام کاربری",
          role: "نقش",
          phone_number: "شماره تماس",
          submit: "وارد کردن",
          // sidebar translation
          home: "صفحه عمومی",
          users: "کاربران",
          invoices: "فاکتور ها",
          applications: "درخواست ها",
          certificates: "سرتیفیکیت ها",
          reports: "گزارشات",
          notifications: "اعلانات",
          helpandsupport: "کمک و حمایت",
          settings: "تنظیمات",
          // usersChart translation
          users_online: "کاربران که در حال حاظر آنلاین هستند",
          users_offline: "کاربران که در حال حاظر آفلاین هستند",
          users_total: "مجموع کاربران",
          // Invoices Translation
          invoice_summary: "خلاصه پیش فاکتور",
          received: "دریافت شده",
          postponed: "تعویق افتاده",
          invoiced: "پرداخت شده",
          cancelled: "رد شده",
          // certificates translation
          verified: "تایید شده",
          expired: "منقضی شده ",
          expiring_in_one_week: "یک هفته دیگر منقضی می شود",
          expiring_in_on_week_thirty_days:
            "در عرض یک هفته و 30 روز منقضی می شود",
          expiring_in_thirity_ninety_days: "در مدت 30 و 90 روز منقضی می شود",
          expiring_after_ninety_days: "پس از 90 روز منقضی می شود",
          // system logs translation
          system_logs: "گزارش های سیستم",
          view_all: "نمایش همه",
          show_less: "نمایش کمتر",
          // report overview translation
          report_overview: "گزارش اجمالی",
          issued: "صادر شده",
          pending: "در انتظار",
          rejected: "رد شده",
          inspections: "باز رسی شده ها",
          // notifications chart translation
          new_requests: "در خواست های جدید",
          approved: "تایید شده",
          notifications_summary: "خلاصه اعلانات",
        },
      },
      pa: {
        translation: {
          // Navigation bar Translation
          Farsi: "فارسی",
          Pashto: "پښتو",
          English: "انگلیسی",
          LogOut: " وتل",
          Search: "لټون...",
          //   Login Page Translation
          login_page: " ننوت پاڼه",
          Email: "بریښنالیک",
          Password: "رمز ",
          login: "ننوت",
          //   Registration Page Translation
          register_page: "د ثبت پاڼه ",
          name: "نوم",
          username: "کارن نوم",
          role: "رول",
          phone_number: "د تلیفون شمیره",
          sumbit: "اسپارل",
          // sidebar translation
          home: "عمومي پاڼه",
          users: "کاروونکي",
          invoices: "رسیدونه",
          applications: "غوښتنلیکونه",
          certificates: "سندونه",
          reports: "راپورونه",
          notifications: "خبرتیاوې",
          helpandsupport: "مرسته او ملاتړ",
          settings: "ترتیبات",
          // usersChart translation
          users_online: "کاروونکي اوس مهال آنلاین",
          users_offline: "کاروونکي اوس مهال آفلاین",
          users_total: " ټول کارونکي",
          // Invoices Translation
          invoice_summary: "د رسید لنډیز",
          received: "ترلاسه شوی",
          postponed: "ځنډول شوی",
          invoiced: "رسید",
          cancelled: "لغوه شوی",
          // certificates translation
          verified: "تصدیق شوی",
          expired: " ختم شوی",
          expiring_in_one_week: "په یوه اونۍ کې پای ته رسیږي",
          expiring_in_on_week_thirty_days:
            "د یوې اونۍ او ۳۰ ورځو دننه پای ته رسیږي",
          expiring_in_thirity_ninety_days: "د ۳۰ او ۹۰ ورځو دننه پای ته رسیږي",
          expiring_after_ninety_days: "د ۹۰ ورځو وروسته پای ته رسیږي",
          // system logs translation
          system_logs: " د سیسټم راپورونه ",
          view_all: " ټول وګورئ",
          show_less: "لږ ښودل",
          // report overview translation
          report_overview: " لنډیز راپور",
          issued: "صادر شوی",
          pending: "انتظار",
          rejected: "رد شوی",
          inspections: " لاسرسی شوی",
          // notifications chart translation
          new_requests: "نوې غوښتنې",
          approved: " تایید شوی",
          notifications_summary: "د خبرتیا لنډیز",
        },
      },
      en: {
        translation: {
          // Navigation bar Translation
          Farsi: "Persian",
          Pashto: "Pashto",
          English: "English",
          LogOut: "Logout",
          Search: "Search...",
          //   Login Page Translation
          Email: "Email",
          Password: " Password",
          login_page: "Login Page",
          login: "Login",
          //   Registration Page Translation
          register_page: "Register Page ",
          name: "Name",
          username: "Username",
          role: "Role",
          phone_number: "Phone Number",
          submit: "Submit",
          // sidebar translation
          home: "Home",
          users: "Users",
          invioces: "Invoices",
          applications: "Applications",
          certificates: "Certificates",
          reports: "Reports",
          notifications: "Notifications",
          helpandsupport: "Help & Support",
          settings: "Settings",
          // usersChart translation
          users_online: "Users Currenlty Online",
          users_offline: "Users Currently Offline",
          users_total: "Total Users",
          // Invoices Translation
          invoice_summary: "Invoice Summary",
          received: "Recevied",
          postponed: "Postponed",
          invoiced: "Invioced",
          cancelled: "Cancelled",
          // certificates translation
          verified: "Verified",
          expired: "Expired",
          expiring_in_one_week: "Expiring within one week",
          expiring_in_on_week_thirty_days:
            "Expiring within one week and 30 days",
          expiring_in_thirity_ninety_days: "Expiring within 30 and 90 days",
          expiring_after_ninety_days: "Expiring after 90 days",
          // system logs translation
          system_logs: " System Logs ",
          view_all: "View All",
          show_less: "Show Less",
          // report overview translation
          report_overview: " Reports Overview",
          issued: "Issued",
          pending: "Pending",
          rejected: "Rejected",
          inspections: "Inpsections",
          // notifications chart translation
          new_requests: " New Requests",
          approved: " Approved",
          notifications_summary: "Notifications Summary",
        },
      },
    },
  });
