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

        {/* Review Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Contently Writers - Assignment Writing Service",
              description:
                "Get expert academic writing help. High-quality, plagiarism-free, and delivered on time!",
              provider: {
                "@type": "Organization",
                name: "Contently Writers",
                url: "https://contentlywriters.com",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.7",
                reviewCount: "112",
              },
              review: [
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Charlotte R." },
                  location: "London, UK",
                  reviewBody:
                    "I was having difficulty with my dissertation, but their skilled writers provided excellent support. The quality and attention to detail were remarkable. I highly recommend their services!",
                  reviewRating: { "@type": "Rating", ratingValue: "5" },
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Liam H." },
                  location: "Melbourne, Australia",
                  reviewBody:
                    "Highly professional and reliable. They saved me so much time, and my grades have never been better. Thank you!",
                  reviewRating: { "@type": "Rating", ratingValue: "4.8" },
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Emily W." },
                  location: "Sydney, Australia",
                  reviewBody:
                    "Exceptional service! The team truly grasped my requirements and delivered a flawlessly written assignment. This will definitely be my first choice for future projects.",
                  reviewRating: { "@type": "Rating", ratingValue: "5" },
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "James K." },
                  location: "New York, USA",
                  reviewBody:
                    "A great experience from start to finish. My essay was excellently written and delivered on time. I couldn't have asked for anything more.",
                  reviewRating: { "@type": "Rating", ratingValue: "4.7" },
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Sarah M." },
                  location: "California, USA",
                  reviewBody:
                    "Absolutely fantastic service! They assisted me with my research paper, and the quality was outstanding. I highly recommend them to any student in need of writing help.",
                  reviewRating: { "@type": "Rating", ratingValue: "5" },
                },
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
