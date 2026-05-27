import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "خدمات تجاری بین‌المللی | کنجوکو",
  description: "خدمات تجاری کامل برای کسب‌وکارها. مدیریت سفارشات، مذاکره با تامینکنندگان و مشاوره واردات و صادرات با کنجوکو.",
};

export default function BusinessLayout({ children }: { children: React.ReactNode }) {
  return children;
}