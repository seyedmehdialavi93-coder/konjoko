export default function KharidAzDubai() {
  return (
    <main style={{backgroundColor: "#0a0a0a", minHeight: "100vh", color: "white", direction: "rtl"}}>
      <div style={{maxWidth: "800px", margin: "0 auto", padding: "60px 20px"}}>
        
        <div style={{marginBottom: "32px"}}>
          <a href="/blog" style={{color: "#60a5fa", textDecoration: "none", fontSize: "0.875rem"}}>← بازگشت به وبلاگ</a>
        </div>

        <div style={{backgroundColor: "#1a1a1a", borderRadius: "24px", padding: "48px", border: "1px solid #333"}}>
          <div style={{fontSize: "4rem", marginBottom: "16px"}}>🇦🇪</div>
          <p style={{color: "#6b7280", fontSize: "0.875rem", marginBottom: "12px"}}>۱۴۰۴/۳/۶ — کنجوکو</p>
          <h1 style={{fontSize: "2rem", fontWeight: "bold", marginBottom: "32px", lineHeight: "1.4"}}>
            چطور از دبی خرید کنیم؟ راهنمای کامل ۲۰۲۴
          </h1>

          <p style={{color: "#d1d5db", lineHeight: "2", marginBottom: "24px"}}>
            دبی یکی از بزرگ‌ترین مراکز تجاری دنیاست که هر ساله میلیون‌ها نفر برای خرید به آن سفر می‌کنند. اما آیا می‌دانستید که بدون سفر به دبی هم می‌توانید از بازارهای این شهر خرید کنید؟
          </p>

          <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>چرا خرید از دبی؟</h2>
          <p style={{color: "#d1d5db", lineHeight: "2", marginBottom: "24px"}}>
            دبی به دلیل نبود مالیات بر ارزش افزوده بر بسیاری از کالاها، قیمت‌های رقابتی بسیار جذابی دارد. کالاهایی مثل طلا، الکترونیک، لوازم آرایشی و برندهای لوکس در دبی ارزانتر از اکثر کشورهای دیگر هستند.
          </p>

          <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>چه کالاهایی از دبی بخریم؟</h2>
          <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "24px"}}>
            {["طلا و جواهرات", "گوشی و لپ‌تاپ", "لوازم آرایشی و بهداشتی", "ساعت و اکسسوری", "پوشاک برندهای معتبر"].map((item) => (
              <div key={item} style={{display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderBottom: "1px solid #222"}}>
                <span style={{color: "#22c55e"}}>✓</span>
                <span style={{color: "#d1d5db"}}>{item}</span>
              </div>
            ))}
          </div>

          <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>چطور با کنجوکو از دبی خرید کنیم؟</h2>
          <p style={{color: "#d1d5db", lineHeight: "2", marginBottom: "32px"}}>
            کنجوکو این فرآیند را برای شما ساده کرده است. کافی است درخواست خود را ثبت کنید، کارشناسان ما بهترین فروشنده را پیدا می‌کنند، پرداخت بینالمللی انجام می‌شود و کالا به دستتان می‌رسد.
          </p>

          <div style={{backgroundColor: "#1e3a5f", borderRadius: "16px", padding: "32px", textAlign: "center", marginTop: "40px"}}>
            <p style={{fontSize: "1.25rem", fontWeight: "bold", marginBottom: "16px"}}>همین الان خرید از دبی را شروع کنید</p>
            <a href="https://wa.me/971562913000" style={{backgroundColor: "#22c55e", color: "white", padding: "12px 32px", borderRadius: "50px", fontWeight: "bold", textDecoration: "none", display: "inline-block"}}>
              ارتباط در واتساپ
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}