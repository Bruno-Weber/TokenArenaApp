"use client";

import React, { useState } from "react";
import NftCard from "./NftCard";
import NftModal from "./NftModal";
import { nfts } from "@/data/nfts";

interface Nft {
  id: string | number;
  name: string;
  image: string;
  price: number;
  available: number;
  status: "disponível" | "esgotado" | "muito raro";
  description: string;
  club: string;
  rarity: string;
  [key: string]: string | number; // Index signature
}

const getUnique = (arr: Nft[], key: keyof Nft) => [...new Set(arr.map(item => item[key]))];

const NftGrid: React.FC = () => {
  const [selectedNft, setSelectedNft] = useState<Nft | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClub, setSelectedClub] = useState("");
  const [selectedRarity, setSelectedRarity] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const clubs = getUnique(nfts as Nft[], "club");
  const rarities = getUnique(nfts as Nft[], "rarity");

  const handleNftClick = (nft: Nft) => {
    setSelectedNft(nft);
    setIsModalOpen(true);
  };

  const filtered = nfts.filter((nft) => {
    const matchesClub = !selectedClub || nft.club === selectedClub;
    const matchesRarity = !selectedRarity || nft.rarity === selectedRarity;
    const matchesPrice = nft.price >= minPrice && nft.price <= maxPrice;
    return matchesClub && matchesRarity && matchesPrice;
  });

  return (
    <div>
      <div className="mb-8">
        {/* Filtros */}
        <div className="flex flex-wrap gap-4 mb-8 items-end">
          <div>
            <label className="block text-xs text-gray-400 mb-1">Clube</label>
            <select
              className="bg-zinc-800 text-white rounded px-3 py-2 border border-purple-700/30"
              value={selectedClub}
              onChange={e => setSelectedClub(e.target.value)}
            >
              <option value="">Todos</option>
              {clubs.map(club => <option key={club} value={club}>{club}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Raridade</label>
            <select
              className="bg-zinc-800 text-white rounded px-3 py-2 border border-purple-700/30"
              value={selectedRarity}
              onChange={e => setSelectedRarity(e.target.value)}
            >
              <option value="">Todas</option>
              {rarities.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-400 mb-1">Preço (CHZ)</label>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                min={0}
                value={minPrice}
                onChange={e => setMinPrice(Number(e.target.value))}
                className="w-20 px-2 py-1 rounded bg-zinc-800 text-white border border-purple-700/30"
                placeholder="Min"
              />
              <span className="text-gray-400">-</span>
              <input
                type="number"
                min={0}
                value={maxPrice}
                onChange={e => setMaxPrice(Number(e.target.value))}
                className="w-20 px-2 py-1 rounded bg-zinc-800 text-white border border-purple-700/30"
                placeholder="Max"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Grid de NFTs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filtered.map(nft => (
          <div key={nft.id} onClick={() => handleNftClick(nft as Nft)} className="cursor-pointer">
            <NftCard {...nft} />
          </div>
        ))}
      </div>
      {selectedNft && (
        <NftModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          nft={selectedNft}
        />
      )}
    </div>
  );
};

export default NftGrid;
