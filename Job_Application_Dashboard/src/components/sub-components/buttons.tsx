import type React from "react";

interface btnProps {
  children: React.ReactNode;
  login?: () => void;
  logout?: () => void;
  onClick?: () => void;
  className?: string
}

export default function Buttons({ onClick, children, className }: btnProps) {
  return (
    <button
      type="submit"
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
