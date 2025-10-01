import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import GuestRoute from "@/routes/guestRoute";
import Head from "next/head";

export const metadata = {
  title: "Best Management Assignment Help | Expert Writers & Quality Support",
  description:'Get the best management assignment help with timely delivery and expert support. Our skilled writers deliver tailored, plagiarism-free assignments across all management subjects.',
  keywords: "Best management assignment help , help with management assignment services , Business Management assignment help , Operations Management assignment help , Change Management assignment help , Strategic Management assignment help",
  alternates: {
    canonical: "https://www.contentlywriters.com/subject/management" 
  }
};

export default function ManagementLayout({ children }) {
  return (
    <GuestRoute allowAuthenticated={true}>
      <div>
        <Head>
          <link rel="canonical" href={metadata.canonical} />
        </Head>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    </GuestRoute>
  );
}
