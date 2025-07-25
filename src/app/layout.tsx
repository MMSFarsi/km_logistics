import type { Metadata } from "next";
import localFont from "next/font/local";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./shared/Navbar";
import Footer from "./components/Footer";

const Satoshi = localFont({
  src: '../fonts/satoshi/Satoshi-Regular.woff2',
})



export const metadata: Metadata = {
  title: "Km Logistics",
  description: "Build a logistics app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${Satoshi.className} antialiased`}
      >
       <div className="max-w-12x px-10  mx-auto">
         <Navbar></Navbar>
        {children}
        <Footer></Footer>
       </div>
        
      </body>
    </html>
  );
}
