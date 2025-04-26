"use client";

import React from "react";
import { motion } from "framer-motion";

interface VotingResult {
  optionId: string;
  label: string;
  votes: number;
  percentage: number;
}

interface VotingResultsProps {
  results: VotingResult[];
}

const VotingResults: React.FC<VotingResultsProps> = ({ results }) => (
  <div className="space-y-4">
    {results.map((result) => (
      <div key={result.optionId} className="relative">
        <div className="flex justify-between items-center mb-1">
          <span className="font-medium text-gray-300">{result.label}</span>
          <span className="text-purple-400 font-bold">{result.percentage}%</span>
        </div>
        <div className="h-2 bg-zinc-900 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${result.percentage}%` }}
            className="h-full bg-purple-600"
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
        <span className="text-sm text-gray-500 mt-1">{result.votes} votos</span>
      </div>
    ))}
  </div>
);

export default VotingResults;
