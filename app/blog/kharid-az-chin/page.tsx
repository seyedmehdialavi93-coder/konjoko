export default function KharidAzChin() {
  return (
    <main style={{backgroundColor: "#0a0a0a", minHeight: "100vh", color: "white", direction: "rtl"}}>
      <div style={{maxWidth: "800px", margin: "0 auto", padding: "60px 20px"}}>
        
        <div style={{marginBottom: "32px"}}>
          <a href="/blog" style={{color: "#60a5fa", textDecoration: "none", fontSize: "0.875rem"}}>← بازگشت به وبلاگ</a>
        </div>

        <div style={{backgroundColor: "#1a1a1a", borderRadius: "24px", padding: "48px", border: "1px solid #333"}}>
          <div style={{fontSize: "4rem", marginBottom: "16px"}}>🇨🇳</div>
          <p style={{color: "#6b7280", fontSize: "0.875rem", marginBottom: "12px"}}>۱۴۰۴/۳/۶ — کنجوکو</p>
          <h1 style={{fontSize: "2rem", fontWeight: "bold", marginBottom: "32px", lineHeight: "1.4"}}>
            خرید از چین به روش صحیح — راهنمای ۲۰۲۴
          </h1>

          <p style={{color: "#d1d5db", lineHeight: "2", marginBottom: "24px"}}>
            چین بزرگ‌ترین تامین‌کننده کالا در جهان است. از الکترونیک گرفته تا پوشاک و لوازم خانگی، همه چیز با قیمت‌های باورنکردنی در چین یافت می‌شود.
          </p>

          <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>چرا از چین بخریم؟</h2>
          <p style={{color: "#d1d5db", lineHeight: "2", marginBottom: "24px"}}>
            قیمت‌های چین به دلیل هزینه تولید پایین، بسیار رقابتی است. کالاهایی که در ایران چند برابر قیمت خریداری می‌شوند، در چین با قیمت کارخانه در دسترس هستند.
          </p>

          <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>محبوب‌ترین کالاها برای خرید از چین</h2>
          <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "24px"}}>
            {[
              "الکترونیک و لوازم جانبی موبایل",
              "پوشاک و کفش",
              "ابزار و تجهیزات صنعتی",
              "لوازم خانگی و آشپزخانه",
              "اسباب بازی و لوازم ورزشی",
              "قطعات یدکی خودرو",
            ].map((item) => (
              <div key={item} style={{display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderBottom: "1px solid #222"}}>
                <span style={{color: "#22c55e"}}>✓</span>
                <span style={{color: "#d1d5db"}}>{item}</span>
              </div>
            ))}
          </div>

          <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>چطور با کنجوکو از چین بخریم؟</h2>
          <p style={{color: "#d1d5db", lineHeight: "2", marginBottom: "32px"}}>
            کنجوکو با داشتن شبکه گسترده‌ای از تامین‌کنندگان معتبر در چین، بهترین قیمت و کیفیت را برای شما تضمین می‌کند. از پیدا کردن فروشنده تا ترخیص و تحویل کالا، همه مراحل را کنجوکو انجام می‌دهد.
          </p>

          <div style={{backgroundColor: "#1e3a5f", borderRadius: "16px", padding: "32px", textAlign: "center", marginTop: "40px"}}>
            <p style={{fontSize: "1.25rem", fontWeight: "bold", marginBottom: "16px"}}>همین الان خرید از چین را شروع کنید</p>
            <a href="https://wa.me/971562913000" style={{backgroundColor: "#22c55e", color: "white", padding: "12px 32px", borderRadius: "50px", fontWeight: "bold", textDecoration: "none", display: "inline-block"}}>
              ارتباط در واتساپ
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}