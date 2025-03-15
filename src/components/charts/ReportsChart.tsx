"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { useTranslation } from "react-i18next";

const ReportsChart = () => {
  const { t } = useTranslation();
  const data = [
    { name: t("issued"), count: 150, color: "#0088FE" }, // Blue
    { name: t("pending"), count: 45, color: "#FFB300" }, // Orange
    { name: t("rejected"), count: 20, color: "#FF5022" }, // Red
    { name: t("inspections"), count: 80, color: "#00C49F" }, // Green
  ];

  return (
    <div className="p-4 bg-emerald-100 shadow-md rounded-lg w-150 h-[350px]">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">
        {t("report_overview")}
      </h3>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data}>
          <XAxis dataKey="name" tick={{ fill: "#555" }} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" barSize={40}>
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReportsChart;
