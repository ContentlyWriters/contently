import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import GuestRoute from "@/routes/guestRoute";
import Head from "next/head";

export const metadata = {
  title: "Top Online Coursework Writing Services | Expert Help Anytime, Anywhere",
  description:'Get expert online coursework writing services for all subjects. Our skilled writers deliver high-quality, customized coursework to help you achieve top grades. Available 24/7.',
  keywords: "online coursework writing services , Coursework writing help online , Help with coursework writing , best online coursework help , Do my coursework",
  alternates: {
    canonical: "https://www.contentlywriters.com/service/coursework-writing" 
  }
};

export default function CourseworkLayout({ children }) {
  return (
    <GuestRoute allowAuthenticated={true}>
      <div>
        <Navbar />
        <div className="mt-[80px]">{children}</div>
       
      </div>
    </GuestRoute>
  );
}
