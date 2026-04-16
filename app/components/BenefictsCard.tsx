"use client";
import {motion, useInView} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";




type Props = {
  icon: string; 
  title: string;  
  description: string;  
};



export default function BenefictsCard({icon,title,description}:Props) {

  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.3, 
  });


  return (
    <div ref={ref} className="">

      
      <motion.div
        
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="p-2  w-[220px] sm:w-[260px] lg:w-[280px]"
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 flex items-center justify-center rounded-full  bg-white/10 ">
            <Image src={icon} alt={title} width={12} height={12} />
          </div>
          <h2 className="font-arial text-title">
            {title}
          </h2>
        </div>

        <div className="">
          <p className="text-sm font-arial text-gray-600">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );

}