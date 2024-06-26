'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of a history item
interface HistoryItem {
  id: string;
  description: string;
  value: number;
  operator: string;
}

// Define the shape of the context value
interface BalanceContextType {
  history: HistoryItem[];
  setHistory: React.Dispatch<React.SetStateAction<HistoryItem[]>>;
  addBalanceItem: (item: HistoryItem) => void;
}

// Define default value for context
const defaultValue: BalanceContextType = {
  history: [],
  setHistory: () => {},
  addBalanceItem: () => {}
};

// Create context with default value
const BalanceContext = createContext<BalanceContextType>(defaultValue);

// Hook to use the Balance context
export const useBalance = () => useContext(BalanceContext);

// Balance provider component
interface BalanceProviderProps {
  children: ReactNode;
}

export const BalanceProvider: React.FC<BalanceProviderProps> = ({ children }) => {
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const addBalanceItem = (item: HistoryItem) => {
    setHistory(prevHistory => [...prevHistory, item]);
  };

  return (
    <BalanceContext.Provider value={{ history, setHistory, addBalanceItem }}>
      {children}
    </BalanceContext.Provider>
  );
};
