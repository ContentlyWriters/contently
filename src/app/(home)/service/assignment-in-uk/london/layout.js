import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
<<<<<<< HEAD
import GuestRoute from "@/routes/guestRoute";
=======

>>>>>>> fb5ab9f44a44c653818d4eab6140a0fd922c94e6
import Head from "next/head";

export const metadata = {
  title: "Assignment Help in London | Professional Writers at Your Service",
  description:'Looking for assignment help in London? Get custom-written assignments from experienced writers. Affordable and trusted by thousands of students.',
  keywords: "assignment help in London , assignment writing help in London , best assignment helper in London , London assignment help services , Professional assignment Writers London , Top assignment help in London , Affordable assignment writing London "
};

export default function LondonLayout({ children }) {
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
