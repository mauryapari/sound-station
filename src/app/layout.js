import { Inter } from "next/font/google";
import "./globals.css";
import "../lib/common.js";
import Header from "@/components/headers";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sound Station App",
  description: "Site for an Audiophile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
