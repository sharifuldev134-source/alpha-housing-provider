import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ProvidersWrapper } from "@/components/ProvidersWrapper";
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              try {
                var t = localStorage.getItem("alpha_theme");
                var isDark = t === "dark" || (!t && window.matchMedia("(prefers-color-scheme: dark)").matches);
                if (isDark) {
                  document.documentElement.classList.add("dark");
                  document.documentElement.setAttribute("data-theme", "dark");
                  document.documentElement.style.colorScheme = "dark";
                } else {
                  document.documentElement.classList.remove("dark");
                  document.documentElement.removeAttribute("data-theme");
                  document.documentElement.style.colorScheme = "light";
                }
              } catch(e) {}
            })()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-[#070C18] text-slate-900 dark:text-slate-100 selection:bg-rose-100 selection:text-rose-900 font-sans transition-colors duration-200">
        <ProvidersWrapper>{children}</ProvidersWrapper>
      </body>
    </html>
  );
}
