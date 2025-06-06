import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import GuestRoute from "@/routes/guestRoute";

export const metadata = {
  title: "Ace Your Grades with Our Writers | Contently Writers",
  description:'Get expert writing help at affordable prices. Contently Writers offers professional writing services for various assignments. Fast delivery and quality guaranteed.',
  keywords: "Top essay services , best write essay , writing platform , USA , UK",
  alternates: {
    canonical: "https://www.contentlywriters.com/service" 
  }
};
export default function ServiceLayout({ children }) {
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
