import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ثبت درخواست و تماس با کنجوکو | کنجوکو",
  description: "با کنجوکو تماس بگیرید. ثبت درخواست خرید کالا، پرداخت بین‌المللی و خدمات تجاری از طریق واتساپ یا فرم سایت.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}