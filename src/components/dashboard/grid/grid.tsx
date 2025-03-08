import React from "react";
import { StatsCard } from "./stats-card";
import { CashflowGraph } from "./cashflow-graph";
import { AllocationRadar } from "./allocation-radar";
import { UserTransactions } from "./user-transactions";

export const Grid = () => {
  return (
    <div className="w-full grid grid-cols-4 lg:grid-cols-12 gap-3 px-4">
      <StatsCard />
      <CashflowGraph />
      <AllocationRadar />
      <UserTransactions />
    </div>
  );
};
