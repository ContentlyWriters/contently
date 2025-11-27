"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Link from "next/link";
import Image from "next/image"; // ✅ Import Image

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white text-black border-t border-black">

      {/* Wavy Top Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[calc(200%+1.3px)] h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39,56.44C228.46,34.5,114.23,18.58,0,0V120H1200V0c-114.23,18.58-228.46,34.5-321.39,56.44C858.5,80,749.3,100,600,100S341.5,80,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      {/* Blur Anime Glow */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute -top-16 left-1/2 w-72 h-72 rounded-full bg-pink-300/30 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute -top-24 left-1/3 w-64 h-64 rounded-full bg-purple-300/30 blur-3xl"
      />

      {/* ✅ Decorative Logo Image in Footer */}
      <Image
        width={500}
        height={500}
        src="/pop-up1.webp" 
        alt="Decor"
        className="absolute  -bottom-4 -right-14 w-[500px] md:w-[640px] opacity-10 blur-sm rotate-60 pointer-events-none select-none"
      />

      {/* Footer Content */}
      <div className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg border-b-2 border-black inline-block mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#5b6cf2] hover:underline transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#5b6cf2] hover:underline transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[#5b6cf2] hover:underline transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#5b6cf2] hover:underline transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#5b6cf2] hover:underline transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h3 className="font-bold text-lg border-b-2 border-black inline-block mb-4">
              Subjects
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/subject/accounting" className="hover:text-[#5b6cf2] hover:underline transition">
                  Accounting
                </Link>
              </li>
              <li>
                <Link href="/subject/engineering-studies" className="hover:text-[#5b6cf2] hover:underline transition">
                  Engineering Studies
                </Link>
              </li>
              <li>
                <Link href="/subject/information-technology" className="hover:text-[#5b6cf2] hover:underline transition">
                  Information Technology
                </Link>
              </li>
              <li>
                <Link href="/subject/law" className="hover:text-[#5b6cf2] hover:underline transition">
                  Law
                </Link>
              </li>
              <li>
                <Link href="/subject/management" className="hover:text-[#5b6cf2] hover:underline transition">
                  Management
                </Link>
              </li>
              <li>
                <Link href="/subject/statistics" className="hover:text-[#5b6cf2] hover:underline transition">
                  Statistics
                </Link>
              </li>
            </ul>
          </div>

          {/* Terms */}
          <div>
            <h3 className="font-bold text-lg border-b-2 border-black inline-block mb-4">
              Terms
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms-and-conditions" className="hover:text-[#5b6cf2] hover:underline transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#5b6cf2] hover:underline transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-[#5b6cf2] hover:underline transition">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/revision-policy" className="hover:text-[#5b6cf2] hover:underline transition">
                  Revision Policy
                </Link>
              </li>
              <li>
                <Link href="/plagiarism-policy" className="hover:text-[#5b6cf2] hover:underline transition">
                  Plagiarism Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-lg border-b-2 border-black inline-block mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {/* Facebook */}
              <Link
                href="https://www.facebook.com/profile.php?id=61568632033503"
                target="_blank"
                className="relative group"
              >
                <FaFacebookF className="cursor-pointer transition-transform duration-300 group-hover:translate-y-1 group-hover:text-[#3b5998] text-1xl" />
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Facebook
                </span>
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/company/facio-contently-writers/"
                target="_blank"
                className="relative group"
              >
                <FaLinkedin className="cursor-pointer transition-transform duration-300 group-hover:translate-y-1 group-hover:text-[#0077b5] text-1xl" />
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  LinkedIn
                </span>
              </Link>

              {/* Instagram */}
              <Link
                href="https://www.instagram.com/contentlywriters/"
                target="_blank"
                className="relative group"
              >
                <FaInstagram className="cursor-pointer transition-transform duration-300 group-hover:translate-y-1 group-hover:text-pink-500 text-1xl" />
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Instagram
                </span>
              </Link>

              {/* Mail */}
              <Link href="mailto:info@contentlywriters.com" className="relative group">
                <MdOutlineMail className="cursor-pointer transition-transform duration-300 group-hover:translate-y-1 group-hover:text-[#5b6cf2] text-1xl" />
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Email
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 border-t border-black pt-6 text-sm text-black">
          <p className="mb-1 font-semibold">Disclaimer</p>
          <p>Contently Writers provides content writing, SEO, and academic writing support to improve the</p>
          <p>quality and structure of your work. All material is for reference use only. Clients must</p>
          <p>ensure proper citations and comply with academic integrity policies.</p>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-xs opacity-100">
          © 2025 Facio Contently Writers Private Limited. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
