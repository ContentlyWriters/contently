import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import GuestRoute from "@/routes/guestRoute";

export const metadata = {
  title: "Frequently Asked Questions | Assignment Help Services",
  description:
    "Find answers to common queries about our assignment writing services. Learn about legality, plagiarism-free work, revisions, confidentiality, and more.",
  alternates: {
    canonical: "https://www.contentlywriters.com/faq",
  },
};

export default function faqLayout({ children }) {
  return (
    <GuestRoute allowAuthenticated={true}>
      <div>
        <Navbar />

        {/* FAQ Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Q1. Where can I find the best assignment writers online?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can find expert assignment writers on reputable platforms that offer plagiarism-free, well-researched, and customized academic solutions. Contently Writers provides top-tier experts to ensure high-quality assignments with timely delivery."
              }
            },
            {
              "@type": "Question",
              "name": "Q2. How do I hire a professional assignment writer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Hiring an expert is simple—just submit your requirements, choose a subject specialist, and receive a well-crafted assignment before your deadline. Look for services that ensure originality, accuracy, and adherence to academic standards."
              }
            },
            {
              "@type": "Question",
              "name": "Q3. Are assignment writing services legal?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, assignment writing services are legal when used as reference materials to enhance learning. They provide ethical, original content to help students better understand their subjects."
              }
            },
            {
              "@type": "Question",
              "name": "Q4. What subjects do assignment writers cover?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Assignment writers cover a wide range of subjects, including business management, finance, law, nursing, IT, computer science, and humanities. Contently Writers has subject-specific experts who deliver high-quality content tailored to academic guidelines."
              }
            },
            {
              "@type": "Question",
              "name": "Q5. Can I get a plagiarism-free assignment from an online writer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely! Professional writing services ensure 100% plagiarism-free assignments with original content and proper citations. Many, including Contently Writers, provide plagiarism reports upon request for complete transparency."
              }
            },
            {
              "@type": "Question",
              "name": "Q6. How fast can an assignment writer complete my work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The turnaround time depends on your selected deadline. You can specify when you need your assignment, and our team will ensure timely delivery. If you require faster completion, you can chat with Contently Writers to discuss your requirements."
              }
            },
            {
              "@type": "Question",
              "name": "Q7. What if I need revisions on my assignment?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most writing services offer free revisions to ensure your assignment meets expectations. If changes align with the original instructions, they will revise it until you’re fully satisfied. Contently Writers prioritizes customer satisfaction with unlimited revisions as per policy."
              }
            },
            {
              "@type": "Question",
              "name": "Q8. Are online assignment writing services confidential?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, trusted services ensure 100% confidentiality, safeguarding personal details and assignment information. Contently Writers guarantees privacy and does not share client data with third parties."
              }
            }
          ]
        }) }} />

        <div className="mt-[80px]">{children}</div>
        <Footer />
      </div>
    </GuestRoute>
  );
}
