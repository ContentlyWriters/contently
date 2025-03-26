import * as React from "react";
import GuestRoute from "@/routes/guestRoute";
import Head from "next/head";

export default function AuthLayout({ children }) {
    return (
        <GuestRoute>
            <Head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        function gtag_report_conversion(url) {
                          var callback = function () {
                            if (typeof(url) != 'undefined') {
                              window.location = url;
                            }
                          };
                          gtag('event', 'conversion', {
                              'send_to': 'AW-16922676384/J1deCKz2jbAaEKCZroU_',
                              'event_callback': callback
                          });
                          return false;
                        }
                        `,
                    }}
                />
            </Head>
            <div className="h-screen w-screen bg-color_four p-5">
                {children}
            
            </div>
        </GuestRoute>
    );
}