import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import GuestRoute from "@/routes/guestRoute";

export const metadata = {
  title:
    "About Contently Writers: Professional Writing Services",
  description:'Learn about Contently Writers, your go-to source for professional writing services. Discover our mission, expertise, and commitment to delivering high-quality content for various needs.'
};
export default function AboutLayout({ children }) {
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
