"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

export default function FloatingIcon() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(y, { stiffness: 120, damping: 20 });
  const rotateY = useSpring(x, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const px = (e.clientX - centerX) / centerX;
      const py = (e.clientY - centerY) / centerY;

      x.set(px * 20);
      y.set(-py * 20);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [x, y]);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none [perspective:1200px]">
      
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{ y: [0, -20, 0] }} // floating
        transition={{
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
        className="
          p-6
          rounded-[32px]
          bg-gradient-to-b from-white/[0.08] to-white/[0.02]
          border border-white/10
          backdrop-blur-xl
          shadow-[0_30px_80px_rgba(0,0,0,0.9)]
        "
      >
        <div className="[transform:translateZ(60px)]">
          <Image
            src="/icon.svg"
            alt="Flow Pilot Icon"
            width={120}
            height={120}
            priority
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
          />
        </div>
      </motion.div>
    </div>
  );
}