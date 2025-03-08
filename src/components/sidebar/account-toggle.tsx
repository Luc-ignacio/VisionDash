import React from "react";
import { UserRound, ChevronsUpDown } from "lucide-react";

export const AccountToggle = () => {
  return (
    <div className="border-b border-gray-500 w-full mb-4 mt-2 pb-4">
      <button className="flex p-1 rounded w-full items-center hover:bg-gray-300 transition-colors justify-between cursor-pointer">
        <div className="flex gap-2 items-center">
          <UserRound
            strokeWidth={1}
            size={32}
            className="bg-white rounded border border-pumpkin text-pumpkin"
          />

          <div className="text-start">
            <span className="text-sm font-semibold block">Lucas Ignacio</span>
            <span className="text-xs block text-gray-900">lucas@email.com</span>
          </div>
        </div>

        <ChevronsUpDown size={18} />
      </button>
    </div>
  );
};
