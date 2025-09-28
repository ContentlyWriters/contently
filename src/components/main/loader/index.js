"use client";
import { motion } from "framer-motion";

export default function ClassicLoader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-[#5b6cf2]">
      {/* Simple rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-16 h-16 border-4 border-[#5b6cf2] border-t-transparent rounded-full"
      />

      {/* Loading text */}
      <motion.p
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="mt-6 text-sm font-medium tracking-widest text-[#5b6cf2]"
      >
        Loading...
      </motion.p>
    </div>
  );
}
