import React from "react";
import { motion } from "framer-motion";

interface ResultOption {
  id: string;
  label: string;
  percent: number;
}

interface VotingResultsProps {
  results: ResultOption[];
  comments: { user: string; text: string }[];
  winnerId: string;
}

const VotingResults: React.FC<VotingResultsProps> = ({ results, comments, winnerId }) => (
  <div className="mt-6">
    <h4 className="text-lg font-bold text-white mb-3">Resultados</h4>
    <ul className="space-y-3">
      {results.map(option => (
        <li key={option.id} className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className={`font-semibold ${option.id === winnerId ? 'text-yellow-400' : 'text-purple-200'}`}>{option.label}</span>
            {option.id === winnerId && <span className="ml-2 text-xs bg-yellow-400/20 text-yellow-300 px-2 py-1 rounded">Vencedor</span>}
          </div>
          <motion.div
            className={`h-4 rounded bg-gradient-to-r from-purple-700 to-blue-700 relative`}
            initial={{ width: 0 }}
            animate={{ width: `${option.percent}%` }}
            transition={{ duration: 1 }}
            style={{ maxWidth: '100%' }}
          >
            <span className="absolute left-2 top-0 text-xs text-white font-bold">{option.percent}%</span>
          </motion.div>
        </li>
      ))}
    </ul>
    <div className="mt-6">
      <h5 className="text-md font-bold text-white mb-2">Comentários da Comunidade</h5>
      <ul className="space-y-2">
        {comments.map((c, idx) => (
          <li key={idx} className="bg-zinc-800 rounded-lg px-4 py-2 text-gray-200"><span className="font-bold text-purple-400">{c.user}:</span> {c.text}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default VotingResults;
