import { Inter } from "next/font/google";
import { AuthProvider } from "@/context/auth";
import "./globals.css";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  Toaster } from "sonner";

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

          {/* Google Tag Manager Script */}
          <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N8KFBB92');
          `}
        </Script>

         {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Corporation",
              "name": "Facio Contently Writers",
              "url": "https://www.contentlywriters.com/",
              "logo": "https://www.contentlywriters.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontently-logo.8714d802.png&w=1920&q=75",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 7727851997",
                "contactType": "customer service",
                "contactOption": "TollFree",
                "areaServed": "IN",
                "availableLanguage": "en",
              },
              "sameAs": [
                "https://www.facebook.com/people/Contently-Writers/pfbid0hDRwA6TSwFzkZQZeTEMNdcWRW1p4TcLrtgXsidvAdvvKFGYm1LL1tPq5hkXgY5Lnl/",
                "https://www.instagram.com/contentlywriters/",
                "https://youtu.be/MIJ1htZSunQ",
                "https://www.linkedin.com/company/facio-contently-writers/",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N8KFBB92"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <AuthProvider>
          {children}
          <Script src="https://checkout.razorpay.com/v1/checkout.js" />
        </AuthProvider>
        
        <Toaster />
        <ToastContainer />
      </body>
    </html>
  );
}
