"use client";

import { motion } from "framer-motion";
import { Star, Clock, DollarSign, Users, Search, FileText } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "OUR EXPERTISE",
    desc: "Our content is crafted by professional writers and SEO specialists with years of experience in creating impactful, audience-focused material that performs.",
    color: "from-[#5b6cf2] to-pink-500",
  },
  {
    icon: Star,
    title: "CONTENT THAT COVERS EVERYTHING",
    desc: "From blog posts and website copy to product descriptions and SEO landing pages — we cover every content need, tailored to your brand and goals.",
    color: "from-pink-500 to-[#5b6cf2]",
  },
  {
    icon: Search,
    title: "SEO THAT GETS RESULTS",
    desc: "Our strategies are built for performance — from keyword research to content optimization, we help you climb the ranks and stay there.",
    color: "from-[#5b6cf2] to-indigo-400",
  },
  {
    icon: DollarSign,
    title: "THAT FITS YOUR BUDGET",
    desc: "We offer scalable content writing and SEO packages to match every budget — without compromising on quality, creativity, or strategy.",
    color: "from-green-400 to-teal-400",
  },
  {
    icon: Users,
    title: "RESPONSIVE TEAM SUPPORT",
    desc: "Our team is quick to respond, eager to help, and ready to guide you with any query — because your success is our priority.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Clock,
    title: "ALWAYS ON TIME",
    desc: "Deadlines matter. Whether it’s a blog delivery or SEO report — we never miss one. Your projects are always delivered as promised.",
    color: "from-red-400 to-pink-500",
  },
];

export default function ExpertiseShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#ffffff] text-black py-24 px-6 md:px-12">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-[500px] h-[500px] rounded-full bg-[#5b6cf2]/20 blur-[160px]" />
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full bg-pink-500/10 blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-[#5b6cf2] via-[#00c6ff] to-[#5b6cf2] bg-clip-text text-transparent"
        >
          Why Choose Us
        </motion.h2>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg hover:shadow-[0_0_30px_rgba(91,108,242,0.4)] transition"
              >
                <div
                  className={`flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${feature.color} group-hover:scale-110 transition`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
