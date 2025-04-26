"use client";
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { UsersIcon, CurrencyDollarIcon, ChartBarIcon, StarIcon } from "@heroicons/react/24/solid";
import dynamic from "next/dynamic";

const SparklesCore = dynamic(() => import("@/components/ui/sparkles").then(mod => mod.SparklesCore), {
  ssr: false
});

interface MetricsDashboardProps {
  metrics: {
    value: number;
    suffix: string;
    label: string;
  }[];
}

const MetricsDashboard: React.FC<MetricsDashboardProps> = ({ metrics }) => {
  const metricsWithStyle = [
    {
      icon: <UsersIcon className="w-10 h-10" />,
      color: "from-purple-400 to-purple-600",
      description: "Torcedores engajados na plataforma",
    },
    {
      icon: <CurrencyDollarIcon className="w-10 h-10" />,
      color: "from-blue-400 to-blue-600",
      description: "Total de tokens em stake (USD)",
    },
    {
      icon: <ChartBarIcon className="w-10 h-10" />,
      color: "from-pink-400 to-pink-600",
      description: "Propostas em andamento",
    },
    {
      icon: <StarIcon className="w-10 h-10" />,
      color: "from-yellow-400 to-yellow-600",
      description: "Colecionáveis únicos criados",
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

  return (
    <section id="metricas" className="relative py-24 overflow-hidden">
      {/* Background with particles */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black">
        <SparklesCore
          id="tsparticlesMetrics"
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
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Métricas da Plataforma</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto text-center mb-12">
          Acompanhe em tempo real o crescimento e impacto da Token Arena
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              variants={item}
              className={`relative p-6 rounded-xl bg-gradient-to-br ${metricsWithStyle[index].color} shadow-xl hover:scale-105 transition-transform duration-300`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-white/10 rounded-lg">
                  {metricsWithStyle[index].icon}
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold flex items-baseline">
                  <CountUp
                    end={metric.value}
                    duration={2.5}
                    decimals={metric.value % 1 !== 0 ? 1 : 0}
                  />
                  <span className="ml-1">{metric.suffix}</span>
                </h3>
                <p className="text-sm text-white/80">{metric.label}</p>
                <p className="text-xs text-white/60">{metricsWithStyle[index].description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MetricsDashboard;
