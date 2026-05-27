import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "پرداخت ارزی و حواله بین‌المللی | کنجوکو",
  description: "پرداخت بین‌المللی برای ایرانیان با کنجوکو. حواله دلار و درهم، پرداخت به فروشندگان خارجی با سرعت و امنیت کامل.",
};

export default function PaymentLayout({ children }: { children: React.ReactNode }) {
  return children;
}