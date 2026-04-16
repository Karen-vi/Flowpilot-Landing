"use client";

import { useEffect, useState } from "react";

export default function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    update();
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    
      <div className="px-3 py-1 rounded-full border border-gray-700 bg-black/40 backdrop-blur-md text-gray-300 flex items-center gap-2 w-fit ">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="font-arial">{time}</span>
      </div>
    
  );
}