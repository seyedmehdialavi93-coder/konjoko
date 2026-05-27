import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "حواله درهم برای تجار ایرانی — راهنمای کامل ۲۰۲۵ | کنجوکو",
  description: "راهنمای کامل حواله درهم برای تاجران ایرانی. نحوه ارسال درهم به دبی و بهترین روش پرداخت ارزی با کنجوکو.",
};

export default function HavalehDerham() {
  return (
    <main style={{backgroundColor: "#0a0a0a", minHeight: "100vh", color: "white", direction: "rtl"}}>
      <div style={{maxWidth: "800px", margin: "0 auto", padding: "60px 20px"}}>
        <div style={{marginBottom: "32px"}}>
          <a href="/blog" style={{color: "#60a5fa", textDecoration: "none", fontSize: "0.875rem"}}>بازگشت به وبلاگ</a>
        </div>
        <div style={{backgroundColor: "#1a1a1a", borderRadius: "24px", padding: "48px", border: "1px solid #333"}}>
          <div style={{fontSize: "4rem", marginBottom: "16px"}}>💰</div>
          <p style={{color: "#6b7280", fontSize: "0.875rem", marginBottom: "12px"}}>۱۴۰۴/۳/۶ — کنجوکو</p>
          <h1 style={{fontSize: "2rem", fontWeight: "bold", marginBottom: "32px", lineHeight: "1.4"}}>حواله درهم برای تجار ایرانی — راهنمای کامل ۲۰۲۵</h1>
          <p style={{color: "#d1d5db", lineHeight: "2", marginBottom: "24px"}}>اگه با تاجران دبی کار میکنید، احتمالا با مشکل پرداخت درهم روبرو شدید. کنجوکو این مشکل رو برای همیشه حل کرده.</p>
          <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>حواله درهم چیست؟</h2>
          <p style={{color: "#d1d5db", lineHeight: "2", marginBottom: "24px"}}>حواله درهم یعنی تبدیل ریال به درهم امارات و ارسال آن به حساب بانکی یا فروشنده در دبی.</p>
          <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>چه زمانی به حواله درهم نیاز داری؟</h2>
          <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "24px"}}>
            {["خرید کالا از فروشندگان دبی", "پرداخت به شرکتهای لجستیک اماراتی", "خرید از بازارهای عمده دبی", "پرداخت هزینه انبارداری در دبی", "خرید از سایتهای اماراتی مثل Noon", "پرداخت حقوق کارمندان مقیم دبی"].map((item) => (
              <div key={item} style={{display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderBottom: "1px solid #222"}}>
                <span style={{color: "#22c55e"}}>✓</span>
                <span style={{color: "#d1d5db"}}>{item}</span>
              </div>
            ))}
          </div>
          <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>مراحل حواله درهم با کنجوکو</h2>
          <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "24px"}}>
            {["۱. مبلغ مورد نیاز به درهم رو اعلام کنید", "۲. اطلاعات گیرنده در دبی رو بفرستید", "۳. معادل ریالی رو به کنجوکو پرداخت کنید", "۴. کنجوکو ظرف ۲۴ ساعت حواله رو انجام میده", "۵. رسید پرداخت برای شما ارسال میشه"].map((item) => (
              <div key={item} style={{display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderBottom: "1px solid #222"}}>
                <span style={{color: "#60a5fa"}}>←</span>
                <span style={{color: "#d1d5db"}}>{item}</span>
              </div>
            ))}
          </div>
          <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>مزایای حواله درهم با کنجوکو</h2>
          <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "24px"}}>
            {["بهترین نرخ تبدیل ریال به درهم", "تحویل سریع ظرف ۲۴ ساعت", "بدون نیاز به حساب بانکی خارجی", "پشتیبانی ۲۴ ساعته واتساپ", "امنیت کامل تراکنش‌ها"].map((item) => (
              <div key={item} style={{display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderBottom: "1px solid #222"}}>
                <span style={{color: "#22c55e"}}>✓</span>
                <span style={{color: "#d1d5db"}}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "32px"}}>
            <p style={{color: "#94a3b8", marginBottom: "16px", fontSize: "0.9rem"}}>مقالات مرتبط:</p>
            <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
              <a href="/blog/havaleh-arzi" style={{color: "#60a5fa", textDecoration: "none"}}>← حواله ارزی چیست؟</a>
              <a href="/blog/pardakht-beinalmelli" style={{color: "#60a5fa", textDecoration: "none"}}>← راهنمای پرداخت بین‌المللی</a>
              <a href="/blog/kharid-az-dubai" style={{color: "#60a5fa", textDecoration: "none"}}>← چطور از دبی خرید کنیم؟</a>
            </div>
          </div>
          <div style={{backgroundColor: "#1e3a5f", borderRadius: "16px", padding: "32px", textAlign: "center", marginTop: "40px"}}>
            <p style={{fontSize: "1.25rem", fontWeight: "bold", marginBottom: "16px"}}>همین الان حواله درهم رو شروع کن</p>
            <a href="https://wa.me/971562913000" style={{backgroundColor: "#22c55e", color: "white", padding: "12px 32px", borderRadius: "50px", fontWeight: "bold", textDecoration: "none", display: "inline-block"}}>ارتباط در واتساپ</a>
          </div>
        </div>
      </div>
    </main>
  );
}