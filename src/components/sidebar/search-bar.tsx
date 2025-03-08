"use client";

import { Command, Search } from "lucide-react";
import React, { useState } from "react";
import { CommandMenu } from "./command-menu";

export const SearchBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-white border border-gray-300 mb-4 rounded flex items-center px-2 py-2 text-sm gap-2">
        <Search size={18} className="text-gray-900" />

        <input
          onFocus={(e) => {
            e.target.blur();
            setOpen(true);
          }}
          type="text"
          placeholder="Search"
          className="bg-transparent w-full placeholder:text-gray-900 focus:outline-none"
        />

        <button
          onClick={(e) => {
            setOpen(true);
          }}
          className="p-1 text-xs flex gap-1 items-center shadow rounded bg-gray-100 cursor-pointer"
        >
          <Command size={14} />K
        </button>
      </div>

      <CommandMenu open={open} setOpen={setOpen} />
    </>
  );
};
