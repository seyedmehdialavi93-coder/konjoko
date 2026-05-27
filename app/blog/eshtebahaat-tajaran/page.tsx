import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "اشتباهات رایج تاجران ایرانی در واردات از دبی و چین | کنجوکو",
 description: "مهمترین اشتباهاتی که تاجران ایرانی در واردات از دبی، چین و ترکیه مرتکب میشن و چطور از آنها جلوگیری کنیم.",
};

export default function EshtebaahatTajaran() {
 return (
   <main style={{backgroundColor: "#0a0a0a", minHeight: "100vh", color: "white", direction: "rtl"}}>
     <div style={{maxWidth: "800px", margin: "0 auto", padding: "60px 20px"}}>
       <div style={{marginBottom: "32px"}}>
         <a href="/blog" style={{color: "#60a5fa", textDecoration: "none", fontSize: "0.875rem"}}>بازگشت به وبلاگ</a>
       </div>
       <div style={{backgroundColor: "#1a1a1a", borderRadius: "24px", padding: "48px", border: "1px solid #333"}}>
         <div style={{fontSize: "4rem", marginBottom: "16px"}}>⚠️</div>
         <p style={{color: "#6b7280", fontSize: "0.875rem", marginBottom: "12px"}}>۱۴۰۴/۳/۶ — کنجوکو</p>
         <h1 style={{fontSize: "2rem", fontWeight: "bold", marginBottom: "32px", lineHeight: "1.4"}}>اشتباهات رایج تاجران ایرانی در واردات از دبی و چین</h1>

         <p style={{color: "#d1d5db", lineHeight: "2", marginBottom: "24px"}}>سالهاست با تاجران ایرانی کار میکنیم. در این مدت دیدیم که بسیاری از آنها یه سری اشتباهات مشترک انجام میدن که باعث ضرر و زمان از دست رفته میشه. امروز میخوایم صادقانه این اشتباهات رو باهاتون در میان بذاریم.</p>

         <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#ef4444"}}>اشتباه اول: پرداخت کامل قبل از دریافت کالا</h2>
         <p style={{color: "#d1d5db", lineHeight: "2", marginBottom: "24px"}}>خیلی از تاجران برای اینکه تخفیف بگیرن، کل مبلغ رو یکجا میپردازن. این یکی از خطرناکترین اشتباهاته. همیشه باید ۳۰٪ پیش‌پرداخت و ۷۰٪ بعد از بازرسی کالا پرداخت بشه.</p>

         <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#ef4444"}}>اشتباه دوم: خرید بدون نمونه‌گیری</h2>
         <p style={{color: "#d1d5db", lineHeight: "2", marginBottom: "24px"}}>عکس کالا در اینترنت با واقعیت فرق داره. قبل از هر خرید عمده، حتماً باید نمونه بگیرید و کیفیت رو بررسی کنید. هزینه نمونه در مقابل ضرر یه محموله بد، ناچیزه.</p>

         <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#ef4444"}}>اشتباه سوم: نادیده گرفتن هزینه‌های پنهان</h2>
         <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "24px"}}>
           {["هزینه حمل و نقل بین‌المللی", "هزینه بیمه کالا", "عوارض و مالیات گمرکی", "هزینه ترخیص", "هزینه انبارداری در صورت تاخیر"].map((item) => (
             <div key={item} style={{display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderBottom: "1px solid #222"}}>
               <span style={{color: "#ef4444"}}>!</span>
               <span style={{color: "#d1d5db"}}>{item}</span>
             </div>
           ))}
         </div>

         <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#ef4444"}}>اشتباه چهارم: انتخاب تامین‌کننده ناشناس</h2>
         <p style={{color: "#d1d5db", lineHeight: "2", marginBottom: "24px"}}>خیلی از تاجران فقط بر اساس قیمت پایین تامینکننده انتخاب میکنن. این اشتباه بزرگیه. باید سابقه، رتبه‌بندی و نظرات مشتریان قبلی رو بررسی کنید.</p>

         <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#ef4444"}}>اشتباه پنجم: بی‌توجهی به قوانین گمرکی</h2>
         <p style={{color: "#d1d5db", lineHeight: "2", marginBottom: "24px"}}>قوانین واردات هر ساله تغییر میکنه. خیلی از تاجران با قوانین قدیمی کار میکنن و بعد با مشکلات جدی در گمرک روبرو میشن. همیشه باید از آخرین قوانین مطلع باشید.</p>

         <div style={{backgroundColor: "#1a3a2a", borderRadius: "16px", padding: "24px", marginBottom: "32px", border: "1px solid #22c55e"}}>
           <p style={{color: "#22c55e", fontWeight: "bold", marginBottom: "12px"}}>✓ راه‌حل همه این مشکلات</p>
           <p style={{color: "#d1d5db", lineHeight: "2"}}>کنجوکو تمام این مراحل رو برای شما مدیریت میکنه. از انتخاب تامین‌کننده معتبر تا پرداخت مرحله‌ای، بازرسی کالا و ترخیص گمرکی. شما فقط کالای مورد نیاز رو مشخص کنید.</p>
         </div>

         <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "32px"}}>
           <p style={{color: "#94a3b8", marginBottom: "16px", fontSize: "0.9rem"}}>مقالات مرتبط:</p>
           <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
             <a href="/blog/kharid-omde-dubai-chin" style={{color: "#60a5fa", textDecoration: "none"}}>← راهنمای کامل خرید عمده از دبی و چین</a>
             <a href="/blog/tajrobe-tajer-irani" style={{color: "#60a5fa", textDecoration: "none"}}>← تجربه واقعی یه تاجر ایرانی</a>
             <a href="/blog/vardaat-az-dubai" style={{color: "#60a5fa", textDecoration: "none"}}>← راهنمای واردات کالا از دبی</a>
           </div>
         </div>

         <div style={{backgroundColor: "#1e3a5f", borderRadius: "16px", padding: "32px", textAlign: "center", marginTop: "40px"}}>
           <p style={{fontSize: "1.25rem", fontWeight: "bold", marginBottom: "16px"}}>با کنجوکو از این اشتباهات جلوگیری کن</p>
           <a href="https://wa.me/971562913000" style={{backgroundColor: "#22c55e", color: "white", padding: "12px 32px", borderRadius: "50px", fontWeight: "bold", textDecoration: "none", display: "inline-block"}}>ارتباط در واتساپ</a>
         </div>
       </div>
     </div>
   </main>
 );
}