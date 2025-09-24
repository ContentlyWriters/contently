"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const questions = [
  {
    q: "Who are your writers?",
    a: "Our assignment experts hold advanced degrees and experience across UK and USA curriculums.",
  },
  {
    q: "What can you help with?",
    a: "Essays, research papers, reports — you name it. Our assignment helper team covers it all.",
  },
  {
    q: "Is it original? Will it pass SafeAssign?",
    a: "Absolutely. Every assignment is plagiarism-free and SafeAssign-ready.",
  },
  {
    q: "Why are you called one of the best assignment services?",
    a: "Because students love us for our speed, affordability, and the best content writing services in academics.",
  },
];

export default function FuturisticQA() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative overflow-hidden bg-[#050510] text-white py-20 px-6 md:px-12">
      {/* Futuristic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5b6cf2]/30 via-[#111] to-[#ff70d9]/20 blur-3xl opacity-40 animate-pulse"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#5b6cf2] to-[#00c6ff] bg-clip-text text-transparent"
        >
          A+ Work Starts Here — Your Go-To Assignment Writing Service
        </motion.h2>

        {/* Sub-title */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-md text-gray-300"
        >
          Got Questions About Our Academic Writing Help?
        </motion.p>

        {/* Q/A Cards */}
        <div className="mt-12 space-y-4 text-left">
          {questions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="border border-white/10 rounded-2xl bg-white/5 backdrop-blur-lg shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="flex items-center gap-3 text-lg font-medium text-white">
                  {item.q}
                </span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-[#5b6cf2]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>

              {/* Smooth Answer Reveal */}
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-6 pb-4 text-gray-300 overflow-hidden"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Closing Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 text-md font-semibold text-center bg-gray-300 bg-clip-text text-transparent"
        >
          🎓 Join thousands of students across the UK and USA who trust us to
          deliver A+ work, on time.
        </motion.p>
      </div>

     
    </section>
  );
}
