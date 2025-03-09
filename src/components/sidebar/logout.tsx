import { LogOut } from "lucide-react";
import Link from "next/link";

export const Logout = () => {
  return (
    <div className="flex flex-col h-12 border-t border-gray-500 sticky top-[calc(100dvh_-_48px_-_16px)] justify-end text-sm w-full">
      <div className="">
        <Link
          className="flex items-center gap-2 w-full rounded px-2 py-2 text-sm transition-colors cursor-pointer bg-gray-300/50 hover:text-pumpkin"
          href="/"
        >
          <LogOut size={18} />
          Logout
        </Link>
      </div>
    </div>
  );
};
