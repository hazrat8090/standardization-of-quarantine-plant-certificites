"use client";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useTranslation } from "react-i18next";

const RADIAN = Math.PI / 180;

// Custom label to display values inside the pie chart
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={12}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const NotificationsChart = () => {
  const { t } = useTranslation();

  const data = [
    { name: t("new_requests"), value: 10, color: "#0088FE" }, // Blue
    { name: t("approved"), value: 25, color: "#00C49F" }, // Green
    { name: t("pending"), value: 15, color: "#FFB300" }, // Orange
    { name: t("rejected"), value: 5, color: "#FF5022" }, // Red
  ];

  const totalNotifications = data.reduce(
    (sum, notification) => sum + notification.value,
    0
  );

  return (
    <div className="p-4 bg-white shadow-md rounded-lg w-115 h-[350px] flex flex-col items-center">
      <div className="flex flex-row">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          {t("notifications_summary")}
        </h3>
        <span className="bg-yellow-200 h-5 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">
          {totalNotifications}
        </span>
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={120}
            dataKey="value"
            label={renderCustomizedLabel}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      {/* Labels */}
      <div className="flex flex-wrap justify-center mt-2 gap-3">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center">
            <span
              className="w-3 h-3 inline-block rounded-full mr-2"
              style={{ backgroundColor: entry.color }}
            ></span>
            <span className="text-sm text-gray-600">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsChart;
