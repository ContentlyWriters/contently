import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import GuestRoute from "@/routes/guestRoute";
import Head from "next/head";

export const metadata = {
  title: "Contently Writers | Best Personal Statement Writing Help Online",
  description:'Contently Writers provides the best personal statement writing help. Our experts craft unique, impactful statements to help boost your grades and stand out',
  keywords: "Best personal statement writing help , Help with personal statement online , best Personal statement writing service online , Best personal statement help online , best personal statement writer",
  alternates: {
    canonical: "https://www.contentlywriters.com/service/personal-statement" 
  }
};

export default function PersonalstatementLayout({ children }) {
  return (
    <GuestRoute allowAuthenticated={true}>
      <div>
        <Navbar />
        <div >{children}</div>
       
      </div>
    </GuestRoute>
  );
}
