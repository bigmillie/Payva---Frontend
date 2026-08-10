"use client";

import React, { useEffect, useState } from "react";
import FlipDigit from "./FlipDigit";

/* ---------------- Types ---------------- */

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface FlipCountdownProps {
  launchDate: string | Date;
}

/* ---------------- Utilities ---------------- */

const calculateTimeLeft = (launchDate: string | Date): TimeLeft => {
  const target = new Date(launchDate).getTime();
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const splitDigits = (num: number) => {
  const padded = String(num).padStart(2, "0");
  return [Number(padded[0]), Number(padded[1])];
};

/* ---------------- Time Group ---------------- */

interface TimeGroupProps {
  label: string;
  value: number;
  prevValue: number;
}

const TimeGroup: React.FC<TimeGroupProps> = ({ label, value, prevValue }) => {
  const [v1, v2] = splitDigits(value);
  const [p1, p2] = splitDigits(prevValue);

  return (
    <div className="flex flex-col items-start gap-1">
      <div className="flex gap-1 md:gap-2">
        <FlipDigit value={v1} prevValue={p1} />
        <FlipDigit value={v2} prevValue={p2} />
      </div>
      <span className="text-sm text-start text-[#C5D4E0] font-famil">
        {label}
      </span>
    </div>
  );
};

/* ---------------- Countdown ---------------- */

const FlipCountdown: React.FC<FlipCountdownProps> = ({ launchDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [prevTime, setPrevTime] = useState<TimeLeft>(timeLeft);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(launchDate));

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        setPrevTime(prev);
        return calculateTimeLeft(launchDate);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [launchDate]);

  return (
    <div className="flex justify-center items-start gap-2 md:gap-4 bg-transparent  mx-auto md:mx-0 mt-4 min-w-90.25">
      <TimeGroup label="Days" value={timeLeft.days} prevValue={prevTime.days} />
      <span className="md:text-3xl text-slate-200 mt-2">:</span>

      <TimeGroup
        label="Hours"
        value={timeLeft.hours}
        prevValue={prevTime.hours}
      />
      <span className="md:text-3xl text-slate-200 mt-2">:</span>

      <TimeGroup
        label="Minutes"
        value={timeLeft.minutes}
        prevValue={prevTime.minutes}
      />
      <span className="md:text-3xl text-slate-200 mt-2">:</span>

      <TimeGroup
        label="Seconds"
        value={timeLeft.seconds}
        prevValue={prevTime.seconds}
      />
    </div>
  );
};

export default FlipCountdown;
