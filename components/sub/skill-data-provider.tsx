"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const animationDelay = 0.08;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay, duration: 0.4 }}
      className="relative group flex items-center justify-center p-1.5 sm:p-2 rounded-xl transition-all duration-300 hover:scale-110"
    >
      <div className="w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[65px] md:h-[65px] lg:w-[50px] lg:h-[50px] relative flex items-center justify-center">
        <Image
          src={`/skills/${src}`}
          alt={name}
          width={width}
          height={height}
          className="object-contain w-full h-full drop-shadow-[0_0_8px_rgba(112,66,248,0.3)] transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(80,200,255,0.7)]"
        />
      </div>
      {/* Responsive Hover Tooltip */}
      <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[11px] sm:text-xs font-semibold text-gray-200 bg-[#030014]/95 border border-purple-500/40 px-2.5 py-1 rounded-md shadow-lg pointer-events-none whitespace-nowrap z-30">
        {name}
      </span>
    </motion.div>
  );
};
