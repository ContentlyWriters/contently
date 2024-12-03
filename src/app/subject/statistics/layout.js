import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import GuestRoute from "@/routes/guestRoute";


export const metadata = {
  title: "Statistics Assignment Help Online | Expert Help, Guaranteed Success Meta",
  description:'Struggling with Statistics? Get expert help from Contently Writers. We offer top-notch statistics assignment help online.',
  keywords: "Statistics assignment help online , stats assignment help ,PAY FOR STATISTICS ASSIGNMENT , do my statistics assignment , help with statistics assignment online , online statistics assignment help",
  alternates: {
    canonical: "https://www.contentlywriters.com/subject/statistics" 
  }
};

export default function StatisticsLayout({ children }) {
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
