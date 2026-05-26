"use client";
import { useState } from "react";

const AI_TEXT_TOOLS = [
  { name: "ChatGPT", color: "#10A37F" },
  { name: "Claude", color: "#D97757" },
  { name: "Gemini", color: "#4285F4" },
  { name: "Grok", color: "#000000" },
  { name: "DeepSeek", color: "#1A73E8" },
  { name: "Perplexity", color: "#20B2AA" },
  { name: "Copilot", color: "#0078D4" },
  { name: "NotebookLM", color: "#4285F4" },
  { name: "Poe", color: "#7B5EA7" },
  { name: "Writesonic", color: "#7C3AED" },
  { name: "Jasper", color: "#FF7043" },
  { name: "Rytr", color: "#FF4B6E" },
  { name: "QuillBot", color: "#43A047" },
  { name: "Wordtune", color: "#6C63FF" },
  { name: "Monica", color: "#0EA5E9" },
  { name: "Sider", color: "#6366F1" },
  { name: "Elicit", color: "#1E293B" },
  { name: "Praktika", color: "#F59E0B" },
  { name: "GenSpark", color: "#EC4899" },
  { name: "Gamma", color: "#8B5CF6" },
];

const AI_VISUAL_TOOLS = [
  { name: "Midjourney", color: "#000000" },
  { name: "DALL-E", color: "#10A37F" },
  { name: "Leonardo.AI", color: "#7C3AED" },
  { name: "Runway", color: "#000000" },
  { name: "ElevenLabs", color: "#1A1A1A" },
  { name: "Synthesia", color: "#6366F1" },
  { name: "Suno", color: "#F59E0B" },
  { name: "Firefly", color: "#FF0000" },
  { name: "Kling AI", color: "#06B6D4" },
  { name: "Hailuo AI", color: "#3B82F6" },
  { name: "Remini", color: "#EF4444" },
  { name: "Captions", color: "#000000" },
  { name: "Kaiber", color: "#8B5CF6" },
  { name: "Fireflies", color: "#EC4899" },
  { name: "Dream.ai", color: "#F97316" },
  { name: "Nano Banana", color: "#84CC16" },
  { name: "Higgsfield", color: "#06B6D4" },
];

const AI_CODE_TOOLS = [
  { name: "GitHub Copilot", color: "#24292E" },
  { name: "Cursor", color: "#000000" },
  { name: "Tabnine", color: "#6366F1" },
  { name: "OpenAI API", color: "#10A37F" },
  { name: "Vercel", color: "#000000" },
  { name: "Lovable", color: "#FF6B6B" },
  { name: "n8n", color: "#FF6600" },
];

const AI_SHARED_TOOLS = [
  { name: "Perplexity", color: "#20B2AA" },
  { name: "Grok", color: "#000000" },
  { name: "Midjourney", color: "#000000" },
];

const SEO_TOOLS = [
  { name: "SEMrush", color: "#FF6D00" },
  { name: "Ahrefs", color: "#FF7043" },
  { name: "Moz Pro", color: "#0085A1" },
  { name: "WooRank", color: "#2196F3" },
  { name: "KWFinder", color: "#FF4B6E" },
  { name: "SEOptimer", color: "#43A047" },
  { name: "NeilPatel", color: "#EF4444" },
  { name: "Ubersuggest", color: "#7C3AED" },
  { name: "Screaming Frog", color: "#4CAF50" },
  { name: "Majestic", color: "#1565C0" },
];

const GAMING_ACCOUNTS = [
  { name: "Xbox Game Pass", color: "#107C10" },
  { name: "Xbox Live Gold", color: "#107C10" },
  { name: "PlayStation Plus", color: "#003087" },
  { name: "Steam", color: "#1B2838" },
  { name: "Epic Games", color: "#2D2D2D" },
  { name: "Battle.net", color: "#148EFF" },
  { name: "Razer Gold", color: "#44D62C" },
  { name: "Twitch Prime", color: "#9146FF" },
  { name: "Nintendo Online", color: "#E4000F" },
  { name: "EA Play", color: "#F4651F" },
];

const GIFT_CARDS_GAMING = [
  { name: "PlayStation", color: "#003087" },
  { name: "Xbox", color: "#107C10" },
  { name: "Steam", color: "#1B2838" },
  { name: "Nintendo eShop", color: "#E4000F" },
  { name: "Razer Gold", color: "#44D62C" },
  { name: "Roblox", color: "#FF0000" },
  { name: "Fortnite V-Bucks", color: "#00D4FF" },
  { name: "Valorant Points", color: "#FF4655" },
  { name: "PUBG UC", color: "#F5A623" },
  { name: "Free Fire", color: "#FF6B00" },
  { name: "League of Legends", color: "#C89B3C" },
  { name: "EA FC Points", color: "#F4651F" },
];

const GIFT_CARDS_PAYMENT = [
  { name: "Visa Gift Card", color: "#1A1F71" },
  { name: "Mastercard", color: "#EB001B" },
  { name: "PayPal", color: "#003087" },
  { name: "Amazon", color: "#FF9900" },
  { name: "eBay", color: "#E53238" },
  { name: "Google", color: "#4285F4" },
  { name: "Paysafecard", color: "#E30613" },
  { name: "Skrill", color: "#862165" },
];

const GIFT_CARDS_APP = [
  { name: "Apple App Store", color: "#000000" },
  { name: "Google Play", color: "#4285F4" },
  { name: "Netflix", color: "#E50914" },
  { name: "Spotify", color: "#1DB954" },
  { name: "YouTube Premium", color: "#FF0000" },
  { name: "Disney+", color: "#113CCF" },
  { name: "ChatGPT Plus", color: "#10A37F" },
  { name: "Adobe CC", color: "#FF0000" },
  { name: "Canva", color: "#00C4CC" },
  { name: "Duolingo Plus", color: "#58CC02" },
  { name: "LinkedIn Premium", color: "#0077B5" },
  { name: "Zoom Pro", color: "#2D8CFF" },
];

const GIFT_CARDS_SHOPPING = [
  { name: "SHEIN", color: "#000000" },
  { name: "Noon", color: "#FEEE00", textColor: "#000" },
  { name: "AliExpress", color: "#FF4747" },
  { name: "IKEA", color: "#0058A3" },
];

const SERVICES = [
  {
    id: "ai",
    icon: "🤖",
    title: "اکانت‌های هوش مصنوعی",
    desc: "خرید اکانت پریمیوم ابزارهای AI برای تولید محتوا، تصویر، کد و موسیقی",
    subs: [
      { id: "ai-text", label: "✍️ تولید محتوای متنی", tools: AI_TEXT_TOOLS },
      { id: "ai-visual", label: "🎨 صوتی و تصویری", tools: AI_VISUAL_TOOLS },
      { id: "ai-code", label: "💻 برنامه‌نویسی و API", tools: AI_CODE_TOOLS },
      { id: "ai-shared", label: "👥 اشتراکی", tools: AI_SHARED_TOOLS },
    ],
  },
  {
    id: "seo",
    icon: "🔍",
    title: "ابزارهای سئو",
    desc: "اکانت پریمیوم ابزارهای حرفه‌ای سئو برای تحلیل، کیورد ریسرچ و بک‌لینک",
    tools: SEO_TOOLS,
  },
  {
    id: "gaming",
    icon: "🎮",
    title: "اکانت بازی",
    desc: "خرید اکانت پلتفرمهای گیمینگ — Xbox، PlayStation، Steam و بیشتر",
    tools: GAMING_ACCOUNTS,
  },
  {
    id: "giftcard",
    icon: "🎁",
    title: "گیفت کارت",
    desc: "انواع گیفت کارت برای بازی، پرداخت آنلاین، اپلیکیشن و فروشگاه",
    subs: [
      { id: "gc-gaming", label: "🎮 گیفت کارت بازی", tools: GIFT_CARDS_GAMING },
      { id: "gc-payment", label: "💳 پرداخت آنلاین", tools: GIFT_CARDS_PAYMENT },
      { id: "gc-app", label: "📱 اپلیکیشن", tools: GIFT_CARDS_APP },
      { id: "gc-shopping", label: "🛒 فروشگاهی", tools: GIFT_CARDS_SHOPPING },
    ],
  },
];

function ToolGrid({ tools }: { tools: { name: string; color: string; textColor?: string }[] }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))", gap: 8, marginTop: 12 }}>
      {tools.map((tool, i) => (
        <div key={i} style={{
          background: "rgba(14,165,233,0.04)", border: "1px solid rgba(14,165,233,0.12)",
          borderRadius: 10, padding: "10px 8px", textAlign: "center",
          transition: "all 0.2s",
        }}
          onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(14,165,233,0.35)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(14,165,233,0.12)"; (e.currentTarget as HTMLDivElement).style.transform = ""; }}
        >
          <div style={{ width: 32, height: 32, borderRadius: 8, background: tool.color, color: tool.textColor || "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 11, margin: "0 auto 6px" }}>
            {tool.name.slice(0, 2)}
          </div>
          <div style={{ fontSize: 10, fontWeight: 600, color: "#94a3b8" }}>{tool.name}</div>
        </div>
      ))}
    </div>
  );
}

export default function PaymentPage() {
  const [activeService, setActiveService] = useState("ai");
  const [activeSub, setActiveSub] = useState("ai-text");

  const currentService = SERVICES.find(s => s.id === activeService);

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
            <a href="#" style={{ color: "#0ea5e9", fontSize: 13, padding: "6px 12px", borderRadius: 8, background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.2)" }}>پرداخت ارزی</a>
            <a href="/#support" style={{ background: "linear-gradient(135deg,#0ea5e9,#22d3ee)", color: "#fff", fontSize: 13, fontWeight: 700, padding: "8px 18px", borderRadius: 9 }}>کنجوکو کن ✦</a>
          </div>
        </div>
      </header>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>

        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.2)", borderRadius: 50, padding: "7px 16px", fontSize: 12, fontWeight: 600, color: "#22d3ee", marginBottom: 20 }}>
            <span className="pulse" style={{ width: 7, height: 7, background: "#10b981", borderRadius: "50%", display: "inline-block" }} />
            پرداخت ارزی آنی
          </div>
          <h1 style={{ fontSize: "clamp(26px,4vw,46px)", fontWeight: 900, color: "#f0f9ff", marginBottom: 14, lineHeight: 1.3 }}>
            خرید{" "}
            <span style={{ background: "linear-gradient(135deg,#0ea5e9,#22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              اکانت و گیفت کارت
            </span>
          </h1>
          <p style={{ color: "#64748b", fontSize: 15, maxWidth: 500, margin: "0 auto" }}>
            اکانت‌های پریمیوم AI، ابزارهای سئو، بازی و گیفت کارت با پرداخت ریالی
          </p>
        </div>

        {/* Service Tabs */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12, marginBottom: 32 }}>
          {SERVICES.map(s => (
            <button key={s.id} onClick={() => { setActiveService(s.id); setActiveSub(s.subs ? s.subs[0].id : ""); }}
              style={{ padding: "18px 16px", borderRadius: 14, textAlign: "right",
                background: activeService === s.id ? "linear-gradient(135deg,rgba(14,165,233,0.2),rgba(34,211,238,0.1))" : "rgba(14,165,233,0.04)",
                border: activeService === s.id ? "1px solid rgba(14,165,233,0.4)" : "1px solid rgba(14,165,233,0.12)",
                boxShadow: activeService === s.id ? "0 0 24px rgba(14,165,233,0.15)" : "none",
                transition: "all 0.2s" }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: activeService === s.id ? "#f0f9ff" : "#94a3b8", marginBottom: 4 }}>{s.title}</div>
              <div style={{ fontSize: 11, color: "#475569", lineHeight: 1.5 }}>{s.desc}</div>
            </button>
          ))}
        </div>

        {/* Content */}
        {currentService && (
          <div className="fade-up" style={{ background: "rgba(14,165,233,0.04)", border: "1px solid rgba(14,165,233,0.15)", borderRadius: 20, padding: 28 }}>

            {/* Sub tabs */}
            {currentService.subs && (
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
                {currentService.subs.map(sub => (
                  <button key={sub.id} onClick={() => setActiveSub(sub.id)}
                    style={{ padding: "8px 16px", borderRadius: 20, fontSize: 13, fontWeight: 500,
                      background: activeSub === sub.id ? "linear-gradient(135deg,#0ea5e9,#22d3ee)" : "rgba(14,165,233,0.06)",
                      color: activeSub === sub.id ? "#fff" : "#64748b",
                      border: activeSub === sub.id ? "none" : "1px solid rgba(14,165,233,0.15)",
                      boxShadow: activeSub === sub.id ? "0 0 12px rgba(14,165,233,0.3)" : "none" }}>
                    {sub.label}
                  </button>
                ))}
              </div>
            )}

            {/* Tools Grid */}
            {currentService.subs ? (
              <ToolGrid tools={currentService.subs.find(s => s.id === activeSub)?.tools || []} />
            ) : (
              <ToolGrid tools={(currentService as any).tools || []} />
            )}

            {/* CTA */}
            <div style={{ marginTop: 28, padding: 20, background: "rgba(14,165,233,0.06)", border: "1px solid rgba(14,165,233,0.15)", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
              <div>
                <p style={{ color: "#f0f9ff", fontWeight: 700, fontSize: 15, marginBottom: 4 }}>برای خرید آماده‌ای؟</p>
                <p style={{ color: "#64748b", fontSize: 13 }}>از طریق واتساپ سفارشت رو ثبت کن</p>
              </div>
              <a href="https://wa.me/971562913000" target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#25D366,#128C7E)", color: "#fff", padding: "12px 22px", borderRadius: 12, fontSize: 14, fontWeight: 700, boxShadow: "0 0 20px rgba(37,211,102,0.3)" }}>
                💬 سفارش از واتساپ
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