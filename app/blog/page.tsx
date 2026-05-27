import Link from "next/link";

const posts = [
  {
    slug: "kharid-az-dubai",
    title: "چطور از دبی خرید کنیم؟ راهنمای کامل ۲۰۲۴",
    excerpt: "خرید از دبی یکی از بهترین روش‌های تهیه کالای باکیفیت با قیمت مناسب است. در این مقاله همه چیز را یاد می‌گیرید.",
    date: "۱۴۰۴/۳/۶",
    emoji: "🇦🇪",
  },
  {
    slug: "pardakht-beinalmelli",
    title: "راهنمای پرداخت بین‌المللی برای ایرانیان",
    excerpt: "پرداخت بین‌المللی دیگر سخت نیست. با کنجوکو به راحتی برای خرید از هر جای دنیا پرداخت کنید.",
    date: "۱۴۰۴/۳/۶",
    emoji: "💳",
  },
  {
    slug: "kharid-az-chin",
    title: "خرید از چین به روش صحیح — راهنمای ۲۰۲۴",
    excerpt: "چین بزرگ‌ترین تامین‌کننده کالا در جهان است. بدانید چطور با اطمینان از چین خرید کنید.",
    date: "۱۴۰۴/۳/۶",
    emoji: "🇨🇳",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4 text-center">وبلاگ کنجوکو</h1>
        <p className="text-center text-gray-400 mb-12">راهنمای خرید و پرداخت بین‌المللی</p>
        <div className="grid gap-6">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{post.emoji}</span>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </div>
                <h2 className="text-xl font-bold mb-2 text-white">{post.title}</h2>
                <p className="text-gray-400">{post.excerpt}</p>
                <p className="text-blue-400 mt-4 text-sm">ادامه مطلب ←</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}