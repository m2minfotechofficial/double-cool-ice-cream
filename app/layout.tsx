import "./globals.css";
import { dmSans, bayon, baloo2 } from "./fonts";
import Header from "../components/layouts/Header";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${bayon.variable} ${baloo2.variable} min-h-screen antialiased scroll-smooth touch-manipulation`}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
