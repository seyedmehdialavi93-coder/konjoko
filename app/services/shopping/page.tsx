"use client";
import { useState } from "react";

const WHOLESALE_SITES = [
  { name: "Alibaba", country: "CN", color: "#FF6A00", region: "چین" },
  { name: "1688", country: "CN", color: "#E31837", region: "چین" },
  { name: "DHgate", country: "CN", color: "#0066CC", region: "چین" },
  { name: "Made-in-China", country: "CN", color: "#C8102E", region: "چین" },
  { name: "Global Sources", country: "CN", color: "#003087", region: "چین" },
  { name: "IndiaMART", country: "IN", color: "#FF6B35", region: "هند" },
  { name: "TradeIndia", country: "IN", color: "#1B5E20", region: "هند" },
  { name: "Amazon Business", country: "US", color: "#FF9900", region: "آمریکا" },
  { name: "ThomasNet", country: "US", color: "#003366", region: "آمریکا" },
  { name: "Faire", country: "EU", color: "#5B4FCF", region: "اروپا" },
  { name: "Europages", country: "EU", color: "#003399", region: "اروپا" },
  { name: "EC21", country: "AS", color: "#00897B", region: "آسیا" },
  { name: "HKTDC", country: "HK", color: "#C8102E", region: "آسیا" },
  { name: "Trendyol B2B", country: "TR", color: "#F27A1A", region: "ترکیه" },
  { name: "Hepsiburada B2B", country: "TR", color: "#FF6000", region: "ترکیه" },
];

const RETAIL_SITES = [
  { name: "AliExpress", country: "CN", color: "#FF4747", region: "چین" },
  { name: "Temu", country: "CN", color: "#FF5733", region: "چین" },
  { name: "Shein", country: "CN", color: "#222222", region: "چین" },
  { name: "JD.com", country: "CN", color: "#C0392B", region: "چین" },
  { name: "Amazon", country: "US", color: "#FF9900", region: "آمریکا" },
  { name: "eBay", country: "US", color: "#E53238", region: "آمریکا" },
  { name: "Walmart", country: "US", color: "#0071CE", region: "آمریکا" },
  { name: "Etsy", country: "US", color: "#F56400", region: "آمریکا" },
  { name: "Sephora", country: "US", color: "#111111", region: "آمریکا" },
  { name: "Noon", country: "AE", color: "#F5C518", region: "امارات" },
  { name: "Amazon.ae", country: "AE", color: "#FF9900", region: "امارات" },
  { name: "Sephora.ae", country: "AE", color: "#111111", region: "امارات" },
  { name: "Namshi", country: "AE", color: "#6C3483", region: "امارات" },
  { name: "Flipkart", country: "IN", color: "#2874F0", region: "هند" },
  { name: "Meesho", country: "IN", color: "#A020F0", region: "هند" },
  { name: "ASOS", country: "GB", color: "#111111", region: "اروپا" },
  { name: "Zalando", country: "EU", color: "#FF6900", region: "اروپا" },
  { name: "Trendyol", country: "TR", color: "#F27A1A", region: "ترکیه" },
  { name: "Hepsiburada", country: "TR", color: "#FF6000", region: "ترکیه" },
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

  return (
    <div style={{ minHeight: "100vh", background: "#F7F5F0", fontFamily: "Tahoma, sans-serif", direction: "rtl" }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .card { transition: all 0.2s; }
        .card:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(0,0,0,0.1) !important; }
        button { cursor: pointer; border: none; font-family: inherit; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .fade { animation: fadeIn 0.3s ease; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .spin { animation: spin 1s linear infinite; display: inline-block; }
        a { color: #C8A96E; }
      `}</style>

      <div style={{ background: "#1A1A1A", padding: "18px 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: 8, background: "linear-gradient(135deg, #C8A96E, #E8C98A)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: "#1A1A1A" }}>K</div>
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 17 }}>کنجوکو</span>
        </div>
        <span style={{ color: "#C8A96E", fontSize: 13 }}>خرید هوشمند از سراسر جهان</span>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "36px 20px" }}>

        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <h1 style={{ fontSize: 30, fontWeight: 800, color: "#1A1A1A", marginBottom: 10 }}>خرید کالا از سراسر جهان</h1>
          <p style={{ color: "#888", fontSize: 15 }}>از بهترین سایت‌های بین‌المللی براتون سرچ می‌کنیم</p>
        </div>

        <div style={{ display: "flex", background: "#fff", borderRadius: 12, padding: 5, marginBottom: 28, boxShadow: "0 2px 10px rgba(0,0,0,0.06)", gap: 4 }}>
          {[{ id: "wholesale", label: "خرید عمده", icon: "📦", desc: "B2B" }, { id: "retail", label: "خرید خرد", icon: "🛍️", desc: "B2C" }].map((m) => (
            <button key={m.id} onClick={() => { setMode(m.id); setActiveFilter("همه"); setResult(""); }}
              style={{ flex: 1, padding: "12px 16px", borderRadius: 8, background: mode === m.id ? "#1A1A1A" : "transparent", color: mode === m.id ? "#fff" : "#888", transition: "all 0.2s" }}>
              <div style={{ fontSize: 20, marginBottom: 3 }}>{m.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 14 }}>{m.label}</div>
              <div style={{ fontSize: 11, opacity: 0.6 }}>{m.desc}</div>
            </button>
          ))}
        </div>

        <div style={{ background: "#fff", borderRadius: 14, padding: 22, marginBottom: 24, boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
            <h2 style={{ fontSize: 15, fontWeight: 700, color: "#1A1A1A" }}>سایت‌هایی که سرچ می‌کنیم</h2>
            <span style={{ background: "#F0EDE6", color: "#8B7355", fontSize: 11, padding: "3px 9px", borderRadius: 20, fontWeight: 600 }}>{filtered.length} سایت</span>
          </div>
          <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 14 }}>
            {FILTERS.map((f) => (
              <button key={f} onClick={() => { setActiveFilter(f); setResult(""); }}
                style={{ padding: "5px 12px", borderRadius: 20, fontSize: 12, background: activeFilter === f ? "#1A1A1A" : "#F7F5F0", color: activeFilter === f ? "#fff" : "#666", fontWeight: activeFilter === f ? 600 : 400 }}>
                {f}
              </button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))", gap: 8 }}>
            {filtered.map((site, i) => (
              <div key={i} className="card" style={{ background: "#F7F5F0", borderRadius: 10, padding: "10px 8px", textAlign: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                <div style={{ width: 32, height: 32, borderRadius: 7, background: site.color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 12, margin: "0 auto 6px" }}>
                  {site.name.slice(0, 2)}
                </div>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#333" }}>{site.name}</div>
                <div style={{ fontSize: 10, color: "#aaa", marginTop: 2 }}>{site.country}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: "#1A1A1A", borderRadius: 14, padding: 24, marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 5 }}>
            <h2 style={{ color: "#fff", fontSize: 17, fontWeight: 700 }}>جستجوی هوشمند</h2>
            {activeFilter !== "همه" && (
              <span style={{ background: "#C8A96E", color: "#1A1A1A", fontSize: 11, padding: "3px 10px", borderRadius: 20, fontWeight: 700 }}>{activeFilter}</span>
            )}
          </div>
          <p style={{ color: "#777", fontSize: 12, marginBottom: 14 }}>
            {activeFilter === "همه" ? "از همه سایت‌های بین‌المللی" : "فقط از سایت‌های " + activeFilter}
          </p>
          <div style={{ display: "flex", gap: 8 }}>
            <input value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === "Enter" && search()}
              placeholder="اسم کالا یا لینک محصول..."
              style={{ flex: 1, padding: "13px 16px", borderRadius: 9, border: "2px solid " + (focused ? "#C8A96E" : "transparent"), background: "#2A2A2A", color: "#fff", fontFamily: "inherit", fontSize: 14, outline: "none" }}
              onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} />
            <button onClick={search} disabled={loading || !query.trim()}
              style={{ padding: "13px 22px", borderRadius: 9, background: "linear-gradient(135deg, #C8A96E, #E8C98A)", color: "#1A1A1A", fontWeight: 700, fontSize: 14, opacity: loading || !query.trim() ? 0.6 : 1 }}>
              {loading ? <span className="spin">⟳</span> : "جستجو"}
            </button>
          </div>
          <div style={{ display: "flex", gap: 7, marginTop: 12, flexWrap: "wrap" }}>
            {["لپتاپ گیمینگ", "ساعت هوشمند", "لوازم آرایشی", "پارچه عمده"].map((ex) => (
              <button key={ex} onClick={() => setQuery(ex)}
                style={{ padding: "4px 11px", borderRadius: 20, fontSize: 11, background: "#2A2A2A", color: "#777", border: "1px solid #333" }}>
                {ex}
              </button>
            ))}
          </div>
        </div>

        {loading && (
          <div style={{ background: "#fff", borderRadius: 14, padding: 28, textAlign: "center", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
            <div style={{ fontSize: 28, marginBottom: 10 }}>🔍</div>
            <p style={{ color: "#888", fontSize: 13 }}>در حال جستجو...</p>
          </div>
        )}

        {result && !loading && (
          <div className="fade" style={{ background: "#fff", borderRadius: 14, padding: 24, boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1A1A1A", marginBottom: 14 }}>
              نتیجه: <span style={{ color: "#C8A96E" }}>{query}</span>
            </h3>
            <div style={{ fontSize: 13, lineHeight: 2, color: "#333", whiteSpace: "pre-wrap" }}>{result}</div>
            <button onClick={() => { setResult(""); setQuery(""); }}
              style={{ marginTop: 16, padding: "9px 18px", borderRadius: 7, background: "#F7F5F0", color: "#888", fontSize: 12 }}>
              جستجوی جدید
            </button>
          </div>
        )}
      </div>
    </div>
  );
}