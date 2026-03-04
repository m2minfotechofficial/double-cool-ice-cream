import "./globals.css";
import { dmSans, bayon, baloo2, carterOne, hindSiliguri } from "./fonts";

import Header from "../components/layouts/Header";
import Footer from "@/components/layouts/Footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${bayon.variable} ${baloo2.variable} ${carterOne.variable} ${hindSiliguri.variable} min-h-screen antialiased scroll-smooth touch-manipulation`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
