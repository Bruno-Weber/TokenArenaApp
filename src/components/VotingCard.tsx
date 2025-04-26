import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VoteOptionButton from "./VoteOptionButton";
import VotingResults from "./VotingResults";

interface VotingCardProps {
  voting: any;
  onVote: (votingId: number, optionId: string) => void;
  confetti: boolean;
}

const VotingCard: React.FC<VotingCardProps> = ({ voting, onVote, confetti }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [voted, setVoted] = useState(voting.userVoted);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleVote = (optionId: string) => {
    setSelected(optionId);
    setTimeout(() => {
      setVoted(true);
      setShowConfetti(true);
      onVote(voting.id, optionId);
      setTimeout(() => setShowConfetti(false), 2000);
    }, 700);
  };

  // Confetti simples com emoji (pode ser trocado por lib de confetti real)
  const Confetti = () => (
    <AnimatePresence>
      {showConfetti && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-50"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-5xl select-none">🎉🎊🏆</span>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <motion.div
      className="relative bg-zinc-900 rounded-2xl p-6 shadow-lg border-2 border-purple-700/20 mb-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <Confetti />
      <h3 className="text-xl font-bold text-white mb-2">{voting.title}</h3>
      <p className="text-gray-300 mb-4">{voting.description}</p>
      {voting.status === "open" && !voted && (
        <div className="flex flex-col gap-3 mb-3">
          {voting.options.map((opt: any) => (
            <VoteOptionButton
              key={opt.id}
              label={opt.label}
              selected={selected === opt.id}
              disabled={!!selected}
              onClick={() => handleVote(opt.id)}
            />
          ))}
        </div>
      )}
      {voting.status === "open" && voted && (
        <div className="flex items-center gap-2 mt-2">
          <span className="text-green-400 font-bold">Você já votou!</span>
          <span className="text-2xl">✅</span>
        </div>
      )}
      <div className="flex items-center gap-4 mt-4">
        <span className="text-xs text-gray-400">Deadline: {new Date(voting.deadline).toLocaleString("pt-BR")}</span>
      </div>
      {voting.status === "closed" && voting.results && (
        <VotingResults
          results={voting.results}
          comments={voting.comments}
          winnerId={voting.results.reduce((a, b) => (a.percent > b.percent ? a : b)).id}
        />
      )}
    </motion.div>
  );
};

export default VotingCard;
