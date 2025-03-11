import { UsersRound } from "lucide-react";
import React from "react";

export const RecipientsTitle = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <h3 className="flex items-center gap-2 font-semibold">
        <UsersRound size={18} />
        Recipients
      </h3>

      <button className="flex text-sm items-center gap-2 bg-gray-300/50 transition-colors hover:text-pumpkin px-3 py-2 rounded cursor-pointer">
        Add New
      </button>
    </div>
  );
};
