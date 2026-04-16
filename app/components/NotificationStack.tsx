"use client";

import { motion } from "framer-motion";


function getFormattedDate() {
  const now = new Date();

  const day = now.toLocaleDateString("en-US", { weekday: "long" }).toUpperCase();
  const month = now.toLocaleDateString("en-US", { month: "long" }).toUpperCase();
  const date = now.getDate();

  return `${day}, ${month} ${date}`;
}

const notifications = [
  {
    id: 1,
    other: getFormattedDate(),
    title: "INVITES ARE OUT FOR THE CLOSED BETA",
    desc: "We're testing basic functionality and AI integration.",
    isLive: true,
  },
  {
    id: 2,
    other: "UPCOMING - MONDAY APRIL 27",
    title: "FOUNDERS BETA RELEASE",
    desc: "For the second phase of testing, Beta is open to all suscribers.",
  },
  {
    id: 3,
    other: "UPCOMING - WEDNESDAY MAY 30",

    title: "OPEN BETA RELEASE",
    desc: "Everyone in. Let's create together.",
  },
];

export default function NotificationStack() {
  return (
    <motion.div
      initial="collapsed"
      whileHover="expanded"
      className="hidden md:flex relative items-center justify-center w-90 h-20 p-4"
    >
      {notifications.map((item, i) => (
        <motion.div
          key={item.id}
          variants={{
            collapsed: {
              y: i * 10,
              scale: 1 - i * 0.05,
            },
            expanded: {
              y: i * 90,
              scale: 1,
            },
          }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 18,
          }}
          style={{ zIndex: 10 - i }}
          className="absolute w-65 p-3 h-full rounded-xl bg-white/5 border-white/10 backdrop-blur-xl border border-white/30 shadow-lg flex flex-col"
        >
            <span className={ `font-arial text-[9px] tracking-tight ${
            item.isLive ? "text-red-400" : "text-white/50"}` }>
            {item.other}
          </span>
          <span className="font-arial text-[10px]  text-white">
            {item.title}
          </span>
          <span className="text-[10px] text-white/70">
            {item.desc}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}