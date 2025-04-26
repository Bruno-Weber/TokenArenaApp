"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface NftCardProps {
  name: string;
  image: string;
  price: number;
  available: number;
  status: string;
}



const NftCard: React.FC<NftCardProps> = ({ name, image, price, available, status }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-zinc-800/50 rounded-lg p-4 flex flex-col items-center justify-center border border-zinc-700/50 backdrop-blur-sm"
  >
    <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
    <h3 className="text-lg font-bold text-white mb-2">{name}</h3>
    <div className="flex items-center justify-between w-full mt-2">
      <span className="text-purple-400 font-bold">{price} CHZ</span>
      <span className="text-gray-400 text-sm">Disponível: {available}</span>
    </div>
    {status === "esgotado" && (
      <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold mt-2">
        Esgotado
      </span>
    )}
    {status === "muito raro" && (
      <span className="bg-cyan-400 text-zinc-900 px-2 py-1 rounded text-xs font-bold mt-2">
        Muito Raro
      </span>
    )}
  </motion.div>
);

export default NftCard;
