import React from "react";

export const RecipientsFilters = () => {
  return (
    <div className="flex items-center p-4 border-b border-gray-300/50">
      <div className="px-4 py-2 text-xs rounded-l border border-gray-300">
        All
      </div>
      <div className="px-4 py-2 text-xs border-t border-b border-gray-300">
        My Accounts
      </div>
      <div className="px-4 py-2 text-xs rounded-r border border-gray-300">
        Recent
      </div>
    </div>
  );
};
