import { motion, AnimatePresence } from "framer-motion";

interface FlipDigitProps {
  value: number;
  prevValue: number;
}

const FlipDigit: React.FC<FlipDigitProps> = ({ value, prevValue }) => {
  const hasChanged = value !== prevValue;

  return (
    <div
      className="relative w-9 h-10 lg:w-10 lg:h-14 rounded-lg bg-slate-200 overflow-hidden shadow-md"
      style={{ perspective: 800 }}
    >
      {/* Static base (new value) */}
      <div className="absolute inset-0 flex items-center justify-center text-lg md:text-2xl font-bold text-slate-700">
        {value}
      </div>

      <AnimatePresence>
        {hasChanged && (
          <motion.div
            key={prevValue}
            initial={{ rotateX: 0 }}
            animate={{ rotateX: -90 }}
            exit={{ rotateX: -90 }}
            transition={{
              duration: 0.45,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="absolute top-0 left-0 w-full h-1/2 bg-slate-200 origin-bottom"
            style={{
              backfaceVisibility: "hidden",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="h-full flex items-center justify-center text-lg md:text-2xl font-bold text-slate-700">
              {prevValue}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FlipDigit;
