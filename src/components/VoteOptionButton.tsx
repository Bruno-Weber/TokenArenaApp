import React from "react";
import { motion } from "framer-motion";

interface VoteOptionButtonProps {
  label: string;
  selected: boolean;
  disabled: boolean;
  onClick: () => void;
}

const VoteOptionButton: React.FC<VoteOptionButtonProps> = ({ label, selected, disabled, onClick }) => (
  <motion.button
    className={`w-full py-3 px-5 rounded-xl font-bold text-lg shadow-md border-2 transition-all
      ${selected ? "bg-purple-600 border-purple-400 text-white scale-105" : "bg-zinc-800 border-purple-700/30 text-purple-200 hover:bg-purple-900 hover:scale-105"}
      ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
    whileTap={{ scale: 0.96 }}
    whileHover={!disabled ? { scale: 1.08 } : {}}
    onClick={onClick}
    disabled={disabled}
    layout
  >
    {label}
  </motion.button>
);

export default VoteOptionButton;
