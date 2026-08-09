"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAward, FaFilePdf, FaTimes } from "react-icons/fa";

const certs = [
  { name: "The Complete Web Development Bootcamp Certificate", org: "Udemy", date: "2025", file: "full-stack developement in Udemy.pdf", },
  { name: "Google Cloud Computing", org: "Google Cloud", date: "2025", file: "Cloud Engineering.pdf" },
  { name: "Python with Generative AI Certificate", org: "VGLUG", date: "2026", file: "python with generative AI.pdf" },
  { name: "UI/UX Designing Certification", org: "GUVI", date: "2025", file: "Certificate for UI & UX (NM).pdf" },
  { name: "Generative AI", org: "Oracle", date: "2025", file: "Generative AI.pdf" },
  { name: "AI/ML Course Completion Certificate", org: "Learnflu", date: "2025", file: "AI-ML Certitificate (learnflue).pdf" },
  { name: "Oracle Cloud Infrastructure Certified Foundations Associate", org: "Oracle", date: "2025", file: "Cloud Oracle.pdf" },
];

export const Certifications = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="certifications" className="flex flex-col items-center justify-center py-20 z-[21] relative w-full overflow-hidden">
      <h1 className="text-2xl sm:text-3xl md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 text-center px-4">
        Certifications
      </h1>

      <div 
        className="relative w-full max-w-full flex items-center overflow-hidden py-10"
        style={{ perspective: "1000px" }}
      >
        {/* Left and right fade gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030014] via-transparent to-[#030014] z-10 w-full pointer-events-none" />
        
        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Duplicate the array to create a seamless infinite scroll loop */}
          {[...certs, ...certs, ...certs, ...certs].map((cert, index) => (
            <div
              key={index}
              className="relative w-[270px] sm:w-[310px] md:w-[350px] h-[220px] rounded-2xl bg-[#0a0a1a]/80 backdrop-blur-md border border-[#712fff]/30 p-4 sm:p-6 flex flex-col justify-between group hover:border-cyan-500/50 transition-colors"
              style={{
                transform: "rotateY(-25deg) rotateX(5deg) translateZ(0px)",
                transformStyle: "preserve-3d",
                boxShadow: "15px 15px 30px -10px rgba(113,47,255,0.2)"
              }}
            >
              <div 
                className="flex items-center gap-3"
                style={{ transform: "translateZ(30px)" }}
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-purple-500/30 to-cyan-500/30 border border-purple-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(113,47,255,0.3)] shrink-0">
                  <FaAward className="text-xl sm:text-3xl text-cyan-400" />
                </div>
                <div className="overflow-hidden">
                  <h3 className="text-white font-bold text-sm sm:text-base md:text-xl leading-tight line-clamp-2">{cert.name}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">{cert.org}</p>
                </div>
              </div>

              <div 
                className="mt-4 pt-4 border-t border-gray-700/50 flex justify-between items-center text-sm text-gray-400"
                style={{ transform: "translateZ(20px)" }}
              >
                <span className="text-xs sm:text-sm">Issued {cert.date}</span>
                <a 
                  href={`/certifications/${cert.file}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-purple-400 cursor-pointer group-hover:text-cyan-400 transition-colors font-semibold text-xs sm:text-sm"
                >
                  View Credential
                </a>
              </div>

              <div 
                className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none"
                style={{ transform: "translateZ(-10px)" }}
              />
              <div 
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"
                style={{ transform: "translateZ(-10px)" }}
              />
            </div>
          ))}
        </motion.div>
      </div>

      <button
        suppressHydrationWarning
        onClick={() => setIsModalOpen(true)}
        className="mt-12 px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold hover:shadow-[0_0_20px_rgba(113,47,255,0.5)] transition-all hover:scale-105 z-20 text-sm sm:text-base"
      >
        View All Certifications
      </button>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-3 sm:p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-[#0a0a1a] border border-[#712fff]/30 rounded-2xl p-4 sm:p-6 w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-[0_0_40px_rgba(113,47,255,0.2)] relative"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes className="text-xl sm:text-2xl" />
              </button>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4 sm:mb-6 pr-8">
                All Certifications
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {certs.map((cert, index) => (
                  <div key={index} className="flex items-center justify-between p-3 sm:p-4 rounded-xl bg-[#030014]/50 border border-gray-700 hover:border-purple-500/50 transition-colors group">
                    <div className="flex items-center gap-2 sm:gap-3 overflow-hidden">
                      <FaAward className="text-base sm:text-xl text-cyan-400 shrink-0" />
                      <div className="overflow-hidden">
                        <h4 className="text-white font-medium text-xs sm:text-sm line-clamp-2">{cert.name}</h4>
                        <p className="text-gray-400 text-xs">{cert.org} - {cert.date}</p>
                      </div>
                    </div>
                    <a
                      href={`/certifications/${cert.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 sm:p-2 rounded-lg bg-gray-800 text-gray-300 group-hover:bg-purple-600 group-hover:text-white transition-all shrink-0 ml-2"
                      title="View PDF"
                    >
                      <FaFilePdf className="text-sm sm:text-xl" />
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
