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