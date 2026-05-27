import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "چطور تامین‌کننده معتبر در چین پیدا کنیم؟ | کنجوکو",
 description: "راهنمای کامل پیدا کردن تامین‌کننده معتبر در چین برای تاجران ایرانی. بهترین سایت‌ها، روش‌های تایید اعتبار و نکات مهم.",
};

export default function TaminKonandeChin() {
 return (
   <main style={{backgroundColor: "#0a0a0a", minHeight: "100vh", color: "white", direction: "rtl"}}>
     <div style={{maxWidth: "800px", margin: "0 auto", padding: "60px 20px"}}>
       <div style={{marginBottom: "32px"}}>
         <a href="/blog" style={{color: "#60a5fa", textDecoration: "none", fontSize: "0.875rem"}}>بازگشت به وبلاگ</a>
       </div>
       <div style={{backgroundColor: "#1a1a1a", borderRadius: "24px", padding: "48px", border: "1px solid #333"}}>
         <div style={{fontSize: "4rem", marginBottom: "16px"}}>🔍</div>
         <p style={{color: "#6b7280", fontSize: "0.875rem", marginBottom: "12px"}}>۱۴۰۴/۳/۶ — کنجوکو</p>
         <h1 style={{fontSize: "2rem", fontWeight: "bold", marginBottom: "32px", lineHeight: "1.4"}}>چطور تامین‌کننده معتبر در چین پیدا کنیم؟</h1>

         <p style={{color: "#d1d5db", lineHeight: "2", marginBottom: "24px"}}>یکی از بزرگترین چالشهای تاجران ایرانی برای خرید از چین، پیدا کردن تامین‌کننده معتبر و قابل اعتماده. بازار چین پر از فروشندگان مختلفه و تشخیص معتبر از نامعتبر کار آسانی نیست. در این مقاله همه چیز رو بهتون میگیم.</p>

         <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>بهترین سایت‌ها برای پیدا کردن تامین‌کننده چینی</h2>
         <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "24px"}}>
           {[
             {name: "Alibaba.com", desc: "بزرگترین پلتفرم B2B دنیا - مناسب خرید عمده"},
             {name: "1688.com", desc: "نسخه چینی علیبابا - قیمت مستقیم کارخانه"},
             {name: "Made-in-China.com", desc: "تخصصی برای خریداران بین‌المللی"},
             {name: "Global Sources", desc: "تامین‌کنندگان تایید شده با کیفیت بالا"},
           ].map((item) => (
             <div key={item.name} style={{padding: "12px 0", borderBottom: "1px solid #222"}}>
               <p style={{color: "white", fontWeight: "bold", marginBottom: "4px"}}>{item.name}</p>
               <p style={{color: "#94a3b8", fontSize: "0.9rem"}}>{item.desc}</p>
             </div>
           ))}
         </div>

         <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>چطور اعتبار تامین‌کننده رو بررسی کنیم؟</h2>
         <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "24px"}}>
           {["بررسی سابقه و سال تاسیس شرکت", "خواندن نظرات مشتریان قبلی", "درخواست نمونه قبل از خرید عمده", "بررسی گواهینامه‌های کیفیت مثل ISO", "تماس مستقیم با کارخانه", "درخواست بازدید ویدیویی از خط تولید"].map((item) => (
             <div key={item} style={{display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderBottom: "1px solid #222"}}>
               <span style={{color: "#22c55e"}}>✓</span>
               <span style={{color: "#d1d5db"}}>{item}</span>
             </div>
           ))}
         </div>

         <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>علائم هشدار - از این تامین‌کنندگان دوری کن</h2>
         <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "24px"}}>
           {["قیمت خیلی پایین‌تر از بازار", "عدم ارائه نمونه", "فشار برای پرداخت کامل قبل از ارسال", "نداشتن آدرس و اطلاعات تماس واضح", "ع