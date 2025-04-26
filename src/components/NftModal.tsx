import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckCircleIcon, XCircleIcon, ArrowPathIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

interface NftModalProps {
  isOpen: boolean;
  onClose: () => void;
  nft: any;
}

const NftModal: React.FC<NftModalProps> = ({ isOpen, onClose, nft }) => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleMint = () => {
    setStatus("loading");
    setTimeout(() => {
      if (nft.available > 0) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    }, 1300);
  };

  const handleClose = () => {
    setStatus("idle");
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
          <div className="w-full max-w-md p-4">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300" enterFrom="scale-90 opacity-0" enterTo="scale-100 opacity-100"
              leave="ease-in duration-200" leaveFrom="scale-100 opacity-100" leaveTo="scale-90 opacity-0"
            >
              <Dialog.Panel className="relative bg-zinc-900 rounded-2xl shadow-2xl border-2 border-purple-700/30 p-8 flex flex-col items-center">
                <Dialog.Title className="text-2xl font-extrabold text-purple-400 mb-2">NFT: {nft.name}</Dialog.Title>
                <img src={nft.image} alt={nft.name} className="w-40 h-40 object-contain rounded-xl mb-4 bg-zinc-800 border-2" />
                <p className="mb-2 text-gray-300 text-center">{nft.description}</p>
                <div className="flex gap-3 mb-2">
                  <span className="text-purple-300 font-bold">{nft.price} CHZ</span>
                  <span className="text-gray-400 text-xs">Disponível: {nft.available}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 border border-purple-700/30 text-purple-300 uppercase">{nft.rarity}</span>
                </div>
                <motion.button
                  className="w-full bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white py-3 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 mt-2 transition-all"
                  whileTap={{ scale: 0.95 }}
                  onClick={handleMint}
                  disabled={status === "loading" || nft.available === 0}
                >
                  {status === "loading" ? (
                    <ArrowPathIcon className="w-6 h-6 animate-spin" />
                  ) : (
                    <>Mintar NFT</>
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
                      <CheckCircleIcon className="w-6 h-6" /> NFT mintado com sucesso!
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      className="flex items-center gap-2 mt-4 text-red-400 font-bold"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      <XCircleIcon className="w-6 h-6" /> NFT esgotado.
                    </motion.div>
                  )}
                </AnimatePresence>
                <motion.button
                  className="w-full mt-6 bg-zinc-800 hover:bg-zinc-700 text-purple-400 py-3 rounded-xl font-bold text-lg border border-purple-700/30 shadow transition-all"
                  whileTap={{ scale: 0.95 }}
                  onClick={handleClose}
                  disabled={status === "loading"}
                >
                  Fechar
                </motion.button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default NftModal;
