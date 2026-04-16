"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image"

const container: Variants = {
  hidden: { y: 50 },
  show: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 12,
      staggerChildren: 0.15,
    },
  } 
};

const item: Variants = {
  hidden: { y: 30 },
  show: { y: 0, transition: { type: "spring", stiffness: 70 } },
};

export default function FormSection() {
  return (
    <div className="flex flex-col items-center justify-center  rounded-2xl shadow-lg bg-gradient-to-b from-white/10 to-white/5 text-white
                   border border-white/10 transition">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center mb-8 "
      >
        
        <div>
            <Image src = "/iconflow.png" alt = "Flowpilot Logo" width={100} height={100} className="mx-auto mb-4"/>
        </div>
        <motion.h1 variants={item} className="text-4xl font-arial tracking-wide">
          Flowpilot
        </motion.h1>
        <motion.p variants={item} className="text-sm text-gray-600">
          Beta release May 2026
        </motion.p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-4 w-full max-w-md p-6   text-white "
      >
        <motion.h2 variants={item} className="text-xl md:text-3xl font-arial text-center">
          Get early access
        </motion.h2>
        <motion.p variants={item} className="text-sm font-arial text-center">
          All in one Custom Code, MCP, Ai launchpad for Webflow.
        </motion.p>

        <motion.textarea
          variants={item}
          placeholder="Leave a Message (optional)"
          className="w-full p-3 rounded-md  border border-white/10 text-white  focus:outline-none"
        />

        <motion.input
          variants={item}
          type="text"
          placeholder="Your Name*"
          className="w-full p-3 rounded-md  border border-white/10 text-white focus:outline-none"
        />

        <motion.input
          variants={item}
          type="email"
          placeholder="Sign-up Email*"
          className="w-full p-3 rounded-md  border border-white/10 text-white  focus:outline-none"
        />

        <motion.button
          variants={item}
          whileHover={{ scale: 1.05, rotate: 1 }}
          className="w-full py-3 bg-btn-primary hover:bg-blue-700 rounded-md  transition-colors"
        >
          Join Waitlist
        </motion.button>
      </motion.div>
    </div>
  );
}
