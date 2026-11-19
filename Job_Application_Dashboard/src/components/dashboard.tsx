import ShowTotals from "./showTotals";
import TopNav from "./topNav";

export default function Dashboard() {
  return (
    <div className="relative bg-(--bg) text-(--text)">
      <div className="right absolute right-0 top-0 w-[85%]">
        <TopNav />
        <ShowTotals />
      </div>
    </div>
  );
}
