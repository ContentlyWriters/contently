import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import GuestRoute from "@/routes/guestRoute";
import Head from "next/head";

export const metadata = {
  title: "Information Technology Assignment Help – Expert Guidance for IT Topics",
  description:
    "Get expert Information Technology Assignment Help for Python, IT security, and coding. Reliable support to enhance your academic performance.",
  keywords:
    "Information Technology Assignment Help, Python programming assignment help, Javascript assignment help from experts, best IT security assignment help online, R programming assignment help, c programming assignment help",
  canonical: "https://www.contentlywriters.com/information-technology",
};


export default function InformationLayout({ children }) {
  return (
    <GuestRoute>
      <div>
        <Head>
          <link rel="canonical" href={metadata.canonical} />
        </Head>
        <Navbar />
        <div className="mt-[80px]">{children}</div>
        <Footer />
      </div>
    </GuestRoute>
  );
}
