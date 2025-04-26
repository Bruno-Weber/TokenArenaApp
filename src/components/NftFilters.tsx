import React from "react";

interface NftFiltersProps {
  clubs: string[];
  rarities: string[];
  selectedClub: string;
  selectedRarity: string;
  minPrice: number;
  maxPrice: number;
  onClubChange: (club: string) => void;
  onRarityChange: (rarity: string) => void;
  onPriceChange: (min: number, max: number) => void;
}

const NftFilters: React.FC<NftFiltersProps> = ({ clubs, rarities, selectedClub, selectedRarity, minPrice, maxPrice, onClubChange, onRarityChange, onPriceChange }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-8 items-end">
      <div>
        <label className="block text-xs text-gray-400 mb-1">Clube</label>
        <select
          className="bg-zinc-800 text-white rounded px-3 py-2 border border-purple-700/30"
          value={selectedClub}
          onChange={e => onClubChange(e.target.value)}
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
          onChange={e => onRarityChange(e.target.value)}
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
            onChange={e => onPriceChange(Number(e.target.value), maxPrice)}
            className="w-20 px-2 py-1 rounded bg-zinc-800 text-white border border-purple-700/30"
            placeholder="Min"
          />
          <span className="text-gray-400">-</span>
          <input
            type="number"
            min={0}
            value={maxPrice}
            onChange={e => onPriceChange(minPrice, Number(e.target.value))}
            className="w-20 px-2 py-1 rounded bg-zinc-800 text-white border border-purple-700/30"
            placeholder="Max"
          />
        </div>
      </div>
    </div>
  );
};

export default NftFilters;
