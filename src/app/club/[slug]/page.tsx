import React, { useState } from "react";
import { clubProfile } from "@/data/clubProfile";
import ClubProfileBanner from "@/components/ClubProfileBanner";
import ClubStats from "@/components/ClubStats";
import ClubActions from "@/components/ClubActions";
import ClubHistory from "@/components/ClubHistory";
import StakeModal from "@/components/StakeModal";
import { useTheme } from "@/context/ThemeContext";
import { useLang } from "@/context/LangContext";

const mockUser = {
  balance: 3200,
  stats: {
    totalStaked: 1200,
    rewards: 85,
    participations: 7,
  },
};

const ClubProfilePage = () => {
  const { theme } = useTheme();
  const { lang } = useLang();
  const t = {
    title: {
      pt: "Perfil do Clube",
      en: "Club Profile",
    },
    stats: {
      pt: "Estatísticas",
      en: "Stats",
    },
    actions: {
      pt: "Ações",
      en: "Actions",
    },
    history: {
      pt: "Histórico",
      en: "History",
    },
  };
  const [stakeOpen, setStakeOpen] = useState(false);

  const handleStake = () => setStakeOpen(true);
  const handleCloseStake = () => setStakeOpen(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-zinc-100 to-purple-100 dark:from-black dark:via-zinc-900 dark:to-purple-950 pb-20 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white mb-8 text-center drop-shadow" aria-label={t.title[lang]}>{t.title[lang]}</h1>
        <section aria-label={t.stats[lang]}>
          <ClubStats
            volumeStake={clubProfile.volumeStake}
            holders={clubProfile.holders}
            rewards={clubProfile.rewards}
          />
        </section>
        <section aria-label={t.actions[lang]}>
          <ClubActions />
        </section>
        <section aria-label={t.history[lang]}>
          <ClubHistory history={clubProfile.history} />
        </section>
        <ClubProfileBanner
          name={clubProfile.name}
          logo={clubProfile.logo}
          description={clubProfile.description}
          onStake={handleStake}
        />
      </div>
      <StakeModal
        isOpen={stakeOpen}
        onClose={handleCloseStake}
        userBalance={mockUser.balance}
        userStats={mockUser.stats}
      />
    </main>
  );
};

export default ClubProfilePage;
