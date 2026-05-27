import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
 description: "کنجوکو به ایرانیان کمک می‌کند تا پرداختهای بین‌المللی انجام دهند و کالا از دبی، چین و ترکیه تهیه کنند.",
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
   images: [
     {
       url: "https://i.ibb.co/VWvzd8Xt/konjoko-character-png.jpg",
       width: 800,
       height: 600,
       alt: "کنجوکو - پلتفرم تجارت بین‌المللی",
     },
   ],
 },
 twitter: {
   card: "summary_large_image",
   title: "کنجوکو | پلتفرم تجارت بین‌المللی",
   description: "پرداخت بین‌المللی و خرید کالا از دبی، چین و ترکیه",
   images: ["https://i.ibb.co/VWvzd8Xt/konjoko-character-png.jpg"],
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
     <head>
       <meta name="google-site-verification" content="Uc-LtqEL8GEvlcyb6Knp85SrrFn5DmzCV0GGzE" />
     </head>
     <Script src="https://www.googletagmanager.com/gtag/js?id=G-FVF9D10XEG" strategy="afterInteractive" />
     <Script id="google-analytics" strategy="afterInteractive">
       {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', 'G-FVF9D10XEG');
       `}
     </Script>
     <body className="min-h-full flex flex-col">{children}</body>
   </html>
 );
}