export const motionTokens = {
  duration: {
    fast: 0.4,
    base: 0.6,
    slow: 1.2,
    float: 4,
    spin: 30,
  },

  ease: {
    smooth: [0.22, 1, 0.36, 1] as const, // 👈 tuple typed
    calm: "easeInOut" as const,
    linear: "linear" as const,
  },

  distance: {
    small: 16,
    medium: 24,
    large: 40,
  },
} as const;
