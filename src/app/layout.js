import { Inter } from "next/font/google";
import { AuthProvider } from "@/context/auth";
import "./globals.css";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Contently Writers",
  description: "Contently Writers: Excellence within your budget! Offering a wide range of academic content writing services to suit any budget. Join our responsible and responsive community network.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LMDV800CGT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LMDV800CGT');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <Script src="https://checkout.razorpay.com/v1/checkout.js" />
        </AuthProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
