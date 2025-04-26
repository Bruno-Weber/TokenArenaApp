"use client";
import React from "react";
import Image from "next/image";
import { DiscordLogo } from "@phosphor-icons/react";
import dynamic from "next/dynamic";

const SparklesCore = dynamic(() => import("@/components/ui/sparkles").then(mod => mod.SparklesCore), {
  ssr: false
});

const Footer = () => {
  return (
    <footer className="relative py-12 px-4">
      {/* Background with particles */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black">
        <SparklesCore
          id="tsparticlesFooter"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={70}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={0.5}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/images/logo.png" alt="Logo TokenArena" width={32} height={32} />
              <span className="text-xl font-bold text-purple-400">TokenArena</span>
            </div>
            <p className="text-sm text-gray-400">
              Conectando clubes e torcedores através de tokens exclusivos.
            </p>
          </div>

          {/* Contato */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p className="text-sm text-gray-400 mb-2">
              Entre em contato para saber mais sobre como podemos ajudar seu clube ou sua experiência como torcedor.
            </p>
            <a href="mailto:contato@tokenarena.com" className="text-purple-400 hover:text-purple-300">
              contato@tokenarena.com
            </a>
          </div>

          {/* Comunidade */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-4">Junte-se à Comunidade</h3>
            <p className="text-sm text-gray-400 mb-4">
              Fique por dentro das últimas novidades e lançamentos.
            </p>
            <button className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-all">
              <DiscordLogo size={20} weight="fill" />
              Entrar no Discord
            </button>
          </div>
        </div>

        {/* Links e Copyright */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              TokenArena {new Date().getFullYear()} — Todos os direitos reservados.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
