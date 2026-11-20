// import useAdmins from "./hooks/useAdminsApi";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/loginForm";
import Dashboard from "./components/dashboard";

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};
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
    </div>
  );
}

export default App;
