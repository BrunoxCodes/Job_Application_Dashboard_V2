import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SunDim, Moon } from "lucide-react";
import Form from "./form";
import Buttons from "./sub-components/buttons";
import Fields from "./sub-components/fields";
import Inputs from "./sub-components/inputs";
import useLocalStorage from "../hooks/useLocalStorage";
import CustomMsg from "./sub-components/customMsg";
import useAdmins from "../hooks/useAdminsApi";
import useAuth from "../hooks/useAuth";

type Theme = "light" | "dark";

export default function LoginForm() {
  const [form, setForm] = useState({ username: "", password: "" });
  const { users, isLoading, error } = useAdmins();
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "light");
  const navigate = useNavigate();
  const [authStatus, setAuthStatus] = useState<boolean | null>(null);
  const { login } = useAuth();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const authResult = () => {
    if (isLoading || error) return;

    const user = users.find(
      (user) => user.name === form.username && user.password === form.password,
    );

    if (user) {
      login({
        id: user.id,
        name: user.name,
      });

      setAuthStatus(true);

      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } else {
      setAuthStatus(false);
    }
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    authResult();
  };

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="w-full h-screen relative flex justify-center items-center">
      <Buttons
        className="w-10 bg-(--text-muted) p-1 rounded-[50px] 
        cursor-pointer
        absolute top-10 right-10 transition duration-100 delay-75 hover:bg-(--text)"
        onClick={handleThemeToggle}
      >
        {theme == "dark" ? (
          <SunDim className="w-full text-white" size={30} />
        ) : (
          <Moon className="w-full text-white" size={30} />
        )}
      </Buttons>
      <Form onSubmit={handleSubmit}>
        <h3 className="text-[1.5em] my-5 font-bold">
          Welcome To Job Tracker Admins
        </h3>
        <Fields label="username">
          <Inputs
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </Fields>
        <Fields label="password">
          <Inputs
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </Fields>
        <Buttons
          className="border bg-(--text) text-(--bg) py-2 rounded-lg 
        cursor-pointer transition delay-75 duration-100 
        hover:bg-(--bg) hover:text-(--text)"
        >
          Log in
        </Buttons>
      </Form>
      {authStatus !== null && (
        <CustomMsg
          className={`absolute z-50 
            ${authStatus ? "bg-green-500" : "bg-red-400"} 
            w-70 text-center text-white p-5 rounded-lg bottom-10 right-10`}
        >
          {authStatus ? "Login successful!" : "Wrong credentials!"}
        </CustomMsg>
      )}
    </div>
  );
}
