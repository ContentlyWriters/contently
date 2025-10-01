import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import GuestRoute from "@/routes/guestRoute";
import Head from "next/head";

export const metadata = {
  title: " Best Content Writing Services for Website & SEO",
  description:' Hire expert writers for website content, SEO content, and blog writing. Get affordable content writing services that rank, engage, and convert.',
  keywords: "content writing agency,  ,content writing company  ,content writing companies  ,best content writing company  ,content writing agencies  ,best content writing websites  ,affordable content writing services  ,SEO content writing services       ,professional content writers          ,website content writing services  ,best article writing service       ,content creation services         ,high quality content writing         ,content writing for blogs ",
  alternates: {
    canonical: "https://www.contentlywriters.com/service/content-writing" 
  }
};

export default function seoLayout({ children }) {
  return (
    <GuestRoute allowAuthenticated={true}>
      <div>
        <Navbar />
        <div >{children}</div>
       
      </div>
    </GuestRoute>
  );
}
