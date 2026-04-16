

"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

type textProps = {
    title: string;
    description: string;
    styles:string;
}

export default function TextDescription({title,description, styles}:textProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.3 })

  return (
    <div ref={ref} className={styles}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-arial text-title"
      >
        {title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="mt-2 text-sm text-gray-600"
      >
        {description}
      </motion.p>
    </div>
  )
}
