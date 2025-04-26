import React from "react";
import { CurrencyDollarIcon, UserGroupIcon, GiftIcon } from "@heroicons/react/24/solid";

interface ClubStatsProps {
  volumeStake: string;
  holders: number;
  rewards: string;
}

const ClubStats: React.FC<ClubStatsProps> = ({ volumeStake, holders, rewards }) => {
  return (
    <section className="flex flex-col md:flex-row gap-6 justify-center items-center my-8">
      <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-6 py-4 shadow border border-purple-700/20">
        <CurrencyDollarIcon className="w-7 h-7 text-purple-400" />
        <div>
          <span className="block text-white text-lg font-bold">{volumeStake}</span>
          <span className="block text-gray-400 text-xs">Volume em stake</span>
        </div>
      </div>
      <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-6 py-4 shadow border border-purple-700/20">
        <UserGroupIcon className="w-7 h-7 text-purple-400" />
        <div>
          <span className="block text-white text-lg font-bold">{holders}</span>
          <span className="block text-gray-400 text-xs">Total de holders</span>
        </div>
      </div>
      <div className="flex items-center gap-3 bg-zinc-900 rounded-xl px-6 py-4 shadow border border-purple-700/20">
        <GiftIcon className="w-7 h-7 text-purple-400" />
        <div>
          <span className="block text-white text-lg font-bold">{rewards}</span>
          <span className="block text-gray-400 text-xs">Recompensas disponíveis</span>
        </div>
      </div>
    </section>
  );
};

export default ClubStats;
