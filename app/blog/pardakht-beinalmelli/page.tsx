import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "راهنمای پرداخت بین‌المللی برای ایرانیان ۲۰۲۵ | کنجوکو",
 description: "راهنمای کامل پرداخت بین‌المللی برای ایرانیان. خرید از آمازون، علی‌بابا و پرداخت دلاری و درهمی با کنجوکو آسان شد.",
};

export default function PardakhtBeinalmelli() {
 return (
   <main style={{backgroundColor: "#0a0a0a", minHeight: "100vh", color: "white", direction: "rtl"}}>
     <div style={{maxWidth: "800px", margin: "0 auto", padding: "60px 20px"}}>
       <div style={{marginBottom: "32px"}}>
         <a href="/blog" style={{color: "#60a5fa", textDecoration: "none", fontSize: "0.875rem"}}>بازگشت به وبلاگ</a>
       </div>
       <div style={{backgroundColor: "#1a1a1a", borderRadius: "24px", padding: "48px", border: "1px solid #333"}}>
         <div style={{fontSize: "4rem", marginBottom: "16px"}}>💳</div>
         <p style={{color: "#6b7280", fontSize: "0.875rem", marginBottom: "12px"}}>۱۴۰۴/۳/۶ — کنجوکو</p>
         <h1 style={{fontSize: "2rem", fontWeight: "bold", marginBottom: "32px", lineHeight: "1.4"}}>راهنمای پرداخت بین‌المللی برای ایرانیان</h1>
         <p style={{color: "#d1d5db", lineHeight: "2", marginBottom: "24px"}}>پرداخت بین‌المللی یکی از چالش‌های اصلی ایرانیان برای خرید از سایت‌های خارجی است. با کنجوکو این مشکل برای همیشه حل شده است.</p>
         <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>چرا پرداخت بین‌المللی سخت است؟</h2>
         <p style={{color: "#d1d5db", lineHeight: "2", marginBottom: "24px"}}>به دلیل محدودیت‌های بانکی، کارت‌های اعتباری ایرانی در اکثر سایت‌های خارجی پذیرفته نمی‌شوند. این موضوع خرید از آمازون، علی‌بابا و سایر فروشگاه‌های بین‌المللی را دشوار می‌کند.</p>
         <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>کنجوکو چطور کمک می‌کند؟</h2>
         <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "24px"}}>
           {["پرداخت به فروشندگان دبی، چین و ترکیه", "پرداخت به سایت‌های بین‌المللی", "خرید از آمازون و علی‌بابا", "پرداخت دلاری و درهمی", "گزارش‌دهی شفاف تمام تراکنش‌ها"].map((item) => (
             <div key={item} style={{display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderBottom: "1px solid #222"}}>
               <span style={{color: "#22c55e"}}>✓</span>
               <span style={{color: "#d1d5db"}}>{item}</span>
             </div>
           ))}
         </div>
         <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>مراحل پرداخت با کنجوکو</h2>
         <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "24px"}}>
           {["۱. درخواست خود را از طریق واتساپ ثبت کنید", "۲. مبلغ و جزئیات پرداخت را اعلام کنید", "۳. پرداخت ریالی به کنجوکو انجام دهید", "۴. کنجوکو پرداخت بین‌المللی را انجام می‌دهد"].map((item) => (
             <div key={item} style={{display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderBottom: "1px solid #222"}}>
               <span style={{color: "#60a5fa"}}>←</span>
               <span style={{color: "#d1d5db"}}>{item}</span>
             </div>
           ))}
         </div>
         <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "32px"}}>
           <p style={{color: "#94a3b8", marginBottom: "16px", fontSize: "0.9rem"}}>مقالات مرتبط:</p>
           <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
             <a href="/blog/havaleh-arzi" style={{color: "#60a5fa", textDecoration: "none"}}>← حواله ارزی چیست و چطور کار میکنه؟</a>
             <a href="/blog/kharid-az-dubai" style={{color: "#60a5fa", textDecoration: "none"}}>← چطور از دبی خرید کنیم؟</a>
             <a href="/blog/kharid-az-amazon" style={{color: "#60a5fa", textDecoration: "none"}}>← خرید از آمازون برای ایرانیان</a>
           </div>
         </div>
         <div style={{backgroundColor: "#1e3a5f", borderRadius: "16px", padding: "32px", textAlign: "center", marginTop: "40px"}}>
           <p style={{fontSize: "1.25rem", fontWeight: "bold", marginBottom: "16px"}}>همین الان پرداخت بین‌المللی را شروع کنید</p>
           <a href="https://wa.me/971562913000" style={{backgroundColor: "#22c55e", color: "white", padding: "12px 32px", borderRadius: "50px", fontWeight: "bold", textDecoration: "none", display: "inline-block"}}>ارتباط در واتساپ</a>
         </div>
       </div>
     </div>
   </main>
 );
}