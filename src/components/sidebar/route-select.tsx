import {
  DollarSign,
  FileText,
  House,
  Link,
  Paperclip,
  Receipt,
  UsersRound,
} from "lucide-react";
import React from "react";
import { IconType } from "react-icons";

export const RouteSelect = () => {
  return (
    <div className="space-y-1">
      <Route Icon={House} selected={true} title="Dashboard" />
      <Route Icon={UsersRound} selected={false} title="Team" />
      <Route Icon={FileText} selected={false} title="Invoices" />
      <Route Icon={Link} selected={false} title="Integrations" />
      <Route Icon={DollarSign} selected={false} title="Finance" />
    </div>
  );
};

const Route = ({
  selected,
  Icon,
  title,
}: {
  selected: boolean;
  Icon: IconType;
  title: string;
}) => {
  return (
    <button
      className={`flex items-center justify-start gap-2 w-full rounded px-2 py-2 text-sm transition-[box-shadow_background-color_color] cursor-pointer ${
        selected
          ? "bg-white text-black shadow"
          : "hover:bg-gray-300 shadow-none text-gray-900"
      }`}
    >
      <Icon
        size={18}
        className={`${selected ? "text-pumpkin" : "text-gray-900"}`}
      />
      <span>{title}</span>
    </button>
  );
};
