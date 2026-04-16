"use client";
import {motion} from "framer-motion";
import Image from "next/image";


type ToolItem = {
  
  name: string;
  icon: string;
};

type Props = {
  items: ToolItem[]; 
  title: string;   
  numeration : string;  
};



export default function CardUsage({items,title,numeration}:Props) {
  return (
    <div className="w-[260px] sm:w-[280px]  ">
      <motion.div
        initial="hidden"
        animate="visible"
        className="rounded-2xl p-4 shadow-xl border border-white/10
                   bg-white/5 backdrop-blur-xl text-white
                   hover:bg-white/10 transition"
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 flex items-center justify-center rounded-full font-arial bg-white/10 text-xs">
            {numeration}
          </div>
          <h2 className="font-arial text-title">
            {title}
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {items.map((tool, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="
                         bg-white/10 backdrop-blur-md
                         w-10 h-10 flex items-center justify-center
                         border border-white/10
                         hover:bg-white/20
                         rounded-xl p-3 transition"
            >
              <Image
                src={tool.icon}
                alt={tool.name}
                width={20}
                height={20}
               
              />
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );

}