import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import GuestRoute from "@/routes/guestRoute";
import Head from "next/head";

export const metadata = {
  title: "Trusted Dissertation Writing Help Online | Boost Your Grades",
  description:'Need dissertation help? Our online service offers professional support for every stage, from research to editing. Achieve excellence with our expert team.',
  keywords: " Dissertation writing help online , best Dissertation writing services online , Help with dissertation assignments writing , Custom dissertation writing service online , Best dissertation writing help for students"
};

export default function DissertationLayout({ children }) {
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
