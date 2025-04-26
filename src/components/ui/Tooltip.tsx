import React from "react";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => (
  <div className="relative group inline-block" tabIndex={0} aria-label={text}>
    {children}
    <span className="pointer-events-none opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity absolute z-50 left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-2 rounded bg-zinc-800 dark:bg-zinc-200 text-xs text-gray-100 dark:text-gray-800 shadow-lg whitespace-nowrap">
      {text}
    </span>
  </div>
);

export default Tooltip;
