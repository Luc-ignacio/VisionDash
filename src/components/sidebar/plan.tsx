import React from "react";

export const Plan = () => {
  return (
    <div className="flex flex-col h-12 border-t border-gray-500 px-2 sticky top-[calc(100dvh_-_48px_-_16px)] justify-end text-xs">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold">Enterprise</p>
          <p className="text-gray-900">Pay as you go</p>
        </div>

        <button className="px-2 py-2 font-medium bg-gray-300/50 transition-colors rounded hover:text-pumpkin cursor-pointer">
          Support
        </button>
      </div>
    </div>
  );
};
