"use client";
import React from "react";

const FAQ = () => {
  return (
    <div>
      {/* Header Section (Unchanged) */}
      <div className="bg-[#020035] py-8 mb-[10vh]">
        <h1 className="text-[#FFFFFF] sm:text-[50px] lg:text-[80px] text-[40px] text-center pt-20 mx-auto font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="text-[#FFFFFF] sm:text-[22px] md:text-[26px] text-[20px] text-center pt-6 sm:pt-10 mb-8 mx-auto">
         Get the answers you need and make informed decisions with confidence.
        </p>
        <div className="h-[7px] w-[150px] bg-[#5b6cf2] mx-auto"></div>
      </div>

      {/* FAQ Content Section with Full-Width Styling */}
      <div className="!px-6 sm:!px-10 lg:!px-[80px] py-5">
        <div className="max-w-[1280px] mx-auto sm:!px-10 lg:!px-[80px] grid gap-8">
          <div className="grid gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-lg text-[#020035]">
                Q1. Where can I find the best assignment writers online?
              </h3>
              <p className="opacity-70">
                You can find expert assignment writers on reputable platforms that offer plagiarism-free, well-researched, and customized academic solutions. Contently Writers provides top-tier experts to ensure high-quality assignments with timely delivery.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-lg text-[#020035]">
                Q2. How do I hire a professional assignment writer?
              </h3>
              <p className="opacity-70">
                Hiring an expert is simple—just submit your requirements, choose a subject specialist, and receive a well-crafted assignment before your deadline. Look for services that ensure originality, accuracy, and adherence to academic standards.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-lg text-[#020035]">
                Q3. Are assignment writing services legal?
              </h3>
              <p className="opacity-70">
                Yes, assignment writing services are legal when used as reference materials to enhance learning. They provide ethical, original content to help students better understand their subjects.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-lg text-[#020035]">
                Q4. What subjects do assignment writers cover?
              </h3>
              <p className="opacity-70">
                Assignment writers cover a wide range of subjects, including business management, finance, law, nursing, IT, computer science, and humanities. Contently Writers has subject-specific experts who deliver high-quality content tailored to academic guidelines.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-lg text-[#020035]">
                Q5. Can I get a plagiarism-free assignment from an online writer?
              </h3>
              <p className="opacity-70">
                Absolutely! Professional writing services ensure 100% plagiarism-free assignments with original content and proper citations. Many, including Contently Writers, provide plagiarism reports upon request for complete transparency.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-lg text-[#020035]">
                Q6. How fast can an assignment writer complete my work?
              </h3>
              <p className="opacity-70">
                The turnaround time depends on your selected deadline. You can specify when you need your assignment, and our team will ensure timely delivery. If you require faster completion, you can chat with Contently Writers to discuss your requirements.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-lg text-[#020035]">
                Q7. What if I need revisions on my assignment?
              </h3>
              <p className="opacity-70">
                Most writing services offer free revisions to ensure your assignment meets expectations. If changes align with the original instructions, they will revise it until you’re fully satisfied. Contently Writers prioritizes customer satisfaction with unlimited revisions as per policy.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-lg text-[#020035]">
                Q8. Are online assignment writing services confidential?
              </h3>
              <p className="opacity-70">
                Yes, trusted services ensure 100% confidentiality, safeguarding personal details and assignment information. Contently Writers guarantees privacy and does not share client data with third parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
