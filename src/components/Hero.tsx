"use client";
import React from "react";
import DynamicBackground from "./DynamicBackground";

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <DynamicBackground />
      <div className="relative z-10 px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight drop-shadow-2xl">
          Conectando{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
            Torcedores
          </span>{" "}
          e{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
            Clubes
          </span>{" "}
          pelo Mundo
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-medium drop-shadow-lg">
          Crie fan tokens verificados, engaje sua torcida e monetize sua paixão em uma plataforma segura e transparente.
        </p>
        <button className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:from-purple-600 hover:via-purple-700 hover:to-purple-800 text-white px-12 py-5 rounded-lg font-bold text-xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/25">
          Explorar Fan Tokens
        </button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/80"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
