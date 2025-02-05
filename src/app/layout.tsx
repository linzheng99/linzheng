import "./globals.css";
import "./prism.css";

import type { Metadata } from "next";
import { Karla } from "next/font/google";

import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "linzheng's",
  description: "linzheng's personal website",
  icons: {
    icon: "/avatar.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${karla.variable} antialiased`}
      >
        <Navbar />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
