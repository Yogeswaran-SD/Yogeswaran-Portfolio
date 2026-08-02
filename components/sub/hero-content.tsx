"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromTop,
} from "@/lib/motion";
import { useTypewriter } from "@/hooks/useTypewriter";

const ROLES = [
  "Full-Stack Developer",
  "Software Engineer",
  "Frontend Developer",
  "Backend Developer",
  "MERN Stack Developer",
  "Java Developer",
  "React Developer",
  "Node.js Developer",
  "UI/UX Developer",
  "AI Developer",
  "AI Engineer",
  "Machine Learning Engineer",
  "Prompt Engineer",
  "Cloud Enthusiast+",
  "Open Source Contributor",
  "Tech Explorer",
  "Problem Solver",
  "Computer Science Student",
];

export const HeroContent = () => {
  const typedRole = useTypewriter({
    roles: ROLES,
    typingSpeed: 70,
    erasingSpeed: 40,
    pauseAfterType: 1800,
  });

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 pt-24 pb-10 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center mt-5 text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-2 mt-6 text-6xl font-bold text-white max-w-[600px]"
        >
          <span className="text-4xl font-semibold text-gray-300">HI I&apos;m</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            YOGESWARAN S
          </span>
          {/* Typing animation row — fixed height prevents layout shift */}
          <span
            className="flex items-center text-3xl font-semibold text-white"
            style={{ minHeight: "2.5rem" }}
            aria-label={`Role: ${typedRole}`}
            aria-live="polite"
          >
            <span>{typedRole}</span>
            <span
              className="ml-1 inline-block w-[3px] h-[1em] bg-purple-400 align-middle"
              style={{ animation: "blink-cursor 0.75s step-end infinite" }}
              aria-hidden="true"
            />
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-row gap-4"
        >
          <a
            href="#about-me"
            className="py-2 px-8 button-primary text-center text-white cursor-pointer rounded-lg"
          >
            Learn more
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-8 border border-[#7042f88b] bg-[#030014]/50 hover:bg-[#7042f8]/80 transition-all duration-300 text-center text-white cursor-pointer rounded-lg flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(113,47,255,0.15)] hover:shadow-[0_0_20px_rgba(113,47,255,0.4)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            My Resume
          </a>
        </motion.div>
      </div>

      {/* ── Profile image with cinematic entrance + perpetual effects ── */}
      <motion.div
        initial={{ x: 150, opacity: 0, scale: 0.75, rotate: -6 }}
        animate={{ x: 0, opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          duration: 1.1,
          delay: 0.6,
          type: "spring",
          stiffness: 80,
          damping: 14,
        }}
        className="w-full mt-32 h-full flex justify-center items-center"
      >
        {/* Floating image wrapper containing all effects */}
        <motion.div
          animate={{ y: [0, 18, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="yogi-img-wrapper flex justify-center items-center"
        >
          {/* Outer glow halo */}
          <div className="yogi-halo-ring" aria-hidden="true" />

          {/* Rotating conic-gradient border */}
          <div className="yogi-spin-border" aria-hidden="true">
            <div className="yogi-spin-border-inner" />
          </div>

          <Image
            src="/yogi-bg.png"
            alt="Yogeswaran S - Developer Profile"
            height={450}
            width={450}
            draggable={false}
            className="select-none yogi-img relative z-10"
          />
        </motion.div>
      </motion.div>

      {/* GPU-accelerated animations */}
      <style jsx global>{`
        @keyframes blink-cursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        /* Pulsing glow halo behind the image */
        @keyframes yogi-pulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.55;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.12);
            opacity: 0.25;
          }
        }

        /* Slow spin for conic-gradient ring */
        @keyframes yogi-spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }

        /* Subtle shimmer on the image itself */
        @keyframes yogi-shimmer {
          0%, 100% { filter: brightness(1) drop-shadow(0 0 18px rgba(113,47,255,0.55)); }
          50%       { filter: brightness(1.08) drop-shadow(0 0 34px rgba(80,200,255,0.65)); }
        }

        .yogi-halo-ring {
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(
            ellipse at center,
            rgba(113, 47, 255, 0.32) 0%,
            rgba(80, 200, 255, 0.15) 55%,
            transparent 75%
          );
          top: 50%;
          left: 50%;
          animation: yogi-pulse 4s ease-in-out infinite;
          will-change: transform, opacity;
          pointer-events: none;
        }

        .yogi-spin-border {
          position: absolute;
          width: 370px;
          height: 370px;
          top: 50%;
          left: 50%;
          border-radius: 25%;
          background: conic-gradient(
            from 0deg,
            #7b2ff7,
            #50c8ff,
            #b49bff,
            #7b2ff7
          );
          animation: yogi-spin 6s linear infinite;
          will-change: transform;
          pointer-events: none;
          padding: 3px;
        }

        .yogi-spin-border-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #030014;
        }

        .yogi-img-wrapper {
          position: relative;
          z-index: 10;
          will-change: transform;
        }

        .yogi-img {
          border-radius: 9999px;
          animation: yogi-shimmer 4s ease-in-out infinite;
          will-change: filter;
        }
      `}</style>
    </motion.div>
  );
};
