import React from "react";
import { AccountToggle } from "./account-toggle";
import { SearchBar } from "./search-bar";
import { RouteSelect } from "./route-select";
import { Plan } from "./plan";

export const Sidebar = ({ insideHamburger }: { insideHamburger: boolean }) => {
  return (
    <div className={`${insideHamburger ? "block" : "hidden md:block"}`}>
      <div
        className={`sticky top-4 ${
          insideHamburger
            ? "h-[calc(100dvh-150px)] fixed"
            : "h-[calc(100dvh-90px)]"
        }`}
      >
        <AccountToggle />
        <SearchBar />
        <RouteSelect />
      </div>

      <Plan />
    </div>
  );
};
