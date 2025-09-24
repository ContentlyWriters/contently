import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import GuestRoute from "@/routes/guestRoute";
import Head from "next/head";

export const metadata = {
  title: "Best Homework Help Online | Expert & Affordable Solutions",
  description:'Struggling with assignments? Find the best homework help online with affordable, expert support. Complete assignments on time with our trusted assistance.',
  keywords: "Best homework help online , expert help with homework online , top homework helper , Affordable homework help for students",
  alternates: {
    canonical: "https://www.contentlywriters.com/service/homework" 
  }
};

export default function HomeworkLayout({ children }) {
  return (
    <GuestRoute allowAuthenticated={true}>
      <div>
        <Navbar />
        <div >{children}</div>
       
      </div>
    </GuestRoute>
  );
}
