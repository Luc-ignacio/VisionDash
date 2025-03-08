import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "VisionDash",
  description: "Your all-in-one dashboard",
};

const inter = Inter({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased bg-gray-100">{children}</body>
    </html>
  );
}
