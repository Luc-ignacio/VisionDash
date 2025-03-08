"use client";

import { DollarSign, FileText, House, UsersRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLinks = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2">
      <Link
        className={`flex items-center justify-start gap-2 w-full rounded px-2 py-2 text-sm transition-colors cursor-pointer hover:bg-gray-300 ${
          pathname === "/" ? "text-black bg-white shadow" : "text-gray-900"
        }`}
        href="/"
      >
        <House size={18} className={`${pathname === "/" && "text-pumpkin"} `} />
        Dashboard
      </Link>

      <Link
        className={`flex items-center justify-start gap-2 w-full rounded px-2 py-2 text-sm transition-colors cursor-pointer hover:bg-gray-300 ${
          pathname === "/recipients"
            ? "text-black bg-white shadow"
            : "text-gray-900"
        }`}
        href="/recipients"
      >
        <UsersRound
          size={18}
          className={`${pathname === "/recipients" && "text-pumpkin"} `}
        />
        Recipients
      </Link>

      <Link
        className={`flex items-center justify-start gap-2 w-full rounded px-2 py-2 text-sm transition-colors cursor-pointer hover:bg-gray-300 ${
          pathname === "/invoices"
            ? "text-black bg-white shadow"
            : "text-gray-900"
        }`}
        href="/invoices"
      >
        <FileText
          size={18}
          className={`${pathname === "/invoices" && "text-pumpkin"} `}
        />
        Invoices
      </Link>

      <Link
        className={`flex items-center justify-start gap-2 w-full rounded px-2 py-2 text-sm transition-colors cursor-pointer hover:bg-gray-300 ${
          pathname === "/finance"
            ? "text-black bg-white shadow"
            : "text-gray-900"
        }`}
        href="/finance"
      >
        <DollarSign
          size={18}
          className={`${pathname === "/finance" && "text-pumpkin"} `}
        />
        Finance
      </Link>
    </nav>
  );
};
