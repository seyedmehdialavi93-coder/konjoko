import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "خرید از آمازون برای ایرانیان — راهنمای کامل ۲۰۲۵ | کنجوکو",
 description: "راهنمای کامل خرید از آمازون برای ایرانیان. نحوه سفارش، پرداخت و ارسال کالا از آمازون به ایران با کنجوکو.",
};

export default function KharidAzAmazon() {
 return (
   <main style={{backgroundColor: "#0a0a0a", minHeight: "100vh", color: "white", direction: "rtl"}}>
     <div style={{maxWidth: "800px", margin: "0 auto", padding: "60px 20px"}}>
       <div style={{marginBottom: "32px"}}>
         <a href="/blog" style={{color: "#60a5fa", textDecoration: "none", fontSize: "0.875rem"}}>بازگشت به وبلاگ</a>
       </div>
       <div style={{backgroundColor: "#1a1a1a", borderRadius: "24px", padding: "48px", border: "1px solid #333"}}>
         <div style={{fontSize: "4rem", marginBottom: "16px"}}>📦</div>
         <p style={{color: "#6b7280", fontSize: "0.875rem", marginBottom: "12px"}}>۱۴۰۴/۳/۶ — کنجوکو</p>
         <h1 style={{fontSize: "2rem", fontWeight: "bold", marginBottom: "32px", lineHeight: "1.4"}}>خرید از آمازون برای ایرانیان — راهنمای کامل ۲۰۲۵</h1>
         <p style={{color: "#d1d5db", lineHeight: "2", marginBottom: "24px"}}>آمازون بزرگترین فروشگاه اینترنتی دنیاست. میلیونها محصول با بهترین قیمت در آمازون موجود است. اما خرید از آمازون برای ایرانیان به دلیل محدودیتهای پرداخت و ارسال همیشه چالش بوده. کنجوکو این مشکل را حل کرده است.</p>
         <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>چرا از آمازون بخریم؟</h2>
         <p style={{color: "#d1d5db", lineHeight: "2", marginBottom: "24px"}}>آمازون بهترین قیمت، بیشترین تنوع و سریعترین ارسال را دارد. از الکترونیک و کتاب گرفته تا لوازم خانگی و پوشاک، همه چیز در آمازون پیدا میشود.</p>
         <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>بهترین کالاها برای خرید از آمازون</h2>
         <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "24px"}}>
           {["لپتاپ، موبایل و الکترونیک", "کتاب و محصولات آموزشی", "لوازم ورزشی و فیتنس", "محصولات آرایشی و بهداشتی", "ابزار و تجهیزات حرفه‌ای", "لوازم خانگی و آشپزخانه"].map((item) => (
             <div key={item} style={{display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderBottom: "1px solid #222"}}>
               <span style={{color: "#22c55e"}}>✓</span>
               <span style={{color: "#d1d5db"}}>{item}</span>
             </div>
           ))}
         </div>
         <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>مراحل خرید از آمازون با کنجوکو</h2>
         <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "24px"}}>
           {["۱. لینک محصول مورد نظر را در آمازون پیدا کنید", "۲. لینک را برای کنجوکو در واتساپ ارسال کنید", "۳. پرداخت ریالی به کنجوکو انجام دهید", "۴. کنجوکو سفارش را ثبت و تا درب منزل ارسال میکند"].map((item) => (
             <div key={item} style={{display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderBottom: "1px solid #222"}}>
               <span style={{color: "#60a5fa"}}>←</span>
               <span style={{color: "#d1d5db"}}>{item}</span>
             </div>
           ))}
         </div>
         <div style={{backgroundColor: "#1e3a5f", borderRadius: "16px", padding: "32px", textAlign: "center", marginTop: "40px"}}>
           <p style={{fontSize: "1.25rem", fontWeight: "bold", marginBottom: "16px"}}>همین الان خرید از آمازون را شروع کنید</p>
           <a href="https://wa.me/971562913000" style={{backgroundColor: "#22c55e", color: "white", padding: "12px 32px", borderRadius: "50px", fontWeight: "bold", textDecoration: "none", display: "inline-block"}}>ارتباط در واتساپ</a>
         </div>
       </div>
     </div>
   </main>
 );
}