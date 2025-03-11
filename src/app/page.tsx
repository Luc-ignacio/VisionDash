import { GridDashboard } from "@/components/grid/dashboard/grid-dashboard";
import { TopBar } from "@/components/top-bar/top-bar";
import { Sidebar } from "@/components/sidebar/sidebar";

export default function Dashboard() {
  return (
    <main className="grid gap-4 p-4 md:grid-cols-[220px_1fr]">
      <Sidebar insideHamburger={false} />
      <div className="bg-white rounded-lg pb-4 shadow">
        <TopBar />
        <GridDashboard />
      </div>
    </main>
  );
}
