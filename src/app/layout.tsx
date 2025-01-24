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
        <main>{children}</main>
      </body>
    </html>
  );
}
