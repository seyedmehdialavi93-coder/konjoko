import Link from "next/link";

const posts = [
 { slug: "tajrobe-tajer-irani", title: "تجربه واقعی: چطور یه تاجر ایرانی با کنجوکو ۴۰٪ هزینه واردات رو کم کرد", excerpt: "داستان واقعی رضا، صاحب کارگاه تولید کیف و کفش که با کنجوکو هزینه واردات از چین رو ۴۰٪ کاهش داد.", date: "۱۴۰۴/۳/۶", emoji: "💼" },
 { slug: "kharid-omde-dubai-chin", title: "راهنمای کامل خرید عمده از دبی و چین برای تاجران ایرانی ۲۰۲۵", excerpt: "راهنمای جامع خرید عمده از دبی، چین و ترکیه برای تاجران و کارخانه‌داران. از پیدا کردن تامین‌کننده تا تحویل کالا.", date: "۱۴۰۴/۳/۶", emoji: "🌍" },
 { slug: "eshtebahaat-tajaran", title: "اشتباهات رایج تاجران ایرانی در واردات از دبی و چین", excerpt: "مهمترین اشتباهاتی که تاجران ایرانی در واردات مرتکب میشن و چطور از آنها جلوگیری کنیم.", date: "۱۴۰۴/۳/۶", emoji: "⚠️" },
 { slug: "tamin-konande-chin", title: "چطور تامین‌کننده معتبر در چین پیدا کنیم؟", excerpt: "راهنمای کامل پیدا کردن تامین‌کننده معتبر در چین. بهترین سایت‌ها و روش‌های تایید اعتبار.", date: "۱۴۰۴/۳/۶", emoji: "🔍" },
 { slug: "havaleh-derham", title: "حواله درهم برای تجار ایرانی — راهنمای کامل ۲۰۲۵", excerpt: "راهنمای کامل حواله درهم برای تاجران ایرانی. نحوه ارسال درهم به دبی و بهترین روش پرداخت.", date: "۱۴۰۴/۳/۶", emoji: "🇦🇪" },
 { slug: "kharid-az-dubai", title: "چطور از دبی خرید کنیم؟ راهنمای کامل ۲۰۲۵", excerpt: "خرید از دبی یکی از بهترین روش های تهیه کالای باکیفیت با قیمت مناسب است.", date: "۱۴۰۴/۳/۶", emoji: "🇦🇪" },
 { slug: "pardakht-beinalmelli", title: "راهنمای پرداخت بین المللی برای ایرانیان", excerpt: "پرداخت بین المللی دیگر سخت نیست. با کنجوکو به راحتی پرداخت کنید.", date: "۱۴۰۴/۳/۶", emoji: "💳" },
 { slug: "kharid-az-chin", title: "خرید از چین به روش صحیح — راهنمای ۲۰۲۵", excerpt: "چین بزرگترین تامین کننده کالا در جهان است. بدانید چطور با اطمینان خرید کنید.", date: "۱۴۰۴/۳/۶", emoji: "🇨" },
 { slug: "kharid-az-turkey", title: "خرید از ترکیه — راهنمای کامل ۲۰۲۵", excerpt: "ترکیه یکی از نزدیکترین مقاصد برای خرید کالای باکیفیت است.", date: "۱۴۰۴/۳/۶", emoji: "🇹🇷" },
 { slug: "havaleh-arzi", title: "حواله ارزی چیست و چطور کار میکنه؟", excerpt: "حواله ارزی روشی برای انتقال پول به خارج از کشور است. همه چیز را بدانید.", date: "۱۴۰۴/۳/۶", emoji: "💱" },
 { slug: "kharid-az-amazon", title: "خرید از آمازون برای ایرانیان — راهنمای کامل ۲۰۲۵", excerpt: "آمازون بزرگترین فروشگاه اینترنتی دنیاست. بدانید چطور از آمازون خرید کنید.", date: "۱۴۰۴/۳/۶", emoji: "📦" },
 { slug: "vardaat-az-dubai", title: "راهنمای واردات کالا از دبی — ۲۰۲۵", excerpt: "دبی یکی از مهمترین هاب های تجاری جهان است. راهنمای کامل واردات از دبی.", date: "۱۴۰۴/۳/۶", emoji: "🚢" },
];

export default function BlogPage() {
 return (
   <main style={{background: "linear-gradient(135deg, #020814 0%, #0a1628 50%, #020814 100%)", minHeight: "100vh", color: "white", direction: "rtl"}}>
     <div style={{maxWidth: "900px", margin: "0 auto", padding: "80px 20px"}}>
       <div style={{textAlign: "center", marginBottom: "64px"}}>
         <div style={{display: "inline-block", backgroundColor: "rgba(99, 179, 237, 0.1)", border: "1px solid rgba(99, 179, 237, 0.3)", borderRadius: "50px", padding: "8px 24px", marginBottom: "24px"}}>
           <span style={{color: "#63b3ed", fontSize: "0.875rem"}}>✦ راهنمای تجارت بین المللی</span>
         </div>
         <h1 style={{fontSize: "3rem", fontWeight: "bold", marginBottom: "16px", background: "linear-gradient(135deg, #fff 0%, #f6c90e 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>وبلاگ کنجوکو</h1>
         <p style={{color: "#94a3b8", fontSize: "1.1rem"}}>راهنمای خرید و پرداخت بین المللی برای ایرانیان</p>
       </div>
       <div style={{display: "flex", flexDirection: "column", gap: "24px"}}>
         {posts.map((post) => (
           <Link href={`/blog/${post.slug}`} key={post.slug} style={{textDecoration: "none"}}>
             <div style={{background: "linear-gradient(135deg, rgba(26,58,92,0.5) 0%, rgba(10,22,40,0.8) 100%)", border: "1px solid rgba(99,179,237,0.2)", borderRadius: "20px", padding: "32px", cursor: "pointer"}}>
               <div style={{display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px"}}>
                 <span style={{fontSize: "2.5rem"}}>{post.emoji}</span>
                 <span style={{color: "#f6c90e", fontSize: "0.8rem", backgroundColor: "rgba(246,201,14,0.1)", padding: "4px 12px", borderRadius: "20px", border: "1px solid rgba(246,201,14,0.3)"}}>{post.date}</span>
               </div>
               <h2 style={{fontSize: "1.3rem", fontWeight: "bold", color: "white", marginBottom: "12px", lineHeight: "1.6"}}>{post.title}</h2>
               <p style={{color: "#94a3b8", lineHeight: "1.8", marginBottom: "16px"}}>{post.excerpt}</p>
               <span style={{color: "#63b3ed", fontSize: "0.875rem"}}>ادامه مطلب ✦</span>
             </div>
           </Link>
         ))}
       </div>
     </div>
   </main>
 );
}