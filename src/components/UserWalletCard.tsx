import React from "react";
import Image from "next/image";
import { UserCircleIcon } from "@heroicons/react/24/solid";

interface UserWalletCardProps {
  wallet: string;
  ens?: string;
  avatarUrl?: string;
}

const UserWalletCard: React.FC<UserWalletCardProps> = ({ wallet, ens, avatarUrl }) => (
  <div className="flex items-center gap-4 bg-zinc-900 rounded-xl p-5 shadow border border-purple-700/20 mb-6">
    {avatarUrl ? (
      <Image
        src={avatarUrl}
        alt="Avatar NFT"
        width={64}
        height={64}
        className="rounded-full border-4 border-purple-400 shadow-md object-cover"
      />
    ) : (
      <UserCircleIcon className="w-16 h-16 text-purple-400" />
    )}
    <div>
      <div className="text-lg font-bold text-white">
        {ens ? (
          <span>{ens}</span>
        ) : (
          <span>{wallet.slice(0, 6)}...{wallet.slice(-4)}</span>
        )}
      </div>
      <div className="text-xs text-gray-400">{wallet}</div>
    </div>
  </div>
);

export default UserWalletCard;
