"use client"
import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

export default function MacWindowMockup() {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex items-center justify-center px-2 md:px-0"
    >
      <div className="w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
        {/* MACWINDOW CONTAINER */}
        <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl overflow-hidden">
          {/* MACOS TOP BAR */}
          <div className="bg-gradient-to-b from-white/10 to-white/5 border-b border-white/10 px-6 py-4 flex items-center justify-between">
            {/* TRAFFIC LIGHTS */}
            <div className="flex gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer" />
            </div>

            <div className="w-12" />
          </div>

          <div className="relative bg-black/80 aspect-video overflow-hidden">
            <Image
              src="/flowpilotui.png"
              alt="FlowPilot AI Dashboard"
              fill
              priority
              quality={100}
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
