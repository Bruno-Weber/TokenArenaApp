import React from "react";
import NftGrid from "@/components/NftGrid";
import { useTheme } from "@/context/ThemeContext";
import { useLang } from "@/context/LangContext";

const MarketplacePage = () => {
  useTheme();
  const { lang } = useLang();

  const t = {
    title: {
      pt: "Marketplace de NFTs Oficiais",
      en: "Official NFT Marketplace",
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-zinc-100 to-purple-100 dark:from-black dark:via-zinc-900 dark:to-purple-950 pb-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white mb-8 text-center drop-shadow" aria-label={t.title[lang]}>{t.title[lang]}</h1>
        <NftGrid />
      </div>
    </main>
  );
};

export default MarketplacePage;
