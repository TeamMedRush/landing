import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MedRush | Pharmacy Quick-Commerce — Delivered in 15-30 Minutes",
  description:
    "Get all medicines — prescription & OTC — from your nearest pharmacy to your doorstep in 15-30 minutes. Hyperlocal pharmacy delivery with MedRush.",
  keywords: ["pharmacy delivery", "medicine delivery", "quick commerce", "MedRush", "hyperlocal pharmacy"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
