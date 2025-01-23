import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderNavigator from "@/components/HeaderNavigator";

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
        <nav className="flex justify-content-between justify-between items-center p-2 pl-4 shadow-7">
          <div>
            <h1 className={"title-ayurveda-logo"}>Ayurveda</h1>
            {/* <Image src={ayurveda_logo} alt="logo" className="w-10 h-10" /> */}
          </div>
          <HeaderNavigator />
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
