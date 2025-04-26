import React from "react";
import { useLang } from "@/context/LangContext";

const LangToggleButton: React.FC = () => {
  const { lang, setLang } = useLang();
  return (
    <button
      aria-label={lang === "pt" ? "Switch to English" : "Mudar para Português"}
      onClick={() => setLang(lang === "pt" ? "en" : "pt")}
      className="flex items-center gap-2 bg-zinc-800 dark:bg-zinc-700 hover:bg-purple-700/30 dark:hover:bg-purple-700/40 border border-purple-700/20 text-purple-300 dark:text-purple-200 px-4 py-2 rounded-xl font-bold shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 ml-2"
    >
      <span role="img" aria-label={lang === "pt" ? "Bandeira dos EUA" : "Bandeira do Brasil"}>
        {lang === "pt" ? "🇺🇸" : "🇧🇷"}
      </span>
      <span className="hidden sm:inline text-xs">
        {lang === "pt" ? "English" : "Português"}
      </span>
    </button>
  );
};

export default LangToggleButton;
