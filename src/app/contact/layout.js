import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import GuestRoute from "@/routes/guestRoute";
// import Popup from '@/components/main/popup';
  


export const metadata = {
  title:
    "Contact Contently Writers: Get in Touch with Us",
  description:'Reach out to Contently Writers for professional writing services. Contact us via phone, email, or our online form for inquiries and support. Ask us anything, we’re here to help you with your content needs.'
};
export default function ContactLayout({ children }) {
  return (
    <GuestRoute allowAuthenticated={true}>
      <div>
       
        <Navbar />
        {/* <Popup /> */}
        <div className="mt-[80px]">{children}</div>
        <Footer />
      </div>
    </GuestRoute>
  );
}
