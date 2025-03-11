import { TopBar } from "@/components/top-bar/top-bar";
import { Sidebar } from "@/components/sidebar/sidebar";
import { GridRecipients } from "@/components/grid/recipients/grid-recipients";

export default function Recipients() {
  return (
    <main className="grid gap-4 p-4 md:grid-cols-[220px_1fr]">
      <Sidebar insideHamburger={false} />
      <div className="bg-white rounded-lg pb-4 shadow">
        <TopBar />
        <GridRecipients />
      </div>
    </main>
  );
}
