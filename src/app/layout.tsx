import type { Metadata } from "next";
import localFont from "next/font/local";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./shared/Navbar";
import Footer from "./components/Footer";

const Satoshi = localFont({
  src: '../../public/fonts/Satoshi/Satoshi-Regular.woff2',
})


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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
