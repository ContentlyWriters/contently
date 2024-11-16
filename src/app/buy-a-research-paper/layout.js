import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import GuestRoute from "@/routes/guestRoute";
import Head from "next/head";

export const metadata = {
  title: "Best Research Paper Writing Services | Custom Help for Assignments",
  description:'Get the best research paper writing services with 100% plagiarism-free content. Expert help for argumentative, analytical, case study papers, and more.',
  keywords: "best research paper writing services , Help with research paper assignments , Custom research paper writing services online , Best research paper writing help for students , online Research Paper Writing Service Cheap",
  canonical: "https://www.contentlywriters.com/buy-a-research-paper"
};

export default function ResearchPaperLayout({ children }) {
  return (
    <GuestRoute>
      <div>
        <Head>
        <link rel="canonical" href={metadata.canonical} />
        </Head>
        <Navbar />
        <div className="mt-[80px]">{children}</div>
        <Footer />
      </div>
    </GuestRoute>
  );
}
