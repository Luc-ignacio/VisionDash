import React from "react";
import { AccountToggle } from "./account-toggle";
import { SearchBar } from "./search-bar";
import { RouteSelect } from "./route-select";
import { Plan } from "./plan";

export const Sidebar = () => {
  return (
    <div>
      <div className="sticky top-4 h-[calc(100dvh-32px-48px)] block">
        <AccountToggle />
        <SearchBar />
        <RouteSelect />
      </div>

      <Plan />
    </div>
  );
};
