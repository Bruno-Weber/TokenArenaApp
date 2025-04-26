import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { useLang } from "@/context/LangContext";
import VotingList from "@/components/VotingList";

const ClubVotacoesPage = () => {
  useTheme();
  const { lang } = useLang();
  const t = {
    title: {
      pt: "Votações do Clube",
      en: "Club Votes",
    },
  };
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-zinc-100 to-purple-100 dark:from-black dark:via-zinc-900 dark:to-purple-950 pb-20 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white mb-8 text-center drop-shadow" aria-label={t.title[lang]}>{t.title[lang]}</h1>
        <VotingList />
      </div>
    </main>
  );
};

export default ClubVotacoesPage;
