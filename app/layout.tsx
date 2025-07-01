import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Enes Yağmur",
  description: "Kişisel portfolio sitesi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50`}
      >
        <Providers>
          <div className="w-full sm:w-11/12 md:w-10/12 lg:w-9/12 flex flex-col items-center justify-center">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
