import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ClubProfileBannerProps {
  name: string;
  logo: string;
  description: string;
  onStake: () => void;
}

const ClubProfileBanner: React.FC<ClubProfileBannerProps> = ({ name, logo, description, onStake }) => {
  return (
    <motion.section
      className="relative w-full bg-gradient-to-r from-purple-900/80 via-black to-blue-900/80 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8 mt-6 overflow-hidden"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      {/* Marca d'água do logo do projeto */}
      <Image
        src="/images/logo.png"
        alt="Logo TokenArena marca d'água"
        width={200}
        height={200}
        className="absolute opacity-10 right-8 top-8 z-0 hidden md:block"
      />
      <div className="relative z-10 flex flex-col items-center md:items-start gap-4 w-full md:w-auto">
        <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, type: "spring" }}>
          <Image src={logo} alt={name} width={80} height={80} className="rounded-full bg-white p-1 shadow-xl" />
        </motion.div>
        <motion.h1 initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-xl">
          {name}
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-gray-200 max-w-lg text-center md:text-left">
          {description}
        </motion.p>
        <motion.button
          className="mt-3 bg-purple-500 hover:bg-purple-600 text-white px-8 py-2 rounded-lg font-semibold text-lg shadow-lg transition-all"
          onClick={onStake}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
        >
          Stake
        </motion.button>
      </div>
    </motion.section>
  );
};

export default ClubProfileBanner;
