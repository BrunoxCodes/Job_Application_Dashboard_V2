import { useState } from "react";

interface Admin {
  id: number;
  name: string;
}

const loggedUser = "loggedAdmin";

export default function useAuth() {
  const [admin, setAdmin] = useState<Admin | null>(() => {
    const storedAdmin = localStorage.getItem(loggedUser);

    return storedAdmin ? JSON.parse(storedAdmin) : null;
  });
  const login = (user: Admin) => {
    localStorage.setItem(loggedUser, JSON.stringify(user));
    setAdmin(user);
  };

  const logout = () => {
    localStorage.removeItem(loggedUser);
    setAdmin(null);
  };

  return { admin, login, logout, isAuthenticated: !!admin };
}
