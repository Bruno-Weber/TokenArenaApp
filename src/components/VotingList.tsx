"use client";

import React, { useState } from "react";
import { votings } from "@/data/votings";
import VotingCard from "./VotingCard";

const VotingList: React.FC = () => {
  const [votingState, setVotingState] = useState(votings);

  const handleVote = (votingId: string, optionId: string) => {
    setVotingState(prev => prev.map(v =>
      v.id === votingId
        ? {
            ...v,
            userVoted: true,
            options: v.options.map(opt =>
              opt.id === optionId ? { ...opt, votes: opt.votes + 1 } : opt
            )
          }
        : v
    ));
  };

  return (
    <section className="max-w-3xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold text-white mb-8 text-center">Votações do Clube</h2>
      {votingState.map(voting => (
        <VotingCard
          key={voting.id}
          voting={voting}
          onVote={handleVote}
        />
      ))}
    </section>
  );
};

export default VotingList;
