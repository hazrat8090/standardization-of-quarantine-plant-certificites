"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const date = new Date().toLocaleTimeString();
const time = date;

const logs = [
  { id: 1, type: "info", message: "User hazrat logged in.", time: time },
  {
    id: 2,
    type: "warning",
    message: "Invoice #1234 is overdue!",
    time: "13:55",
  },
  { id: 3, type: "error", message: "Database connection lost!", time: "13:30" },
  { id: 4, type: "info", message: "System backup completed.", time: "12:15" },
];

const getBadgeColor = (type: string) => {
  switch (type) {
    case "info":
      return "bg-blue-500";
    case "warning":
      return "bg-yellow-500";
    case "error":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

const SystemLogs = () => {
  const [viewAll, setViewAll] = useState(false);
  const displayedLogs = viewAll ? logs : logs.slice(0, 3);
  const { t } = useTranslation();

  return (
    <div className="p-4 bg-cyan-100 rounded-md w-75 max-w-sm ">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">
        {t("system_logs")}
      </h3>
      <div className="h-70 overflow-y-auto border rounded-md p-2 w-70">
        {displayedLogs.map((log) => (
          <div
            key={log.id}
            className="flex items-center justify-between p-2 border-b last:border-none"
          >
            <span
              className={`text-white px-2 py-1 rounded-md text-xs ${getBadgeColor(
                log.type
              )}`}
            >
              {log.type.toUpperCase()}
            </span>
            <span className="text-sm text-gray-600 flex-1 px-2">
              {log.message}
            </span>
            <span className="text-xs text-gray-400">{log.time}</span>
          </div>
        ))}
      </div>
      <button
        className=" mt-2 text-blue-500 w-40 text-sm underline cursor-pointer"
        onClick={() => setViewAll(!viewAll)}
      >
        {viewAll ? t("show_less") : t("view_all")}
      </button>
    </div>
  );
};

export default SystemLogs;
