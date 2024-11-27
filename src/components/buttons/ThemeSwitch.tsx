"use client";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

export const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="border border-black dark:border-white rounded-[16px] px-[32px] py-[8px] -translate-y-1 shadow-border-b active:translate-y-0 active:shadow-none"
    >
      {theme === "dark"
        ? "Mudar para Tema Claro 🌞"
        : "Mudar para Tema Escuro 🌜"}
    </button>
  );
};
