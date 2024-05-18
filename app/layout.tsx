import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Toaster } from "@/components/ui/toaster";

const inter = Open_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chácara Gaia",
  description:
    "Chácara Gaia is a website dedicated to promoting ecotourism and offering seasonal rentals at a charming countryside farm in Brazil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
