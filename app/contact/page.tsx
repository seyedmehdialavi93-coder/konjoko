"use client";
import { useState } from "react";

const SERVICES = [
  { id: "shopping", label: "🛍️ خرید کالا", desc: "خرید از سایت‌های بین‌المللی" },
  { id: "payment", label: "💳 پرداخت ارزی", desc: "اکانت، گیفت کارت و پرداخت" },
  { id: "business", label: "🏢 خدمات تجاری", desc: "سورسینگ، حمل و مشاوره" },
  { id: "other", label: "💬 سایر", desc: "سوال یا درخواست دیگه" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", desc: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.service) return;
    const serviceLabel = SERVICES.find(s => s.id === form.service)?.label || form.service;
    const text = `سلام کنجوکو 👋%0A%0Aاسم: ${form.name}%0Aشماره: ${form.phone}%0Aخدمت: ${serviceLabel}%0Aدرخواست: ${form.desc || "توضیحی وارد نشده"}`;
    window.open(`https://wa.me/971562913000?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#020814", fontFamily: "'Vazirmatn', Tahoma, sans-serif", direction: "rtl" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        button { cursor: pointer; border: none; font-family: inherit; }
        a { text-decoration: none; }
        input, textarea { font-family: inherit; }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.85)} }
        .pulse { animation: pulse 1.5s ease-in-out infinite; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 0.4s ease; }
        .service-card { transition: all 0.2s ease; cursor: pointer; }
        .service-card:hover { transform: translateY(-2px); }
        .input-field:focus { border-color: #0ea5e9 !important; box-shadow: 0 0 0 3px rgba(14,165,233,0.1) !important; }
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
            <a href="/services/business" style={{ color: "#94a3b8", fontSize: 13, padding: "6px 12px", borderRadius: 8 }}>خدمات تجاری</a>
            <a href="#" style={{ color: "#0ea5e9", fontSize: 13, padding: "6px 12px", borderRadius: 8, background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.2)" }}>ثبت درخواست</a>
          </div>
        </div>
      </header>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto", padding: "52px 24px" }}>

        {!submitted ? (
          <div className="fade-up">
            {/* Hero */}
            <div style={{ textAlign: "center", marginBottom: 44 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.2)", borderRadius: 50, padding: "7px 16px", fontSize: 12, fontWeight: 600, color: "#22d3ee", marginBottom: 20 }}>
                <span className="pulse" style={{ width: 7, height: 7, background: "#10b981", borderRadius: "50%", display: "inline-block" }} />
                پاسخ در کمتر از ۳۰ دقیقه
              </div>
              <h1 style={{ fontSize: "clamp(24px,4vw,40px)", fontWeight: 900, color: "#f0f9ff", marginBottom: 12, lineHeight: 1.3 }}>
                ثبت{" "}
                <span style={{ background: "linear-gradient(135deg,#0ea5e9,#22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  درخواست
                </span>
              </h1>
              <p style={{ color: "#64748b", fontSize: 15, lineHeight: 1.8 }}>
                اطلاعاتت رو بنویس — تیم کنجوکو در واتساپ پیگیری می‌کنه
              </p>
            </div>

            {/* Form */}
            <div style={{ background: "rgba(14,165,233,0.04)", border: "1px solid rgba(14,165,233,0.15)", borderRadius: 20, padding: 32 }}>

              {/* Name */}
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#94a3b8", marginBottom: 8 }}>اسم شما *</label>
                <input className="input-field" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="مثلاً: علی رضایی"
                  style={{ width: "100%", padding: "13px 16px", borderRadius: 10, border: "1px solid rgba(14,165,233,0.2)", background: "rgba(14,165,233,0.05)", color: "#f0f9ff", fontSize: 14, outline: "none", transition: "all 0.2s" }} />
              </div>

              {/* Phone */}
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#94a3b8", marginBottom: 8 }}>شماره واتساپ *</label>
                <input className="input-field" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                  placeholder="مثلاً: ۰۹۱۲۱۲۳۴۵۶۷"
                  style={{ width: "100%", padding: "13px 16px", borderRadius: 10, border: "1px solid rgba(14,165,233,0.2)", background: "rgba(14,165,233,0.05)", color: "#f0f9ff", fontSize: 14, outline: "none", transition: "all 0.2s" }} />
              </div>

              {/* Service */}
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#94a3b8", marginBottom: 8 }}>نوع خدمت *</label>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 10 }}>
                  {SERVICES.map(s => (
                    <div key={s.id} className="service-card" onClick={() => setForm({ ...form, service: s.id })}
                      style={{ padding: "14px 16px", borderRadius: 12, border: form.service === s.id ? "1px solid rgba(14,165,233,0.5)" : "1px solid rgba(14,165,233,0.15)", background: form.service === s.id ? "rgba(14,165,233,0.12)" : "rgba(14,165,233,0.04)", boxShadow: form.service === s.id ? "0 0 16px rgba(14,165,233,0.15)" : "none" }}>
                      <div style={{ fontSize: 16, marginBottom: 4 }}>{s.label}</div>
                      <div style={{ fontSize: 11, color: "#475569" }}>{s.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div style={{ marginBottom: 28 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#94a3b8", marginBottom: 8 }}>توضیحات درخواست</label>
                <textarea className="input-field" value={form.desc} onChange={e => setForm({ ...form, desc: e.target.value })}
                  placeholder="مثلاً: میخوام ۵۰ تا کیف چرم از علی‌بابا بخرم، بودجه ۲۰۰۰ دلار..."
                  rows={4}
                  style={{ width: "100%", padding: "13px 16px", borderRadius: 10, border: "1px solid rgba(14,165,233,0.2)", background: "rgba(14,165,233,0.05)", color: "#f0f9ff", fontSize: 14, outline: "none", resize: "vertical", transition: "all 0.2s" }} />
              </div>

              {/* Submit */}
              <button onClick={handleSubmit} disabled={!form.name || !form.phone || !form.service}
                style={{ width: "100%", padding: "16px", borderRadius: 12, background: "linear-gradient(135deg,#25D366,#128C7E)", color: "#fff", fontSize: 15, fontWeight: 700, boxShadow: "0 0 24px rgba(37,211,102,0.3)", opacity: !form.name || !form.phone || !form.service ? 0.5 : 1, transition: "all 0.2s", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                💬 ارسال در واتساپ
              </button>

              <p style={{ textAlign: "center", fontSize: 12, color: "#334155", marginTop: 12 }}>
                با کلیک، مستقیم به واتساپ کنجوکو هدایت میشی
              </p>
            </div>
          </div>
        ) : (
          <div className="fade-up" style={{ textAlign: "center", padding: "60px 24px" }}>
            <div style={{ fontSize: 64, marginBottom: 20 }}>🎉</div>
            <h2 style={{ fontSize: 26, fontWeight: 800, color: "#f0f9ff", marginBottom: 12 }}>درخواست ثبت شد!</h2>
            <p style={{ color: "#64748b", fontSize: 15, lineHeight: 1.8, marginBottom: 32 }}>
              تیم کنجوکو در واتساپ باهات در تماسه — معمولاً در کمتر از ۳۰ دقیقه پاسخ میده
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", service: "", desc: "" }); }}
                style={{ padding: "12px 24px", borderRadius: 10, background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.2)", color: "#0ea5e9", fontSize: 14, fontWeight: 600 }}>
                ثبت درخواست جدید
              </button>
              <a href="/" style={{ padding: "12px 24px", borderRadius: 10, background: "linear-gradient(135deg,#0ea5e9,#22d3ee)", color: "#fff", fontSize: 14, fontWeight: 700 }}>
                بازگشت به خانه
              </a>
            </div>
          </div>
        )}
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