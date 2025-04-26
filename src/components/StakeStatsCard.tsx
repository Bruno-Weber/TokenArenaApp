import React from "react";
import { TrophyIcon, CurrencyDollarIcon, ChartBarIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

interface StakeStatsCardProps {
  icon: "trophy" | "currency" | "chart";
  value: string | number;
  label: string;
  color?: string;
}

const iconMap = {
  trophy: <TrophyIcon className="w-8 h-8" />,
  currency: <CurrencyDollarIcon className="w-8 h-8" />,
  chart: <ChartBarIcon className="w-8 h-8" />,
};

const StakeStatsCard: React.FC<StakeStatsCardProps> = ({ icon, value, label, color = "text-purple-400" }) => (
  <motion.div
    className={`bg-zinc-900 rounded-xl p-6 flex flex-col items-center shadow-lg border border-purple-700/20 hover:scale-105 hover:shadow-2xl transition-transform ${color}`}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.08 }}
    transition={{ duration: 0.5, type: "spring" }}
  >
    <div className="mb-2">{iconMap[icon]}</div>
    <span className="text-2xl font-bold mb-1">{value}</span>
    <span className="text-white text-sm text-center">{label}</span>
  </motion.div>
);

export default StakeStatsCard;
