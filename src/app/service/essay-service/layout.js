import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import GuestRoute from "@/routes/guestRoute";
import Head from "next/head";

export const metadata = {
  title: "Best Essay Writing Services Online | Contently Writers",
  description:'Get the best essay writing services online with Contently Writers. Custom essays by top-tier writers, plagiarism-free work, and 24/7 support for students.',
  keywords: "Best essay writing services online , Help with essay writing online , Custom essay writing help online , Best essay writing service for students"
};

export default function EssayLayout({ children }) {
  return (
    <GuestRoute allowAuthenticated={true}>
      <div>
        <Navbar />
        <div className="mt-[80px]">{children}</div>
      
      </div>
    </GuestRoute>
  );
}
