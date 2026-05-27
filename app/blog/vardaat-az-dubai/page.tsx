import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "راهنمای واردات کالا از دبی — ۲۰۲۵ | کنجوکو",
 description: "راهنمای کامل واردات کالا از دبی برای ایرانیان. مراحل ترخیص، هزینه‌ها و روش واردات مطمئن با کنجوکو.",
};

export default function VardaatAzDubai() {
 return (
   <main style={{backgroundColor: "#0a0a0a", minHeight: "100vh", color: "white", direction: "rtl"}}>
     <div style={{maxWidth: "800px", margin: "0 auto", padding: "60px 20px"}}>
       <div style={{marginBottom: "32px"}}>
         <a href="/blog" style={{color: "#60a5fa", textDecoration: "none", fontSize: "0.875rem"}}>بازگشت به وبلاگ</a>
       </div>
       <div style={{backgroundColor: "#1a1a1a", borderRadius: "24px", padding: "48px", border: "1px solid #333"}}>
         <div style={{fontSize: "4rem", marginBottom: "16px"}}>🚢</div>
         <p style={{color: "#6b7280", fontSize: "0.875rem", marginBottom: "12px"}}>۱۴۰۴/۳/۶ — کنجوکو</p>
         <h1 style={{fontSize: "2rem", fontWeight: "bold", marginBottom: "32px", lineHeight: "1.4"}}>راهنمای واردات کالا از دبی — ۲۰۲۵</h1>
         <p style={{color: "#d1d5db", lineHeight: "2", marginBottom: "24px"}}>دبی یکی از مهمترین هاب‌های تجاری جهان است. هر ساله میلیاردها دلار کالا از دبی به کشورهای مختلف از جمله ایران وارد میشود. اما فرآیند واردات پیچیدگیهای خاص خودش را دارد.</p>
         <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>چرا واردات از دبی؟</h2>
         <p style={{color: "#d1d5db", lineHeight: "2", marginBottom: "24px"}}>دبی به عنوان یک منطقه آزاد تجاری، مالیات صفر و زیرساخت لجستیک فوق‌العاده‌ای دارد. کالاهای وارداتی از سراسر جهان در دبی جمع میشوند و از آنجا به ایران ارسال میگردند.</p>
         <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>کالاهای پرطرفدار برای واردات از دبی</h2>
         <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "24px"}}>
           {["الکترونیک و موبایل", "طلا و جواهرات", "لوازم آرایشی و بهداشتی برندهای معتبر", "ماشین آلات و تجهیزات صنعتی", "مواد اولیه تجاری", "خودرو و قطعات یدکی"].map((item) => (
             <div key={item} style={{display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderBottom: "1px solid #222"}}>
               <span style={{color: "#22c55e"}}>✓</span>
               <span style={{color: "#d1d5db"}}>{item}</span>
             </div>
           ))}
         </div>
         <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>مراحل واردات با کنجوکو</h2>
         <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "24px"}}>
           {["۱. نوع و مقدار کالای مورد نیاز را اعلام کنید", "۲. کنجوکو بهترین فروشنده را در دبی پیدا میکند", "۳. پرداخت ارزی توسط کنجوکو انجام میشود", "۴. کالا بازرسی و بسته بندی میشود", "۵. ارسال و ترخیص تا تحویل درب منزل"].map((item) => (
             <div key={item} style={{display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderBottom: "1px solid #222"}}>
               <span style={{color: "#60a5fa"}}>←</span>
               <span style={{color: "#d1d5db"}}>{item}</span>
             </div>
           ))}
         </div>
         <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "32px"}}>
           <p style={{color: "#94a3b8", marginBottom: "16px", fontSize: "0.9rem"}}>مقالات مرتبط:</p>
           <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
             <a href="/blog/kharid-az-dubai" style={{color: "#60a5fa", textDecoration: "none"}}>← چطور از دبی خرید کنیم؟</a>
             <a href="/blog/havaleh-arzi" style={{color: "#60a5fa", textDecoration: "none"}}>← حواله ارزی چیست و چطور کار میکنه؟</a>
             <a href="/blog/pardakht-beinalmelli" style={{color: "#60a5fa", textDecoration: "none"}}>← راهنمای پرداخت بین‌المللی برای ایرانیان</a>
           </div>
         </div>
         <div style={{backgroundColor: "#1e3a5f", borderRadius: "16px", padding: "32px", textAlign: "center", marginTop: "40px"}}>
           <p style={{fontSize: "1.25rem", fontWeight: "bold", marginBottom: "16px"}}>همین الان واردات از دبی را شروع کنید</p>
           <a href="https://wa.me/971562913000" style={{backgroundColor: "#22c55e", color: "white", padding: "12px 32px", borderRadius: "50px", fontWeight: "bold", textDecoration: "none", display: "inline-block"}}>ارتباط در واتساپ</a>
         </div>
       </div>
     </div>
   </main>
 );
}