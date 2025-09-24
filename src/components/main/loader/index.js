"use client";
import { motion } from "framer-motion";

export default function FuturisticLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-[#5b6cf2] relative overflow-hidden">
      {/* Outer rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        className="absolute w-96 h-96 rounded-full border-4 border-t-transparent border-[#5b6cf2]/50"
      />

      {/* Inner pulsing core */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="w-32 h-32 rounded-full bg-gradient-to-br from-[#5b6cf2] to-[#00c6ff] shadow-[0_0_60px_#5b6cf2]"
      />

      {/* Typing dots */}
      <div className="absolute bottom-20 flex gap-2 text-[#5b6cf2]">
        <motion.span
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
          className="text-3xl"
        >
          ●
        </motion.span>
        <motion.span
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
          className="text-3xl"
        >
          ●
        </motion.span>
        <motion.span
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
          className="text-3xl"
        >
          ●
        </motion.span>
      </div>

      {/* Futuristic text */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute bottom-10 text-xl font-mono text-[#5b6cf2]/80 tracking-widest"
      >
        LOADING DASHBOARD...
      </motion.h2>
    </div>
  );
}
