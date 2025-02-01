"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderNavigator from "@/components/HeaderNavigator";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen flex flex-col`}
      >
        <nav className="fixed top-0 w-full flex justify-content-between justify-between items-center p-2 pl-4 shadow-7 z-50 bg-white flex-col-md">
          <div className="flex items-center p-3">
            <Link
              href="/"
              className="title-ayurveda-logo select-none cursor-pointer text-5xl font-bold no-underline text-gray-800"
              style={{ userSelect: "none", WebkitUserSelect: "none" }}
            >
              Ayurveda
            </Link>
          </div>
          <HeaderNavigator />
        </nav>
        <main className="flex-1 overflow-y-auto mt-[96px] pb-20">
          {children}
        </main>
        <footer className="fixed bottom-0 w-full bg-gray-800 text-white p-3 z-50">
          <div className="flex justify-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <i className="pi pi-linkedin text-2xl"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <i className="pi pi-twitter text-2xl"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors"
            >
              <i className="pi pi-instagram text-2xl"></i>
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
