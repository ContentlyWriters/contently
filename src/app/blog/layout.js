import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import GuestRoute from "@/routes/guestRoute";
import Popup from '@/components/main/popup';

export const metadata = {
  title:
    "Blog | Contently Writers"
};
export default function BlogLayout({ children }) {

  return (
    <GuestRoute allowAuthenticated={true}>
      <div>
        <Navbar />
        {/* <Popup /> */}
        <div className="mt-[40px]">{children}</div>
        <Footer />
      </div>
    </GuestRoute>
  );
}
