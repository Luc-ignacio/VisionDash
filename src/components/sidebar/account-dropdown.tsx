import { UserRoundPen, Mail, LockKeyhole } from "lucide-react";
import React from "react";

export const AccountDropdown = ({ visible }: { visible: boolean }) => {
  return (
    <div
      className={`bg-white rounded border border-gray-500 px-2 py-2 w-full absolute ${
        visible ? "block" : "hidden"
      }`}
    >
      <div className="flex w-full justify-start items-center px-2 hover:bg-gray-300">
        <UserRoundPen size={16} />
        <a href="#" className="text-xs p-2">
          My profile
        </a>
      </div>

      <div className="flex w-full justify-start items-center px-2 hover:bg-gray-300">
        <Mail size={16} />
        <a href="#" className="text-xs p-2">
          Contact details
        </a>
      </div>

      <div className="flex w-full justify-start items-center px-2 hover:bg-gray-300">
        <LockKeyhole size={16} />
        <a href="#" className="text-xs p-2">
          Security
        </a>
      </div>
    </div>
  );
};
