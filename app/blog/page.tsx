import Link from "next/link";

const posts = [
  {
    slug: "kharid-az-dubai",
    title: "چطور از دبی خرید کنیم؟ راهنمای کامل ۲۰۲۴",
    excerpt: "خرید از دبی یکی از بهترین روش‌های تهیه کالای باکیفیت با قیمت مناسب است.",
    date: "۱۴۰۴/۳/۶",
    emoji: "🇦🇪",
    color: "#1a3a5c",
  },
  {
    slug: "pardakht-beinalmelli",
    title: "راهنمای پرداخت بین‌المللی برای ایرانیان",
    excerpt: "پرداخت بین‌المللی دیگر سخت نیست. با کنجوکو به راحتی پرداخت کنید.",
    date: "۱۴۰۴/۳/۶",
    emoji: "💳",
    color: "#2d1a5c",
  },
  {
    slug: "kharid-az-chin",
    title: "خرید از چین به روش صحیح — راهنمای ۲۰۲۴",
    excerpt: "چین بزرگ‌ترین تامین‌کننده کالا در جهان است. بدانید چطور با اطمینان خرید کنید.",
    date: "۱۴۰۴/۳/۶",
    emoji: "🇨🇳",
    color: "#1a3a5c",
  },
];

export default function BlogPage() {
  return (
    <main style={{background: "linear-gradient(135deg, #020814 0%, #0a1628 50%, #020814 100%)", minHeight: "100vh", color: "white", direction: "rtl"}}>
      <div style={{maxWidth: "900px", margin: "0 auto", padding: "80px 20px"}}>
        
        <div style={{textAlign: "center", marginBottom: "64px"}}>
          <div style={{display: "inline-block", backgroundColor: "rgba(99, 179, 237, 0.1)", border: "1px solid rgba(99, 179, 237, 0.3)", borderRadius: "50px", padding: "8px 24px", marginBottom: "24px"}}>
            <span style={{color: "#63b3ed", fontSize: "0.875rem"}}>✦ راهنمای تجارت بین‌المللی</span>
          </div>
          <h1 style={{fontSize: "3rem", fontWeight: "bold", marginBottom: "16px", background: "linear-gradient(135deg, #fff 0%, #f6c90e 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>وبلاگ کنجوکو</h1>
          <p style={{color: "#94a3b8", fontSize: "1.1rem"}}>راهنمای خرید و پرداخت بینالمللی برای ایرانیان</p>
        </div>

        <div style={{display: "flex", flexDirection: "column", gap: "24px"}}>
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} style={{textDecoration: "none"}}>
              <div style={{background: "linear-gradient(135deg, rgba(26,58,92,0.5) 0%, rgba(10,22,40,0.8) 100%)", border: "1px solid rgba(99,179,237,0.2)", borderRadius: "20px", padding: "32px", cursor: "pointer", transition: "all 0.3s"}}>
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