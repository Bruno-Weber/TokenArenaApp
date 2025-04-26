"use client";

import React, { createContext, useContext, useState } from "react";

interface LangContextProps {
  lang: "pt" | "en";
  setLang: (lang: "pt" | "en") => void;
}

const LangContext = createContext<LangContextProps>({ lang: "pt", setLang: () => {} });

export const useLang = () => useContext(LangContext);

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<"pt" | "en">("pt");
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};
