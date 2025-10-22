"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BrandIntro() {
  return (
    <section className="relative overflow-hidden bg-white text-white py-24 px-6 md:px-12">
      {/* Soft background glows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[#5b6cf2]/40 blur-[180px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1.4, delay: 0.2 }}
        className="pointer-events-none absolute -bottom-32 -right-16 w-[700px] h-[700px] rounded-full bg-pink-500/10 blur-[160px]"
      />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT: Heading + Copy */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#5b6cf2] via-[#00c6ff] to-[#5b6cf2] bg-clip-text text-transparent"
          >
            Content That Connects, SEO That Ranks
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-lg text-black leading-relaxed"
          >
            At <span className="font-semibold text-[#5b6cf2]">Contently Writers</span>, we specialize in
            delivering high-quality content writing services and result-driven SEO solutions to help your brand grow online.
            Whether you need blog posts, website copy, product descriptions, or complete SEO strategies; we&#39;re here
            to create content that connects and ranks. As a trusted content writing company and SEO agency, we combine
            creativity with keyword precision to boost your visibility and engagement.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 text-lg text-black leading-relaxed"
          >
            In addition to business content, we also offer assignment writing services for students seeking expert support
            with essays, projects, and homework; handled with the same level of care and quality.
          </motion.p>

          {/* small chips */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {["Blogs", "Website Copy", "Product Descriptions", "SEO Audits", "Link Building", "Assignment Help"].map((tag) => (
              <span
                key={tag}
                className="text-sm px-3 py-1.5 rounded-full bg-black/5 border border-white/10 text-black hover:bg-white/10 transition"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: Graph / Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* gradient frame with glass effect */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative p-[2px] rounded-3xl bg-gradient-to-br from-[#5b6cf2] via-[#00c6ff] to-transparent"
          >
            <div className="rounded-3xl bg-[#0b0b0b]/80 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
              {/* header bar mimic (like an app window) */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                <span className="ml-auto text-xs text-gray-400">Analytics · SEO Growth</span>
              </div>

              {/* image container */}
              <div className="relative">
                {/* subtle grid background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-[size:20px_20px] pointer-events-none" />
                <Image
                  src="/dynamic-data-visualization-3d_23-2151904311.avif"   // <-- apni image yaha rakho (public/images/seo-growth-graph.png)
                  alt="SEO growth analytics graph"
                  width={980}
                  height={640}
                  priority
                  className="block w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black border border-white/10 backdrop-blur-xl sm:text-sm text-[8px] text-gray-100"
          >
            +178% Organic Traffic · 90 Days
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
