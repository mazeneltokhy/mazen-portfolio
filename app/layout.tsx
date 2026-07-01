import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mazen Eltokhy | Frontend Developer",
  description:
    "Frontend Developer specializing in React, Next.js, TypeScript, and Tailwind CSS. Explore my projects, experience, and portfolio.",

  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "JavaScript",
    "Portfolio",
    "Mazen Eltokhy",
  ],

  authors: [{ name: "Mazen Eltokhy" }],

  creator: "Mazen Eltokhy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}