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
    title: "How to get your assignments completed?",
    description:
      "Our website works on pay-to-work system, basically you pay us to do your assignments. Upload your assignment file in the form, the writer completes it and sends it back. Put instructions in the remarks box if needed.",
  },
  {
    id: 2,
    title: "How will you receive your completed assignments?",
    description:
      "All orders are delivered through the customer's account on the website via the Orders page.",
  },
  {
    id: 3,
    title: "What are the upload file requirements?",
    description:
      "Upload a single ZIP file containing all necessary files along with an explained format to be followed by the writer.",
  },
  {
    id: 4,
    title: "How to stay updated with the progress on your order?",
    description:
      "You will see a profile dashboard when you place an order or sign in. Use the 'My Orders' option to track progress.",
  },
  {
    id: 5,
    title: "If you face any technical issue how to get human support?",
    description:
      "Please contact us through Mail or WhatsApp shown on the website.",
  },
];
