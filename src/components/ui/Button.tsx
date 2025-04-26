import React from "react";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gamified";
  children: React.ReactNode;
}

const styles = {
  primary:
    "bg-gradient-to-r from-purple-500 via-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white py-3 px-6 rounded-xl font-bold shadow-md transition-all",
  secondary:
    "bg-zinc-800 hover:bg-zinc-700 text-purple-400 py-3 px-6 rounded-xl font-bold border border-purple-700/30 shadow transition-all",
  gamified:
    "bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 hover:from-yellow-500 hover:to-pink-600 text-white py-3 px-6 rounded-xl font-extrabold shadow-lg border-2 border-dashed border-white/40 tracking-wider transition-all",
};

const Button: React.FC<ButtonProps> = ({ variant = "primary", children, ...props }) => (
  <motion.button
    className={styles[variant]}
    whileHover={{ scale: 1.06 }}
    whileTap={{ scale: 0.96 }}
    aria-label={typeof children === 'string' ? children : undefined}
    tabIndex={0}
    {...props}
  >
    {children}
  </motion.button>
);

export default Button;
