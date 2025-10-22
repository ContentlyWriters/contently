"use client";

import { useState } from "react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Cpu, Globe, Link2, Zap, MapPin,  Lightbulb, Users, ArrowRight } from "lucide-react";
import  TablePopup from "@/components/main/modal/SeoServicesModal";
;


export default function SeoServicePage() {

   const [isTableOpen, setIsTableOpen] = useState(false);
    const services = [
    {
      title: "Technical SEO That Powers Performance",
      content:
        "Our team handles everything under the hood, technical SEO including crawlability, site speed, mobile-first indexing, and schema markup. These elements not only please search engines but also improve UX and engagement.",
      icon: <Cpu size={36} />,
    },
    {
      title: "Local SEO That Gets You Found",
      content:
        'Want your business to show up when someone Googles "local SEO services near me"? We optimize your Google Business Profile, citations, and location-based keywords to ensure you’re found by customers nearby. This is perfect for companies looking for affordable local SEO in competitive U.S. markets.',
      icon: <MapPin size={36} />,
    },
    {
      title: "Off-Page SEO That Builds Authority",
      content:
        "We don’t just build links, we build credibility. With cheap backlink services and outreach strategies tailored to your niche, we ensure your domain gets the recognition it deserves.",
      icon: <Link2 size={36} />,
    },
    {
      title: "A Thought That Stuck with Us",
      content:
        "We all want great services without overspending. But once we hear 'affordable,' a voice inside us asks, 'What if…?' Well, what if we deliver guaranteed SEO results at a price that doesn’t break your budget? That’s not just marketing talk. It’s our mission to help clients stay stress-free within their budgets while delivering real growth.",
      icon: <Lightbulb size={36} />,
    },
  ];
 const offers = [
    "Custom keyword research based on U.S. market trends",
    "On-page SEO tailored to your content strategy",
    "Cheap search engine optimization services without cutting corners",
    "Site structure and mobile optimization to meet core web vitals",
    "Off-page SEO with high-quality, cheap SEO optimization",
    "Local SEO for city-specific visibility",
    "Detailed performance reports and insights",
    "Transparent pricing with low-cost SEO services for growing brands",
    "LLMO-based content structuring for AI-first indexing",
    "Optimization for Google SGE and generative search snippets",
  ];

 const seoCategories = [
    {
      title: "On-Page SEO",
      icon: <Cpu size={28} />,
      points: [
        "Metadata & tag optimization",
        "Keyword integration based on search intent",
        "Content optimization and structuring",
        "Internal linking strategies",
      ],
    },
    {
      title: "Off-Page SEO",
      icon: <Link2 size={28} />,
      points: [
        "Link-building campaigns",
        "Citation and directory submissions",
        "Guest post outreach",
      ],
    },
    {
      title: "Local SEO",
      icon: <MapPin size={28} />,
      points: [
        "Google Business Profile optimization",
        "Local keyword targeting",
        "Citations for U.S. directories",
      ],
    },
    {
      title: "Technical SEO",
      icon: <Zap size={28} />,
      points: [
        "Page speed improvements",
        "Indexing and crawl error fixes",
        "Mobile responsiveness and site hierarchy",
      ],
    },
  ];

  const targets = [
    "Startups aiming to break into a crowded market",
    "Local providers (plumbers, law firms, wellness coaches, etc.)",
    "E-commerce stores targeting U.S. shoppers",
    "Entrepreneurs who need inexpensive SEO that still gets results",
  ];

  
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
     <section className="relative bg-white overflow-hidden py-32 px-6 md:px-16 flex flex-col lg:flex-row items-center">
      {/* Left: Minimal Text + CTA */}
      <div className="lg:w-1/2 text-center lg:text-left z-10">
        <h1 className="text-5xl font-bold text-black mb-6">
          SEO That Actually Works
        </h1>
        <a
          href="/contact"
          className="inline-block px-8 py-2 bg-white border-2 border-black text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition-colors"
        >
          Get Started
        </a>
      </div>

      {/* Right: Animated Shapes */}
      <div className="lg:w-1/2 relative flex justify-center mt-10 lg:mt-0">
        {/* Floating circles */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute top-10 right-20 w-16 h-16 border border-black rounded-full"
        ></motion.div>
        <motion.div
          animate={{ x: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute bottom-20 left-10 w-24 h-24 border border-black rounded-full"
        ></motion.div>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 w-32 h-32 border border-black rounded-full "
        ></motion.div>

   

      </div>

      {/* Background subtle lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="w-[2px] h-full bg-white/5 absolute left-1/4 animate-pulse"></div>
        <div className="w-[2px] h-full bg-white/5 absolute left-1/2 animate-pulse delay-200"></div>
        <div className="w-[2px] h-full bg-white/5 absolute left-3/4 animate-pulse delay-400"></div>
      </div>


       <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_black,_transparent_1px)] bg-[length:20px_20px]"></div>
  </div>
    </section>


   <section className="relative bg-black text-white py-16 px-6 md:px-16 flex flex-col sm:space-y-32 lg:space-y-48 md:space-y-32 space-y-48 overflow-hidden">
  {/* Background abstract shapes */}
  <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-500 opacity-20 rotate-45 blur-3xl animate-blob -z-10"></div>
  <div className="absolute bottom-10 -right-20 w-[500px] h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 opacity-30 animate-pulse blur-lg -z-10"></div>
  <div className="absolute top-1/3 right-10 w-80 h-80 bg-white/5 clip-path-polygon animate-blob blur-xl -z-10"></div>
  <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-indigo-400/10 rounded-full animate-blob blur-2xl -z-10"></div>

  {services.map((service, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: idx * 0.3 }}
      className={`relative flex flex-col md:flex-row items-center gap-12 ${
        idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Icon with glowing ring */}
      <motion.div
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="relative flex-shrink-0 text-white p-6 rounded-full bg-black border-[1px] border-white shadow-[0_0_30px_rgba(128,0,255,0.5)]"
      >
        {service.icon}
        <span className="absolute -inset-3 rounded-full border-2 border-white/20 animate-ping"></span>
      </motion.div>

      {/* Text */}
      <div className="md:w-2/3 space-y-4">
        <motion.h3
          initial={{ x: idx % 2 === 0 ? -100 : 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-white"
        >
          {service.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl leading-relaxed text-gray-300"
        >
          {service.content}
        </motion.p>
      </div>
    </motion.div>
  ))}
</section>



 <section className="relative bg-white text-black py-32 px-6 md:px-16 overflow-hidden">
      {/* Futuristic animated background shapes */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute w-96 h-96 border border-black/20 rounded-full top-10 left-10"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute w-72 h-72 border border-black/20 rounded-full bottom-10 right-10"
      />

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Our SEO Services Cover
      </motion.h2>

      {/* SEO Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {seoCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className="bg-white/5 backdrop-blur-md border border-black/80 rounded-2xl p-6 flex flex-col gap-4 hover:bg-[#f7f8fa] transition-all"
          >
            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full">
                {category.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold">
                {category.title}
              </h3>
            </div>

            {/* Points List */}
            <ul className="list-disc list-inside space-y-2 text-black">
              {category.points.map((point, pIdx) => (
                <motion.li
                  key={pIdx}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: pIdx * 0.1 }}
                  className="text-lg md:text-lg"
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Futuristic tech lines (animated) */}
      <motion.div
        animate={{ x: [-200, 200, -200] }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-[2px] bg-white/10"
      />
      <motion.div
        animate={{ x: [200, -200, 200] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        className="absolute bottom-0 left-0 w-full h-[2px] bg-white/20"
      />
    </section>



<section className="relative bg-white py-28 px-6 md:px-16 overflow-hidden">
      {/* Animated Background Orbs */}
      <motion.div
        animate={{ x: [0, 200, 0], y: [0, -100, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        className="absolute w-72 h-72 bg-[#5b6cf2]/20 rounded-full top-10 left-20 blur-3xl"
      />
      <motion.div
        animate={{ x: [-100, 150, -100], y: [0, 50, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        className="absolute w-60 h-60 bg-[#f5c0f0]/20 rounded-full bottom-10 right-10 blur-3xl"
      />

      {/* Section Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-8">
        <motion.h5
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-black"
        >
          Let’s Make SEO Simple and Strategic
        </motion.h5>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-black text-lg md:text-xl leading-relaxed"
        >
          Today’s SEO is not about ranking first, it’s about being found first in AI-generated
          answers, conversational results, and predictive suggestions. Learn more in our guide
          on emerging marketing trends and technologies shaping the future of search.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-black text-lg md:text-xl leading-relaxed"
        >
          Let us help you create SEO content optimized for LLMs, generative engines, and real
          human search behavior. Explore our affordable search engine optimization services
          crafted specifically for small businesses that want real, measurable growth without
          exceeding their budget.
        </motion.p>

        {/* Call to Action */}
        <motion.a
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        onClick={() => setIsTableOpen(true)}
        className="inline-flex items-center gap-3 px-8 py-2 bg-white text-black border-[1px] border-black font-semibold rounded-full shadow-lg hover:scale-105 transition-transform cursor-pointer"
      >
        Explore SEO Plans
        <ArrowRight size={20} />
      </motion.a>

      <TablePopup
        isOpen={isTableOpen}
        onClose={() => setIsTableOpen(false)}
      />
      </div>

      {/* Futuristic lines */}
      <motion.div
        animate={{ x: [-200, 200, -200] }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-[2px] bg-white/10"
      />
      <motion.div
        animate={{ x: [200, -200, 200] }}
        transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
        className="absolute bottom-0 left-0 w-full h-[2px] bg-white/20"
      />
    </section>

  <section className="bg-black text-white py-24 px-6 md:px-16 relative">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-16 text-center"
      >
        Who We Help
      </motion.h2>

      <div className="flex flex-col space-y-12 relative">
        {targets.map((target, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="flex items-start gap-6 md:gap-8"
          >
            {/* Icon Circle */}
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full">
                <Users className="text-white" size={20} />
              </div>
            </div>

            {/* Text */}
            <p className="text-lg md:text-xl leading-relaxed">{target}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-12 text-center text-gray-300 text-lg md:text-xl"
      >
        We’re proud to be trusted as one of the top SEO companies in the USA by brands who value impact over hype.
      </motion.p>

      {/* Optional subtle static background lines */}
        <div className="absolute w-[2px] h-full bg-transparent border-[1px] border-white bottom-40  left-4"></div>
      <div className="absolute w-[2px] h-full bg-transparent border-[1px] border-white bottom-40  right-4"></div>
        <div className="hidden sm:block absolute w-[2px] h-full bg-transparent border-[1px] border-white right-10 top-40"></div>
          <div className="hidden sm:block absolute w-[2px] h-full bg-transparent border-[1px] border-white left-10 top-40"></div>
    </section>



  <section className="relative bg-white text-black py-24 px-6 md:px-16 flex flex-col lg:flex-row items-start lg:items-center gap-12">
  {/* Left: H2 + text */}
  <div className="lg:w-1/2 text-center lg:text-left z-10">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Why Choose Our SEO Services?
    </h2>
    <p className="text-black text-lg md:text-xl">
      While most agencies follow the same outdated playbook, we stay ahead by constantly adapting to Google’s 2025 SEO update, ensuring your strategy stays relevant and effective. Your website won’t just be optimized for today, it’ll be ready for tomorrow.
    </p>
  </div>

  {/* Right: 3 feature cards */}
  <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-6 z-10">
    {[
      { icon: CheckCircle, title: "Up-to-Date Strategy", desc: "Always aligned with latest SEO trends." },
      { icon: Cpu, title: "Technical Excellence", desc: "Optimized structure & fast performance." },
      { icon: Globe, title: "Global Reach", desc: "Expand your presence locally and internationally." },
    ].map((item, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="bg-white/5 border border-black rounded-xl p-6 flex flex-col items-center text-center"
      >
        <item.icon size={36} className="mb-4 text-black" />
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-black">{item.desc}</p>
      </motion.div>
    ))}
  </div>

  {/* Subtle background dots */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_black,_transparent_1px)] bg-[length:20px_20px]"></div>
  </div>
</section>



 <section className="bg-white text-black py-24 px-6 md:px-16 relative">
      <motion.h3
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
      >
        What We Offer
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {offers.map((offer, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            className="flex items-start gap-4 p-6 bg-white border-[1px] border-black rounded-2xl hover:bg-black/5 transition-all cursor-pointer"
          >
            <CheckCircle className="text-black mt-1 flex-shrink-0" size={24} />
            <p className="text-lg md:text-xl leading-relaxed">{offer}</p>
          </motion.div>
        ))}
      </div>

      {/* Optional subtle static background shapes */}
      <div className="absolute w-72 h-72 rounded-full border border-black/10 top-10 left-10"></div>
      <div className="absolute w-56 h-56 rounded-full border border-black/10 bottom-10 right-10"></div>

      
    </section>


    <section className="relative bg-white text-black py-24 px-6 md:px-16 overflow-hidden">
  {/* Background abstract lines / dots */}
  <div className="absolute inset-0 pointer-events-none">
    <motion.div
      animate={{ x: [-50, 50, -50], y: [0, 20, 0] }}
      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      className="absolute top-10 left-1/4 w-[2px] h-60 bg-gray-300/30"
    />
    <motion.div
      animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
      transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      className="absolute bottom-10 right-1/3 w-[2px] h-80 bg-gray-300/20"
    />
    <div className="absolute inset-0 bg-[radial-gradient(circle,_black/5,_transparent_1px)] bg-[length:20px_20px]"></div>
  </div>

  {/* Floating content */}
  <div className="relative z-10 max-w-4xl mx-auto space-y-4">
    <motion.h3
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-3xl md:text-4xl font-bold"
    >
      Optimizing for the AI-First Search Era (SGE + LLMO)
    </motion.h3>

    <motion.p
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="text-lg md:text-xl text-gray-800 leading-relaxed"
    >
      Search engines are evolving and so is SEO. With Google introducing SGE, traditional results are being replaced by AI-generated answers. Our SEO services train your content for this shift.
    </motion.p>

    <motion.ul
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, staggerChildren: 0.3 }}
      className="list-disc list-inside space-y-2 text-gray-700"
    >
      {[
        "Structuring content for AI-rich previews",
        "Writing with conversational phrasing and natural answers",
        "Optimizing headings and snippets for generative summaries",
      ].map((item, idx) => (
        <motion.li key={idx} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: idx * 0.3 }}>
          {item}
        </motion.li>
      ))}
    </motion.ul>
  </div>
</section>


<section className="relative bg-white text-black py-16  px-6 md:px-16 overflow-hidden">
  {/* Subtle background lines */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute w-[2px] h-full bg-white border-[1px] border-black/5  left-1/3 animate-pulse"></div>
    <div className="absolute w-[2px] h-full bg-white border-[1px] border-black/5 left-2/3 animate-pulse delay-200"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto space-y-8">
    {/* Heading */}
    <motion.h3
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-3xl md:text-4xl font-bold"
    >
      Large Language Model Optimization (LLMO)
    </motion.h3>

    {/* Bullets */}
    <ul className="space-y-4">
      {[
        "Aligning your content with entity-based language models",
        "Using semantic SEO and topic clusters for deeper indexing",
        "Adapting content to perform well in AI-trained datasets",
      ].map((item, idx) => (
        <motion.li
          key={idx}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          className="text-lg md:text-xl flex items-center gap-3"
        >
          <span className="w-2 h-2 bg-black rounded-full inline-block "></span>
          {item}
        </motion.li>
      ))}
    </ul>
    <p>This means your content won’t just rank, it will become part of how answers are 
generated. </p>
  </div>
</section>


  <section className="relative bg-black  overflow-hidden py-24 px-6 md:px-16 flex flex-col lg:flex-row-reverse items-center">
  {/* Right: Illustration with different animation */}
  <div className="lg:w-1/2 relative flex justify-center mt-10 lg:mt-0">
    {/* Floating SEO icons */}
    <motion.div
      animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      className="absolute top-10 left-20 w-12 h-12 flex items-center justify-center text-white"
    >
      <Globe size={24} />
    </motion.div>
    <motion.div
      animate={{ x: [0, 20, 0], rotate: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      className="absolute bottom-20 right-10 w-14 h-14 flex items-center justify-center text-white"
    >
      <Link2 size={28} />
    </motion.div>
    <motion.div
      animate={{ scale: [1, 1.15, 1] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      className="absolute top-1/2 left-1/3 w-16 h-16 flex items-center justify-center text-white"
    >
      <Zap size={28} />
    </motion.div>

    {/* Main Illustration */}
    <Image
       width={500}
      height={500}
      src="/seo.png"
      alt="SEO Illustration"
      className="w-64 lg:w-80 z-10"
    />
  </div>

  {/* Left: Text content */}
  <div className="lg:w-1/2 text-center lg:text-left z-10">
    <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">
      Rank Smarter, Not Harder – SEO Services Backed by the Latest Algorithms
    </h3>
    <h3 className="text-lg md:text-xl text-gray-300 mb-6">
      Your Growth Starts Here with Advanced SEO Services: On-Page, Off-Page, Technical & Local Optimization
    </h3>
    <p className="text-gray-400 mb-8">
      At Contently Writers, we don’t just do SEO. We engineer visibility. Whether you’re a growing startup, a local business, or an established brand looking to dominate search rankings, our affordable SEO services for small businesses are designed to evolve with you.
    </p>
 
  </div>

  {/* Optional subtle diagonal lines background */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,#ffffff05,#ffffff05_1px,#000_1px,#000_2px)]"></div>
  </div>
</section>



<section className="relative bg-white text-black py-24 px-6 md:px-16 overflow-hidden">
  {/* Comic-style background elements */}
  <div className="absolute inset-0 pointer-events-none">
    {/* Halftone dots */}
    <div className="absolute inset-0 bg-[radial-gradient(circle,_white/5,_transparent_1px)] bg-[length:20px_20px]"></div>
    {/* Speed lines */}
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <motion.div
        animate={{ x: [-200, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        className="absolute top-0 left-0 w-[2px] h-full bg-white/20"
      ></motion.div>
      <motion.div
        animate={{ x: [-150, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
        className="absolute top-0 left-0 w-[2px] h-full bg-white/15"
      ></motion.div>
    </div>
  </div>

  {/* Main comic panels */}
  <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-center items-start">
    {/* Panel 1 */}
    <motion.div
      whileHover={{ scale: 1.05, rotate: 2 }}
      transition={{ duration: 0.3 }}
      className="bg-white/5 border-2 border-black/50 rounded-xl p-6 w-full md:w-1/3 text-black"
    >
      <h3 className="font-bold text-lg mb-2">Strategy Over Keywords</h3>
      <p className="text-sm">
        We focus on user intent, semantic search, and high-converting content.
      </p>
    </motion.div>

    {/* Panel 2 */}
    <motion.div
      whileHover={{ scale: 1.05, rotate: -2 }}
      transition={{ duration: 0.3 }}
      className="bg-white/5 border-2 border-black/50 rounded-xl p-6 w-full md:w-1/3 text-black"
    >
      <h3 className="font-bold text-lg mb-2">Topical Authority</h3>
      <p className="text-sm">
        Structured content hubs make search engines recognize you as an expert.
      </p>
    </motion.div>

    {/* Panel 3 */}
    <motion.div
      whileHover={{ scale: 1.05, rotate: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white/5 border-2 border-black/50 rounded-xl p-6 w-full md:w-1/3 text-black"
    >
      <h3 className="font-bold text-lg mb-2">Future-Proof SEO</h3>
      <p className="text-sm">
        Optimized for GEO, LLMO, and Google’s Search Generative Experience (SGE).
      </p>
    </motion.div>
  </div>

  {/* Comic speech bubble example */}
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    className="absolute top-10 right-10 bg-black text-white rounded-full px-4 py-2 font-semibold text-sm"
  >
    Boost Your SEO!
  </motion.div>
</section>

  
    </main>
  );
}
