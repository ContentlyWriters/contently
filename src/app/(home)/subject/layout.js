import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import GuestRoute from "@/routes/guestRoute";

export const metadata = {
  title: " Expert Assignment Help for Various Subjects | Contently Writers",
  description: `Unlock the potential of your projects with our versatile writing services. Find skilled writers across diverse subjects for engaging content solutions`,
};



export default function ServiceLayout({ children }) {
  return <div>{children}</div>;
}