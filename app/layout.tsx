import "./globals.css";
import { dmSans, bayon, baloo2, carterOne, anekBangla } from "./fonts";

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import SmoothWrapper from "@/components/layouts/SmoothWrapper";
import Loader from "@/components/layouts/Loader";
import { SpeedInsights } from "@vercel/speed-insights/next";
import TransitionProviders from "@/providers/TransitionProviders";
import Head from "next/head";
import Script from "next/script";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Google tag (gtag.js)  */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-X8X19F44KN"></Script>
        <Script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-X8X19F44KN');`}
        </Script>
      </Head>
      <body suppressHydrationWarning className={`${dmSans.variable} ${bayon.variable} ${baloo2.variable} ${carterOne.variable} ${anekBangla.variable} min-h-screen antialiased scroll-smooth touch-manipulation scrollbar-hide `}>
        <TransitionProviders>
          <Header />
          <Loader />
          <SmoothWrapper >
            <main>
              {children}
            </main>
            <Footer />
          </SmoothWrapper>
        </TransitionProviders>
        <SpeedInsights />
      </body>
    </html>
  );
}
