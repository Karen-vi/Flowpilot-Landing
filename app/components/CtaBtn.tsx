
"use client";

import { motion } from "framer-motion";

type CtaBtnProps = {
  text: string;
  className?: string;
  
};

export default function CtaBtn({ text, className }: CtaBtnProps) {
  return (
    <motion.button
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </motion.button>
  );
}