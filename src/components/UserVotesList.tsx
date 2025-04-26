import React from "react";

interface UserVotesListProps {
  votes: { title: string; date: string; result: string }[];
}

const UserVotesList: React.FC<UserVotesListProps> = ({ votes }) => (
  <section className="mb-8">
    <h3 className="text-lg font-bold text-white mb-3">Participações em Votações</h3>
    <ul className="space-y-3">
      {votes.map((v, idx) => (
        <li key={idx} className="bg-zinc-900 rounded-xl px-5 py-3 shadow border border-purple-700/20 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <span className="text-white font-bold mr-2">{v.title}</span>
            <span className="text-xs text-gray-400">({new Date(v.date).toLocaleDateString()})</span>
          </div>
          <span className="text-purple-400 font-bold">{v.result}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default UserVotesList;
