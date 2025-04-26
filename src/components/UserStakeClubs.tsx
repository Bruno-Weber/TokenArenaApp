import React from "react";
import Image from 'next/image';

interface StakeClub {
  club: string;
  amount: number;
}

interface UserStakeClubsProps {
  stake: StakeClub[];
}

const clubLogos: Record<string, string> = {
  "Grêmio": "/images/gremio.png",
  "Flamengo": "/images/flamengo.png",
  // Adicione outros clubes conforme necessário
};

const UserStakeClubs: React.FC<UserStakeClubsProps> = ({ stake }) => (
  <section className="mb-8">
    <h3 className="text-lg font-bold text-white mb-3">Tokens em Stake por Clube</h3>
    <div className="flex flex-wrap gap-5">
      {stake.map(({ club, amount }) => (
        <div key={club} className="flex items-center gap-3 bg-zinc-900 rounded-xl px-5 py-4 shadow border border-purple-700/20 min-w-[180px]">
          <Image
            src={clubLogos[club]}
            alt={`Logo do ${club}`}
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
          <div>
            <span className="block text-white text-lg font-bold">{amount} FAN</span>
            <span className="block text-gray-400 text-xs">{club}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default UserStakeClubs;
