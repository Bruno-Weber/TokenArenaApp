"use client";

import React, { useState } from "react";
import NftCard from "./NftCard";
import NftModal from "./NftModal";
import { nfts } from "@/data/nfts";

const getUnique = (arr: any[], key: string) => [...new Set(arr.map(item => item[key]))];

const NftGrid: React.FC = () => {
  const [selectedClub, setSelectedClub] = useState("");
  const [selectedRarity, setSelectedRarity] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [modalNft, setModalNft] = useState<any | null>(null);

  const clubs = getUnique(nfts, "club");
  const rarities = getUnique(nfts, "rarity");

  const filtered = nfts.filter(nft =>
    (selectedClub === "" || nft.club === selectedClub) &&
    (selectedRarity === "" || nft.rarity === selectedRarity) &&
    nft.price >= minPrice &&
    nft.price <= maxPrice
  );

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
          <NftCard
            key={nft.id}
            {...nft}
            onBuy={() => setModalNft(nft)}
          />
        ))}
      </div>
      <NftModal isOpen={!!modalNft} onClose={() => setModalNft(null)} nft={modalNft || {}} />
    </div>
  );
};

export default NftGrid;
