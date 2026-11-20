import { useState } from "react";

export default function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const storedValue = localStorage.getItem(key);

      return storedValue !== null
        ? (JSON.parse(storedValue) as T)
        : initialValue;
    } catch (error) {
      console.error("Error reading localStorage:", error);
      return initialValue;
    }
  });

  const updateValue = (newValue: T) => {
    setValue(newValue);

    try {
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error("Error saving localStorage:", error);
    }
  };

  const removeValue = () => {
    localStorage.removeItem(key);
    setValue(initialValue);
  };

  return [value, updateValue, removeValue] as const;
}
