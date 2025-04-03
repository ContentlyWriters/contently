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

          <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Contently Writers - Assignment Writing Service",
              description:
                "Get expert academic writing help. High-quality, plagiarism-free, and delivered on time!",
              
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "25",
              },
              review: [
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Charlotte R." },
                  reviewBody:
                    "I was having difficulty with my dissertation, but their skilled writers provided excellent support. The quality and attention to detail were remarkable. I highly recommend their services!",
                  reviewRating: { "@type": "Rating", ratingValue: "5" },
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Liam H." },
                  reviewBody:
                    "Highly professional and reliable. They saved me so much time, and my grades have never been better. Thank you!",
                  reviewRating: { "@type": "Rating", ratingValue: "4.8" },
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Emily W." },
                  reviewBody:
                    "Exceptional service! The team truly grasped my requirements and delivered a flawlessly written assignment. This will definitely be my first choice for future projects.",
                  reviewRating: { "@type": "Rating", ratingValue: "5" },
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "James K." },
                  reviewBody:
                    "A great experience from start to finish. My essay was excellently written and delivered on time. I couldn't have asked for anything more.",
                  reviewRating: { "@type": "Rating", ratingValue: "4.7" },
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Sarah M." },
                  reviewBody:
                    "Absolutely fantastic service! They assisted me with my research paper, and the quality was outstanding. I highly recommend them to any student in need of writing help.",
                  reviewRating: { "@type": "Rating", ratingValue: "5" },
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Arlo Smith" },
                  reviewBody:
                    "The writer assigned to my project was exceptionally knowledgeable and provided detailed, well-reasoned content. The entire process was smooth and stress-free.",
                  reviewRating: { "@type": "Rating", ratingValue: "4.8" },
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Henry Brown" },
                  reviewBody:
                    "My assignments were delivered on time and fulfilled all requirements. This service has been incredibly helpful during my busy semester.",
                  reviewRating: { "@type": "Rating", ratingValue: "4.7" },
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Oliver B." },
                  reviewBody:
                    "Outstanding service! The writers are both knowledgeable and approachable. My essay surpassed all my expectations. I will definitely use their services again.",
                  reviewRating: { "@type": "Rating", ratingValue: "5" },
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Daniel C." },
                  reviewBody:
                    "The service was quick and efficient. My research paper was well-structured and met all the requirements.",
                  reviewRating: { "@type": "Rating", ratingValue: "4.7" },
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Sophia M." },
                  reviewBody:
                    "Great experience! The writer understood my topic well and delivered an excellent paper.",
                  reviewRating: { "@type": "Rating", ratingValue: "5" },
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Ethan L." },
                  reviewBody:
                    "Timely submission and well-researched content. Helped me a lot in my coursework!",
                  reviewRating: { "@type": "Rating", ratingValue: "4.8" },
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Amelia B." },
                  reviewBody:
                    "The essay was well-written and formatted correctly. Customer support was also very responsive.",
                  reviewRating: { "@type": "Rating", ratingValue: "4.6" },
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "William T." },
                  reviewBody:
                    "Impressive work! The plagiarism report provided assured me of originality.",
                  reviewRating: { "@type": "Rating", ratingValue: "5" },
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Lucas G." },
                  reviewBody:
                    "I was unsure at first, but their service exceeded my expectations. Will use again!",
                  reviewRating: { "@type": "Rating", ratingValue: "4.9" },
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Olivia P." },
                  reviewBody:
                    "Detailed analysis and excellent research work. This was exactly what I needed.",
                  reviewRating: { "@type": "Rating", ratingValue: "4.8" },
                }
              ]
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
