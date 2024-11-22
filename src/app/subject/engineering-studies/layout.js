import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import GuestRoute from "@/routes/guestRoute";


export const metadata = {
  title: "Top-Quality Engineering Assignment Help for Students",
  description:'Need reliable engineering assignment help? Get expert support in civil, electrical, software, and more. Timely delivery and plagiarism-free work are guaranteed!',
  keywords: "engineering assignment help , Civil engineering assignment help ,software engineering assignment help , help with biomedical engineering assignments , Electrical engineering assignment help, expert Aerospace Engineering Assignment Help"
};

export default function EngineeringLayout({ children }) {
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
