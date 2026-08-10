"use client";
import { HelpCircle, Percent, Repeat } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useCurrency } from "@/context/CurrencyContext";

interface RateRecord {
  source: string;
  destination: string;
  buyingRate: number;
  sellingRate: number;
}

interface RatesApiResponse {
  success: boolean;
  code: string;
  message: string;
  data: RateRecord[];
}

const ACTIVE_PAIR = ["CAD", "NGN"] as const;
const DEFAULT_SEND_AMOUNTS: Record<string, string> = {
  CAD: "1.00",
};

const CurrencyConverter: React.FC = () => {
  const { currency, setCurrency, currencies } = useCurrency();
  const [sendAmount, setSendAmount] = useState<string>(DEFAULT_SEND_AMOUNTS.CAD);
  const [receiveCurrency, setReceiveCurrency] = useState<string>("CAD");
  const [rateRecord, setRateRecord] = useState<RateRecord | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showSendDropdown, setShowSendDropdown] = useState<boolean>(false);
  const [showReceiveDropdown, setShowReceiveDropdown] =
    useState<boolean>(false);
  const [rotationCount, setRotationCount] = useState<number>(0);
  const sendCurrency = currency.code;

  const getCalculatedRate = (
    fromCurrency: string,
    toCurrency: string,
    record: RateRecord | null,
  ) => {
    if (!record) return 0;
    if (fromCurrency === toCurrency) return 1;

    if (fromCurrency === record.source && toCurrency === record.destination) {
      return record.buyingRate;
    }

    if (
      fromCurrency === record.destination &&
      toCurrency === record.source &&
      record.sellingRate > 0
    ) {
      return 1 / record.sellingRate;
    }

    return 0;
  };

  const getDefaultAmount = (fromCurrency: string, record: RateRecord | null) => {
    if (fromCurrency === "CAD") {
      return DEFAULT_SEND_AMOUNTS.CAD;
    }

    if (
      fromCurrency === "NGN" &&
      record &&
      record.destination === "NGN" &&
      record.source === "CAD" &&
      record.sellingRate > 0
    ) {
      return record.sellingRate.toFixed(2);
    }

    return "1.00";
  };

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/rates", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to load rates");
        }

        const payload = (await response.json()) as RatesApiResponse;
        const cadToNgnRate =
          payload.data.find(
            (record) => record.source === "CAD" && record.destination === "NGN",
          ) || null;

        setRateRecord(cadToNgnRate);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();

    const interval = setInterval(fetchRates, 900000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sendCurrency === receiveCurrency) {
      const nextCurrency = ACTIVE_PAIR.find((code) => code !== sendCurrency);
      if (nextCurrency) {
        setReceiveCurrency(nextCurrency);
      }
    }
  }, [receiveCurrency, sendCurrency]);

  useEffect(() => {
    if (!rateRecord) return;

    setSendAmount(getDefaultAmount(sendCurrency, rateRecord));
  }, [sendCurrency, rateRecord]);

  const currentRate = getCalculatedRate(
    sendCurrency,
    receiveCurrency,
    rateRecord,
  );
  const receiveAmount = currentRate
    ? ((parseFloat(sendAmount) || 0) * currentRate).toFixed(2)
    : "0.00";

  const handleSendAmountChange = (value: string) => {
    // Allow only numbers and decimal point
    if (/^\d*\.?\d*$/.test(value) || value === "") {
      setSendAmount(value);
    }
  };

  const handleSwapCurrencies = () => {
    setRotationCount(rotationCount + 1);
    setCurrency(receiveCurrency);
    setReceiveCurrency(sendCurrency);
    setSendAmount(receiveAmount);
  };

  const getCurrencyInfo = (code: string) => {
    return currencies.find((c) => c.code === code) || currency;
  };

  const sendInfo = getCurrencyInfo(sendCurrency);
  const receiveInfo = getCurrencyInfo(receiveCurrency);
  const exchangeRateDisplay =
    sendCurrency === "NGN" && rateRecord && rateRecord.sellingRate > 0
      ? `${rateRecord.sellingRate.toFixed(2)} NGN = 1 CAD`
      : `1 ${sendCurrency} = ${currentRate.toFixed(2)} ${receiveCurrency}`;

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
              onClick={() => {
                setShowSendDropdown((prev) => !prev);
                setShowReceiveDropdown(false); // close other dropdown
              }}
              className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center">
                {/* <span className="text-5xl">{sendInfo.flag}</span> */}
                <Image
                  src={sendInfo.flag}
                  alt={sendInfo.name}
                  width={80}
                  height={80}
                />
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

            {/* SEND DROPDOWN */}
            {showSendDropdown && (
              <div className="absolute top-full mt-2 bg-white rounded-xl shadow-xl border border-gray-200 z-20 w-40 max-h-64 overflow-y-auto">
                {currencies.map((currency) => (
                  <button
                    key={currency.code}
                    onClick={() => {
                      setCurrency(currency.code);
                      setShowSendDropdown(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    {/* <span className="text-2xl">{currency.flag}</span> */}
                    <Image
                      src={currency.flag}
                      alt={currency.name}
                      width={28}
                      height={28}
                    />

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

          {/* Amount Input WITH currency symbol */}
          <div className="flex items-center">
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
              onClick={() => {
                setShowReceiveDropdown(!showReceiveDropdown);
                setShowSendDropdown(false); // close other dropdown
              }}
              className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center bg-none">
                {/* <span className="text-5xl">{receiveInfo.flag}</span> */}
                <Image
                  src={receiveInfo.flag}
                  alt={receiveInfo.name}
                  width={80}
                  height={80}
                />
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
              <div className="absolute top-full mt-2 bg-white rounded-xl shadow-xl border border-gray-200 z-10 w-40 max-h-64 overflow-y-auto">
                {currencies.map((currency) => (
                  <button
                    key={currency.code}
                    onClick={() => {
                      setReceiveCurrency(currency.code);
                      setShowReceiveDropdown(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    {/* <span className="text-2xl">{currency.flag}</span> */}
                    <Image
                      src={currency.flag}
                      alt={currency.name}
                      width={28}
                      height={28}
                    />
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
            {loading ? (
              <span className="text-gray-400">Calculating...</span>
            ) : (
              <>
                {receiveInfo.symbol} {receiveAmount}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-full h-[0.64px] bg-[#E0E0E0] mt-10" />

      {/* Exchange Rate */}
      <div className="mt-6 flex items-center gap-1 text-gray-600 pb-3">
        <div className="bg-gray-100 p-2 rounded-full">
          <Percent size={14} />
        </div>
        <span className="text-lg">
          <span className="text-[#999999] text-[12.76px] leading-[17.87px]">
            Exchange rate:
          </span>{" "}
          <span className="font-semibold text-[15.32px] leading-[20.42px] tracking-normal">
            {loading ? (
              <span className="text-gray-400">Loading...</span>
            ) : (
              <>{exchangeRateDisplay}</>
            )}
          </span>
        </span>
      </div>
      {/* Tooltip */}
      <div className="relative">
        <div className="bg-gray-100 p-2 rounded-xl cursor-help flex items-center gap-1 w-max">
          <HelpCircle className="w-4 h-4 text-gray-600" />
          <span className="text-xs text-black">
            Rates refresh automatically every 15 minutes
          </span>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
