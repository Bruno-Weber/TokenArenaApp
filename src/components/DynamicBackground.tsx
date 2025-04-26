"use client";
import React, { useEffect, useState } from "react";

const backgrounds = [
  "https://images.unsplash.com/photo-1590659773133-1d88b8e36d3f?q=80&w=2070", // Estádio lotado à noite
  "https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=2070", // Torcida com sinalizadores
  "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=2066", // Estádio com vista aérea
  // Adicione mais imagens conforme necessário
];

const DynamicBackground = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
    }, 6000); // Muda a cada 6 segundos para dar tempo ao efeito de zoom

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {backgrounds.map((bg, index) => (
        <div
          key={bg}
          className="absolute inset-0 w-full h-full transition-all duration-[2000ms]"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: index === currentIndex ? 1 : 0,
            transform: index === currentIndex ? "scale(1.05)" : "scale(1)",
            zIndex: 0,
          }}
        />
      ))}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"
        style={{
          backdropFilter: "blur(2px)",
        }}
      />
    </>
  );
};

export default DynamicBackground;
