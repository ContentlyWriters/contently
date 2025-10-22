"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaPenNib, FaChartLine, FaLaptopCode, FaUserShield, FaExclamationTriangle, FaMoneyBillWave } from "react-icons/fa";

const privacyItems = [
  {
    title: "Accounts",
    desc: "All information related to accounts used for sign-up, payment, or reviews is completely protected and will not be shared with any third party that could cause you any inconvenience.",
    icon: FaUserShield,
  },
  {
    title: "Issues and Remarks",
    desc: "We have an active and responsive system designed around our users' needs when interacting with the website. If you encounter any technical difficulties or issues, please let us know, and we will get in touch with you as soon as possible.",
    icon: FaExclamationTriangle,
  },
  {
    title: "Payments and Refunds",
    desc: "We offer various policies related to refunds, discounts, and payment methods. For more information, please visit our policies page.",
    icon: FaMoneyBillWave,
  },
];


const reviews = [
  {
    stars: "⭐️⭐️⭐️⭐️⭐️",
    text: "Exceptional web development service, SEO, content writing, and smooth web design! FACIO Contently Writers Private Limited delivered a stunning website that exceeded my expectations. Professional, responsive, and highly skilled. Highly recommend!",
    author: (
      <>— Dhananjay Sharma, Founder of <a href="https://djaybusinesscafe.com" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">djaybusinesscafe.com</a></>
    ),
  },
  {
    stars: "⭐️⭐️⭐️⭐️⭐️",
    text: "We needed a professional website that reflects our CA firm’s credibility and services. The team at Contently Writers delivered exactly that, with clean design, accurate content, and excellent SEO support. Very cooperative and efficient.",
    author: (
      <>— CA Vivek Sharma, Founder of <a href="https://jvsmindia.com" target="_blank" rel="noopener noreferrer" className="text-black  hover:underline ">jvsmindia.com</a></>
    ),
  },
];


export default function AboutSection() {
  return (
    <>
      {/* About Section */}
<section className="relative bg-gradient-to-b from-white via-[#f9f9ff] to-white py-16 px-6 lg:px-20 overflow-hidden">
  {/* Background Decoration */}
  <div className="absolute top-0 left-0 w-32 h-32 sm:w-40 sm:h-40 bg-[#5b6cf2]/10 rounded-full blur-3xl -z-10"></div>
  <div className="absolute bottom-0 right-0 w-44 h-44 sm:w-56 sm:h-56 bg-pink-200/10 rounded-full blur-3xl -z-10"></div>

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
    {/* Text Content */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
        About <span className="text-[#5b6cf2]">Us</span>
      </h1>

      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-4">
        Our Story
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        We’re a bunch of engineers, writers, and SEO nerds who teamed up
        with one simple goal -
        <span className="font-semibold text-gray-900">
          to help brands grow online with content that actually works.
        </span>
      </p>

      <p className="text-gray-600 leading-relaxed mb-6">
        At{" "}
        <span className="font-semibold text-[#5b6cf2]">
          Contently Writers
        </span>
        , we’re not a huge agency with layers of process and buzzwords.
        We’re a small, focused team that loves building things from
        compelling articles and catchy website content to fast,
        SEO-friendly websites that Google (and people) love.
      </p>

      <p className="text-gray-600 leading-relaxed mb-8">
        With over three years of experience, we’ve written thousands of
        words, ranked hundreds of pages, and built websites that don’t
        just look great, they perform.
      </p>

      {/* Highlights */}
      <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
        <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-2xl p-4 sm:p-6 hover:shadow-2xl transition">
          <FaPenNib className="text-2xl sm:text-3xl text-[#5b6cf2] mb-2 sm:mb-3" />
          <p className="text-gray-700 font-semibold text-sm sm:text-base">Engaging Content</p>
        </div>
        <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-2xl p-4 sm:p-6 hover:shadow-2xl transition">
          <FaChartLine className="text-2xl sm:text-3xl text-[#5b6cf2] mb-2 sm:mb-3" />
          <p className="text-gray-700 font-semibold text-sm sm:text-base">SEO Strategies</p>
        </div>
        <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-2xl p-4 sm:p-6 hover:shadow-2xl transition">
          <FaLaptopCode className="text-2xl sm:text-3xl text-[#5b6cf2] mb-2 sm:mb-3" />
          <p className="text-gray-700 font-semibold text-sm sm:text-base">Modern Websites</p>
        </div>
      </div>
    </motion.div>

    {/* Image Section */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative w-full sm:w-[480px] md:w-[520px] h-[300px] sm:h-[360px] md:h-[400px] rounded-2xl overflow-hidden mx-auto lg:mx-0"
    >
      {/* Glowing animated border */}
      <div className="absolute inset-0 rounded-2xl p-[1.2px] bg-gradient-to-r from-[#5b6cf2] via-[#000000] to-[#5b6cf2] animate-border-flow">
        <div className="w-full h-full rounded-2xl bg-white/95 backdrop-blur-sm"></div>
      </div>

      {/* Image inside */}
      <Image
      width={500}
      height={500}
        src="/8607126.jpg"
        alt="About illustration"
        className="absolute inset-0 w-full h-full object-contain p-4 sm:p-6"
      />
    </motion.div>
  </div>
</section>


      {/* Privacy Section */}
      <section className="relative py-20 bg-gradient-to-b from-white via-[#ffffff] to-white text-black overflow-hidden">
        {/* Background glitch lines */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_95%,#5b6cf2_96%)] bg-[length:100%_40px] opacity-10"></div>

         <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl mb-20 lg:text-5xl font-bold text-center leading-snug"
        >
          <span className="bg-gradient-to-r from-[#5b6cf2] to-[#00c6ff] bg-clip-text text-transparent">
           Your Privacy
          </span>{" "}
          Our Priority
        </motion.h2>

        {/* Content grid */}
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {privacyItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl p-8 border border-[#5b6cf2]/30 bg-black/8 backdrop-blur-sm shadow-[0_0_25px_rgba(91,108,242,0.3)] hover:shadow-[0_0_40px_rgba(91,108,242,0.6)] transition-all duration-300"
            >
              {/* Icon with glow */}
              <div className="absolute -top-6 left-6 w-14 h-14 flex items-center justify-center rounded-xl bg-[#5b6cf2] text-black shadow-lg shadow-[#5b6cf2]/50 group-hover:scale-110 transition-transform">
                <item.icon size={28} />
              </div>

              {/* Glitch border animation */}
              <div className="absolute inset-0 rounded-2xl border border-[#5b6cf2]/20 animate-pulse pointer-events-none"></div>

              <h3 className="text-2xl font-semibold mt-10 mb-4 text-[#5b6cf2] group-hover:text-black transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-800 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

 <section className="relative py-24 px-6 md:px-16 bg-[#0a0a1f] overflow-hidden">
      {/* Background Glows + Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-16 w-72 h-72 bg-[#5b6cf2]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 right-24 w-80 h-80 bg-[#00c6ff]/10 rounded-full blur-3xl animate-pulse"></div>
       
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-24 text-center"
        >
          Our <span className="text-[#5b6cf2]">Mission</span> &{" "}
          <span className="text-[#5b6cf2]">Vision</span>
        </motion.h3>

    

        {/* Cards Container */}
        <div className=" flex flex-col md:flex-row justify-between w-full max-w-5xl gap-12">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 bg-white/10 backdrop-blur-lg border border-[#5b6cf2]/40 rounded-2xl shadow-2xl p-6 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl font-bold text-[#5b6cf2] mb-3">Our Mission</h3>
            <p className="text-gray-200 leading-relaxed">
              To connect the world through simple, impactful words that speak
              to everyone and everywhere.
            </p>
            <p className="mt-3 text-gray-300 leading-relaxed">
              Clarity is power. We keep content, SEO, and code simple, smart, and human.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 bg-white/10 backdrop-blur-lg border border-[#00c6ff]/40 rounded-2xl shadow-2xl p-6 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl font-bold text-[#5b6cf2] mb-3">Our Vision</h3>
            <p className="text-gray-200 leading-relaxed">
              To become a trusted global team that helps brands grow through
              clear content, smart SEO, and clean code without the jargon.
            </p>
            <p className="mt-3 text-gray-300 leading-relaxed">
              A digital world where simplicity wins, creativity connects, and every brand stands out.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

 <section className="relative bg-gradient-to-br from-[#5b6cf2]/5 via-white to-pink-50 py-20 px-6 md:px-16 overflow-hidden">
      {/* Subtle glowing background shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#5b6cf2]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-200/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        {/* Section Heading */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#000] mb-12"
        >
          What Our <span className="text-[#5b6cf2]">Clients</span> Think
        </motion.h3>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-xl border border-[#5b6cf2]/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative"
            >
              {/* Floating quote icon */}
              <div className="absolute -top-6 left-6 text-5xl text-[#5b6cf2]/20 select-none">“</div>

              <p className="text-xl mb-3">{review.stars}</p>
              <p className="text-gray-700 italic leading-relaxed">
                {review.text}
              </p>
              <p className="mt-4 font-medium text-[#5b6cf2]">{review.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
