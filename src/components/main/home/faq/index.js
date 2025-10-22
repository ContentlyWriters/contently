"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


export default function FAQ() {
  return (
    <div
      id="faq"
      className="px-4 sm:px-10 lg:px-[50px] bg-[#050510] relative overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#5b6cf2]/30 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto py-20 relative ">
        <h4 className="text-white lg:text-5xl sm:text-3xl text-2xl font-bold text-center">
          Frequently Asked{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5b6cf2] to-[#00c6ff]">
            Questions
          </span>
        </h4>

        <Accordion
          type="single"
          collapsible
          className="w-full grid gap-6 pt-12 md:px-20 sm:px-10"
        >
          {data.map((item) => (
            <AccordionItem
              key={item.id}
              value={`item-${item.id}`}
              className="bg-gradient-to-r from-[#101020] to-[#151530] rounded-2xl p-[2px] shadow-xl"
            >
              <AccordionTrigger
                className="flex justify-between items-center text-left sm:text-lg text-md px-6 py-4 rounded-2xl bg-[#0b0b15] text-white font-medium hover:bg-[#121225] transition-all"
              >
                {item.title}
              
              </AccordionTrigger>

              <AccordionContent className="text-gray-300 px-6 pb-6 text-sm sm:text-base leading-relaxed">
                {item.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

  </div>
  );
}

const data = [
  {
    id: 1,
    title: "What are the best content writing services?",
    description:
      "At Contently Writers, we deliver creative, accurate, and SEO-friendly content. Our team crafts research-backed, plagiarism-free content across blogs, websites, academic work, and business writing to boost visibility and engagement.",
  },
  {
    id: 2,
    title: "Who is the best SEO company for growing businesses?",
    description:
      "The best SEO company depends on goals and budget. Contently Writers offers comprehensive SEO strategies, transparent results, and measurable ROI to help businesses grow consistently online.",
  },
  {
    id: 3,
    title: "What are the 4 types of SEO?",
    description:
      "The four main types are: On-page (content & HTML), Off-page (backlinks & authority), Technical (speed, mobile, structure), and Local SEO. Contently Writers combines all four for a complete SEO strategy.",
  },
  {
    id: 4,
    title: "How much does SEO cost?",
    description:
      "SEO pricing depends on scope, competition, and goals. At Contently Writers, packages start from $250/month, including keyword research, on-page optimization, and clear deliverables to boost visibility",
  },
  {
    id: 5,
    title: "Is content writing still in demand?",
    description:
      "Yes. High-quality, SEO-friendly content is more important than ever. Contently Writers helps businesses and students create content that drives traffi c, builds trust, and supports conversions.",
  },
    {
    id: 6,
    title: "What makes content writing services trustworthy?",
    description:
      "Trustworthy services deliver original, research-backed, and SEO-optimized content. Contently Writers ensures transparency, timely delivery, and plagiarism-free work to build long-term client trust.",
  },
    {
    id: 7,
    title: "How do I choose the right content writing company?",
    description:
      "Look for expertise, SEO understanding, and personalized strategy. Contently Writers combines experienced writers, data-driven insights, and tailored solutions to achieve your goals.",
  },
    {
    id: 8,
    title: "What qualities should a good content writer have?",
    description:
      "A good writer combines creativity, clarity, and strategy. Contently Writers ensures every piece is audience-focused, well-researched, and optimized to rank higher on search engines.",
  },
    {
    id: 9,
    title: "How long does it take for SEO to show results?",
    description:
      "SEO is gradual; results typically appear in 3–6 months. With consistent updates and optimization, Contently Writers helps achieve sustainable visibility and long-term growth.",
  },
];
