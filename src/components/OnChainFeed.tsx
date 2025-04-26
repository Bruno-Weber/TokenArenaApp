import React from "react";

interface FeedItem {
  user: string;
  action: string;
  target: string;
  timestamp: string;
}

interface OnChainFeedProps {
  feed: FeedItem[];
}

const OnChainFeed: React.FC<OnChainFeedProps> = ({ feed }) => {
  return (
    <aside className="fixed right-4 top-24 w-80 bg-zinc-900 rounded-xl shadow-lg p-4 z-40 hidden lg:block border border-purple-700/20">
      <h3 className="text-lg font-bold text-purple-400 mb-4">Últimas Interações On-chain</h3>
      <ul className="space-y-3">
        {feed.map((item, idx) => (
          <li key={idx} className="flex items-center gap-3 animate-fade-in">
            <div className="w-8 h-8 rounded-full bg-purple-700/30 flex items-center justify-center text-white font-bold">
              {item.user[0]}
            </div>
            <div>
              <span className="text-white font-medium">{item.user}</span> {item.action} <span className="text-purple-400 font-medium">{item.target}</span>
              <div className="text-xs text-gray-400">{item.timestamp}</div>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default OnChainFeed;
