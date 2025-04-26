"use client";

import React, { useState } from "react";
import { userProfile } from "@/data/userProfile";
import UserWalletCard from "@/components/UserWalletCard";
import UserStakeClubs from "@/components/UserStakeClubs";
import UserNftsGrid from "@/components/UserNftsGrid";
import UserVotesList from "@/components/UserVotesList";
import UserFeedbacksList from "@/components/UserFeedbacksList";
import EditProfileModal from "@/components/EditProfileModal";
import { useTheme } from "@/context/ThemeContext";
import { useLang } from "@/context/LangContext";

const UserProfilePage = () => {
  useTheme();
  const { lang } = useLang();
  const [avatarNftId, setAvatarNftId] = useState(userProfile.avatarNftId);
  const [editOpen, setEditOpen] = useState(false);
  const [preferences, setPreferences] = useState(userProfile.preferences);

  const avatarNft = userProfile.nfts.find(nft => nft.id === avatarNftId);

  const t = {
    edit: { pt: "Editar Perfil", en: "Edit Profile" },
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-zinc-100 to-purple-100 dark:from-black dark:via-zinc-900 dark:to-purple-950 pb-20 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <UserWalletCard wallet={userProfile.wallet} ens={userProfile.ens} avatarUrl={avatarNft?.image} />
          <button
            className="bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white py-3 px-8 rounded-xl font-bold text-lg shadow-lg transition-all"
            onClick={() => setEditOpen(true)}
            aria-label={t.edit[lang]}
          >
            {t.edit[lang]}
          </button>
        </div>
        <UserStakeClubs stake={userProfile.stake} />
        <UserNftsGrid nfts={userProfile.nfts} avatarNftId={avatarNftId} onSetAvatar={setAvatarNftId} />
        <UserVotesList votes={userProfile.votes} />
        <UserFeedbacksList feedbacks={userProfile.feedbacks} />
      </div>
      <EditProfileModal
        isOpen={editOpen}
        onClose={() => setEditOpen(false)}
        preferences={preferences}
        onSave={setPreferences}
      />
    </main>
  );
};

export default UserProfilePage;
