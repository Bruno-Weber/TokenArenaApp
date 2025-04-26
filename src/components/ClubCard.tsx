"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ClubCardProps {
  name: string;
  logo: string;
  onViewToken: () => void;
}

const ClubCard: React.FC<ClubCardProps> = ({ name, logo, onViewToken }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-gradient-to-br from-zinc-900 via-zinc-800/50 to-zinc-900 rounded-2xl p-1 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative bg-zinc-900 rounded-xl p-8 flex flex-col items-center">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
        
        {/* Logo container with reflection effect */}
        <div className="relative mb-6 transform group-hover:scale-110 transition-transform duration-500">
          <Image
            src={logo}
            alt={name}
            fill
            className="object-contain drop-shadow-2xl"
          />
          <div className="absolute -bottom-6 left-0 w-full h-1/2 bg-gradient-to-b from-purple-500/30 to-transparent blur-sm transform scale-y-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-white">
            {name}
          </span>
        </h3>

        <button
          onClick={onViewToken}
          className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 rounded-lg font-semibold transform group-hover:scale-105 transition-all duration-300"
        >
          <span className="relative z-10">Ver token</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>
    </motion.div>
  );
};

export default ClubCard;
