import Link from "next/link";

const posts = [
  {
    slug: "kharid-az-dubai",
    title: "چطور از دبی خرید کنیم؟ راهنمای کامل ۲۰۲۴",
    excerpt: "خرید از دبی یکی از بهترین روش‌های تهیه کالای باکیفیت با قیمت مناسب است. در این مقاله همه چیز را یاد می‌گیرید.",
    date: "۱۴۰۴/۳/۶",
  },
  {
    slug: "pardakht-beinalmelli",
    title: "راهنمای پرداخت بین‌المللی برای ایرانیان",
    excerpt: "پرداخت بین‌المللی دیگر سخت نیست. با کنجوکو به راحتی برای خرید از هر جای دنیا پرداخت کنید.",
    date: "۱۴۰۴/۳/۶",
  },
  {
    slug: "kharid-az-chin",
    title: "خرید از چین به روش صحیح — راهنمای ۲۰۲۴",
    excerpt: "چین بزرگ‌ترین تامین‌کننده کالا در جهان است. بدانید چطور با اطمینان از چین خرید کنید.",
    date: "۱۴۰۴/۳/۶",
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">وبلاگ کنجوکو</h1>
      <div className="grid gap-8">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <div className="border rounded-xl p-6 hover:shadow-lg transition">
              <p className="text-sm text-gray-400 mb-2">{post.date}</p>
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-300">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}