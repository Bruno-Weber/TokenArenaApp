"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ConnectButton } from '@rainbow-me/rainbowkit';

const backgroundImages = [
  "/images/stadium1.jpg",
  "/images/stadium2.jpg",
  "/images/stadium3.jpg",
  "/images/stadium4.jpg",
];

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative">
      {/* Background Images */}
      <div className="fixed top-0 left-0 w-full h-[400px] -z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={backgroundImages[currentImageIndex]}
              alt="Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/80" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Header Content */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-black/10 backdrop-blur-[2px]">
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Logo TokenArena" width={36} height={36} />
          <span className="text-2xl font-bold text-purple-400">TokenArena</span>
        </div>
        
        <nav className="hidden md:flex gap-8 text-white font-medium">
          <a href="#clubes" className="hover:text-purple-400 transition">Clubes com Fan Token</a>
          <a href="#participe" className="hover:text-purple-400 transition">Participe Agora</a>
          <a href="#metricas" className="hover:text-purple-400 transition">Métricas</a>
        </nav>
        
        <div>
          <ConnectButton.Custom>
            {({
              account,
              chain,
              openConnectModal,
              mounted,
            }) => {
              const ready = mounted;
              const connected = ready && account && chain;

              return (
                <div
                  {...(!ready && {
                    'aria-hidden': true,
                    'style': {
                      opacity: 0,
                      pointerEvents: 'none',
                      userSelect: 'none',
                    },
                  })}
                >
                  {(() => {
                    if (!connected) {
                      return (
                        <button 
                          onClick={openConnectModal} 
                          className="bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-lg font-semibold shadow-md transition-all"
                        >
                          Conectar carteira
                        </button>
                      );
                    }

                    return (
                      <div className="flex items-center gap-2">
                        <span className="text-white">
                          {account.displayName}
                        </span>
                        <span className="text-purple-400">
                          {chain.name}
                        </span>
                      </div>
                    );
                  })()}
                </div>
              );
            }}
          </ConnectButton.Custom>
        </div>
      </div>
    </header>
  );
};

export default Header;
