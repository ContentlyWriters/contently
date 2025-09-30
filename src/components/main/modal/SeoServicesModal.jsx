"use client";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

const seoServices = [
  { service: "On-Page SEO Optimization", description: "Title tags, meta descriptions, headers, internal linking, content optimization", price: "$300–$800 / £250–£650", model: "Per project / Monthly" },
  { service: "Technical SEO Audit & Fixes", description: "Site speed optimization, mobile usability, crawl errors, indexability improvements", price: "$500–$1,200 / £400–£950", model: "One-time" },
  { service: "Affordable SEO Services (Basic)", description: "Keyword research, 5–10 pages optimized, basic reporting", price: "$250–$600 / £200–£500", model: "Monthly" },
  { service: "Affordable SEO Services (Advanced)", description: "Full site optimization, strategy, competitor tracking, dedicated account manager", price: "$800–$2,000 / £650–£1,600", model: "Monthly" },
  { service: "Cheap SEO Services (Freelancer-Based)", description: "Basic keyword placement, plugin setup (Yoast), minor SEO fixes", price: "$100–$300 / £80–£250", model: "Monthly or Per task" },
  { service: "Cheap Backlink Services", description: "Manual outreach, guest post placement, niche directories", price: "$20–$100 per link / £15–£80", model: "Per link" },
];

export default function ExcelStylePopup({ isOpen, onClose }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-[9999] p-4"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className="bg-[#f5f5f7] rounded-2xl shadow-2xl w-full max-w-6xl overflow-hidden border border-gray-300"
            style={{ fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}
          >
            {/* Mac Header */}
            <div className="flex items-center px-4 py-2 border-b border-gray-300 space-x-3">
              <div className="flex space-x-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
              <h2 className="flex-1 text-center font-semibold text-gray-800 text-lg">SEO Services</h2>
              <button onClick={onClose} className="text-gray-600 hover:text-gray-900 font-bold">✕</button>
            </div>

            {/* Excel-style Table */}
            <div className="p-6 overflow-x-auto max-h-[70vh]">
              <table className="min-w-full border border-gray-300 text-left">
                <thead className="bg-gray-100 sticky top-0 z-10">
                  <tr>
                    <th className="px-4 py-2 border-b border-gray-300">Service</th>
                    <th className="px-4 py-2 border-b border-gray-300">Description</th>
                    <th className="px-4 py-2 border-b border-gray-300">Price</th>
                    <th className="px-4 py-2 border-b border-gray-300">Model</th>
                  </tr>
                </thead>
                <tbody>
                  {seoServices.map((item, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
                      whileHover={{ backgroundColor: "rgba(91,108,242,0.1)" }}
                      className="border-b border-gray-200 cursor-pointer"
                    >
                      <td className="px-4 py-3">{item.service}</td>
                      <td className="px-4 py-3 text-gray-700">{item.description}</td>
                      <td className="px-4 py-3 font-semibold text-[#5b6cf2]">{item.price}</td>
                      <td className="px-4 py-3 text-gray-500">{item.model}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer */}
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
