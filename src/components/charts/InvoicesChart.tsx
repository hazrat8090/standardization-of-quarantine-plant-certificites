"use client";
import { useTranslation } from "react-i18next";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "received", value: 400, color: "#0088FE" }, // Blue
  { name: "postponed", value: 200, color: "#FF8042" }, // Orange
  { name: "invoiced", value: 300, color: "#00C49F" }, // Green
  { name: "cancelled", value: 100, color: "#FF5022" }, // Red
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const InvoicesChart = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center p-8 w-[350px] bg-cyan-100 rounded-sm">
      <h2 className="text-cyan-600 font-semibold mb-1">
        {t("invoice_summary")}
      </h2>

      {/* Pie Chart */}
      <PieChart width={320} height={286}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={10}
          outerRadius={140}
          labelLine={false}
          label={renderCustomizedLabel}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>

      {/* Summary Labels */}
      <div className="ml-4 text-sm w-full">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center justify-between mb-1">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            ></span>
            <span
              className="flex text-white w-20 justify-center items-center rounded-sm text-sm"
              style={{ background: entry.color }}
            >
              {t(entry.name)}
            </span>
            <span
              className="text-white text-sm rounded-sm "
              style={{ background: entry.color }}
            >
              USD {entry.value.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvoicesChart;
