

"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function AllInOneAppText() {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.3 })

  return (
    <div ref={ref} className="w-full md:w-1/2 flex flex-col gap-6 px-4 md:px-0">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-arial text-title"
      >
        All in one app
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="mt-2 text-sm text-gray-600"
      >
        FlowPilot brings your entire teams workflow into a single, unified platform. Stop jumping between tools and losing context. Capture decisions, preserve knowledge, and automate repetitive tasks—all in one place. Built for teams that move fast, think deeply, and need to stay aligned. FlowPilot turns your scattered work into organized progress.
      </motion.p>
    </div>
  )
}
