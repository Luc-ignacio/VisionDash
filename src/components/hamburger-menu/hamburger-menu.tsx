"use client";

import { Sidebar } from "@/components/sidebar/sidebar";
import Hamburger from "hamburger-react";
import React, { useState } from "react";

export const HamburgerMenu = () => {
  const [open, isOpen] = useState(false);

  return (
    <div className="items-center bg-gray-300/50 transition-colors hover:text-pumpkin rounded cursor-pointer md:hidden object-contain">
      <Hamburger size={18} toggled={open} toggle={isOpen} />
      {open && (
        <div className="absolute top-0 left-0 z-10 w-screen h-screen rounded bg-gray-100 px-4 py-2 hover:text-black">
          <Hamburger size={18} toggled={open} toggle={isOpen} />
          <Sidebar insideHamburger={true} />
        </div>
      )}
    </div>
  );
};
