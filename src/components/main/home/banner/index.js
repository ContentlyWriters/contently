"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import LoginModal from "@/components/main/auth/login";
import { useUserContext } from "@/context/AuthContext";

export default function HeroBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn } = useUserContext();

  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white" />

        {/* Floating Glows */}
        <motion.div
          style={{ transform: "translate3d(0,0,0)", willChange: "transform, opacity" }}
          animate={{ x: [0, 60, -60, 0], y: [0, -40, 40, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[700px] h-[700px] 
                     bg-[#5b6cf2]/15 rounded-full 
                     blur-[300px] sm:blur-[480px]"
        />
        <motion.div
          style={{ transform: "translate3d(0,0,0)", willChange: "transform, opacity" }}
          animate={{ x: [0, -40, 40, 0], y: [0, 30, -30, 0] }}
          transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] 
                     bg-pink-600/15 rounded-full 
                     blur-[250px] sm:blur-[400px]"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl z-10 text-center lg:text-left flex-1"
        >
          {/* Heading */}
          <h1 className="mt-6 text-black font-extrabold leading-snug sm:leading-tight tracking-tight text-center lg:text-left max-w-full sm:max-w-xl sm:text-[52px] text-[24px]">
            <span className="bg-gradient-to-r from-[#5b6cf2] to-[#5b6cf2] bg-clip-text text-transparent">
              Elevate Your SEO Content
            </span>{" "}
            with Creativity & Precision
          </h1>

          {/* Features - Hide only on mobile */}
          <ul className="hidden sm:grid mt-6 sm:mt-8 grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-[clamp(0.9rem,1.5vw,1.1rem)] text-gray-800">
            {[
              "SEO That Delivers",
              "Assignment Helper",
              "Affordable Pricing",
              "Timely Delivery",
            ].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.01, x: 2 }}
                style={{ willChange: "transform" }}
                className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 md:p-4 
                           rounded-xl bg-white/5 border border-gray-800 
                           hover:bg-white/10 shadow-md 
                           hover:shadow-[0_0_20px_rgba(91,108,242,0.3)] 
                           transition"
              >
                <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full 
                                 bg-gradient-to-r from-[#5b6cf2] to-[#00c6ff] 
                                 shadow-[0_0_8px_rgba(91,108,242,0.8)]" />
                {item}
              </motion.li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
            {isLoggedIn ? (
              <motion.a
                whileHover={{ scale: 1.01 }}
                href="/dashboard"
                className="px-[clamp(0.9rem,2vw,2rem)] py-[clamp(0.45rem,1vw,0.9rem)] 
                           rounded-xl bg-[#5b6cf2] text-white font-semibold 
                           text-[clamp(0.85rem,2vw,1.05rem)] 
                           shadow-[0_0_20px_rgba(91,108,242,0.5)] sm:shadow-[0_0_25px_rgba(91,108,242,0.6)] 
                           hover:opacity-90 transition cursor-pointer"
              >
                Dashboard
              </motion.a>
            ) : (
              <motion.a
                whileHover={{ scale: 1.01 }}
                onClick={() => setIsOpen(true)}
                className="px-[clamp(0.9rem,2vw,2rem)] py-[clamp(0.45rem,1vw,0.9rem)] 
                           rounded-xl bg-[#5b6cf2] text-white font-semibold 
                           text-[clamp(0.85rem,2vw,1.05rem)] 
                           shadow-[0_0_20px_rgba(91,108,242,0.5)] sm:shadow-[0_0_25px_rgba(91,108,242,0.6)] 
                           hover:opacity-90 transition cursor-pointer"
              >
                Get Started
              </motion.a>
            )}

            <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} />

            <motion.a
              whileHover={{ scale: 1.01 }}
              href="#services"
              className="px-[clamp(0.9rem,2vw,2rem)] py-[clamp(0.45rem,1vw,0.9rem)] 
                         rounded-xl border border-gray-600 bg-black text-gray-300 font-semibold 
                         text-[clamp(0.85rem,2vw,1.05rem)] 
                         hover:border-[#5b6cf2] hover:text-[#5b6cf2] transition"
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="flex-1 flex justify-center relative"
        >
          <motion.div
            style={{ transform: "translate3d(0,0,0)", willChange: "transform" }}
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative"
          >
            <Image
              src="/Data points-cuate.svg"
              alt="SEO Illustration"
              width={420}
              height={420}
              className="w-[clamp(200px,50vw,420px)] h-auto 
                         drop-shadow-[0_0_20px_rgba(91,108,242,0.6)] sm:drop-shadow-[0_0_50px_rgba(91,108,242,0.8)]"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
