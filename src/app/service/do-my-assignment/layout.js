import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import GuestRoute from "@/routes/guestRoute";


export const metadata = {
  title: "Assignment Help in London | Professional Writers at Your Service",
  description:'Looking for assignment help in London? Get custom-written assignments from experienced writers. Affordable and trusted by thousands of students.',
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
