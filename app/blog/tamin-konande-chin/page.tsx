import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "چطور تامین کننده معتبر در چین پیدا کنیم؟ | کنجوکو",
  description: "راهنمای کامل پیدا کردن تامین کننده معتبر در چین برای تاجران ایرانی. بهترین سایتها و روشهای تایید اعتبار.",
};

export default function TaminKonandeChin() {
  return (
    <main style={{backgroundColor: "#0a0a0a", minHeight: "100vh", color: "white", direction: "rtl"}}>
      <div style={{maxWidth: "800px", margin: "0 auto", padding: "60px 20px"}}>
        <div style={{marginBottom: "32px"}}>
          <a href="/blog" style={{color: "#60a5fa", textDecoration: "none", fontSize: "0.875rem"}}>بازگشت به وبلاگ</a>
        </div>
        <div style={{backgroundColor: "#1a1a1a", borderRadius: "24px", padding: "48px", border: "1px solid #333"}}>
          <div style={{fontSize: "4rem", marginBottom: "16px"}}>🔍</div>
          <p style={{color: "#6b7280", fontSize: "0.875rem", marginBottom: "12px"}}>۱۴۰۴/۳/۶ — کنجوکو</p>
          <h1 style={{fontSize: "2rem", fontWeight: "bold", marginBottom: "32px", lineHeight: "1.4"}}>چطور تامین کننده معتبر در چین پیدا کنیم؟</h1>
          <p style={{color: "#d1d5db", lineHeight: "2", marginBottom: "24px"}}>یکی از بزرگترین چالشهای تاجران ایرانی برای خرید از چین، پیدا کردن تامین کننده معتبره. در این مقاله همه چیز رو بهتون میگیم.</p>
          <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>بهترین سایتها برای پیدا کردن تامین کننده چینی</h2>
          <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "24px"}}>
            {[{name: "Alibaba.com", desc: "بزرگترین پلتفرم B2B دنیا"}, {name: "1688.com", desc: "قیمت مستقیم کارخانه"}, {name: "Made-in-China.com", desc: "تخصصی برای خریداران بین المللی"}, {name: "Global Sources", desc: "تامین کنندگان تایید شده"}].map((item) => (
              <div key={item.name} style={{padding: "12px 0", borderBottom: "1px solid #222"}}>
                <p style={{color: "white", fontWeight: "bold", marginBottom: "4px"}}>{item.name}</p>
                <p style={{color: "#94a3b8", fontSize: "0.9rem"}}>{item.desc}</p>
              </div>
            ))}
          </div>
          <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>چطور اعتبار تامین کننده رو بررسی کنیم؟</h2>
          <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "24px"}}>
            {["بررسی سابقه و سال تاسیس شرکت", "خواندن نظرات مشتریان قبلی", "درخواست نمونه قبل از خرید عمده", "بررسی گواهینامههای کیفیت مثل ISO", "تماس مستقیم با کارخانه", "درخواست بازدید ویدیویی از خط تولید"].map((item) => (
              <div key={item} style={{display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderBottom: "1px solid #222"}}>
                <span style={{color: "#22c55e"}}>✓</span>
                <span style={{color: "#d1d5db"}}>{item}</span>
              </div>
            ))}
          </div>
          <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#ef4444"}}>علائم هشدار</h2>
          <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "24px"}}>
            {["قیمت خیلی پایینتر از بازار", "عدم ارائه نمونه", "فشار برای پرداخت کامل قبل از ارسال", "نداشتن آدرس و اطلاعات تماس واضح", "عدم پاسخگویی سریع"].map((item) => (
              <div key={item} style={{display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderBottom: "1px solid #222"}}>
                <span style={{color: "#ef4444"}}>✗</span>
                <span style={{color: "#d1d5db"}}>{item}</span>
              </div>
            ))}
          </div>
          <h2 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px", marginTop: "40px", color: "#60a5fa"}}>کنجوکو این کار رو برات انجام میده</h2>
          <p style={{color: "#d1d5db", lineHeight: "2", marginBottom: "24px"}}>کنجوکو با سالها تجربه در بازار چین، بهترین تامین کنندگان معتبر رو برای شما پیدا میکنه.</p>
          <div style={{backgroundColor: "#111", borderRadius: "12px", padding: "24px", marginBottom: "32px"}}>
            <p style={{color: "#94a3b8", marginBottom: "16px", fontSize: "0.9rem"}}>مقالات مرتبط:</p>
            <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
              <a href="/blog/kharid-az-chin" style={{color: "#60a5fa", textDecoration: "none"}}>← خرید از چین به روش صحیح</a>
              <a href="/blog/kharid-omde-dubai-chin" style={{color: "#60a5fa", textDecoration: "none"}}>← راهنمای کامل خرید عمده از دبی و چین</a>
              <a href="/blog/eshtebahaat-tajaran" style={{color: "#60a5fa", textDecoration: "none"}}>← اشتباهات رایج تاجران در واردات</a>
            </div>
          </div>
          <div style={{backgroundColor: "#1e3a5f", borderRadius: "16px", padding: "32px", textAlign: "center", marginTop: "40px"}}>
            <p style={{fontSize: "1.25rem", fontWeight: "bold", marginBottom: "16px"}}>کنجوکو تامین کننده معتبر برات پیدا میکنه</p>
            <a href="https://wa.me/971562913000" style={{backgroundColor: "#22c55e", color: "white", padding: "12px 32px", borderRadius: "50px", fontWeight: "bold", textDecoration: "none", display: "inline-block"}}>ارتباط در واتساپ</a>
          </div>
        </div>
      </div>
    </main>
  );
}