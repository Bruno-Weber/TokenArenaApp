"use client";
import React from "react";
import ClubCard from "./ClubCard";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const SparklesCore = dynamic(() => import("@/components/ui/sparkles").then(mod => mod.SparklesCore), {
  ssr: false
});

interface Club {
  name: string;
  logo: string;
}

interface ClubGridProps {
  clubs: Club[];
  onViewToken: (club: Club) => void;
}

const ClubGrid: React.FC<ClubGridProps> = ({ clubs, onViewToken }) => {
  return (
    <section id="clubes" className="relative py-20 px-4">
      {/* Background with particles */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black">
        <SparklesCore
          id="tsparticlesClubs"
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
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Clubes com Fan Token</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto text-center mb-12">
            Explore os tokens dos maiores clubes do Brasil e faça parte dessa revolução no futebol.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {clubs.map((club, idx) => (
              <motion.div
                key={club.name + idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <ClubCard
                  name={club.name}
                  logo={club.logo}
                  onViewToken={() => onViewToken(club)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClubGrid;
