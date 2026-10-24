import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#E11D48",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "AlphaHousing - Find Safe Housing for Study Abroad",
  description:
    "AI-powered guidance and human support to help students and parents find safe, convenient, and comfortable semester housing abroad.",
  keywords: [
    "study abroad housing",
    "student apartments florence",
    "barcelona student housing",
    "paris semester rooms",
    "rome study abroad",
    "verified student accommodation",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-rose-100 selection:text-rose-900">
        {children}
      </body>
    </html>
  );
}
