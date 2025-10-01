import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import GuestRoute from "@/routes/guestRoute";


export const metadata = {
  title: "Best Law Assignment Writing Services for Academic Excellence",
  description:'Get the best law assignment writing services for all legal topics. Expert writers deliver high-quality, timely help to ensure top grades and academic success.',
  keywords: "law assignment help , best law assignment writing services ,Commercial law assignment help , Criminal law assignment help , best Constitutional law assignment help",
  alternates: {
    canonical: "https://www.contentlywriters.com/subject/law" 
  }
};

export default function LawLayout({ children }) {
  return (
    <GuestRoute allowAuthenticated={true}>
      <div>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    </GuestRoute>
  );
}
