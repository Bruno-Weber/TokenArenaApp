import React, { useState } from "react";

const ClubActions: React.FC = () => {
  const [stakeAmount, setStakeAmount] = useState(0);
  const [unstakeAmount, setUnstakeAmount] = useState(0);

  return (
    <section className="flex flex-col md:flex-row gap-8 justify-center items-start my-8">
      {/* Stake/Unstake */}
      <div className="bg-zinc-900 rounded-xl p-6 flex flex-col gap-4 shadow border border-purple-700/20 w-full md:w-1/2">
        <h3 className="text-xl font-bold text-white mb-2">Stake / Unstake de Tokens</h3>
        <div className="flex flex-col gap-2">
          <label className="text-gray-300">Quantidade para Stake</label>
          <input
            type="number"
            min={0}
            value={stakeAmount}
            onChange={e => setStakeAmount(Number(e.target.value))}
            className="px-3 py-2 rounded bg-zinc-800 text-white border border-purple-700/30 focus:outline-none"
          />
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold mt-2 transition-all">
            Stake
          </button>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label className="text-gray-300">Quantidade para Unstake</label>
          <input
            type="number"
            min={0}
            value={unstakeAmount}
            onChange={e => setUnstakeAmount(Number(e.target.value))}
            className="px-3 py-2 rounded bg-zinc-800 text-white border border-purple-700/30 focus:outline-none"
          />
          <button className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-lg font-semibold mt-2 transition-all">
            Unstake
          </button>
        </div>
      </div>
      {/* Outras ações */}
      <div className="flex flex-col gap-6 w-full md:w-1/2">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow transition-all">
          Comprar NFTs do Clube
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow transition-all">
          Participar de Votações
        </button>
        <button className="bg-zinc-800 hover:bg-zinc-700 text-purple-400 px-6 py-3 rounded-lg font-semibold shadow border border-purple-700/30 transition-all">
          Enviar Feedback Formal
        </button>
      </div>
    </section>
  );
};

export default ClubActions;
