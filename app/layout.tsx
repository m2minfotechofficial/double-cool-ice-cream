import "./globals.css";
import { dmSans, bayon, baloo2, carterOne, hindSiliguri } from "./fonts";

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import SmoothWrapper from "@/components/layouts/SmoothWrapper";
import Loader from "@/components/layouts/Loader";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${bayon.variable} ${baloo2.variable} ${carterOne.variable} ${hindSiliguri.variable} min-h-screen antialiased scroll-smooth touch-manipulation scrollbar-hide `}>


        <Header />
        <Loader />
        <SmoothWrapper >
          <main>
            {children}
          </main>
          <Footer />
        </SmoothWrapper>
      </body>
    </html>
  );
}
