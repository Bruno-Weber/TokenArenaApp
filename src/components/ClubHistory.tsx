import React from "react";
import { ChatBubbleLeftEllipsisIcon, GiftIcon, ChartBarIcon, SparklesIcon } from "@heroicons/react/24/solid";

interface HistoryItem {
  type: string;
  title: string;
  date: string;
  details: string;
}

interface ClubHistoryProps {
  history: HistoryItem[];
}

const iconMap: Record<string, React.ReactNode> = {
  votacao: <ChartBarIcon className="w-7 h-7 text-purple-400" />,
  recompensa: <GiftIcon className="w-7 h-7 text-purple-400" />,
  feedback: <ChatBubbleLeftEllipsisIcon className="w-7 h-7 text-purple-400" />,
  nft: <SparklesIcon className="w-7 h-7 text-purple-400" />,
};

const ClubHistory: React.FC<ClubHistoryProps> = ({ history }) => {
  return (
    <section className="my-10 max-w-3xl mx-auto">
      <h3 className="text-xl font-bold text-white mb-6">Histórico de Interações</h3>
      <ul className="space-y-5">
        {history.map((item, idx) => (
          <li key={idx} className="flex items-start gap-4 bg-zinc-900 rounded-xl p-5 shadow border border-purple-700/20">
            <div>{iconMap[item.type]}</div>
            <div>
              <span className="text-white font-semibold text-lg">{item.title}</span>
              <div className="text-xs text-gray-400 mb-1">{item.date}</div>
              <div className="text-gray-200 text-sm">{item.details}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ClubHistory;
