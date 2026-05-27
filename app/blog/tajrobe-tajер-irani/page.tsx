import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "تجربه واقعی: چطور یه تاجر ایرانی با کنجوکو ۴۰٪ هزینه واردات رو کم کرد | کنجوکو",
 description: "داستان واقعی یه تاجر ایرانی که با کمک کنجوکو هزینه واردات از دبی و چین رو به شکل چشمگیری کاهش داد.",
};

export default function TajrobeTajerIrani() {
 return (
   <main style={{backgroundColor: "#0a0a0a", minHeight: "100vh", color: "white", direction: "rtl"}}>
     <div style={{maxWidth: "800px", margin: "0 auto", padding: "60px 20px"}}>
       <div style={{marginBottom: "32px"}}>
         <a href="/blog" style={{color: "#60a5fa", textDecoration: "none", fontSize: "0.875rem"}}>بازگشت به وبلاگ</a>
       </div>
       <div style={{backgroundColor: "#1a1a1a", borderRadius: "24px", padding: "48px", border: "1px solid #333"}}>
         <div style={{fontSize: "4rem", marginBottom: "16px"}}>💼</div>
         <p style={{color: "#6b7280", fontSize: "0.875rem", marginBottom: "12px"}}>۱۴۰۴/۳/۶ — کنجوکو</p>
         <h1 style={{fontSize: "2rem", fontWeight: "bold", marginBottom: "32px", lineHeight: "1.4"}}>تجربه واقعی: چطور یه تاجر ایرانی با کنجوکو ۴۰٪ هزینه واردات رو کم کرد</h1>

         <p style={{color: "#d1d5db", lineHeight: "2", marginBottom: "24px"}}>رضا ۴۲ ساله، صاحب یه کارگاه تولید کیف و کفش در تهران بود. هر ماه مجبور بود چرم مصنوعی و پارچه رو از واسطه‌های داخلی بخره. قیمتها هر هفته بالا میرفت و حاشیه سودش داشت از بین میرفت. تا اینکه با کنجوکو آشنا شد...</p>

         <div style={{backgroundColor: "#111", borderRadius: "16px", padding: "24px", marginBottom: "32px", borderRight: "4px solid #60a5fa"}}>
           <p style={{color: "#60a5fa", fontWeight: "bold", marginBottom: "8px"}}>رضا میگه:</p>
           <p style={{color: "#d1d5db", lineHeight: "2", fontStyle: "italic"}}>"قبل از کنجوکو هر متر پارچه رو ۸۵ هزار تومن میخریدم. الان مستقیم از چین وارد میکنم، همون پارچه با کیفیت بهتر، ۴۹ هزار تومن تموم میشه. یعنی تقریباً ۴۰٪ صرفه‌جویی."</p>
         </div>

         <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>مشکل رضا چی بود؟</h2>
         <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "24px"}}>
           {["پرداخت ارزی به تامین‌کننده چینی نمیتونست انجام بده", "نمیدونست از کدوم تامین‌کننده بخره", "نگران کیفیت کالا بود", "مراحل گمرک و ترخیص رو بلد نبود", "ریسک کلاهبرداری داشت"].map((item) => (
             <div key={item} style={{display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderBottom: "1px solid #222"}}>
               <span style={{color: "#ef4444"}}>✗</span>
               <span style={{color: "#d1d5db"}}>{item}</span>
             </div>
           ))}
         </div>

         <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>کنجوکو چطور کمک کرد؟</h2>
         <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "24px"}}>
           {["پیدا کردن ۳ تامین‌کننده معتبر در چین", "ارسال نمونه رایگان قبل از خرید عمده", "پرداخت ارزی به تامین‌کننده به جای رضا", "بازرسی کالا قبل از ارسال", "مدیریت کامل ترخیص گمرکی", "تحویل کالا دم در کارگاه رضا"].map((item) => (
             <div key={item} style={{display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderBottom: "1px solid #222"}}>
               <span style={{color: "#22c55e"}}>✓</span>
               <span style={{color: "#d1d5db"}}>{item}</span>
             </div>
           ))}
         </div>

         <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>نتیجه بعد از ۳ ماه</h2>
         <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "24px"}}>
           {[
             {label: "کاهش هزینه مواد اولیه", value: "۴۰٪"},
             {label: "افزایش حاشیه سود", value: "۲۵٪"},
             {label: "زمان تحویل", value: "۳-۴ هفته"},
             {label: "رضایت از کیفیت", value: "عالی"},
           ].map((item) => (
             <div key={item.label} style={{display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid #222"}}>
               <span style={{color: "#d1d5db"}}>{item.label}</span>
               <span style={{color: "#22c55e", fontWeight: "bold"}}>{item.value}</span>
             </div>
           ))}
         </div>

         <div style={{backgroundColor: "#111", borderRadius: "16px", padding: "24px", marginBottom: "32px", borderRight: "4px solid #22c55e"}}>
           <p style={{color: "#22c55e", fontWeight: "bold", marginBottom: "8px"}}>رضا الان میگه:</p>
           <p style={{color: "#d1d5db", lineHeight: "2", fontStyle: "italic"}}>"کاش زودتر با کنجوکو آشنا میشدم. الان راحت خوابم میبره. نه نگران پرداخت ارزی هستم، نه نگران کیفیت کالا. کنجوکو همه چیز رو مدیریت میکنه."</p>
         </div>

         <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "32px"}}>
           <p style={{color: "#94a3b8", marginBottom: "16px", fontSize: "0.9rem"}}>مقالات مرتبط:</p>
           <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
             <a href="/blog/kharid-omde-dubai-chin" style={{color: "#60a5fa", textDecoration: "none"}}>← راهنمای کامل خرید عمده از دبی و چین</a>
             <a href="/blog/havaleh-arzi" style={{color: "#60a5fa", textDecoration: "none"}}>← حواله ارزی چیست؟</a>
             <a href="/blog/kharid-az-chin" style={{color: "#60a5fa", textDecoration: "none"}}>← خرید از چین به روش صحیح</a>
           </div>
         </div>

         <div style={{backgroundColor: "#1e3a5f", borderRadius: "16px", padding: "32px", textAlign: "center", marginTop: "40px"}}>
           <p style={{fontSize: "1.25rem", fontWeight: "bold", marginBottom: "16px"}}>شما هم مثل رضا هزینه‌هاتو کم کن</p>
           <a href="https://wa.me/971562913000" style={{backgroundColor: "#22c55e", color: "white", padding: "12px 32px", borderRadius: "50px", fontWeight: "bold", textDecoration: "none", display: "inline-block"}}>ارتباط در واتساپ</a>
         </div>
       </div>
     </div>
   </main>
 );
}