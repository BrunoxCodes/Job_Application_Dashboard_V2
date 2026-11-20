import { LayoutGrid, SunDim, Moon } from "lucide-react";
import Buttons from "./sub-components/buttons";
import profilePic from "../assets/download.jpg";
import Dropdown from "./sub-components/dropdown";
import useToggle from "../hooks/useToggle";
import useLocalStorage from "../hooks/useLocalStorage";
import { useEffect } from "react";
// import useAuth from "../hooks/useAuth";

type Theme = "light" | "dark";

export default function TopNav() {
  const { isToggled, handleToggle } = useToggle();
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "light");
  const [value] = useLocalStorage("loggedAdmin",null)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="nav flex justify-between items-center gap-3 p-2 w-full min-w-0">
      <div className="logo flex items-center gap-2 min-w-0">
        <LayoutGrid className="shrink-0"/>
        <h3 className="truncate">{value?.name ?? "Admin"} Dashboard</h3>
      </div>

      <div className="btns flex shrink-0 justify-center items-center gap-5">
        <Buttons
          className="w-10 bg-(--text-muted) p-1 rounded-[50px] cursor-pointer transition duration-100 delay-75 hover:bg-(--text)"
          onClick={handleThemeToggle}
        >
          {theme == "dark" ? (
            <SunDim className="w-full text-white" size={30} />
          ) : (
            <Moon className="w-full text-white" size={30} />
          )}
        </Buttons>
        <div className="dropdown relative shrink-0">
          <Buttons
            className="w-10 bg-(--text-muted) py-1 px-1 rounded-[50px] cursor-pointer transition duration-100 delay-75 hover:bg-(--text)"
            onClick={handleToggle}
          >
            <img src={profilePic} className="w-full rounded-[50px]" />
          </Buttons>
          <Dropdown
            className="absolute right-0 top-12 bg-(--surface) text-(--text) border border-(--border) z-50 w-40"
            isToggle={!isToggled}
          />
        </div>
      </div>
    </div>
  );
}
