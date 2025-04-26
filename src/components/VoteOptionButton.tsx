import React from "react";
import { motion } from "framer-motion";

interface VoteOptionButtonProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

const VoteOptionButton: React.FC<VoteOptionButtonProps> = ({ label, selected, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`w-full p-4 rounded-lg text-left transition-all ${
      selected
        ? "bg-purple-600 text-white"
        : "bg-zinc-900/50 hover:bg-zinc-700/50 text-gray-300"
    }`}
    onClick={onClick}
  >
    <span className="font-medium">{label}</span>
  </motion.button>
);

export default VoteOptionButton;
