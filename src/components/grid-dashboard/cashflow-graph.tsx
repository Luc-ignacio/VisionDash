"use client";

import { CircleDollarSign } from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sep 2024",
    revenue: 117284,
    expenses: 60004,
  },
  {
    name: "Oct 2024",
    revenue: 124880,
    expenses: 84073,
  },
  {
    name: "Nov 2024",
    revenue: 129668,
    expenses: 80423,
  },
  {
    name: "Dec 2024",
    revenue: 136049,
    expenses: 87291,
  },
  {
    name: "Jan 2025",
    revenue: 133048,
    expenses: 67072,
  },
  {
    name: "Feb 2025",
    revenue: 135769,
    expenses: 94221,
  },
];

export const CashflowGraph = () => {
  return (
    <div className="col-span-4 lg:col-span-8 overflow-hidden rounded border border-gray-300">
      <div className="p-4">
        <h3 className="flex items-center gap-2 font-semibold">
          <CircleDollarSign size={18} />
          Cashflow
        </h3>
      </div>

      <div className="h-64 p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={250}
            height={150}
            data={data}
            margin={{ top: 0, right: 0, left: -10, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              className="text-xs text-gray-900"
              dataKey="name"
              padding={{ left: 30, right: 30 }}
            />
            <YAxis className="text-xs text-gray-900" />
            <Tooltip
              wrapperClassName="text-sm rounded"
              labelClassName="text-xs text-gray-900"
            />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#ff7518" />
            <Line type="monotone" dataKey="expenses" stroke="#a7a7a7" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
