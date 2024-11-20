import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import GuestRoute from "@/routes/guestRoute";


export const metadata = {
  title: "Assignment Help in London | Professional Writers at Your Service",
  description:'Looking for assignment help in London? Get custom-written assignments from experienced writers. Affordable and trusted by thousands of students.',
  keywords: "assignment help in London , assignment writing help in London , best assignment helper in London , London assignment help services , Professional assignment Writers London , Top assignment help in London , Affordable assignment writing London "
};

export default function DomyassignmentLayout({ children }) {
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
