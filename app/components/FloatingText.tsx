"use client";
import { motion } from "framer-motion";

type FloatingTextProps = {
  title: string
  description?: string
  className?: string 
  textStyle?: string
}


export default function FloatingText({ title, description, className, textStyle }: FloatingTextProps) {
  return (
    <div className={`absolute z-10 max-w-[220px] md:max-w-xs  ${className}`}>
      <motion.h1
      className={`${textStyle} font-arial pointer-events-none`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {title}
    </motion.h1>

    <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-2 text-sm  text-gray-600 pointer-events-none"
      >
        {description}
      </motion.p>
    </div>
  )
}