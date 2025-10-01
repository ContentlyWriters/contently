import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import GuestRoute from "@/routes/guestRoute";
import Head from "next/head";

export const metadata = {
  title: "Affordable SEO Services for Small & Growing Businesses",
  description:'Boost your online presence with affordable SEO services. Get expert on-page, off-page, technical & local SEO tailored for startups and small businesses.',
  keywords: "affordable SEO services for small businesses , , affordable SEO services , cheap SEO services , professional SEO services in USA , low cost SEO services , affordable SEO optimization , cheap backlink services , local SEO services near me , affordable local SEO , top SEO companies in USA , cheap SEO optimization , inexpensive SEO , cheap search engine optimization , cheap search engine optimization services , off-page SEO , LLMO seo , AI in search engine optimization , SEO for generative search ",
  alternates: {
    canonical: "https://www.contentlywriters.com/service/seo" 
  }
};

export default function seoLayout({ children }) {
  return (
    <GuestRoute allowAuthenticated={true}>
      <div>
        <Navbar />
        <div >{children}</div>
       
      </div>
    </GuestRoute>
  );
}
