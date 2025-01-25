"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderNavigator from "@/components/HeaderNavigator";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="flex justify-content-between justify-between items-center p-2 pl-4 shadow-7">
          <div>
            <h1 className={"title-ayurveda-logo"}>Ayurveda</h1>
            {/* <Image src={ayurveda_logo} alt="logo" className="w-10 h-10" /> */}
          </div>
          <div className="flex gap-4">
            {/* <HeaderNavigator /> */}

            <Button
              label="Home"
              icon="pi pi-arrow-right"
              className="p-button-primary"
              onClick={() => router.push("/")}
            />
            <Button
              label="Protocols"
              icon="pi pi-arrow-right"
              className="p-button-primary"
              onClick={() => router.push("/protocols")}
            />
            <Button
              label="Trials"
              icon="pi pi-arrow-right"
              className="p-button-success"
              onClick={() => router.push("/trials")}
            />
          </div>
        </nav>
        <main className="pb-20">{children}</main>
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
