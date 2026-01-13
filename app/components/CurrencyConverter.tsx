"use client";
import { Percent, Repeat } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Currency {
  code: string;
  name: string;
  flag: string;
  symbol: string;
}

interface ExchangeRates {
  [key: string]: number;
}

const CurrencyConverter: React.FC = () => {
  const [sendAmount, setSendAmount] = useState<string>("0.00");
  const [receiveAmount, setReceiveAmount] = useState<string>("0.00");
  const [sendCurrency, setSendCurrency] = useState<string>("CAD");
  const [receiveCurrency, setReceiveCurrency] = useState<string>("NGN");
  const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [showSendDropdown, setShowSendDropdown] = useState<boolean>(false);
  const [showReceiveDropdown, setShowReceiveDropdown] =
    useState<boolean>(false);
  const [rotationCount, setRotationCount] = useState<number>(0);

  const currencies: Currency[] = [
    { code: "CAD", name: "Canadian Dollar", flag: "🇨🇦", symbol: "$" },
    { code: "NGN", name: "Nigerian Naira", flag: "🇳🇬", symbol: "₦" },
    { code: "USD", name: "US Dollar", flag: "🇺🇸", symbol: "$" },
    { code: "EUR", name: "Euro", flag: "🇪🇺", symbol: "€" },
    { code: "GBP", name: "British Pound", flag: "🇬🇧", symbol: "£" },
    { code: "JPY", name: "Japanese Yen", flag: "🇯🇵", symbol: "¥" },
    { code: "AUD", name: "Australian Dollar", flag: "🇦🇺", symbol: "$" },
    { code: "CHF", name: "Swiss Franc", flag: "🇨🇭", symbol: "Fr" },
  ];

  // Fetch exchange rates
  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        // Using exchangerate-api.com (free tier)
        const response = await fetch(
          `https://api.exchangerate-api.com/v4/latest/${sendCurrency}`
        );
        const data = await response.json();
        setExchangeRates(data.rates);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
        setLoading(false);
      }
    };

    fetchRates();
  }, [sendCurrency]);

  // Calculate conversion
  useEffect(() => {
    if (exchangeRates[receiveCurrency]) {
      const amount = parseFloat(sendAmount) || 0;
      const converted = amount * exchangeRates[receiveCurrency];
      setReceiveAmount(converted.toFixed(2));
    }
  }, [sendAmount, exchangeRates, receiveCurrency]);

  const handleSendAmountChange = (value: string) => {
    // Allow only numbers and decimal point
    if (/^\d*\.?\d*$/.test(value) || value === "") {
      setSendAmount(value);
    }
  };

  const handleSwapCurrencies = () => {
    setRotationCount(rotationCount + 1);
    setSendCurrency(receiveCurrency);
    setReceiveCurrency(sendCurrency);
    setSendAmount(receiveAmount);
  };

  const getCurrencyInfo = (code: string) => {
    return currencies.find((c) => c.code === code) || currencies[0];
  };

  const currentRate = exchangeRates[receiveCurrency] || 0;
  const sendInfo = getCurrencyInfo(sendCurrency);
  const receiveInfo = getCurrencyInfo(receiveCurrency);

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-lg border-4 border-teal-500 p-4 z-40">
      {/* Header */}
      <h2 className="text-[12.58px] tracking-normal leading-[17.97px] font-semibold text-[#4D4D4D] mb-2">
        Zero transfer fees | Funds arrive in minutes
      </h2>

      {/* Send Section */}
      <div className="bg-[#EBF2F6] rounded-2xl p-6 pt-10 mb-4">
        <h3 className="text-[17.87px] font-semibold text-[#161618] leading-[25.53px] tracking-normal mb-4">
          If I send
        </h3>

        <div className="flex items-center justify-between">
          {/* Currency Selector */}
          <div className="relative">
            <button
              onClick={() => setShowSendDropdown(!showSendDropdown)}
              className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center">
                <span className="text-5xl">{sendInfo.flag}</span>
              </div>
              <span className="font-semibold text-[#4D4D4D] text-[15.32px]">
                {sendCurrency}
              </span>
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {/* Amount Input WITH currency symbol */}
          <div className="flex items-center">
            {/* <span className="text-[25.53px] font-semibold text-[#4D4D4D] -mr-20">
              {sendInfo.symbol}
            </span> */}

            <input
              type="text"
              value={sendAmount}
              onChange={(e) => handleSendAmountChange(e.target.value)}
              className="-ml-16 text-[25.53px] leading-[35.74px] font-semibold text-[#4D4D4D] text-right bg-transparent outline-none w-48"
              placeholder="0.00"
            />
          </div>
        </div>
      </div>

      {/* Swap Button */}
      <div className="flex justify-center -my-8 relative z-10">
        <motion.button
          onClick={handleSwapCurrencies}
          className="bg-[#004F4C] hover:bg-[#004F4C95] text-white p-4 rounded-3xl shadow-lg transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: rotationCount * 360 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Repeat />
        </motion.button>
      </div>

      {/* Receive Section */}
      <div className="bg-[#EBF2F6] rounded-2xl p-6 pt-10 mt-4">
        <h3 className="text-[17.87px] font-semibold text-[#161618] leading-[25.53px] tracking-normal mb-4">
          Beneficiary receives
        </h3>

        <div className="flex items-center justify-between">
          {/* Currency Selector */}
          <div className="relative">
            <button
              onClick={() => setShowReceiveDropdown(!showReceiveDropdown)}
              className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center bg-none">
                <span className="text-5xl">{receiveInfo.flag}</span>
              </div>
              <span className="font-semibold text-[#4D4D4D]">
                {receiveCurrency}
              </span>
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown */}
            {showReceiveDropdown && (
              <div className="absolute top-full mt-2 bg-white rounded-xl shadow-xl border border-gray-200 z-10 w-64 max-h-64 overflow-y-auto">
                {currencies.map((currency) => (
                  <button
                    key={currency.code}
                    onClick={() => {
                      setReceiveCurrency(currency.code);
                      setShowReceiveDropdown(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-2xl">{currency.flag}</span>
                    <div className="text-left">
                      <div className="font-semibold text-gray-700">
                        {currency.code}
                      </div>
                      <div className="text-xs text-gray-500">
                        {currency.name}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Amount Display */}
          <div className="text-[25.53px] leading-[35.74px] font-semibold text-[#4D4D4D]">
            {receiveInfo.symbol} {receiveAmount}
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-full h-[0.64px] bg-[#E0E0E0] mt-10" />

      {/* Exchange Rate */}
      <div className="mt-6 flex items-center gap-1 text-gray-600 pb-5">
        <div className="bg-gray-100 p-2 rounded-full">
          <Percent />
        </div>
        <span className="text-lg">
          <span className="text-[#999999] text-[12.76px] leading-[17.87px]">
            Exchange rate:
          </span>{" "}
          <span className="font-semibold text-[15.32px] leading-[20.42px] tracking-normal">
            1 {sendCurrency} = {currentRate.toFixed(2)} {receiveCurrency}
          </span>
        </span>
      </div>

      {/* {loading && (
        <div className="text-center text-gray-500 mt-4">
          Loading exchange rates...
        </div>
      )} */}
    </div>
  );
};

export default CurrencyConverter;
