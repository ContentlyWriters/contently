import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import GuestRoute from "@/routes/guestRoute";
import Head from "next/head";

export const metadata = {
  title: "All Assignment Help Online: Premium Academic Writing Services",
  description:'Get all assignment help online with Contently Writers. Our expert writers provide high-quality academic writing services for students in various subjects.',
  keywords: "all assignment help online , best all assignment helper , all assignment help online , Comprehensive assignment help in all subjects , all assignment help services"
};

export default function OthersubjectLayout({ children }) {
  return (
    <GuestRoute allowAuthenticated={true}>
      <div>
        <Navbar />
        <div className="mt-[80px]">{children}</div>
        
      </div>
    </GuestRoute>
  );
}
