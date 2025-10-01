import Head from "next/head";
import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import GuestRoute from "@/routes/guestRoute";
import Popup from "@/components/main/popup";
import { AuthProvider } from "@/context/AuthContext";


export const metadata = {
  title: "Best Content Writing & SEO Services USA | Contently Writers",
  description: `Looking for the best content writing and SEO services in the USA? 
Contently Writers delivers high-quality content and SEO strategies to 
help your brand grow online.`,
  keywords: "content writing company, best content writing company ,content writing agency, content creation services, best SEO companies in USA, best USA SEO company, SEO company in USA, search engine optimization company USA, search engine optimization companies in USA, affordable search engine optimization service, low price SEO services, Best Content writing services, Best Assignment services , Assignment helper , Assignment experts , safeassign , UK , USA",
  alternates: {
    canonical: "https://www.contentlywriters.com",
  },
};

export default function HomeLayout({ children }) {
  return (
    <GuestRoute>
      <div>
        <Head>
          <link rel="canonical" href={metadata.alternates.canonical} />
        </Head>

        <Navbar />
        {/* <Popup /> */}
        <div>{children}</div>
        <Footer />
      </div>
    </GuestRoute>
  );
}
