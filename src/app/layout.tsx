import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";
import { MainHeader } from "@/components/MainHeader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff2",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff2",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "French Learning App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
