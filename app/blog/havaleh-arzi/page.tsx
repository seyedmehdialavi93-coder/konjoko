import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "حواله ارزی چیست و چطور کار میکنه؟ | کنجوکو",
  description: "راهنمای کامل حواله ارزی برای ایرانیان. نحوه ارسال و دریافت پول بین المللی، هزینه ها و روش انجام حواله با کنجوکو.",
};

export default function HavalehArzi() {
  return (
    <main style={{backgroundColor: "#0a0a0a", minHeight: "100vh", color: "white", direction: "rtl"}}>
      <div style={{maxWidth: "800px", margin: "0 auto", padding: "60px 20px"}}>
        <div style={{marginBottom: "32px"}}>
          <a href="/blog" style={{color: "#60a5fa", textDecoration: "none", fontSize: "0.875rem"}}>بازگشت به وبلاگ</a>
        </div>
        <div style={{backgroundColor: "#1a1a1a", borderRadius: "24px", padding: "48px", border: "1px solid #333"}}>
          <div style={{fontSize: "4rem", marginBottom: "16px"}}>💱</div>
          <p style={{color: "#6b7280", fontSize: "0.875rem", marginBottom: "12px"}}>۱۴۰۴/۳/۶ — کنجوکو</p>
          <h1 style={{fontSize: "2rem", fontWeight: "bold", marginBottom: "32px", lineHeight: "1.4"}}>حواله ارزی چیست و چطور کار میکنه؟</h1>
          <p style={{color: "#d1d5db", lineHeight: "2", marginBottom: "24px"}}>حواله ارزی روشی برای انتقال پول به خارج از کشور است. برای ایرانیانی که نیاز به پرداخت بین المللی دارند، حواله ارزی یکی از مهمترین ابزارهاست.</p>
          <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>حواله ارزی چیست؟</h2>
          <p style={{color: "#d1d5db", lineHeight: "2", marginBottom: "24px"}}>حواله ارزی یعنی انتقال مبلغی از یک ارز به ارز دیگر و ارسال آن به حساب بانکی یا کیف پول در کشور مقصد. این روش برای پرداخت به فروشندگان خارجی، واردات کالا و خدمات بین المللی استفاده میشود.</p>
          <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>کاربردهای حواله ارزی</h2>
          <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "24px"}}>
            {["پرداخت به فروشندگان دبی، چین و ترکیه", "واردات کالا و تجهیزات تجاری", "پرداخت هزینه تحصیل در خارج", "ارسال پول به اقوام خارج از کشور", "پرداخت هزینه خدمات آنلاین بین المللی", "سرمایه گذاری در بازارهای خارجی"].map((item) => (
              <div key={item} style={{display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderBottom: "1px solid #222"}}>
                <span style={{color: "#22c55e"}}>✓</span>
                <span style={{color: "#d1d5db"}}>{item}</span>
              </div>
            ))}
          </div>
          <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>مراحل حواله ارزی با کنجوکو</h2>
          <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "24px"}}>
            {["۱. درخواست خود را از طریق واتساپ ثبت کنید", "۲. مبلغ و مقصد حواله را اعلام کنید", "۳. پرداخت ریالی به کنجوکو انجام دهید", "۴. کنجوکو حواله را در کمترین زمان انجام میدهد"].map((item) => (
              <div key={item} style={{display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderBottom: "1px solid #222"}}>
                <span style={{color: "#60a5fa"}}>←</span>
                <span style={{color: "#d1d5db"}}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{backgroundColor: "#1e3a5f", borderRadius: "16px", padding: "32px", textAlign: "center", marginTop: "40px"}}>
            <p style={{fontSize: "1.25rem", fontWeight: "bold", marginBottom: "16px"}}>همین الان حواله ارزی را شروع کنید</p>
            <a href="https://wa.me/971562913000" style={{backgroundColor: "#22c55e", color: "white", padding: "12px 32px", borderRadius: "50px", fontWeight: "bold", textDecoration: "none", display: "inline-block"}}>ارتباط در واتساپ</a>
          </div>
        </div>
      </div>
    </main>
  );
}