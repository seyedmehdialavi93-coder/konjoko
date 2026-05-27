import Link from "next/link";

const posts = [
  { slug: "kharid-omde-dubai-chin", title: "راهنمای کامل خرید عمده از دبی و چین برای تاجران ایرانی 2025", excerpt: "راهنمای جامع خرید عمده از دبی، چین و ترکیه برای تاجران و کارخانه‌داران.", date: "1404/3/6", emoji: "🌍" },
  { slug: "kharid-az-dubai", title: "چطور از دبی خرید کنیم؟ راهنمای کامل 2025", excerpt: "خرید از دبی یکی از بهترین روش های تهیه کالای باکیفیت با قیمت مناسب است.", date: "1404/3/6", emoji: "🇦" },
  { slug: "pardakht-beinalmelli", title: "راهنمای پرداخت بین المللی برای ایرانیان", excerpt: "پرداخت بین المللی دیگر سخت نیست. با کنجوکو به راحتی پرداخت کنید.", date: "1404/3/6", emoji: "💳" },
  { slug: "kharid-az-chin", title: "خرید از چین به روش صحیح - راهنمای 2025", excerpt: "چین بزرگترین تامین کننده کالا در جهان است.", date: "1404/3/6", emoji: "🇨🇳" },
  { slug: "kharid-az-turkey", title: "خرید از ترکیه - راهنمای کامل 2025", excerpt: "ترکیه یکی از نزدیکترین مقاصد برای خرید کالای باکیفیت است.", date: "1404/3/6", emoji: "🇹🇷" },
  { slug: "havaleh-arzi", title: "حواله ارزی چیست و چطور کار میکنه؟", excerpt: "حواله ارزی روشی برای انتقال پول به خارج از کشور است.", date: "1404/3/6", emoji: "💱" },
  { slug: "kharid-az-amazon", title: "خرید از آمازون برای ایرانیان - راهنمای کامل 2025", excerpt: "آمازون بزرگترین فروشگاه اینترنتی دنیاست.", date: "1404/3/6", emoji: "📦" },
  { slug: "vardaat-az-dubai", title: "راهنمای واردات کالا از دبی - 2025", excerpt: "دبی یکی از مهمترین هاب های تجاری جهان است.", date: "1404/3/6", emoji: "🚢" },
];

export default function BlogPage() {
  return (
    <main style={{background: "linear-gradient(135deg, #020814 0%, #0a1628 50%, #020814 100%)", minHeight: "100vh", color: "white", direction: "rtl"}}>
      <div style={{maxWidth: "900px", margin: "0 auto", padding: "80px 20px"}}>
        <div style={{textAlign: "center", marginBottom: "64px"}}>
          <h1 style={{fontSize: "3rem", fontWeight: "bold", marginBottom: "16px", color: "#f6c90e"}}>وبلاگ کنجوکو</h1>
          <p style={{color: "#94a3b8", fontSize: "1.1rem"}}>راهنمای خرید و پرداخت بین المللی برای ایرانیان</p>
        </div>
        <div style={{display: "flex", flexDirection: "column", gap: "24px"}}>
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} style={{textDecoration: "none"}}>
              <div style={{background: "linear-gradient(135deg, rgba(26,58,92,0.5) 0%, rgba(10,22,40,0.8) 100%)", border: "1px solid rgba(99,179,237,0.2)", borderRadius: "20px", padding: "32px", cursor: "pointer"}}>
                <div style={{display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px"}}>
                  <span style={{fontSize: "2.5rem"}}>{post.emoji}</span>
                  <span style={{color: "#f6c90e", fontSize: "0.8rem"}}>{post.date}</span>
                </div>
                <h2 style={{fontSize: "1.3rem", fontWeight: "bold", color: "white", marginBottom: "12px", lineHeight: "1.6"}}>{post.title}</h2>
                <p style={{color: "#94a3b8", lineHeight: "1.8", marginBottom: "16px"}}>{post.excerpt}</p>
                <span style={{color: "#63b3ed", fontSize: "0.875rem"}}>ادامه مطلب</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}