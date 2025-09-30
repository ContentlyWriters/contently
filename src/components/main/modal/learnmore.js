"use client";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { FaSearch, FaPenNib, FaBullhorn, FaBook, FaFileAlt, FaFile } from "react-icons/fa";

const services = [
  {
    service: "SEO Optimization",
    description: "Enhance your website visibility and ranking with precise keyword targeting and performance optimization.",
    icon: <FaSearch size={18} />,
    bgColor: "bg-blue-500",
  },
  {
    service: "Content Writing",
    description: "Premium, engaging, and SEO-friendly content creation for blogs, websites, and marketing campaigns.",
    icon: <FaPenNib size={18} />,
    bgColor: "bg-purple-500",
  },
  {
    service: "Digital Marketing",
    description: "Strategic marketing solutions including social media, email campaigns, and paid advertising.",
    icon: <FaBullhorn size={18} />,
    bgColor: "bg-orange-400",
  },
  {
    service: "Academic Writing",
    description: "Professional academic content creation including essays, reports, and research papers.",
    icon: <FaBook size={18} />,
    bgColor: "bg-green-500",
  },
  {
    service: "Audit Report",
    description: "Comprehensive website and SEO audits with actionable insights for optimization.",
    icon: <FaFileAlt size={18} />,
    bgColor: "bg-pink-500",
  },
  {
    service: "SEO Content",
    description: "High-quality SEO-focused content for blogs, landing pages, and marketing that drives traffic.",
    icon: <FaFile size={18} />,
    bgColor: "bg-teal-500",
  },
];

export default function MacStylePopup({ isOpen, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-[9999] p-4"
        >
          {/* MacOS-style window */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className="bg-[#f5f5f7] rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden border border-gray-300"
            style={{ fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}
          >
            {/* Header with MacOS buttons */}
            <div className="flex items-center px-4 py-2 border-b border-gray-300 space-x-3">
              <div className="flex space-x-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
              <h2 className="flex-1 text-center font-semibold text-gray-800 text-lg">Our Premium Services</h2>
              <button onClick={onClose} className="text-gray-600 hover:text-gray-900 font-bold">✕</button>
            </div>

            {/* Services grid */}
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.0, boxShadow: "0px 10px 25px rgba(0,0,0,0.15)" }}
                  className="bg-white rounded-xl p-5 flex flex-col items-center text-center border border-gray-200 cursor-pointer"
                >
                  <div className={`w-12 h-12 flex items-center justify-center rounded-lg mb-3 text-white ${item.bgColor}`}>
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{item.service}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Footer buttons */}
            <div className="flex justify-end gap-4 p-5 border-t border-gray-300">
              <a
                href="/contact"
                className="px-6 py-2 rounded-xl border border-gray-400 bg-black text-white hover:bg-gray-800 font-semibold transition"
              >
                Contact Us
              </a>
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-xl border border-gray-400 bg-white hover:bg-gray-100 font-semibold transition"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
