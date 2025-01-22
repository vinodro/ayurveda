import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="flex justify-content-between justify-between items-center p-4">
          <div>
            <h1>Clinical Trials</h1>
          </div>
          <ul style={{ display: "flex", gap: "10px", listStyleType: "none" }}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/protocols">Protocols</Link>
            </li>
            <li>
              <Link href="/trials">Trials</Link>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
