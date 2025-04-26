import React from "react";

interface GridProps {
  children: React.ReactNode;
  cols?: number;
  className?: string;
}

const Grid: React.FC<GridProps> = ({ children, cols = 3, className = "" }) => {
  // Responsivo: 1 col (mobile), 2 col (sm), 3 col (md+)
  const gridCols =
    cols === 1
      ? "grid-cols-1"
      : cols === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
  return (
    <div className={`grid ${gridCols} gap-6 ${className}`}>{children}</div>
  );
};

export default Grid;
