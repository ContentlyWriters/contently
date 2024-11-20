import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import GuestRoute from "@/routes/guestRoute";
import Head from "next/head";

export const metadata = {
  title: "Best Research Paper Writing Services | Custom Help for Assignments",
  description:'Get the best research paper writing services with 100% plagiarism-free content. Expert help for argumentative, analytical, case study papers, and more.',
  keywords: "best research paper writing services , Help with research paper assignments , Custom research paper writing services online , Best research paper writing help for students , online Research Paper Writing Service Cheap"
};

export default function ResearchPaperLayout({ children }) {
  return (
    <GuestRoute allowAuthenticated={true}>
      <div>
       
        <Navbar />
        <div className="mt-[80px]">{children}</div>
        <Footer />
      </div>
    </GuestRoute>
  );
}
