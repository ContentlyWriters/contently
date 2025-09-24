"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { PenTool, BookOpen, BarChart3, Check, ChevronDown } from "lucide-react";
import { Globe, Search, FileText, ShoppingCart, User } from "lucide-react";
import { DollarSign, UserCheck, TrendingUp, Layers, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const faqs = [
  {
    question: "What characteristics distinguish a skilled content writer?",
    answer:
      "A good content writer is research-driven, SEO-savvy, adaptable in tone, and writes with clarity. Our skilled content writers are taught to add value with every word.",
  },
  {
    question: "What is high-quality content?",
    answer:
      "It’s original, informative, and optimized. Whether you're looking for SEO content writing services or brand copy, we focus on creating content that meets user intent and drives results.",
  },
  {
    question: "What are content writing's four pillars?",
    answer: "• Clarity – Easy to read and understand\n• Value – Provides relevant, helpful information\n• Optimization – SEO-friendly with natural keyword use\n• Engagement – Keeps readers hooked",
  },
    {
    question: "How much do content writing services cost?",
    answer: "The content's intricacy, length, and nature all play a role. We offer affordable content writing services with flexible pricing to suit all budgets.",
  },
    {
    question: "Can I hire blog writers for ongoing projects?",
    answer: "Absolutely! We offer both one-time services and subscription-based blog writing plans to keep your content fresh and consistent",
  },
    {
    question: "How is website content writing different from blog writing?",
    answer: "Website content focuses on key pages like Home or Services, while blog content is dynamic, used for SEO and brand authority. We specialize in both.",
  },
    {
    question: "Which platform is best for content writing?",
    answer: "Freelance platforms can help with short-term needs. But for long-term brand growth and quality,partnering with a professional content writing company like Contently Writers offers consistency and results.",
  },
];

export default function ContentWritingPage() {

     const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


     const services = [
    {
      title: "Website Content Writing",
      desc: "Clear, compelling web copy that builds trust and keeps visitors engaged.",
      icon: <Globe size={28} />,
    },
    {
      title: "SEO Content Writing",
      desc: "Well-optimized, keyword-rich content that pleases both search engines and humans.",
      icon: <Search size={28} />,
    },
    {
      title: "Blog & Article Writing",
      desc: "Consistent, high-quality blogs that showcase expertise and boost your visibility.",
      icon: <FileText size={28} />,
    },
    {
      title: "Product Descriptions & E-commerce Content",
      desc: "Persuasive product copy designed to drive conversions and increase sales.",
      icon: <ShoppingCart size={28} />,
    },
    {
      title: "Professional Writers for Hire",
      desc: "Skilled content writers matched to your industry and tone of voice.",
      icon: <User size={28} />,
    },
  ];

  const features = [
    {
      title: "Affordable Yet Premium",
      desc: "Top-quality content without the hefty price tag.",
      icon: <DollarSign size={28} />,
      color: "#5b6cf2",
    },
    {
      title: "Niche-Specific Writers",
      desc: "Employ qualified content writers who are aware of your audience and industry.",
      icon: <UserCheck size={28} />,
      color: "#f5c0f0",
    },
    {
      title: "SEO-Driven Strategy",
      desc: "We blend creativity with SEO tools and data to deliver high-ranking content.",
      icon: <TrendingUp size={28} />,
      color: "#5b6cf2",
    },
    {
      title: "Flexible Content Plans",
      desc: "From startups to large enterprises, we offer packages that scale with your needs.",
      icon: <Layers size={28} />,
      color: "#f5c0f0",
    },
    {
      title: "Fast Turnaround",
      desc: "Deadlines matter—we deliver on time, every time.",
      icon: <Clock size={28} />,
      color: "#5b6cf2",
    },
  ];

  


    const rates = {
    article: { perWordUSD: 45 / 1500, perWordEUR: 41.4 / 1500 },
    copywriting: { perWordUSD: 55 / 1500, perWordEUR: 50.6 / 1500 },
    blog: { perWordUSD: 25 / 1000, perWordEUR: 23 / 1000 },
    product: { perWordUSD: 25 / 800, perWordEUR: 23 / 800 },
    website: { perWordUSD: 25 / 700, perWordEUR: 23 / 700 },
    seo: { perWordUSD: 60 / 2000, perWordEUR: 55.2 / 2000 },
  };

  const options = [
    { value: "article", label: "Article Writing" },
    { value: "copywriting", label: "Copywriting" },
    { value: "blog", label: "Blog Writing" },
    { value: "product", label: "Product Description" },
    { value: "website", label: "Website Page Content" },
    { value: "seo", label: "SEO Content" },
  ];

  const [service, setService] = useState("article");
  const [words, setWords] = useState("150");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const numericWords = parseInt(words) || 0;
  const calculatePrice = (serviceType) => {
    const { perWordUSD, perWordEUR } = rates[serviceType];
    return {
      usd: (perWordUSD * numericWords).toFixed(2),
      eur: (perWordEUR * numericWords).toFixed(2),
    };
  };
  const prices = calculatePrice(service);


  return (
    <>
      {/* ---------------- Banner ---------------- */}
   <section className="relative bg-gradient-to-br from-white via-[#f9f9ff] to-[#f5f0ff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-32 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text */}
        <div className="text-center md:text-left space-y-8 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl  font-extrabold leading-tight text-black"
          >
            Rank Smarter, <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#5b6cf2] to-[#00c6ff] bg-clip-text text-transparent">
              Not Harder
            </span>
          </motion.h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto md:mx-0">
            Drive visibility, engagement, and conversions with our tailored SEO
            and content writing services designed for modern businesses.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start"
          >
            <Link
              href="/services"
              className="px-4 py-2 bg-white text-black border border-black rounded-full font-semibold shadow-lg  hover:shadow-xl transition transform text-center"
            >
              Explore Services
            </Link>

            <Link
              href="/contact"
              className="px-4 py-2 border-2 border-[#5b6cf2] text-[#5b6cf2] rounded-full font-semibold hover:bg-[#5b6cf2]/10  hover:shadow-xl transition transform text-center"
            >
              Free Consultation
            </Link>
          </motion.div>
        </div>

        {/* Illustration / Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center md:justify-end relative z-0"
        >
          <img
            src="/2202_w039_n003_124_businessdoodle_p1_124.jpg"
            alt="Marketing Illustration"
            className="w-[380px] md:w-[460px] drop-shadow-2xl pointer-events-none"
          />
        </motion.div>
      </div>

      {/* Decorative wave bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="w-full h-[120px] md:h-[180px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#5b6cf2"
            fillOpacity="0.08"
            d="M0,192L60,197.3C120,203,240,213,360,197.3C480,181,600,139,720,138.7C840,139,960,181,1080,197.3C1200,213,1320,203,1380,197.3L1440,192V320H0Z"
          />
        </svg>
      </div>
    </section>
  



 <section className="relative bg-white py-32 px-6 md:px-16 overflow-hidden">

  
  <div className="max-w-6xl mx-auto">
    {/* Heading - Manga Bold Style */}
    <motion.h2
      className="text-3xl sm:text-5xl font-black text-center text-black mb-12 drop-shadow-md tracking-tight border-b-4 border-black inline-block px-4"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, type: "spring", stiffness: 120 }}
    >
      Content Writing Services We Offer
    </motion.h2>

    {/* Description */}
    <motion.p
      className="text-center text-black max-w-3xl mx-auto mb-16 text-lg drop-shadow-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      Every piece of content we create is strategically crafted to reflect your brand’s voice and deliver measurable outcomes. Our professional content writing services include:
    </motion.p>

    {/* Manga-style Speed Lines / Halftone Background */}
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      <div className="absolute w-full h-full bg-[radial-gradient(circle,black_1px,transparent_1px)] bg-[length:8px_8px] opacity-5"></div>
      <div className="absolute w-full h-full bg-[repeating-linear-gradient(-45deg,black,black 1px,transparent 2px)] opacity-5"></div>
      <div className="absolute w-full h-full bg-[repeating-linear-gradient(45deg,black,black 1px,transparent 3px)] opacity-5"></div>
    </div>

    {/* Services Grid */}
    <div className="flex flex-col md:flex-row md:flex-wrap gap-8 relative z-10">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="bg-white p-8 rounded-3xl border-[1px] border-black shadow-2xl flex-1 min-w-[280px] hover:scale-105 transition-transform cursor-pointer relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
         

          <div className="text-black mb-4">{service.icon}</div>
          <h4 className="text-xl font-bold mb-2">{service.title}</h4>
          <p className="text-gray-800">{service.desc}</p>
        </motion.div>
      ))}
    </div>

    {/* Footer Text */}
    <motion.p
      className="text-center text-black max-w-2xl mx-auto mt-16 text-lg drop-shadow-sm relative z-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      We use 100% original content, in-depth research, and white-hat SEO practices to help your brand stand out and grow sustainably.
    </motion.p>
  </div>
</section>




 <section className="relative py-20 md:py-32 px-6 md:px-16 bg-black overflow-hidden flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

  {/* Left: Text */}
  <motion.div
    className="lg:w-1/2 space-y-6 relative z-10"
    initial={{ x: -50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-snug drop-shadow-md tracking-tight border-b-4 border-white inline-block px-2">
      Why Choose <span className="text-white">Contently Writers?</span>
    </h3>

    <h4 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-white mt-4 border-l-4 border-white pl-3">
      Is Content Writing Still in Demand?
    </h4>

    <p className="text-white text-base sm:text-lg md:text-lg lg:text-lg mt-4 leading-relaxed drop-shadow-sm">
      Absolutely. With Google’s evolving algorithms favoring helpful, high-quality content, businesses need strong writing more than ever. Whether you need strategic blogs or SEO content writing services, compelling content helps you rank higher, convert better, and stay competitive.
    </p>
  </motion.div>

  {/* Right: Manga Bubbles / Energy */}
  <motion.div
    className="lg:w-1/2 relative flex justify-center items-center w-full h-[200px] sm:h-[360px] md:h-[400px] lg:h-[450px]"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  >
    {/* Manga-style Bubble 1 with Image */}
    <motion.div
      className="w-36 sm:w-44 md:w-60 h-36 sm:h-44 md:h-60 rounded-full border-4 border-gray-400 absolute z-20 overflow-hidden shadow-2xl"
      animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
      transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
    >
      <img
        src="/OE9CG90.jpg"
        alt="Content Writing"
        className="w-full h-full object-cover"
      />
    </motion.div>

    {/* Manga-style Bubble 2 with Image */}
    <motion.div
      className="w-32 sm:w-40 md:w-60 h-32 sm:h-40 md:h-60 rounded-full border-4 border-gray-400 absolute bottom-0 right-6 sm:right-10 md:right-16 z-10 overflow-hidden shadow-2xl"
      animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
      transition={{ duration: 7, repeat: Infinity, repeatType: "mirror" }}
      whileHover={{ scale: 1.05 }}
    >
      <img
        src="/social-media-content.webp"
        alt="SEO Services"
        className="w-full h-full object-cover"
      />
    </motion.div>

    {/* Manga-style Speed Lines / Halftone Dots */}
    <div className="absolute w-full h-full pointer-events-none">
      <div className="absolute w-full h-full bg-[repeating-linear-gradient(-45deg,black,black_1px,transparent_2px)] opacity-5"></div>
      <div className="absolute w-full h-full bg-[repeating-linear-gradient(45deg,black,black_1px,transparent_3px)] opacity-5"></div>
      <div className="absolute w-full h-full bg-[radial-gradient(circle,black_1px,transparent_1px)] bg-[length:8px_8px] opacity-10"></div>
    </div>
  </motion.div>
</section>





 <section className="relative py-32 px-6 md:px-16 overflow-hidden bg-white">

  {/* Central Content */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
    className="relative text-center max-w-5xl mx-auto"
  >
    {/* Heading */}
    <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight bg-black bg-clip-text text-transparent drop-shadow-lg">
      Powerful Words, Purposeful Results
    </h2>

    {/* Subtext */}
    <p className="mt-8 text-lg md:text-xl text-gray-700 leading-relaxed">
      Fuel your growth with affordable content writing services that engage, rank, and convert.
    </p>

    <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">
      Looking for the best content writing services that combine quality and affordability? At{" "}
      <span className="font-bold text-[#5b6cf2]">Contently Writers</span>, we craft professional
      content tailored for websites, blogs, SEO, and more. Whether you're a business owner or a
      digital agency, our expert writers help your brand connect with the right audience through
      words that inspire action.
    </p>
  </motion.div>
</section>

    



 
 

<section className="bg-white py-24 px-6 md:px-16 relative border-b-4 border-t-[1px] border-black ">

   <motion.div
          animate={{ x: [0, 60, -60, 0], y: [0, -40, 40, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 sm:w-[700px] sm:h-[700px] bg-[#5b6cf2]/15 rounded-full blur-[480px]"
        />
        <motion.div
          animate={{ x: [0, -50, 50, 0], y: [0, 30, -30, 0] }}
          transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 sm:w-[600px] sm:h-[600px] bg-pink-600/15 rounded-full blur-[400px]"
        />
   
  <div className="max-w-4xl mx-auto flex flex-col gap-12">

    {/* Heading - Manga/Anime Style */}
    <motion.h3
      className="text-3xl sm:text-5xl font-black text-black text-center leading-snug  inline-block px-4 tracking-tight drop-shadow-lg"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
    >
      Transparent & Flexible Pricing
    </motion.h3>

    {/* Manga Panel Style Container */}
    <div className="flex flex-col gap-8">
      {/* Service + Word Count Panel */}
      <motion.div
        className="relative bg-white border-4 border-black rounded-2xl shadow-2xl p-6 flex flex-col md:flex-row items-center gap-4 "
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
      

        {/* Service Dropdown */}
     {/* Service Dropdown */}
<label className="w-44 font-bold text-black z-10">Select Service:</label>
<div className="relative flex-1 z-10">
  <div
    className="flex justify-between items-center p-4 border-2 border-black rounded-xl hover:border-gray-700 cursor-pointer transition-all duration-300 bg-white shadow-sm z-10"
    onClick={() => setDropdownOpen(!dropdownOpen)}
  >
    <span className="text-black font-semibold">
      {options.find((o) => o.value === service)?.label || "Choose Service"}
    </span>
    <ChevronDown
      className={`w-5 h-5 text-black transition-transform duration-300 ${
        dropdownOpen ? "rotate-180" : ""
      }`}
    />
  </div>

  {dropdownOpen && (
    <div className="absolute z-50 w-full mt-2 bg-white border-2 border-black rounded-xl shadow-lg">
      {options.map((option) => (
        <div
          key={option.value}
          className="flex justify-between items-center px-4 py-3 hover:bg-black/5 cursor-pointer transition-all duration-300"
          onClick={() => {
            setService(option.value);
            setDropdownOpen(false);
          }}
        >
          <span>{option.label}</span>
          {service === option.value && <Check className="w-4 h-4 text-black" />}
        </div>
      ))}
    </div>
  )}
</div>

        {/* Word Count Input */}
        <label className="w-44 font-bold text-black ">Word Count:</label>
        <input
          type="number"
          value={words}
          onChange={(e) => setWords(e.target.value)}
          className="flex-1 p-4 border-2 border-black rounded-xl hover:border-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black "
          placeholder="Enter word count"
        />
      </motion.div>

      {/* Price Panel */}
      <motion.div
        className="relative bg-white border-4 border-black rounded-2xl shadow-2xl p-6 text-center overflow-hidden"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Manga Halftone Background */}
        <div className="absolute top-0 left-0 w-full h-full  pointer-events-none rounded-2xl"></div>

        <p className="text-lg font-bold text-black ">Estimated Price:</p>
        <p className="text-3xl font-extrabold text-black mt-2 drop-shadow-md ">
          USD: ${prices.usd} | EUR: €{prices.eur}
        </p>

        {/* Comic-style “burst” highlight */}
        <motion.div
          className="absolute sm:w-24 sm:w-24 w-24 h-24 border-4 border-black rounded-full -top-8 -right-8 opacity-80"
          animate={{ rotate: [0, 45, -45, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <motion.div
          className="absolute sm:w-24 sm:h-24 w-20 h-20 border-4 border-black rounded-full -bottom-6 -left-6 opacity-70"
          animate={{ rotate: [0, 30, -30, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
        />
      </motion.div>
    </div>
  </div>
</section>

    
<section className="bg-white py-32 px-6 md:px-16 relative overflow-hidden ">
  <div className="max-w-6xl mx-auto text-center flex flex-col gap-12">

    {/* Heading - Manga Style */}
    <motion.h3
      className="text-3xl sm:text-5xl font-extrabold text-black leading-snug border-b-4 border-black inline-block px-4 tracking-tight"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
    >
      What Sets Us Apart?
    </motion.h3>

    {/* Features */}
    <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 mt-12">
      {features.map((feature, idx) => (
      <motion.div
  key={idx}
  className="flex flex-col items-center text-center max-w-xs p-6 rounded-3xl bg-white shadow-lg relative cursor-pointer hover:scale-105 transition-transform duration-300"
  initial={{ opacity: 0, y: 50, rotate: -5 }}
  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: idx * 0.2, type: "spring", stiffness: 120 }}
>
  {/* corner borders */}
  <span className="absolute top-0 left-0 w-6 h-6 border-t-[1px] border-l-[1px] border-black rounded-tl-3xl"></span>
  <span className="absolute top-0 right-0 w-6 h-6 border-t-[1px] border-r-[1px] border-black rounded-tr-3xl"></span>
  <span className="absolute bottom-0 left-0 w-6 h-6 border-b-[1px] border-l-[1px] border-black rounded-bl-3xl"></span>
  <span className="absolute bottom-0 right-0 w-6 h-6 border-b-[1px] border-r-[1px] border-black rounded-br-3xl"></span>

  {/* Icon Bubble */}
  <div className="p-6 rounded-full mb-4 flex items-center justify-center border-4 border-black bg-white shadow-md">
    {feature.icon}
  </div>

  {/* Feature Text */}
  <h4 className="text-2xl font-black mb-2 text-black tracking-tight border-b-2 border-black inline-block px-2">
    {feature.title}
  </h4>
  <p className="text-gray-800 font-medium">{feature.desc}</p>


          {/* Manga-style halftone background */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full rounded-3xl pointer-events-none "
            animate={{ rotate: [0, 3, -3, 0] }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
          />
        </motion.div>
      ))}
    </div>

    {/* Footer Text - Dramatic Manga Style */}
    <motion.p
      className="text-gray-900 max-w-3xl mx-auto text-lg mt-12 font-semibold tracking-wide border-t-2 border-black pt-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      Looking for high-quality content writing services that hit like a punchline? You’ve found your manga-worthy team!
    </motion.p>

    {/* Optional Manga-style comic burst */}
    <motion.div
      className="absolute w-32 h-32 border-4 border-black rounded-full -top-16 -left-16 opacity-80"
      animate={{ rotate: [0, 45, -45, 0] }}
      transition={{ repeat: Infinity, duration: 6 }}
    />
    <motion.div
      className="absolute w-24 h-24 border-4 border-black rounded-full -bottom-12 -right-12 opacity-80"
      animate={{ rotate: [0, 30, -30, 0] }}
      transition={{ repeat: Infinity, duration: 5 }}
    />

  </div>
</section>



<section className="py-24 px-6 md:px-16 relative overflow-hidden bg-black">
  {/* Light Sketchy Background */}
  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" viewBox="0 0 400 400" preserveAspectRatio="none">
    <defs>
      <pattern id="sketch-hatch" width="8" height="8" patternUnits="userSpaceOnUse">
        <path d="M0,0 L8,8 M-2,2 L2,-2 M6,10 L10,6" stroke="#ffffffff" strokeWidth="0.3" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#sketch-hatch)" />
  </svg>

  <h5 className="text-xl md:text-2xl font-semibold text-center text-white mb-4">
    Frequently Asked Questions (FAQs)
  </h5>
  <h4 className="text-3xl md:text-4xl font-white text-center text-white mb-12 px-4 inline-block border-b-4 border-white">
    Your Questions Answered
  </h4>

  <div className="max-w-4xl mx-auto flex flex-col gap-8">
    {faqs.map((faq, index) => (
      <div key={index} className="relative bg-white rounded-xl shadow-lg  overflow-hidden">
        {/* Light Pencil Background */}
        <div className="absolute inset-0  pointer-events-none rounded-xl"></div>

        {/* Question */}
        <div
          className="flex justify-between items-center p-6 relative z-10 cursor-pointer"
          onClick={() => toggle(index)}
        >
          <h3 className="text-lg md:text-xl font-bold text-black">
            {faq.question}
          </h3>
          <ChevronDown
            className={`w-5 h-5 text-black transition-transform duration-300 ${
              openIndex === index ? "rotate-180 text-[#5b6cf2]" : ""
            }`}
          />
        </div>

        {/* Answer */}
        <AnimatePresence initial={false}>
          {openIndex === index && (
            <motion.div
              layout
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.4 }}
              className="px-6 pb-6 text-gray-800 whitespace-pre-line relative z-10"
            >
              {faq.answer}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    ))}
  </div>
</section>


 <section className="relative w-full border-t-2 border-black bg-white py-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden">

  {/* Manga-style Halftone Background (CSS dots) */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
    <div className="absolute w-full h-full bg-[radial-gradient(circle,black_1px,transparent_1px)] bg-[length:8px_8px] opacity-10"></div>
    {/* Comic speed lines */}
    <div className="absolute w-full h-full bg-[repeating-linear-gradient(-45deg,black,black 1px,transparent 2px)] opacity-5"></div>
    <div className="absolute w-full h-full bg-[repeating-linear-gradient(45deg,black,black 1px,transparent 3px)] opacity-5"></div>
  </div>


 

  {/* Floating comic circles (pencil sketch style) */}
  <motion.div
    className="absolute w-24 h-24 border-2 border-black rounded-full -top-16 -right-10 opacity-50"
    animate={{ rotate: [0, 30, -30, 0], scale: [1, 1.1, 1, 1.1] }}
    transition={{ repeat: Infinity, duration: 5 }}
  />
  <motion.div
    className="absolute w-16 h-16 border-2 border-black rounded-full -bottom-10 left-10 opacity-50"
    animate={{ rotate: [0, 45, -45, 0], scale: [1, 1.1, 1, 1.1] }}
    transition={{ repeat: Infinity, duration: 4 }}
  />

  {/* Text Content - Manga Typography */}
  <motion.h3
    className="text-3xl sm:text-5xl font-black text-black leading-tight mb-6 drop-shadow-lg tracking-tight"
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 1, type: "spring", stiffness: 120 }}
  >
    Ready to <span className="underline decoration-black/70">Elevate Your Brand?</span>
  </motion.h3>

  <motion.p
    className="text-black text-lg md:text-xl max-w-2xl mb-8 drop-shadow-sm"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.3 }}
  >
    Explore why businesses trust us as one of the best article writing services out there. Let’s turn your ideas into impactful content, crafted with care and powered by strategy.
  </motion.p>

  {/* CTA Button - Comic Style */}
  <motion.a
    href="#contact"
    whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
    className="px-10 py-4 bg-white text-black font-black rounded-full shadow-lg border-2 border-black"
  >
    Get Started
  </motion.a>
</section>

    </>


  );
}
