
import { UserRound, Settings, LogOut } from "lucide-react";
import AnchorLinks from "./anchorLinks";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

interface classProp {
  className: string;
  isToggle: boolean
}

export default function Dropdown({ className, isToggle }: classProp) {
  const { admin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };
  return (
    <motion.nav
      className={className}
      initial={{ y: 30, opacity: 0 }}
      animate={{
        y: isToggle ? 30 : 0,
        opacity: isToggle ? 0 : 1,
      }}
      transition={{ duration: 0.3 }}
      style={{
        pointerEvents: isToggle ? "none" : "auto",
      }}
    >
      <AnchorLinks>
        <UserRound /> Profile
      </AnchorLinks>

      <AnchorLinks>
        <Settings /> Settings
      </AnchorLinks>

      <AnchorLinks onClick={handleLogout}>
        <LogOut /> Sign Out
      </AnchorLinks>
    </motion.nav>
  );
}
