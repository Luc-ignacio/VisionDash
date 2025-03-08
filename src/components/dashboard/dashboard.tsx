import React from "react";
import { TopBar } from "./top-bar/top-bar";
import { Grid } from "./grid/grid";

export const Dashboard = () => {
  return (
    <div className="bg-white rounded-lg pb-4 shadow block">
      <TopBar />
      <Grid />
    </div>
  );
};
