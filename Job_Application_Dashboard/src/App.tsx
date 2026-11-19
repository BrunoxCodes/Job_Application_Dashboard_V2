import './App.css';
import useToggle from './hooks/useToggle';
import { useSidebar } from './hooks/usesidebar';
import NavBar from './components/NavBar';

function App() {
  const { isToggled: iscollapsed, handleToggle } = useToggle();
  const { activesection, selectsection, navitems } = useSidebar('Dashboard');

  return (
    <div className="flex h-screen bg-slate-100">
      <NavBar
        username="user"
        useremail="user@example.com"
        iscollapsed={iscollapsed}
        activesection={activesection}
        navitems={navitems}
        ontoggle={handleToggle}
        onselectsection={selectsection}
      />

      <main className="flex-1 overflow-y-auto p-8 bg-slate-50">
        {activesection === 'Dashboard' && <h1 className="text-2xl font-bold">Dashboard Overview</h1>}
        {activesection === 'Application' && <h1 className="text-2xl font-bold">Job Applications</h1>}
        {activesection === 'Notification' && <h1 className="text-2xl font-bold">Notifications</h1>}
        {activesection === 'Setting' && <h1 className="text-2xl font-bold">Account Settings</h1>}
      </main>
    </div>
  );
}

export default App;