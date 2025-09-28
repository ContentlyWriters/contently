"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Emma J., New York, USA",
      rating: 5,
      text: "I needed website content for my small business, and Contently Writers nailed it! The tone was spot-on, and the turnaround time was amazing. Definitely the best content writing company I’ve worked with.",
    },
    {
      name: "David M., Chicago, USA",
      rating: 5,
      text: "Their SEO team helped my blog rank on Google within weeks. Super impressed with their strategy and support — affordable SEO that actually works!",
    },
    {
      name: "Sophia L., Los Angeles, USA",
      rating: 5,
      text: "I was behind on a major assignment, and their writers saved me. The work was original, well-researched, and delivered on time. Highly recommended for students!",
    },
    {
      name: "Jason K., Austin, USA",
      rating: 5,
      text: "Great experience from start to finish. They helped me with SEO copywriting and blog content that brought real traffic. Reliable and professional team!",
    },
    {
      name: "Ava B., Miami, USA",
      rating: 5,
      text: "I’ve used their assignment services twice now, and both times the quality was excellent. Clear, plagiarism-free, and tailored exactly to what I needed.",
    },
    {
      name: "Michael S., Seattle, USA",
      rating: 5,
      text: "As a startup owner, I needed a lot of content quickly. Their writers understood the brief perfectly and delivered quality work faster than I expected. A top-tier content writing agency!",
    },
    {
      name: "Olivia T., Denver, USA",
      rating: 5,
      text: "They handled both my SEO and blog writing. Everything was optimized, well-written, and aligned with my business goals. My site traffic has definitely improved.",
    },
    {
      name: "Liam W., Boston, USA",
      rating: 5,
      text: "I reached out for help with a research paper and ended up using their content team for my business site too. Great service on both fronts — academic and professional!",
    },
  ];

  // 🔥 Duplicate list for infinite loop
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative py-20 bg-white text-black overflow-hidden">
      {/* background blur gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#5b6cf2,transparent_50%)] opacity-10 blur-3xl"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,pink,transparent_50%)] opacity-10 blur-3xl"></div>

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-16">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5b6cf2] to-[#00c6ff]">
            TESTIMONIALS
          </span>
        </motion.h2>

        {/* Slider Container */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-scroll">
            {doubledTestimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-[300px] max-w-[350px] bg-white shadow-md border border-black/10 rounded-2xl p-6 flex-shrink-0"
              >
                <div className="flex text-yellow-400 mb-3">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-black italic mb-4 leading-relaxed">
                  “{t.text}”
                </p>
                <h4 className="text-[#5b6cf2] font-semibold">{t.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-black mb-4">
            Send us your enquiry — we’ll connect with you right away
          </p>
         <motion.button whileHover={{ boxShadow: "0 0 20px rgba(91,108,242,0.8), 0 0 40px rgba(255,255,255,0.6)", }} transition={{ type: "spring", stiffness: 250, damping: 12 }} className="relative px-4 py-2 rounded-full font-semibold text-white text-lg bg-[#5b6cf2] overflow-hidden group" > {/* 🔥 Border Line */} <span className="absolute inset-0 rounded-full border-2 border-transparent animate-electric bg-[linear-gradient(90deg,#5b6cf2,#00c6ff,#5b6cf2)] bg-[length:300%_300%] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] p-[2px]"> </span> {/* Button Text */} <span className="relative ">Talk to Us Today</span> {/* Lightning Hover Flash */} <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle,rgba(255,255,255,0.4)_0%,transparent_70%)] animate-lightning"></span> </motion.button>
        </div>
      </div>

      {/* Keyframes Style */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          width: max-content;
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
