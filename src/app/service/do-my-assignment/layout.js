import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import GuestRoute from "@/routes/guestRoute";


export const metadata = {
  title: "Do My Assignment Online by Experts | Fast & Reliable Help",
  description:'Need help with assignments? Our experts provide reliable and affordable solutions. Choose Contently Writers to do your assignment online with 100% originality!',
  keywords: "Do my assignment cheap online , Pay someone to do my assignment online , Do my university assignment for me online , Do my assignment helper , Do my assignment online by experts"
};

export default function DomyassignmentLayout({ children }) {
  return (
    <GuestRoute allowAuthenticated={true}>
      <div>
        <Navbar />
        <div className="mt-[80px]">{children}</div>
       
      </div>
    </GuestRoute>
  );
}
