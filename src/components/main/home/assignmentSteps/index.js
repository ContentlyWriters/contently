"use client";

import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section className="relative bg-[#ffffff] text-black py-20 overflow-hidden ">
      {/* Background gradient blobs */}
      <div className="absolute inset-0">
        <motion.div
          style={{ willChange: "transform, opacity", transform: "translate3d(0,0,0)" }}
          animate={{ x: [0, 30, -30, 0], y: [0, -20, 20, 0] }} // lighter motion
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-[400px] h-[400px] 
                     bg-[#5b6cf2]/20 rounded-full 
                     blur-[80px] sm:blur-[150px]" // smaller blur on mobile
        />
        <motion.div
          style={{ willChange: "transform, opacity", transform: "translate3d(0,0,0)" }}
          animate={{ x: [0, -25, 25, 0], y: [0, 15, -15, 0] }} // lighter motion
          transition={{ repeat: Infinity, duration: 28, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[400px] h-[400px] 
                     bg-pink-500/10 rounded-full 
                     blur-[100px] sm:blur-[180px]"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center leading-snug"
        >
          <span className="bg-gradient-to-r from-[#5b6cf2] to-[#00c6ff] bg-clip-text text-transparent">
            Fuel Your Brand
          </span>{" "}
          with the Best Content Writing Company
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-black max-w-3xl mx-auto text-center"
        >
          Why Choose Us As Your Content Writing Company? <br />
          We&#39;re not just another agency; we&#39;re storytellers who craft your brand&#39;s voice.
        </motion.p>

        {/* Features List */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Ranked among the best for clarity, tone, and SEO",
            "Content for blogs, websites, product pages & more",
            "100% original & plagiarism-free writing",
            "Tailored strategies aligned with your goals",
            "Fast, reliable & research-backed delivery",
            "Content that drives clicks and converts ",
          ].map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              style={{ willChange: "transform, opacity" }}
              className="p-6 rounded-2xl bg-white/40 border border-gray-700 
                         hover:bg-white/60 transition 
                         shadow-sm sm:shadow-md sm:hover:shadow-[0_0_25px_rgba(91,108,242,0.3)]"
            >
              <p className="text-black text-lg">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
