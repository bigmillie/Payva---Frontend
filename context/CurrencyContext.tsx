"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export interface Currency {
  code: string;
  name: string;
  flag: string;
  symbol: string;
}

const currencies: Currency[] = [
  { code: "NGN", name: "Nigerian Naira", flag: "🇳🇬", symbol: "₦" },
  { code: "USD", name: "US Dollar", flag: "🇺🇸", symbol: "$" },
  { code: "CAD", name: "Canadian Dollar", flag: "🇨🇦", symbol: "$" },
  { code: "GBP", name: "British Pound", flag: "🇬🇧", symbol: "£" },
];

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (code: string) => void;
  currencies: Currency[];
}

const CurrencyContext = createContext<CurrencyContextType | null>(null);

export const CurrencyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currency, setCurrencyState] = useState<Currency>(currencies[0]);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("app_currency");
    if (saved) {
      const found = currencies.find((c) => c.code === saved);
      if (found) setCurrencyState(found);
    }
  }, []);

  // Persist to localStorage
  const setCurrency = (code: string) => {
    const found = currencies.find((c) => c.code === code);
    if (found) {
      setCurrencyState(found);
      localStorage.setItem("app_currency", code);
    }
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, currencies }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const ctx = useContext(CurrencyContext);
  if (!ctx) {
    throw new Error("useCurrency must be used within CurrencyProvider");
  }
  return ctx;
};
