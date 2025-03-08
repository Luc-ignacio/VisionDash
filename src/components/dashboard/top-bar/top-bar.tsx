import { Calendar } from "lucide-react";
import { GetCurrentDate } from "./get-current-date";
import { HamburgerMenu } from "../hamburger-menu/hamburger-menu";

export const TopBar = () => {
  return (
    <div className="border-b border-gray-300 px-4 mb-4 mt-2 pb-2 md:pb-4">
      <div className="flex items-center justify-between p-1">
        <div className="flex gap-4 items-center">
          <HamburgerMenu />
          <div>
            <span className="text-sm font-semibold block">Hello, Lucas!</span>
            <span className="text-xs text-gray-900 block">
              <GetCurrentDate />
            </span>
          </div>
        </div>

        <div>
          <button className="flex text-sm items-center gap-2 bg-gray-300/50 transition-colors hover:text-pumpkin px-4 py-4 md:px-3 md:py-2 rounded cursor-pointer">
            <Calendar size={18} />
            <span className="hidden md:block">Previous 6 months</span>
          </button>
        </div>
      </div>
    </div>
  );
};
