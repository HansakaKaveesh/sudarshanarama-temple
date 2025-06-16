import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // ← add this line

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sri Sudarshanarama Purana Maha Viharaya - Kalapaluwawa",
  description: "ශ්‍රී සුදර්ශනාරාම පුරාණ මහා විහාරය - කලපලුවාව",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Sinhala&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
       <Navbar /> 
        {children}
      <Footer /> 
        <ScrollToTop /> {/* ← add this line */}
      </body>
    </html>
  );
}
