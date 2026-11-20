import NavBar from "./NavBar";
import ShowTotals from "./showTotals";
import TopNav from "./topNav";
import useToggle from '../hooks/useToggle';
import { useSidebar } from '../hooks/usesidebar';

export default function Dashboard() {
  const { isToggled: iscollapsed, handleToggle } = useToggle();
  const { activesection, selectsection, navitems } = useSidebar('Dashboard');
  return (
    <div className="bg-(--bg) text-(--text) flex">
      <NavBar
        username="user"
        useremail="user@example.com"
        iscollapsed={iscollapsed}
        activesection={activesection}
        navitems={navitems}
        ontoggle={handleToggle}
        onselectsection={selectsection}
      />
      <div className="w-full">
        <TopNav />
        <ShowTotals />
      </div>
    </div>
  );
}
