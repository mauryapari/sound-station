import { Inter } from "next/font/google";
import "./globals.css";
import "../lib/common.js";
import Header from "@/components/headers";
import Footer from "@/components/footer";
import {GlobalProvider } from "@/context/globalContext";
import { Toaster } from "@/components/ui/sonner"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sound Station App",
  description: "Site for an Audiophile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position="bottom-center" richColors theme='light'/>
        </GlobalProvider>
      </body>
    </html>
  );
}
