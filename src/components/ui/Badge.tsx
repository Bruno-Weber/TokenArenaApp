import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  color?: "default" | "success" | "danger" | "info" | "warning" | "rare" | "legendary" | "diamond";
  className?: string;
}

const badgeStyles: Record<string, string> = {
  default: "bg-zinc-800 dark:bg-zinc-200 text-purple-300 dark:text-purple-700",
  success: "bg-green-600 dark:bg-green-200 text-green-100 dark:text-green-700",
  danger: "bg-red-600 dark:bg-red-200 text-red-100 dark:text-red-700",
  info: "bg-blue-600 dark:bg-blue-200 text-blue-100 dark:text-blue-700",
  warning: "bg-yellow-600 dark:bg-yellow-200 text-yellow-100 dark:text-yellow-700",
  rare: "bg-blue-700 dark:bg-blue-300 text-blue-200 dark:text-blue-900",
  legendary: "bg-yellow-600 dark:bg-yellow-300 text-yellow-200 dark:text-yellow-900",
  diamond: "bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-white border-2 border-cyan-300 animate-pulse",
};

const Badge: React.FC<BadgeProps> = ({ children, color = "default", className = "" }) => (
  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${badgeStyles[color] || badgeStyles.default} ${className}`}
    tabIndex={0}
    aria-label={typeof children === 'string' ? children : undefined}
  >
    {children}
  </span>
);

export default Badge;
