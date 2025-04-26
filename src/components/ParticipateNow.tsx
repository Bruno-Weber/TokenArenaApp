"use client";
import React from "react";
import { motion } from "framer-motion";
import { StarIcon, SparklesIcon, UsersIcon, GiftIcon } from "@heroicons/react/24/solid";
import dynamic from "next/dynamic";

const SparklesCore = dynamic(() => import("@/components/ui/sparkles").then(mod => mod.SparklesCore), {
  ssr: false
});

const shortcuts = [
  {
    icon: <StarIcon className="w-10 h-10 text-purple-400" />,
    label: "Criar Fan Token",
    description: "Lance seu próprio token e conecte-se com sua torcida",
  },
  {
    icon: <UsersIcon className="w-10 h-10 text-purple-400" />,
    label: "Engajar Torcida",
    description: "Crie experiências únicas para seus torcedores",
  },
  {
    icon: <SparklesIcon className="w-10 h-10 text-purple-400" />,
    label: "Mintar NFT",
    description: "Crie colecionáveis digitais exclusivos",
  },
  {
    icon: <GiftIcon className="w-10 h-10 text-purple-400" />,
    label: "Participar de Votações",
    description: "Tenha voz ativa nas decisões do seu clube",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const ParticipateNow = () => {
  return (
    <section id="participe" className="relative py-24 overflow-hidden">
      {/* Background with particles */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black">
        <SparklesCore
          id="tsparticlesParticipate"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={70}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={0.5}
        />
      </div>

      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Participe Agora</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto text-center mb-12">
          Explore todas as possibilidades que a Token Arena oferece para você!
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4"
        >
          {shortcuts.map((shortcut) => (
            <motion.div
              key={shortcut.label}
              variants={item}
              className="relative p-6 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-800 shadow-xl hover:scale-105 transition-transform duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-purple-500/20 transition-colors duration-300">
                  {shortcut.icon}
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">{shortcut.label}</h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300">
                  {shortcut.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ParticipateNow;
