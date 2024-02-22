"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ActiveIndexContextProps {
  activeIndex: number | null;
  setIndex: (index: number) => void;
}

const ActiveIndexContext = createContext<ActiveIndexContextProps | undefined>(
  undefined
);

interface ActiveIndexProviderProps {
  children: ReactNode;
}

export const ActiveIndexProvider: React.FC<ActiveIndexProviderProps> = ({
  children,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const setIndex = (index: number) => {
    setActiveIndex(index);
    localStorage.setItem("activeIndex", String(index));
  };

  return (
    <ActiveIndexContext.Provider value={{ activeIndex, setIndex }}>
      {children}
    </ActiveIndexContext.Provider>
  );
};

export const useActiveIndex = (): ActiveIndexContextProps => {
  const context = useContext(ActiveIndexContext);

  if (!context) {
    throw new Error(
      "useActiveIndex must be used within an ActiveIndexProvider"
    );
  }

  return context;
};