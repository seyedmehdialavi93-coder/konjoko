"use client";
import { useState } from "react";

const WHOLESALE_SITES = [
  { name: "Alibaba", country: "🇨🇳", color: "#FF6A00", region: "چین" },
  { name: "1688", country: "🇨🇳", color: "#E31837", region: "چین" },
  { name: "DHgate", country: "🇨", color: "#0066CC", region: "چین" },
  { name: "Made-in-China", country: "🇨🇳", color: "#C8102E", region: "چین" },
  { name: "Global Sources", country: "🇨🇳", color: "#003087", region: "چین" },
  { name: "IndiaMART", country: "🇮🇳", color: "#FF6B35", region: "هند" },
  { name: "TradeIndia", country: "🇮🇳", color: "#1B5E20", region: "هند" },
  { name: "Amazon Business", country: "🇺🇸", color: "#FF9900", region: "آمریکا" },
  { name: "ThomasNet", country: "🇺🇸", color: "#003366", region: "آمریکا" },
  { name: "Faire", country: "🇪🇺", color: "#5B4FCF", region: "اروپا" },
  { name: "Europages", country: "🇪🇺", color: "#003399", region: "اروپا" },
  { name: "EC21", country: "🌏", color: "#00897B", region: "آسیا" },
  { name: "HKTDC", country: "🇭🇰", color: "#C8102E", region: "آسیا" },
  { name: "Trendyol B2B", country: "🇹🇷", color: "#F27A1A", region: "ترکیه" },
  { name: "Hepsiburada B2B", country: "🇹🇷", color: "#FF6000", region: "ترکیه" },
];

const RETAIL_SITES = [
  { name: "AliExpress", country: "🇨🇳", color: "#FF4747", region: "چین" },
  { name: "Temu", country: "🇨🇳", color: "#FF5733", region: "چین" },
  { name: "Shein", country: "🇨🇳", color: "#222222", region: "چین" },
  { name: "JD.com", country: "🇨🇳", color: "#C0392B", region: "چین" },
  { name: "Amazon", country: "🇺", color: "#FF9900", region: "آمریکا" },
  { name: "eBay", country: "🇺🇸", color: "#E53238", region: "آمریکا" },
  { name: "Walmart", country: "🇺🇸", color: "#0071CE", region: "آمریکا" },
  { name: "Etsy", country: "🇺🇸", color: "#F56400", region: "آمریکا" },
  { name: "Sephora", country: "🇺🇸", color: "#111111", region: "آمریکا" },
  { name: "Noon", country: "🇦🇪", color: "#F5C518", region: "امارات" },
  { name: "Amazon.ae", country: "🇦🇪", color: "#FF9900", region: "امارات" },
  { name: "Sephora.ae", country: "🇦🇪", color: "#111111", region: "امارات" },
  { name: "Namshi", country: "🇦🇪", color: "#6C3483", region: "امارات" },
  { name: "Flipkart", country: "🇮🇳", color: "#2874F0", region: "هند" },
  { name: "Meesho", country: "🇮🇳", color: "#A020F0", region: "هند" },
  { name: "ASOS", country: "🇬🇧", color: "#111111", region: "اروپا" },
  { name: "Zalando", country: "🇪", color: "#FF6900", region: "اروپا" },
  { name: "Trendyol", country: "🇹🇷", color: "#F27A1A", region: "ترکیه" },
  { name: "Hepsiburada", country: "🇹🇷", color: "#FF6000", region: "ترکیه" },
];

const FILTERS = ["همه", "چین", "هند", "آمریکا", "امارات", "اروپا", "ترکیه", "آسیا"];

export default function ShoppingPage() {
  const [mode, setMode] = useState("wholesale");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [activeFilter, setActiveFilter] = useState("همه");
  const [focused, setFocused] = useState(false);

  const sites = mode === "wholesale" ? WHOLESALE_SITES : RETAIL_SITES;
  const filtered = activeFilter === "همه" ? sites : sites.filter((s) => s.region === activeFilter);

  const search = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResult("");
    const modeLabel = mode === "wholesale" ? "عمده B2B" : "خرد B2C";
    const siteList = filtered.map((s) => s.name).join(", ");
    const region = activeFilter === "همه" ? "همه کشورها" : activeFilter;
    try {
      const res = await fetch("/api/konjoko", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: query,
          context: "نوع: " + modeLabel + " | کشور: " + region + " | سایت‌ها: " + siteList,
        }),
      });
      const data = await res.json();
      setResult(data.reply || "خطا");
    } catch (e) {
      setResult("خطایی پیش اومد.");
    }
    setLoading(false);
  };

  const renderResult = (text: string) => {
    return text.split("\n").map((line, i) => {
      const urlMatch = line.match(/(https?:\/\/[^\s]+)/);
      if (urlMatch) {
        const url = urlMatch[1];
        const label = line.replace(url, "").replace(/\*\*/g, "").trim();
        return (
          <p key={i} style={{ marginBottom: 8, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            {label && <span style={{ color: "#334155" }}>{label}</span>}
            <a href={url} target="_blank" rel="noopener noreferrer"
              style={{ color: "#0ea5e9", textDecoration: "none", fontWeight: 600, fontSize: 13,
                background: "rgba(14,165,233,0.08)", padding: "3px 10px", borderRadius: 20,
                border: "1px solid rgba(14,165,233,0.2)" }}>
              باز کردن ↗
            </a>
          </p>
        );
      }
      if (!line.trim()) return <br key={i} />;
      return (
        <p key={i} style={{ marginBottom: 6, lineHeight: 1.8, color: "#334155" }}>
          {line.replace(/\*\*/g, "")}
        </p>
      );
    });
  };

  return (
    <div style={{ minHeight: "100vh", background: "#020814", fontFamily: "'Vazirmatn', Tahoma, sans-serif", direction: "rtl" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { direction: rtl; }
        .site-card { transition: all 0.25s ease; cursor: default; }
        .site-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(14,165,233,0.15) !important; border-color: rgba(14,165,233,0.35) !important; }
        button { cursor: pointer; border: none; font-family: inherit; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 0.4s ease; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .spin { animation: spin 1s linear infinite; display: inline-block; }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.85)} }
        .pulse { animation: pulse 1.5s ease-in-out infinite; }
        .filter-btn { transition: all 0.15s ease; }
        .filter-btn:hover { background: rgba(14,165,233,0.15) !important; color: #f0f9ff !important; }
        .mode-btn { transition: all 0.2s ease; }
        a { text-decoration: none; }
      `}</style>

      {/* Background */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0,
        background: "radial-gradient(ellipse 80% 60% at 20% 10%, rgba(14,165,233,0.1) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(34,211,238,0.06) 0%, transparent 55%), #020814"
      }} />
      <div style={{
        position: "fixed", inset: 0, zIndex: 0,
        backgroundImage: "linear-gradient(rgba(14,165,233,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(14,165,233,0.03) 1px,transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Header */}
      <header style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(2,8,20,0.85)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(14,165,233,0.18)", padding: "0 28px",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 0" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 38, height: 38, borderRadius: 9, background: "linear-gradient(135deg,#0ea5e9,#22d3ee)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, color: "#fff", fontSize: 16, boxShadow: "0 0 16px rgba(14,165,233,0.4)" }}>K</div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 800, background: "linear-gradient(135deg,#0ea5e9,#22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: 1 }}>KONJOKO</div>
              <div style={{ fontSize: 11, color: "#64748b" }}>کنجوکو</div>
            </div>
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <a href="/" style={{ color: "#94a3b8", fontSize: 13, padding: "6px 12px", borderRadius: 8, transition: "all 0.2s" }}>خانه</a>
            <a href="#" style={{ color: "#0ea5e9", fontSize: 13, padding: "6px 12px", borderRadius: 8, background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.2)" }}>خرید کالا</a>
            <a href="/#support" style={{ background: "linear-gradient(135deg,#0ea5e9,#22d3ee)", color: "#fff", fontSize: 13, fontWeight: 700, padding: "8px 18px", borderRadius: 9, boxShadow: "0 0 16px rgba(14,165,233,0.3)" }}>کنجوکو کن ✦</a>
          </div>
        </div>
      </header>

      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>

          {/* Hero */}
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.2)", borderRadius: 50, padding: "7px 16px", fontSize: 12, fontWeight: 600, color: "#22d3ee", marginBottom: 20 }}>
              <span className="pulse" style={{ width: 7, height: 7, background: "#10b981", borderRadius: "50%", display: "inline-block" }} />
              جستجوی هوشمند بین‌المللی
            </div>
            <h1 style={{ fontSize: "clamp(26px,4vw,46px)", fontWeight: 900, color: "#f0f9ff", marginBottom: 14, lineHeight: 1.3 }}>
              خرید کالا از{" "}
              <span style={{ background: "linear-gradient(135deg,#0ea5e9,#22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                سراسر جهان
              </span>
            </h1>
            <p style={{ color: "#64748b", fontSize: 15, maxWidth: 500, margin: "0 auto" }}>
              AI کنجوکو بین بهترین سایت‌های بین‌المللی برات سرچ می‌کنه
            </p>
          </div>

          {/* Mode Toggle */}
          <div style={{ display: "flex", background: "rgba(14,165,233,0.05)", border: "1px solid rgba(14,165,233,0.15)", borderRadius: 16, padding: 5, marginBottom: 36, gap: 4, maxWidth: 500, margin: "0 auto 36px" }}>
            {[
              { id: "wholesale", label: "خرید عمده", icon: "📦", desc: "B2B" },
              { id: "retail", label: "خرید خرد", icon: "🛍️", desc: "B2C" },
            ].map((m) => (
              <button key={m.id} className="mode-btn" onClick={() => { setMode(m.id); setActiveFilter("همه"); setResult(""); }}
                style={{ flex: 1, padding: "14px 20px", borderRadius: 12,
                  background: mode === m.id ? "linear-gradient(135deg,#0ea5e9,#22d3ee)" : "transparent",
                  color: mode === m.id ? "#fff" : "#64748b",
                  boxShadow: mode === m.id ? "0 0 20px rgba(14,165,233,0.3)" : "none" }}>
                <div style={{ fontSize: 20, marginBottom: 3 }}>{m.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{m.label}</div>
                <div style={{ fontSize: 11, opacity: 0.7 }}>{m.desc}</div>
              </button>
            ))}
          </div>

          {/* Sites */}
          <div style={{ background: "rgba(14,165,233,0.04)", border: "1px solid rgba(14,165,233,0.15)", borderRadius: 20, padding: 28, marginBottom: 28 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
              <h2 style={{ fontSize: 15, fontWeight: 700, color: "#f0f9ff" }}>
                🌐 سایت‌هایی که سرچ می‌کنیم
              </h2>
              <span style={{ background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.2)", color: "#22d3ee", fontSize: 11, padding: "3px 10px", borderRadius: 20, fontWeight: 600 }}>
                {filtered.length} سایت
              </span>
            </div>

            {/* Filters */}
            <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 20 }}>
              {FILTERS.map((f) => (
                <button key={f} className="filter-btn" onClick={() => { setActiveFilter(f); setResult(""); }}
                  style={{ padding: "6px 14px", borderRadius: 20, fontSize: 12, fontWeight: 500,
                    background: activeFilter === f ? "linear-gradient(135deg,#0ea5e9,#22d3ee)" : "rgba(14,165,233,0.06)",
                    color: activeFilter === f ? "#fff" : "#64748b",
                    border: activeFilter === f ? "none" : "1px solid rgba(14,165,233,0.15)",
                    boxShadow: activeFilter === f ? "0 0 12px rgba(14,165,233,0.3)" : "none" }}>
                  {f}
                </button>
              ))}
            </div>

            {/* Site Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))", gap: 10 }}>
              {filtered.map((site, i) => (
                <div key={i} className="site-card" style={{
                  background: "rgba(14,165,233,0.04)", border: "1px solid rgba(14,165,233,0.12)",
                  borderRadius: 12, padding: "14px 10px", textAlign: "center",
                }}>
                  <div style={{ width: 36, height: 36, borderRadius: 9, background: site.color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 13, margin: "0 auto 8px", boxShadow: "0 4px 12px " + site.color + "44" }}>
                    {site.name.slice(0, 2)}
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "#cbd5e1", marginBottom: 2 }}>{site.name}</div>
                  <div style={{ fontSize: 10, color: "#475569" }}>{site.country}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Search Box */}
          <div style={{ background: "rgba(14,165,233,0.06)", border: "1px solid rgba(14,165,233,0.2)", borderRadius: 20, padding: 28, marginBottom: 24, boxShadow: "0 0 40px rgba(14,165,233,0.08)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
              <h2 style={{ color: "#f0f9ff", fontSize: 17, fontWeight: 800 }}>
                🔍 جستجوی هوشمند
              </h2>
              {activeFilter !== "همه" && (
                <span style={{ background: "linear-gradient(135deg,#0ea5e9,#22d3ee)", color: "#fff", fontSize: 11, padding: "4px 12px", borderRadius: 20, fontWeight: 700 }}>
                  {activeFilter}
                </span>
              )}
            </div>
            <p style={{ color: "#475569", fontSize: 13, marginBottom: 18 }}>
              {activeFilter === "همه" ? "از همه سایت‌های بین‌المللی سرچ می‌کنه" : "فقط از سایت‌های " + activeFilter + " سرچ می‌کنه"}
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              <input value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === "Enter" && search()}
                placeholder="اسم کالا یا لینک محصول..."
                style={{ flex: 1, padding: "14px 18px", borderRadius: 12,
                  border: "1px solid " + (focused ? "#0ea5e9" : "rgba(14,165,233,0.2)"),
                  background: "rgba(14,165,233,0.05)", color: "#f0f9ff",
                  fontFamily: "inherit", fontSize: 14, outline: "none", transition: "border-color 0.2s",
                  boxShadow: focused ? "0 0 0 3px rgba(14,165,233,0.1)" : "none" }}
                onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} />
              <button onClick={search} disabled={loading || !query.trim()}
                style={{ padding: "14px 24px", borderRadius: 12,
                  background: "linear-gradient(135deg,#0ea5e9,#22d3ee)",
                  color: "#fff", fontWeight: 700, fontSize: 14,
                  boxShadow: "0 0 20px rgba(14,165,233,0.3)",
                  opacity: loading || !query.trim() ? 0.6 : 1,
                  transition: "all 0.2s" }}>
                {loading ? <span className="spin">⟳</span> : "جستجو"}
              </button>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 14 }}>
              {["لپتاپ گیمینگ", "ساعت هوشمند", "لوازم آرایشی", "پارچه عمده"].map((ex) => (
                <button key={ex} onClick={() => setQuery(ex)}
                  style={{ padding: "5px 12px", borderRadius: 20, fontSize: 11,
                    background: "rgba(14,165,233,0.05)", color: "#64748b",
                    border: "1px solid rgba(14,165,233,0.15)", transition: "all 0.15s" }}>
                  {ex}
                </button>
              ))}
            </div>
          </div>

          {/* Loading */}
          {loading && (
            <div style={{ background: "rgba(14,165,233,0.04)", border: "1px solid rgba(14,165,233,0.15)", borderRadius: 20, padding: 36, textAlign: "center" }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>🔍</div>
              <p style={{ color: "#64748b", fontSize: 14 }}>
                در حال جستجو در سایت‌های {activeFilter !== "همه" ? activeFilter : "بین‌المللی"}...
              </p>
            </div>
          )}

          {/* Result */}
          {result && !loading && (
            <div className="fade-up" style={{ background: "rgba(14,165,233,0.04)", border: "1px solid rgba(14,165,233,0.2)", borderRadius: 20, padding: 28, boxShadow: "0 0 40px rgba(14,165,233,0.08)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, paddingBottom: 16, borderBottom: "1px solid rgba(14,165,233,0.15)" }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#0ea5e9,#22d3ee)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, boxShadow: "0 0 16px rgba(14,165,233,0.3)" }}>✨</div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#f0f9ff" }}>
                    نتیجه برای: <span style={{ background: "linear-gradient(135deg,#0ea5e9,#22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{query}</span>
                  </h3>
                  {activeFilter !== "همه" && <span style={{ fontSize: 11, color: "#475569" }}>فیلتر: {activeFilter}</span>}
                </div>
              </div>
              <div style={{ fontSize: 14, color: "#94a3b8" }}>{renderResult(result)}</div>
              <button onClick={() => { setResult(""); setQuery(""); }}
                style={{ marginTop: 20, padding: "9px 20px", borderRadius: 10,
                  background: "rgba(14,165,233,0.06)", border: "1px solid rgba(14,165,233,0.2)",
                  color: "#64748b", fontSize: 13, transition: "all 0.2s" }}>
                جستجوی جدید
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(14,165,233,0.15)", padding: "28px 24px", position: "relative", zIndex: 1 }}>
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