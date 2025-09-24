import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import GuestRoute from "@/routes/guestRoute";
import Head from "next/head";

export const metadata = {
  title: "Expert Assignment Help in Oxford | Affordable & Reliable",
  description:'Struggling with assignments? Get expert assignment help in Oxford for essays, research papers, and more. Plagiarism-free, affordable, and always on time!',
  keywords: "assignment help in Oxford , best assignment writers in Oxford online , online assignment help in Oxford by experts , best assignment helper in Oxford ",
  alternates: {
    canonical: "https://www.contentlywriters.com/assignment-in-uk/oxford" 
  }
};

export default function OxfordLayout({ children }) {
  return (
    <GuestRoute allowAuthenticated={true}>
      <div>
        <Navbar />
        <div >{children}</div>
       
      </div>
    </GuestRoute>
  );
}
