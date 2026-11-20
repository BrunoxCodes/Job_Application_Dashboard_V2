import FullApplicationsPart from "./config_DB/components/Job_Applications/Full_Applications_part";
// import useAdmins from "./hooks/useAdminsApi";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/loginForm";
import Dashboard from "./components/dashboard";

export default function App() {

  return (
    <div className="w-full min-h-screen flex gap-4">
      <div className="w-[15%] min-h-screen">
        <h2 className="w-full px-4 py-4 text-2xl">Side Bar</h2>
      </div>
      <div className="w-[80%]">
        <FullApplicationsPart />
      </div>
    </div>
  );
}

export default App;
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

