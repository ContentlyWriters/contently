import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import GuestRoute from "@/routes/guestRoute";


export const metadata = {
  title: "Best Accounting Assignment Help Online | Fast, Accurate & Affordable",
  description:'Get accurate and timely solutions with the best accounting assignment help online. We cover all accounting topics, ensuring confidentiality and on-time delivery every time.',
  keywords: "best accounting assignment help online , do my accounting assignment for me ,help with financial accounting assignment , expert accounting assignment doers , top managerial accounting assignment help",
  alternates: {
    canonical: "https://www.contentlywriters.com/subject/accounting" 
  }
};

export default function AccountingLayout({ children }) {
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
