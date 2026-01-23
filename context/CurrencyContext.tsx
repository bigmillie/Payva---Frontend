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
  { code: "CAD", name: "Canadian Dollar", flag: "🇨🇦", symbol: "$" },
  { code: "GBP", name: "British Pound", flag: "🇬🇧", symbol: "£" },
];

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (code: string) => void;
  currencies: Currency[];
  isLoading: boolean;
}

const CurrencyContext = createContext<CurrencyContextType | null>(null);

export const CurrencyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currency, setCurrencyState] = useState<Currency>(currencies[0]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeCurrency = async () => {
      // First check localStorage
      const saved = localStorage.getItem("app_currency");

      if (saved) {
        // User has previously selected a currency
        const found = currencies.find((c) => c.code === saved);
        if (found) {
          setCurrencyState(found);
          setIsLoading(false);
          return;
        }
      }

      // No saved preference, auto-detect from location
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();

        // Map country code to your available currencies
        const countryToCurrency: Record<string, string> = {
          NG: "NGN", // Nigeria
          CA: "CAD", // Canada
          GB: "GBP", // United Kingdom
          // Add more country mappings as needed
        };

        const detectedCurrencyCode = countryToCurrency[data.country_code];

        if (detectedCurrencyCode) {
          const matchedCurrency = currencies.find(
            (c) => c.code === detectedCurrencyCode,
          );
          if (matchedCurrency) {
            setCurrencyState(matchedCurrency);
            // Don't save to localStorage yet - only save when user manually selects
          }
        }
      } catch (error) {
        console.log("Could not detect location, using default currency");
        // Keep the default currency (currencies[0])
      } finally {
        setIsLoading(false);
      }
    };

    initializeCurrency();
  }, []);

  // Persist to localStorage when user manually changes currency
  const setCurrency = (code: string) => {
    const found = currencies.find((c) => c.code === code);
    if (found) {
      setCurrencyState(found);
      localStorage.setItem("app_currency", code);
    }
  };

  return (
    <CurrencyContext.Provider
      value={{ currency, setCurrency, currencies, isLoading }}
    >
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
