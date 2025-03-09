import { TrendingDown, TrendingUp } from "lucide-react";
import React from "react";

export const StatsCard = () => {
  return (
    <>
      <Card
        title="Total Revenue"
        value="$125,437.18"
        text="12.75%"
        trend="up"
        period="From 1st Jan - Today"
      />
      <Card
        title="Net Profit Margin"
        value="18.5%"
        text="2.31%"
        trend="up"
        period="From 1st Jan - Today"
      />
      <Card
        title="Monthly Expenses"
        value="$32,813.58"
        text="5.37%"
        trend="down"
        period="Previous 30 days"
      />
    </>
  );
};

const Card = ({
  title,
  value,
  text,
  trend,
  period,
}: {
  title: string;
  value: string;
  text: string;
  trend: "up" | "down";
  period: string;
}) => {
  return (
    <div className="col-span-4 p-4 rounded border border-gray-300">
      <div className="mb-8">
        <div className="flex items-start justify-between">
          <h3 className="text-gray-900 mb-2 text-sm">{title}</h3>
          <span
            className={`flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded ${
              trend === "up"
                ? "bg-green-100 text-green-500"
                : "bg-red-100 text-red-500"
            }`}
          >
            {trend === "up" ? (
              <TrendingUp size={18} />
            ) : (
              <TrendingDown size={18} />
            )}
            {text}
          </span>
        </div>
        <p className="text-3xl font-semibold">{value}</p>
      </div>
      <p className="text-xs text-gray-900">{period}</p>
    </div>
  );
};
