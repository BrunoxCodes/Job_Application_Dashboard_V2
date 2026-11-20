import { createContext, useState, useEffect, type ReactNode } from "react";
import type { Theme } from "../../types/db_types";

// Define theme types

// Define context properties
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Define provider properties
interface ThemeProviderProps {
  children: ReactNode;
}

// Create context
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

// Theme Provider
const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme");

    return savedTheme === "dark" ? "dark" : "light";
  });

  // Save theme and apply it to the entire document
  useEffect(() => {
    localStorage.setItem("theme", theme);

    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Toggle theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
