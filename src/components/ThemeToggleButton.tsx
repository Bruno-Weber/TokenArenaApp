import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
      onClick={toggleTheme}
      className="flex items-center gap-2 bg-zinc-800 dark:bg-zinc-700 hover:bg-purple-700/30 dark:hover:bg-purple-700/40 border border-purple-700/20 text-purple-300 dark:text-purple-200 px-4 py-2 rounded-xl font-bold shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
    >
      {theme === "dark" ? (
        <SunIcon className="w-5 h-5" />
      ) : (
        <MoonIcon className="w-5 h-5" />
      )}
      <span className="hidden sm:inline text-xs">
        {theme === "dark" ? "Modo Claro" : "Modo Escuro"}
      </span>
    </button>
  );
};

export default ThemeToggleButton;
