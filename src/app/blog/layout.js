import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import GuestRoute from "@/routes/guestRoute";

export const metadata = {
  title:
    "Blog | Contently Writers"
};
export default function BlogLayout({ children }) {

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
