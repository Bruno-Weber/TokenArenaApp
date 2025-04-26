"use client";

import React, { useState } from "react";
import VoteOptionButton from "./VoteOptionButton";
import VotingResults from "./VotingResults";

export interface VotingOption {
  id: string;
  label: string;
  votes: number;
}

export interface Comment {
  id: string;
  text: string;
  author: string;
  timestamp: string;
}

export interface VotingResult {
  optionId: string;
  label: string;
  votes: number;
  percentage: number;
}

export interface Voting {
  id: string;
  title: string;
  description: string;
  options: VotingOption[];
  deadline: string;
  userVoted: boolean;
  status: "open" | "closed";
  results?: VotingResult[];
  comments?: Comment[];
}

interface VotingCardProps {
  voting: Voting;
  onVote: (votingId: string, optionId: string) => void;
}

export default function VotingCard({ voting, onVote }: VotingCardProps) {
  const [voted, setVoted] = useState(voting.userVoted);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleVote = () => {
    if (selectedOption && !voted) {
      onVote(voting.id, selectedOption);
      setVoted(true);
    }
  };

  const sortedComments = voting.comments?.sort((a: Comment, b: Comment) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return (
    <div className="bg-zinc-800/50 rounded-lg p-6 backdrop-blur-sm border border-zinc-700/50">
      <h3 className="text-xl font-bold mb-2">{voting.title}</h3>
      <p className="text-gray-400 mb-4">{voting.description}</p>

      {voting.status === "open" && !voted && (
        <div className="space-y-4">
          {voting.options.map((option) => (
            <VoteOptionButton
              key={option.id}
              label={option.label}
              selected={selectedOption === option.id}
              onClick={() => setSelectedOption(option.id)}
            />
          ))}
          <button
            className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-bold disabled:opacity-50"
            onClick={handleVote}
            disabled={!selectedOption}
          >
            Votar
          </button>
        </div>
      )}

      {(voted || voting.status === "closed") && voting.results && (
        <VotingResults results={voting.results} />
      )}

      <div className="mt-4 text-sm text-gray-400">
        <span>Encerra em: {voting.deadline}</span>
        {voting.results && (
          <span className="ml-4">
            Total de votos: {voting.results.reduce((sum, r) => sum + r.votes, 0)}
          </span>
        )}
      </div>

      {sortedComments && sortedComments.length > 0 && (
        <div className="mt-6 border-t border-zinc-700 pt-4">
          <h4 className="text-lg font-bold mb-3">Comentários</h4>
          <div className="space-y-4">
            {sortedComments.map((comment) => (
              <div key={comment.id} className="bg-zinc-900/50 rounded p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-purple-400">{comment.author}</span>
                  <span className="text-sm text-gray-500">{comment.timestamp}</span>
                </div>
                <p className="text-gray-300">{comment.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
