import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckCircleIcon, XCircleIcon, ArrowPathIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";
import StakeStatsCard from "./StakeStatsCard";

interface StakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  userBalance: number;
  userStats: {
    totalStaked: number;
    rewards: number;
    participations: number;
  };
}

const StakeModal: React.FC<StakeModalProps> = ({ isOpen, onClose, userBalance, userStats }) => {
  const [amount, setAmount] = useState(0);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleStake = () => {
    setStatus("loading");
    setTimeout(() => {
      if (amount > 0 && amount <= userBalance) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    }, 1500);
  };

  const handleClose = () => {
    setStatus("idle");
    setAmount(0);
    onClose();
  };

  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleClose}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100"
          leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-70" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto flex items-center justify-center">
          <div className="w-full max-w-lg p-4">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300" enterFrom="scale-90 opacity-0" enterTo="scale-100 opacity-100"
              leave="ease-in duration-200" leaveFrom="scale-100 opacity-100" leaveTo="scale-90 opacity-0"
            >
              <Dialog.Panel className="relative bg-zinc-900 rounded-2xl shadow-2xl border-2 border-purple-700/30 p-8 flex flex-col items-center">
                <Dialog.Title className="text-2xl font-extrabold text-purple-400 mb-2">Stake de Tokens</Dialog.Title>
                <p className="mb-4 text-gray-300 text-center">Insira a quantidade que deseja stakear e aproveite as vantagens exclusivas do clube!</p>
                <div className="w-full flex flex-col gap-2 mb-4">
                  <label className="text-gray-400">Saldo disponível: <span className="text-white font-bold">{userBalance} FAN</span></label>
                  <input
                    type="number"
                    min={0}
                    max={userBalance}
                    value={amount}
                    onChange={e => setAmount(Number(e.target.value))}
                    className="px-4 py-3 rounded-lg bg-zinc-800 text-white border-2 border-purple-700/30 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"
                    placeholder="Quantidade de tokens"
                    disabled={status === "loading"}
                  />
                </div>
                <motion.button
                  className="w-full bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white py-3 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 mt-2 transition-all"
                  whileTap={{ scale: 0.95 }}
                  onClick={handleStake}
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <ArrowPathIcon className="w-6 h-6 animate-spin" />
                  ) : (
                    <>Stakear Agora!</>
                  )}
                </motion.button>
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      className="flex items-center gap-2 mt-4 text-green-400 font-bold"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      <CheckCircleIcon className="w-6 h-6" /> Stake realizado com sucesso!
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      className="flex items-center gap-2 mt-4 text-red-400 font-bold"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      <XCircleIcon className="w-6 h-6" /> Quantidade inválida para stake.
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  <StakeStatsCard icon="currency" value={userStats.totalStaked + (status === "success" ? amount : 0)} label="Total Stakeado" />
                  <StakeStatsCard icon="trophy" value={userStats.rewards} label="Recompensas Acumuladas" color="text-yellow-400" />
                  <StakeStatsCard icon="chart" value={userStats.participations} label="Participações em Votações" color="text-blue-400" />
                </div>
                <motion.button
                  className="w-full mt-8 bg-zinc-800 hover:bg-zinc-700 text-purple-400 py-3 rounded-xl font-bold text-lg border border-purple-700/30 shadow transition-all"
                  whileTap={{ scale: 0.95 }}
                  onClick={handleClose}
                  disabled={status === "loading"}
                >
                  Desfazer Stake
                </motion.button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default StakeModal;
