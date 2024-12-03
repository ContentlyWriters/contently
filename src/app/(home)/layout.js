import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import GuestRoute from "@/routes/guestRoute";


export const metadata = {
  title: "Expert Content Writing Services Online | Contently Writers",
  description: `Are you looking for top-notch Content Writing Services? Contently connects you with skilled writers who craft original, plagiarism-free content tailored for diverse industries.`,
  keywords: "Best Content writing services , Best Assignment services , Assignment helper , Assignment experts , safeassign , UK , USA",
  alternates: {
    canonical: "https://www.contentlywriters.com" 
  }
};


export default function HomeLayout({ children }) {
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
