"use client";

import { motion } from "framer-motion";

export default function GrowthPartner() {
  return (
    <section className="relative bg-white text-black py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 40, -40, 0], y: [0, -25, 25, 0] }}
          transition={{ repeat: Infinity, duration: 26, ease: "easeInOut" }}
          className="absolute top-10 left-0 w-[450px] h-[450px] bg-[#5b6cf2]/20 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ x: [0, -30, 30, 0], y: [0, 20, -20, 0] }}
          transition={{ repeat: Infinity, duration: 24, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[180px]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            <span className="bg-gradient-to-r from-[#5b6cf2] to-[#00c6ff] bg-clip-text text-transparent">
              Your Growth Partner
            </span>{" "}
            — Reliable & Low-Cost SEO Company USA
          </h3>

          <p className="mt-6 text-lg text-gray-700">
            We’re recognized as a best USA SEO company, delivering measurable
            results with affordable search engine optimization service
            packages. Whether you&#39;re a small business or startup, our low
            price SEO services scale with your goals.
          </p>

          <p className="mt-4 text-lg text-gray-700">
            Among all search engine optimization companies in USA, we prioritize
            transparency, strategy, and results. Partner with a result-driven
            SEO company USA that works smart — and fast.
          </p>
        </motion.div>

        {/* Right Feature List */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-black">
            Affordable SEO That Actually Delivers
          </h3>

          <div className="space-y-4">
            {[
              "Full-suite SEO from audits to link-building",
              "Our SEO company in USA is among the best — focused on real rankings",
              "Watch your traffic and leads grow — without blowing your budget",
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="
                  flex items-start gap-3
                  p-2 sm:p-5
                  border-b border-gray-700
                  lg:border lg:rounded-2xl lg:shadow-md
                  lg:bg-white lg:hover:bg-gray-50
                  lg:hover:shadow-[0_0_20px_rgba(91,108,242,0.25)]
                  transition
                "
              >
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-r from-[#5b6cf2] to-[#00c6ff] shadow-[0_0_8px_rgba(91,108,242,0.8)]" />
                <p className="text-gray-800 text-lg">{feature}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
