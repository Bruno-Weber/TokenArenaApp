"use client";
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { UsersIcon, CurrencyDollarIcon, ChartBarIcon, StarIcon } from "@heroicons/react/24/solid";

const metrics = [
  {
    icon: <UsersIcon className="w-10 h-10" />,
    value: 3.2,
    suffix: "M",
    label: "Usuários Ativos",
    description: "Torcedores engajados na plataforma",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: <CurrencyDollarIcon className="w-10 h-10" />,
    value: 1.5,
    suffix: "M",
    label: "Volume em Stake",
    description: "Total de tokens em stake (USD)",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: <ChartBarIcon className="w-10 h-10" />,
    value: 12,
    suffix: "",
    label: "Votações Ativas",
    description: "Propostas em andamento",
    color: "from-pink-400 to-pink-600",
  },
  {
    icon: <StarIcon className="w-10 h-10" />,
    value: 8.7,
    suffix: "K",
    label: "NFTs Mintados",
    description: "Colecionáveis únicos criados",
    color: "from-yellow-400 to-yellow-600",
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

const Metrics = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent blur-3xl opacity-30" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-500/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
              Métricas da Plataforma
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Acompanhe em tempo real o crescimento e impacto da Token Arena
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-gradient-to-br from-zinc-900 via-zinc-800/50 to-zinc-900 rounded-2xl p-1"
            >
              {/* Card Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`} />
              
              <div className="relative bg-zinc-900 rounded-xl p-8">
                {/* Inner Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${metric.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-xl`} />
                
                <div className="relative z-10 flex flex-col items-center">
                  {/* Icon Container */}
                  <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${metric.color} bg-opacity-10 transform group-hover:scale-110 transition-transform duration-300 relative`}>
                    {/* Icon Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-20 blur-xl`} />
                    {React.cloneElement(metric.icon as React.ReactElement, {
                      className: `w-10 h-10 text-${metric.color.split(" ")[0].replace("from-", "")} relative z-10`,
                    })}
                  </div>

                  {/* Value with CountUp */}
                  <div className="flex items-baseline justify-center mb-3">
                    <CountUp
                      end={metric.value}
                      decimals={metric.value % 1 !== 0 ? 1 : 0}
                      duration={2.5}
                      separator=","
                    >
                      {({ countUpRef }) => (
                        <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                          <span ref={countUpRef} />
                          {metric.suffix}
                        </h3>
                      )}
                    </CountUp>
                  </div>

                  {/* Label and Description */}
                  <h4 className="text-xl font-semibold text-white mb-2">{metric.label}</h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-center text-sm">
                    {metric.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Metrics;
