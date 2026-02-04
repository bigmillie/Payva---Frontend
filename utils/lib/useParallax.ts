import { MotionValue, useScroll, useTransform } from "framer-motion";

export const useParallax = (distance: number = 12): MotionValue<number> => {
  const { scrollYProgress } = useScroll();

  return useTransform(scrollYProgress, [0, 1], [0, -distance]);
};
