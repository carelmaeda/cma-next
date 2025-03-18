import Script from "next/script";
import Footer from "./components/partials/Footer";
import Navbar from "./components/partials/Navbar";
import ClientWrapper from "./components/partials/ClientWrapper";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar />
        <ClientWrapper>
          {children}
        </ClientWrapper>
        <Footer />
      </body>
    </html>
  );
}
