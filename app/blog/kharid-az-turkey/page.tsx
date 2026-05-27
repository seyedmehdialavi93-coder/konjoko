import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "خرید از ترکیه — راهنمای کامل ۲۰۲۵ | کنجوکو",
 description: "راهنمای کامل خرید از ترکیه برای ایرانیان. بهترین کالاها، بازارها و روش خرید مطمئن از ترکیه با کنجوکو.",
};

export default function KharidAzTurkey() {
 return (
   <main style={{backgroundColor: "#0a0a0a", minHeight: "100vh", color: "white", direction: "rtl"}}>
     <div style={{maxWidth: "800px", margin: "0 auto", padding: "60px 20px"}}>
       <div style={{marginBottom: "32px"}}>
         <a href="/blog" style={{color: "#60a5fa", textDecoration: "none", fontSize: "0.875rem"}}>بازگشت به وبلاگ</a>
       </div>
       <div style={{backgroundColor: "#1a1a1a", borderRadius: "24px", padding: "48px", border: "1px solid #333"}}>
         <div style={{fontSize: "4rem", marginBottom: "16px"}}>🇹🇷</div>
         <p style={{color: "#6b7280", fontSize: "0.875rem", marginBottom: "12px"}}>۱۴۰۴/۳/۶ — کنجوکو</p>
         <h1 style={{fontSize: "2rem", fontWeight: "bold", marginBottom: "32px", lineHeight: "1.4"}}>خرید از ترکیه — راهنمای کامل ۲۰۲۵</h1>
         <p style={{color: "#d1d5db", lineHeight: "2", marginBottom: "24px"}}>ترکیه یکی از نزدیکترین و مناسبترین مقاصد برای خرید کالای باکیفیت است. از پوشاک و کفش گرفته تا لوازم خانگی و مواد غذایی، ترکیه گزینه های متنوعی دارد.</p>
         <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>چرا از ترکیه بخریم؟</h2>
         <p style={{color: "#d1d5db", lineHeight: "2", marginBottom: "24px"}}>ترکیه به دلیل نزدیکی جغرافیایی، کیفیت بالای تولیدات و قیمتهای رقابتی، یکی از بهترین مقاصد برای خرید است. برندهای ترکی در زمینه پوشاک، کفش و لوازم خانه شهرت جهانی دارند.</p>
         <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>بهترین کالاها برای خرید از ترکیه</h2>
         <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "24px"}}>
           {["پوشاک و کفش برندهای ترکی", "لوازم خانگی و آشپزخانه", "طلا و جواهرات", "مواد غذایی و خشکبار", "لوازم آرایشی و بهداشتی", "فرش و تابلوفرش"].map((item) => (
             <div key={item} style={{display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderBottom: "1px solid #222"}}>
               <span style={{color: "#22c55e"}}>✓</span>
               <span style={{color: "#d1d5db"}}>{item}</span>
             </div>
           ))}
         </div>
         <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>چطور با کنجوکو از ترکیه بخریم؟</h2>
         <p style={{color: "#d1d5db", lineHeight: "2", marginBottom: "24px"}}>کنجوکو با شبکه گسترده ای از تامین کنندگان معتبر در ترکیه، بهترین قیمت و کیفیت را برای شما تضمین میکند. کافیست درخواست خود را ثبت کنید، ما بقیه کارها را انجام میدهیم.</p>
         <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "32px"}}>
           <p style={{color: "#94a3b8", marginBottom: "16px", fontSize: "0.9rem"}}>مقالات مرتبط:</p>
           <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
             <a href="/blog/kharid-az-dubai" style={{color: "#60a5fa", textDecoration: "none"}}>← چطور از دبی خرید کنیم؟</a>
             <a href="/blog/kharid-az-chin" style={{color: "#60a5fa", textDecoration: "none"}}>← خرید از چین به روش صحیح</a>
             <a href="/blog/pardakht-beinalmelli" style={{color: "#60a5fa", textDecoration: "none"}}>← راهنمای پرداخت بینالمللی</a>
           </div>
         </div>
         <div style={{backgroundColor: "#1e3a5f", borderRadius: "16px", padding: "32px", textAlign: "center", marginTop: "40px"}}>
           <p style={{fontSize: "1.25rem", fontWeight: "bold", marginBottom: "16px"}}>همین الان خرید از ترکیه را شروع کنید</p>
           <a href="https://wa.me/971562913000" style={{backgroundColor: "#22c55e", color: "white", padding: "12px 32px", borderRadius: "50px", fontWeight: "bold", textDecoration: "none", display: "inline-block"}}>ارتباط در واتساپ</a>
         </div>
       </div>
     </div>
   </main>
 );
}