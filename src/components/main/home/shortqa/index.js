"use client";

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
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5b6cf2]/30 via-[#111] to-[#ff70d9]/20 blur-3xl opacity-40"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Title */}
        <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#5b6cf2] to-[#00c6ff] bg-clip-text text-transparent">
          A+ Work Starts Here — Your Go-To Assignment Writing Service
        </h3>

        {/* Sub-title */}
        <p className="mt-6 text-md text-gray-300">
          Got Questions About Our Academic Writing Help?
        </p>

        {/* Q/A List */}
        <div className="mt-12 space-y-3 text-left">
          {questions.map((item, i) => (
            <div
              key={i}
              className="
                border-b border-white/10
                lg:border lg:rounded-2xl
                lg:bg-white/5 lg:backdrop-blur-lg lg:shadow-md
                overflow-hidden
              "
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-4 py-3 lg:px-6 lg:py-4 text-left"
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

              {/* Answer with smooth CSS transition (no lag) */}
              <div
                className={`px-4 lg:px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === i ? "max-h-40 opacity-100 py-2" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-300">{item.a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Note */}
        <p className="mt-12 text-md font-semibold text-center text-gray-300">
          🎓 Join thousands of students across the UK and USA who trust us to
          deliver A+ work, on time.
        </p>
      </div>
    </section>
  );
}
