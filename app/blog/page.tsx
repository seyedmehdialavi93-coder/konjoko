"use client";
import Link from "next/link";

const posts = [
 {
   slug: "kharid-az-dubai",
   title: "چطور از دبی خرید کنیم؟ راهنمای کامل ۲۰۲۴",
   excerpt: "خرید از دبی یکی از بهترین روش‌های تهیه کالای باکیفیت با قیمت مناسب است.",
   date: "۱۴۰۴/۳/۶",
   emoji: "🇦🇪",
 },
 {
   slug: "pardakht-beinalmelli",
   title: "راهنمای پرداخت بین‌المللی برای ایرانیان",
   excerpt: "پرداخت بین‌المللی دیگر سخت نیست. با کنجوکو به راحتی پرداخت کنید.",
   date: "۱۴۰۴/۳/۶",
   emoji: "💳",
 },
 {
   slug: "kharid-az-chin",
   title: "خرید از چین به روش صحیح — راهنمای ۲۰۲۴",
   excerpt: "چین بزرگ‌ترین تامین‌کننده کالا در جهان است. بدانید چطور با اطمینان خرید کنید.",
   date: "۱۴۰۴/۳/۶",
   emoji: "🇨🇳",
 },
];

export default function BlogPage() {
 return (
   <main style={{backgroundColor: "#0a0a0a", minHeight: "100vh", color: "white", direction: "rtl"}}>
     <div style={{maxWidth: "800px", margin: "0 auto", padding: "60px 20px"}}>
       <h1 style={{fontSize: "2.5rem", fontWeight: "bold", textAlign: "center", marginBottom: "12px"}}>وبلاگ کنجوکو</h1>
       <p style={{textAlign: "center", color: "#9ca3af", marginBottom: "48px"}}>راهنمای خرید و پرداخت بین‌المللی</p>
       <div style={{display: "flex", flexDirection: "column", gap: "24px"}}>
         {posts.map((post) => (
           <Link href={`/blog/${post.slug}`} key={post.slug} style={{textDecoration: "none"}}>
             <div style={{backgroundColor: "#1a1a1a", border: "1px solid #333", borderRadius: "16px", padding: "24px", cursor: "pointer"}}>
               <div style={{display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px"}}>
                 <span style={{fontSize: "2rem"}}>{post.emoji}</span>
                 <span style={{color: "#6b7280", fontSize: "0.875rem"}}>{post.date}</span>
               </div>
               <h2 style={{fontSize: "1.25rem", fontWeight: "bold", color: "white", marginBottom: "8px"}}>{post.title}</h2>
               <p style={{color: "#9ca3af"}}>{post.excerpt}</p>
               <p style={{color: "#60a5fa", marginTop: "16px", fontSize: "0.875rem"}}>ادامه مطلب ←</p>
             </div>
           </Link>
         ))}
       </div>
     </div>
   </main>
 );
}