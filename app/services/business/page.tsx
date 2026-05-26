"use client";
import { useState } from "react";

const SERVICES = [
  {
    id: "sourcing",
    icon: "🔍",
    title: "پیدا کردن تامین‌کننده",
    desc: "جستجو و معرفی بهترین تامین‌کنندگان معتبر در دبی، چین و ترکیه",
    items: [
      "جستجو در بازارهای دبی، چین، ترکیه",
      "معرفی تامین‌کننده معتبر و تایید شده",
      "مقایسه قیمت چند تامین‌کننده",
      "بررسی سابقه و اعتبار فروشنده",
    ],
  },
  {
    id: "quality",
    icon: "🛡️",
    title: "تضمین کیفیت",
    desc: "بازرسی و کنترل کیفیت کالا قبل از ارسال برای اطمینان از استانداردها",
    items: [
      "بازرسی کالا قبل از ارسال",
      "تست و کنترل کیفیت محصول",
      "عکاسی از کالا و ارسال گزارش",
      "تضمین مطابقت با مشخصات سفارش",
    ],
  },
  {
    id: "shipping",
    icon: "🚚",
    title: "حمل و ترخیص",
    desc: "مدیریت کامل فرآیند حمل کالا از مبدا تا مقصد و راهنمایی ترخیص",
    items: [
      "ارسال از مبدا با بهترین نرخ",
      "پیگیری محموله در تمام مراحل",
      "راهنمای ترخیص گمرک",
      "بیمه محموله",
    ],
  },
  {
    id: "payment",
    icon: "💳",
    title: "پرداخت بین‌المللی",
    desc: "انجام پرداخت‌های ارزی در کمترین زمان و با بهترین نرخ روز",
    items: [
      "حواله دلار و درهم با نرخ رقابتی",
      "پرداخت به تامین‌کنندگان خارجی",
      "بدون نیاز به کارت بین‌المللی",
      "بدون واسطه اضافه و هزینه پنهان",
    ],
  },
  {
    id: "support",
    icon: "💬",
    title: "پشتیبانی اختصاصی",
    desc: "مشاور اختصاصی برای همراهی در تمام مراحل خرید و تجارت",
    items: [
      "مشاور اختصاصی ۲۴/۷",
      "ارتباط مستقیم با تامین‌کننده",
      "حل مشکلات سفارش",
      "پیگیری تا تحویل نهایی",
    ],
  },
  {
    id: "consulting",
    icon: "📊",
    title: "مشاوره تجاری",
    desc: "راهنمایی تخصصی برای واردات، بررسی بازار و استراتژی خرید",
    items: [
      "مشاوره واردات و صادرات",
      "بررسی و تحلیل بازار",
      "استراتژی خرید بهینه",
      "راهنمای قوانین گمرکی",
    ],
  },
];

const STATS = [
  { value: "+۵۰۰", label: "مشتری راضی" },
  { value: "۴+", label: "کشور هدف" },
  { value: "۲۴/۷", label: "پشتیبانی" },
  { value: "%۹۸", label: "رضایت مشتری" },
];

export default function BusinessPage() {
  const [activeService, setActiveService] = useState("sourcing");
  const current = SERVICES.find(s => s.id === activeService);

  return (
    <div style={{ minHeight: "100vh", background: "#020814", fontFamily: "'Vazirmatn', Tahoma, sans-serif", direction: "rtl" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        button { cursor: pointer; border: none; font-family: inherit; }
        a { text-decoration: none; }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.85)} }
        .pulse { animation: pulse 1.5s ease-in-out infinite; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 0.3s ease; }
        .service-btn { transition: all 0.2s ease; }
        .service-btn:hover { background: rgba(14,165,233,0.1) !important; border-color: rgba(14,165,233,0.3) !important; }
      `}</style>

      {/* Background */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, background: "radial-gradient(ellipse 80% 60% at 20% 10%, rgba(14,165,233,0.1) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(34,211,238,0.06) 0%, transparent 55%), #020814" }} />
      <div style={{ position: "fixed", inset: 0, zIndex: 0, backgroundImage: "linear-gradient(rgba(14,165,233,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(14,165,233,0.03) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Header */}
      <header style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(2,8,20,0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(14,165,233,0.18)", padding: "0 28px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 0" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 38, height: 38, borderRadius: 9, background: "linear-gradient(135deg,#0ea5e9,#22d3ee)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "#fff", fontSize: 16, boxShadow: "0 0 16px rgba(14,165,233,0.4)" }}>K</div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 800, background: "linear-gradient(135deg,#0ea5e9,#22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: 1 }}>KONJOKO</div>
              <div style={{ fontSize: 11, color: "#64748b" }}>کنجوکو</div>
            </div>
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <a href="/" style={{ color: "#94a3b8", fontSize: 13, padding: "6px 12px", borderRadius: 8 }}>خانه</a>
            <a href="/services/shopping" style={{ color: "#94a3b8", fontSize: 13, padding: "6px 12px", borderRadius: 8 }}>خرید کالا</a>
            <a href="/services/payment" style={{ color: "#94a3b8", fontSize: 13, padding: "6px 12px", borderRadius: 8 }}>پرداخت ارزی</a>
            <a href="#" style={{ color: "#0ea5e9", fontSize: 13, padding: "6px 12px", borderRadius: 8, background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.2)" }}>خدمات تجاری</a>
            <a href="/#support" style={{ background: "linear-gradient(135deg,#0ea5e9,#22d3ee)", color: "#fff", fontSize: 13, fontWeight: 700, padding: "8px 18px", borderRadius: 9 }}>کنجوکو کن ✦</a>
          </div>
        </div>
      </header>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>

        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.2)", borderRadius: 50, padding: "7px 16px", fontSize: 12, fontWeight: 600, color: "#22d3ee", marginBottom: 20 }}>
            <span className="pulse" style={{ width: 7, height: 7, background: "#10b981", borderRadius: "50%", display: "inline-block" }} />
            خدمات تجاری حرفه‌ای
          </div>
          <h1 style={{ fontSize: "clamp(26px,4vw,46px)", fontWeight: 900, color: "#f0f9ff", marginBottom: 14, lineHeight: 1.3 }}>
            راهکار یکپارچه برای{" "}
            <span style={{ background: "linear-gradient(135deg,#0ea5e9,#22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              تجارت بین‌المللی
            </span>
          </h1>
          <p style={{ color: "#64748b", fontSize: 15, maxWidth: 600, margin: "0 auto", lineHeight: 1.8 }}>
            با کنجوکو، از جستجوی تامین‌کننده تا پرداخت ارزی و تحویل کالا، همه چیز در یک جا مدیریت میشه. پرداخت‌های بین‌المللی در سریع‌ترین زمان ممکن و با نرخ رقابتی روز — بدون واسطه اضافه، بدون هزینه پنهان.
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 52 }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ background: "rgba(14,165,233,0.04)", border: "1px solid rgba(14,165,233,0.15)", borderRadius: 16, padding: "20px", textAlign: "center" }}>
              <div style={{ fontSize: 28, fontWeight: 900, background: "linear-gradient(135deg,#0ea5e9,#22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 6 }}>{s.value}</div>
              <div style={{ fontSize: 12, color: "#64748b" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Services */}
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 24 }}>

          {/* Left - Service List */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {SERVICES.map(s => (
              <button key={s.id} className="service-btn" onClick={() => setActiveService(s.id)}
                style={{ padding: "16px 18px", borderRadius: 14, textAlign: "right", display: "flex", alignItems: "center", gap: 12,
                  background: activeService === s.id ? "linear-gradient(135deg,rgba(14,165,233,0.2),rgba(34,211,238,0.1))" : "rgba(14,165,233,0.04)",
                  border: activeService === s.id ? "1px solid rgba(14,165,233,0.4)" : "1px solid rgba(14,165,233,0.12)",
                  boxShadow: activeService === s.id ? "0 0 20px rgba(14,165,233,0.12)" : "none" }}>
                <span style={{ fontSize: 22 }}>{s.icon}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: activeService === s.id ? "#f0f9ff" : "#94a3b8" }}>{s.title}</span>
              </button>
            ))}
          </div>

          {/* Right - Service Detail */}
          {current && (
            <div className="fade-up" style={{ background: "rgba(14,165,233,0.04)", border: "1px solid rgba(14,165,233,0.15)", borderRadius: 20, padding: 32 }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>{current.icon}</div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: "#f0f9ff", marginBottom: 12 }}>{current.title}</h2>
              <p style={{ color: "#64748b", fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>{current.desc}</p>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                {current.items.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: "rgba(14,165,233,0.04)", border: "1px solid rgba(14,165,233,0.1)", borderRadius: 10 }}>
                    <div style={{ width: 24, height: 24, borderRadius: "50%", background: "linear-gradient(135deg,#0ea5e9,#22d3ee)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: "#fff", flexShrink: 0 }}>✓</div>
                    <span style={{ fontSize: 14, color: "#94a3b8" }}>{item}</span>
                  </div>
                ))}
              </div>

              <a href="https://wa.me/971562913000" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "linear-gradient(135deg,#25D366,#128C7E)", color: "#fff", padding: "14px 24px", borderRadius: 12, fontSize: 14, fontWeight: 700, boxShadow: "0 0 20px rgba(37,211,102,0.3)" }}>
                💬 مشاوره رایگان در واتساپ
              </a>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: 52, background: "rgba(14,165,233,0.06)", border: "1px solid rgba(14,165,233,0.2)", borderRadius: 20, padding: "36px 32px", textAlign: "center" }}>
          <h3 style={{ fontSize: 22, fontWeight: 800, color: "#f0f9ff", marginBottom: 12 }}>
            آماده شروع همکاری هستی؟
          </h3>
          <p style={{ color: "#64748b", fontSize: 15, marginBottom: 24, lineHeight: 1.8 }}>
            همین الان با تیم کنجوکو در واتساپ در تماس باش — مشاوره اول رایگانه
          </p>
          <a href="https://wa.me/971562913000" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "linear-gradient(135deg,#25D366,#128C7E)", color: "#fff", padding: "16px 32px", borderRadius: 14, fontSize: 15, fontWeight: 700, boxShadow: "0 0 24px rgba(37,211,102,0.3)" }}>
            💬 شروع مشاوره رایگان
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(14,165,233,0.15)", padding: "28px 24px", position: "relative", zIndex: 1, marginTop: 40 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <p style={{ fontSize: 13, color: "#334155" }}>© ۱۴۰۴ کنجوکو. تمامی حقوق محفوظ است.</p>
          <a href="https://wa.me/971562913000" target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#25D366,#128C7E)", color: "#fff", padding: "9px 18px", borderRadius: 10, fontSize: 13, fontWeight: 700 }}>
            💬 پشتیبانی واتساپ
          </a>
        </div>
      </footer>
    </div>
  );
}