import React from "react";
import { motion } from "framer-motion";

interface UserNftsGridProps {
  nfts: { id: number; name: string; image: string; rarity: string }[];
  avatarNftId: number;
  onSetAvatar: (nftId: number) => void;
}

const rarityBorder: Record<string, string> = {
  comum: "border-gray-500",
  raro: "border-blue-400",
  lendário: "border-yellow-400",
  "muito raro": "border-4 border-cyan-300 shadow-[0_0_16px_4px_rgba(0,255,255,0.5)] animate-pulse",
};

const UserNftsGrid: React.FC<UserNftsGridProps> = ({ nfts, avatarNftId, onSetAvatar }) => (
  <section className="mb-8">
    <h3 className="text-lg font-bold text-white mb-3">NFTs Compradas</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {nfts.map(nft => (
        <motion.div
          key={nft.id}
          className={`relative bg-zinc-900 rounded-xl p-4 flex flex-col items-center shadow-lg border-2 ${rarityBorder[nft.rarity] || "border-purple-700/20"} transition-all min-h-[220px]`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.04 }}
        >
          <img src={nft.image} alt={nft.name} className="w-20 h-20 object-contain rounded-xl mb-2 bg-zinc-800" />
          <span className="text-white font-bold text-center mb-1">{nft.name}</span>
          <span className="text-xs text-gray-400 mb-2 capitalize">{nft.rarity}</span>
          {avatarNftId === nft.id ? (
            <span className="absolute top-2 right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded font-bold">Foto de Perfil</span>
          ) : (
            <button
              className="mt-auto bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-700 hover:to-blue-700 text-white text-xs px-3 py-1 rounded font-bold shadow transition-all"
              onClick={() => onSetAvatar(nft.id)}
            >
              Usar como foto de perfil
            </button>
          )}
        </motion.div>
      ))}
    </div>
  </section>
);

export default UserNftsGrid;
