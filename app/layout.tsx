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
  title: "کنجوکو | پلتفرم تجارت و پرداخت بین‌المللی",
  description: "کنجوکو به ایرانیان کمک می‌کند تا پرداخت‌های بین‌المللی انجام دهند و کالا از دبی، چین و ترکیه تهیه کنند.",
  keywords: "پرداخت بین‌المللی, خرید از دبی, خرید از چین, حواله ارزی, کنجوکو",
  icons: {
  icon: "/favicon.svg",
},
  openGraph: {
    title: "کنجوکو | پلتفرم تجارت بین‌المللی",
    description: "پرداخت بین‌المللی و خرید کالا از دبی، چین و ترکیه",
    url: "https://konjoko.com",
    siteName: "کنجوکو",
    locale: "fa_IR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
