import React from "react";

interface UserFeedbacksListProps {
  feedbacks: { date: string; summary: string; status: string }[];
}

const statusColor: Record<string, string> = {
  lido: "bg-blue-700 text-blue-200",
  resolvido: "bg-green-700 text-green-200",
  pendente: "bg-yellow-700 text-yellow-200",
};

const UserFeedbacksList: React.FC<UserFeedbacksListProps> = ({ feedbacks }) => (
  <section className="mb-8">
    <h3 className="text-lg font-bold text-white mb-3">Feedbacks Enviados</h3>
    <ul className="space-y-3">
      {feedbacks.map((f, idx) => (
        <li key={idx} className="bg-zinc-900 rounded-xl px-5 py-3 shadow border border-purple-700/20 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <span className="text-white font-bold mr-2">{f.summary}</span>
            <span className="text-xs text-gray-400">({new Date(f.date).toLocaleDateString()})</span>
          </div>
          <span className={`text-xs px-2 py-1 rounded font-bold capitalize ${statusColor[f.status] || "bg-gray-700 text-gray-300"}`}>{f.status}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default UserFeedbacksList;
