import React from "react";
import { motion } from "framer-motion";

interface NftCardProps {
  name: string;
  image: string;
  price: number;
  available: number;
  status: string;
  rarity: string;
  onBuy: () => void;
}

const rarityStyles: Record<string, string> = {
  "comum": "border-gray-500",
  "raro": "border-blue-400",
  "lendário": "border-yellow-400",
  "muito raro": "border-4 border-cyan-300 shadow-[0_0_16px_4px_rgba(0,255,255,0.5)] animate-pulse",
};

const rarityBadges: Record<string, string> = {
  "comum": "bg-gray-700 text-gray-200",
  "raro": "bg-blue-700 text-blue-200",
  "lendário": "bg-yellow-600 text-yellow-200",
  "muito raro": "bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-white border-2 border-cyan-300",
};

const NftCard: React.FC<NftCardProps> = ({ name, image, price, available, status, rarity, onBuy }) => (
  <motion.div
    className={`relative bg-zinc-900 rounded-2xl p-4 flex flex-col items-center shadow-xl border-2 ${rarityStyles[rarity] || "border-purple-700/20"} transition-all min-h-[340px]`}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.04, boxShadow: "0 0 24px 0 rgba(0,255,255,0.15)" }}
    transition={{ duration: 0.5, type: "spring" }}
  >
    <div className="w-full flex justify-between items-center mb-2">
      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${rarityBadges[rarity]}`}>{rarity}</span>
      {status === "novo" && <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold ml-2">Novo</span>}
      {status === "esgotado" && <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold ml-2">Esgotado</span>}
      {status === "muito raro" && <span className="bg-cyan-400 text-zinc-900 px-2 py-1 rounded text-xs font-bold ml-2">Muito Raro</span>}
    </div>
    <img src={image} alt={name} className="w-36 h-36 object-contain rounded-xl mb-4 bg-zinc-800" />
    <h3 className="text-lg font-bold text-white mb-1 text-center">{name}</h3>
    <span className="text-purple-300 font-bold mb-2">{price} CHZ</span>
    <span className="text-gray-400 text-xs mb-2">Disponível: {available}</span>
    <motion.button
      className="mt-auto w-full bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white py-2 rounded-xl font-bold text-base shadow-lg border-2 border-dashed border-white/40 tracking-wider transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      whileTap={{ scale: 0.96 }}
      onClick={onBuy}
      disabled={available === 0 || status === "esgotado"}
    >
      Comprar NFT
    </motion.button>
  </motion.div>
);

export default NftCard;
