"use client";

import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section className="relative bg-[#ffffff] text-black py-20 overflow-hidden">
      
      {/* Smooth top fade (for blending with banner) */}
    

      {/* Background gradient blobs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#5b6cf2]/20 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ x: [0, -40, 40, 0], y: [0, 20, -20, 0] }}
          transition={{ repeat: Infinity, duration: 28, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[180px]"
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
          We're not just another agency — we're storytellers who craft your brand's voice.
        </motion.p>

        {/* Features List */}
        <div className="mt-12 grid gap-6  sm:grid-cols-2 lg:grid-cols-3">
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
              className="p-6 rounded-2xl  bg-white/5 border border-gray-800 hover:bg-white/10 transition shadow-md hover:shadow-[0_0_25px_rgba(91,108,242,0.3)]"
            >
              <div className="flex items-start gap-3">
               
                <p className="text-black text-lg">{point}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
