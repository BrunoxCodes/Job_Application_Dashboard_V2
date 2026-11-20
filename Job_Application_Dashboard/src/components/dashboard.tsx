import ShowTotals from "./showTotals";
import TopNav from "./topNav";

export default function Dashboard() {
  return (
    <div className="bg-(--bg) text-(--text) flex">
      <div className="w-full">
        <TopNav />
        <ShowTotals />
      </div>
    </div>
  );
}
