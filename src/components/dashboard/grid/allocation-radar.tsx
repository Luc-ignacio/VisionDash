"use client";

import { RadarIcon } from "lucide-react";

import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Marketing",
    AllocatedBudget: 88,
    ActualSpending: 99,
    fullMark: 100,
  },
  {
    subject: "Sales",
    AllocatedBudget: 78,
    ActualSpending: 59,
    fullMark: 100,
  },
  {
    subject: "AI",
    AllocatedBudget: 64,
    ActualSpending: 84,
    fullMark: 100,
  },
  {
    subject: "Customer Support",
    AllocatedBudget: 92,
    ActualSpending: 75,
    fullMark: 100,
  },
  {
    subject: "Tech",
    AllocatedBudget: 75,
    ActualSpending: 76,
    fullMark: 100,
  },
  {
    subject: "Infra",
    AllocatedBudget: 70,
    ActualSpending: 61,
    fullMark: 100,
  },
];

export const AllocationRadar = () => {
  return (
    <div className="col-span-4 overflow-hidden rounded border border-gray-300">
      <div className="p-4">
        <h3 className="flex items-center gap-2 font-semibold">
          <RadarIcon size={18} />
          Allocation
        </h3>
      </div>

      <div className="h-64 p-4">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="40%" outerRadius="70%" data={data}>
            <PolarGrid />
            <PolarAngleAxis
              dataKey="subject"
              className="text-xs text-gray-900"
            />
            <PolarRadiusAxis
              className="text-xs text-gray-900"
              angle={0}
              domain={[0, 100]}
            />
            <Radar
              name="Budget"
              dataKey="AllocatedBudget"
              stroke="#a7a7a7"
              fill="#a7a7a7"
              fillOpacity={0.2}
            />
            <Radar
              name="Actual"
              dataKey="ActualSpending"
              stroke="#ff7518"
              fill="#ff7518"
              fillOpacity={0.2}
            />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
