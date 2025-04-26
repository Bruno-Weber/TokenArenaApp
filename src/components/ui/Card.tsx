import React from "react";
import { motion } from "framer-motion";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = "", hoverable = true, ...props }) => (
  <motion.div
    className={`bg-zinc-900 dark:bg-white rounded-2xl shadow-md border border-purple-700/20 p-5 ${className}`}
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={hoverable ? { scale: 1.03, boxShadow: "0 0 18px 0 rgba(139,92,246,0.09)" } : {}}
    transition={{ duration: 0.5, type: "spring" }}
    tabIndex={0}
    aria-label={typeof children === 'string' ? children : undefined}
    {...props}
  >
    {children}
  </motion.div>
);

export default Card;
