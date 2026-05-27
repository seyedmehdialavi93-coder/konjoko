import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "راهنمای کامل خرید عمده از دبی و چین برای تاجران ایرانی ۲۰۲۵ | کنجوکو",
 description: "راهنمای جامع خرید عمده از دبی، چین، ترکیه و امارات برای تاجران و کارخانه‌داران ایرانی. از پیدا کردن تامین‌کننده تا تحویل کالا.",
};

export default function KharidOmdeDubaiChin() {
 return (
   <main style={{backgroundColor: "#0a0a0a", minHeight: "100vh", color: "white", direction: "rtl"}}>
     <div style={{maxWidth: "800px", margin: "0 auto", padding: "60px 20px"}}>
       <div style={{marginBottom: "32px"}}>
         <a href="/blog" style={{color: "#60a5fa", textDecoration: "none", fontSize: "0.875rem"}}>بازگشت به وبلاگ</a>
       </div>
       <div style={{backgroundColor: "#1a1a1a", borderRadius: "24px", padding: "48px", border: "1px solid #333"}}>
         <div style={{fontSize: "4rem", marginBottom: "16px"}}>🌍</div>
         <p style={{color: "#6b7280", fontSize: "0.875rem", marginBottom: "12px"}}>۱۴۰۴/۳/۶ — کنجوکو</p>
         <h1 style={{fontSize: "2rem", fontWeight: "bold", marginBottom: "32px", lineHeight: "1.4"}}>راهنمای کامل خرید عمده از دبی و چین برای تاجران ایرانی ۲۰۲۵</h1>

         <p style={{color: "#d1d5db", lineHeight: "2", marginBottom: "24px"}}>سال ۱۳۹۸ بود. یه تاجر تهرانی به اسم محمد، کارخانه تولید مبل داشت و هر ماه مجبور بود پارچه و فوم رو از بازار تهران بخره. قیمتها هر هفته بالا میرفت و حاشیه سودش داشت از بین میرفت. یه روز تصمیم گرفت مستقیم از چین وارد کنه. اما نمیدونست از کجا شروع کنه...</p>

         <p style={{color: "#d1d5db", lineHeight: "2", marginBottom: "24px"}}>این داستان خیلی از تاجران ایرانیه. امروز میخوایم همه چیز رو بهتون بگیم تا مثل محمد گم نشید.</p>

         <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>چرا خرید عمده از دبی و چین؟</h2>
         <p style={{color: "#d1d5db", lineHeight: "2", marginBottom: "24px"}}>دبی و چین دو تا از بزرگترین هاب‌های تجاری دنیا هستن. دبی به دلیل معافیت مالیاتی و موقعیت جغرافیایی، و چین به دلیل قیمت تولید پایین، بهترین گزینه برای تاجران ایرانی هستن.</p>

         <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>مقایسه خرید از دبی، چین و ترکیه</h2>
         <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "24px"}}>
           {[
             {country: "🇦 دبی", best: "طلا، الکترونیک، لوکس، برندها", speed: "سریع ۱-۲ هفته"},
             {country: "🇨🇳 چین", best: "تولیدات صنعتی، پوشاک، ابزار، ماشین‌آلات", speed: "متوسط ۳-۶ هفته"},
             {country: "🇹🇷 ترکیه", best: "پارچه، پوشاک، مواد غذایی، لوازم خانگی", speed: "سریع ۱-۲ هفته"},
           ].map((item) => (
             <div key={item.country} style={{padding: "16px 0", borderBottom: "1px solid #222"}}>
               <p style={{color: "white", fontWeight: "bold", marginBottom: "8px"}}>{item.country}</p>
               <p style={{color: "#94a3b8", fontSize: "0.9rem", marginBottom: "4px"}}>بهترین کالا: {item.best}</p>
               <p style={{color: "#60a5fa", fontSize: "0.9rem"}}>زمان تحویل: {item.speed}</p>
             </div>
           ))}
         </div>

         <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>مراحل خرید عمده از صفر تا تحویل</h2>
         <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "24px"}}>
           {[
             "۱. مشخص کردن نوع و مقدار کالای مورد نیاز",
             "۲. پیدا کردن تامین‌کننده معتبر در کشور مبدا",
             "۳. مذاکره و تایید نمونه کالا",
             "۴. پرداخت ارزی به تامین‌کننده",
             "۵. بازرسی کالا قبل از ارسال",
             "۶. حمل و نقل و ترخیص گمرکی",
             "۷. تحویل کالا در مقصد",
           ].map((item) => (
             <div key={item} style={{display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderBottom: "1px solid #222"}}>
               <span style={{color: "#22c55e"}}>✓</span>
               <span style={{color: "#d1d5db"}}>{item}</span>
             </div>
           ))}
         </div>

         <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>اشتباهات رایج تاجران ایرانی</h2>
         <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "24px"}}>
           {[
             "❌ خرید بدون نمونه‌گیری اولیه",
             "❌ پرداخت کل مبلغ قبل از بازرسی کالا",
             "❌ انتخاب تامین‌کننده ناشناس",
             "❌ نادیده گرفتن هزینه‌های گمرک و حمل",
             "❌ عدم توجه به استانداردهای کیفی",
           ].map((item) => (
             <div key={item} style={{display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderBottom: "1px solid #222"}}>
               <span style={{color: "#d1d5db"}}>{item}</span>
             </div>
           ))}
         </div>

         <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>کنجوکو چطور کمک میکنه؟</h2>
         <p style={{color: "#d1d5db", lineHeight: "2", marginBottom: "24px"}}>کنجوکو تمام این مراحل رو برای شما انجام میده. از پیدا کردن تامین‌کننده معتبر در دبی، چین و ترکیه تا پرداخت ارزی، بازرسی کالا و تحویل در ایران. شما فقط نوع کالا و مقدار رو اعلام کنید، بقیه کارها با ماست.</p>

         <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "32px"}}>
           <p style={{color: "#94a3b8", marginBottom: "16px", fontSize: "0.9rem"}}>مقالات مرتبط:</p>
           <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
             <a href="/blog/kharid-az-dubai" style={{color: "#60a5fa", textDecoration: "none"}}>← چطور از دبی خرید کنیم؟</a>
             <a href="/blog/kharid-az-chin" style={{color: "#60a5fa", textDecoration: "none"}}>← خرید از چین به روش صحیح</a>
             <a href="/blog/havaleh-arzi" style={{color: "#60a5fa", textDecoration: "none"}}>← حواله ارزی چیست؟</a>
             <a href="/blog/vardaat-az-dubai" style={{color: "#60a5fa", textDecoration: "none"}}>← راهنمای واردات کالا از دبی</a>
           </div>
         </div>

         <div style={{backgroundColor: "#1e3a5f", borderRadius: "16px", padding: "32px", textAlign: "center", marginTop: "40px"}}>
           <p style={{fontSize: "1.25rem", fontWeight: "bold", marginBottom: "16px"}}>همین الان خرید عمده را شروع کنید</p>
           <a href="https://wa.me/971562913000" style={{backgroundColor: "#22c55e", color: "white", padding: "12px 32px", borderRadius: "50px", fontWeight: "bold", textDecoration: "none", display: "inline-block"}}>ارتباط در واتساپ</a>
         </div>
       </div>
     </div>
   </main>
 );
}