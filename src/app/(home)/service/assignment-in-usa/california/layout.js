import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import GuestRoute from "@/routes/guestRoute";
import Head from "next/head";

export const metadata = {
  title: "Best Assignment Help in California | Expert Assistance",
  description:'Searching for the best assignment help in California? Our expert writers offer high-quality, on-time assistance. Affordable and guaranteed satisfaction.',
  keywords: "best assignment help in California , best assignment help usa online , assignment helpers in California , do my assignment for me online , assignment writing help in California , top assignment help services in California , California assignment help services"

};

export default function CaliforniaLayout({ children }) {
  return (
    <GuestRoute>
      <div>
        <Navbar />
        <div className="mt-[80px]">{children}</div>
        <Footer />
      </div>
    </GuestRoute>
  );
}
