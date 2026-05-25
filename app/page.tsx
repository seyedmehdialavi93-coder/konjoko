"use client";

import { useEffect, useRef, useState } from "react";

// ── DATA ──────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "خانه", href: "#home" },
  { label: "خدمات", href: "#services" },
  { label: "نرخ بازار", href: "#rates" },
  { label: "مراحل همکاری", href: "#steps" },
  { label: "تماس", href: "#support" },
];

const CURRENCIES = [
  {
    flag: "🇺🇸",
    code: "USD",
    name: "دلار آمریکا",
    base: 92350,
    change: 1100,
    up: true,
  },
  {
    flag: "🇦🇪",
    code: "AED",
    name: "درهم امارات",
    base: 25180,
    change: 110,
    up: false,
  },
  {
    flag: "🇨🇳",
    code: "CNY",
    name: "یوان چین",
    base: 12740,
    change: 180,
    up: true,
  },
];

const SERVICES = [
  {
    icon: "💳",
    title: "پرداخت بین‌المللی",
    desc: "انجام پرداخت‌های ارزی برای کسب‌وکارها و افراد با سرعت، امنیت و شفافیت کامل.",
    items: [
      "حواله دلار و درهم",
      "پرداخت به تامین‌کنندگان خارجی",
      "مدیریت ریسک ارزی",
      "گزارش‌دهی شفاف تراکنش",
    ],
  },
  {
    icon: "📦",
    title: "خرید کالا",
    desc: "تامین کالا از دبی، چین، ترکیه و بازارهای جهانی با مذاکره، تضمین کیفیت و پیگیری سفارش.",
    items: [
      "سورسینگ از بازارهای دبی و چین",
      "بازرسی و کنترل کیفیت",
      "مدیریت حمل و نقل",
      "ترخیص و تحویل",
    ],
  },
  {
    icon: "🏢",
    title: "خدمات تجاری",
    desc: "راهکارهای کامل برای کسب‌وکارها شامل مدیریت سفارشات، مذاکره با تامین‌کنندگان و مشاوره.",
    items: [
      "مدیریت سفارشات تجاری",
      "مذاکره با تامین‌کنندگان",
      "مشاوره واردات و صادرات",
      "پشتیبانی اختصاصی B2B",
    ],
  },
];

const STEPS = [
  {
    num: "۱",
    title: "ثبت درخواست",
    desc: "درخواست خود را از طریق واتساپ یا فرم سایت ثبت کنید.",
  },
  {
    num: "۲",
    title: "بررسی توسط کنجوکو",
    desc: "تیم ما درخواست را بررسی کرده و بهترین راهکار را پیشنهاد می‌دهد.",
  },
  {
    num: "۳",
    title: "پرداخت یا خرید",
    desc: "پس از تایید، پرداخت یا خرید کالا با کامل‌ترین امنیت انجام می‌شود.",
  },
  {
    num: "۴",
    title: "تحویل و پشتیبانی",
    desc: "سفارش تحویل می‌گردد و پشتیبانی اختصاصی تا پایان در کنار شماست.",
  },
];

const SUPPORT_FEATURES = [
  { icon: "🤖", text: "هوش مصنوعی هزاران فروشنده را در ثانیه بررسی می‌کند" },
  { icon: "✅", text: "کارشناس انسانی هر معامله را تأیید و پیگیری می‌کند" },
  { icon: "🔒", text: "خرید مطمئن بدون ریسک کلاهبرداری" },
  { icon: "⚡", text: "در کمتر از ۳۰ دقیقه بهترین گزینه را پیدا می‌کنیم" },
];

const TICKER_ITEMS = [
  { text: "دلار آمریکا", code: "USD", price: "۹۲,۳۵۰ تومان", up: true, pct: "۱.۲٪" },
  { text: "درهم امارات", code: "AED", price: "۲۵,۱۸۰ تومان", up: false, pct: "۰.۴٪" },
  { text: "یوان چین", code: "CNY", price: "۱۲,۷۴۰ تومان", up: true, pct: "۰.۸٪" },
  { text: "خدمات پرداخت بین‌المللی", code: "✦", price: "کنجوکو", up: true, pct: "" },
  { text: "خرید کالا از دبی، چین، ترکیه", code: "✦", price: "و بازارهای جهانی", up: true, pct: "" },
];

const WHATSAPP_URL = "https://wa.me/00000000000";

// ── WHATSAPP ICON ─────────────────────────────────────────────────────────────
function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

// ── FADE-IN HOOK ──────────────────────────────────────────────────────────────
function useFadeIn(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return {
    ref,
    style: {
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    },
  };
}

// ── LIVE RATES HOOK ───────────────────────────────────────────────────────────
function useLiveRates() {
  const [rates, setRates] = useState(CURRENCIES.map((c) => ({ ...c })));
  useEffect(() => {
    const id = setInterval(() => {
      setRates((prev) =>
        prev.map((r) => {
          const delta = Math.round((Math.random() - 0.48) * r.base * 0.002);
          return { ...r, base: r.base + delta, change: Math.abs(delta), up: delta >= 0 };
        })
      );
    }, 4000);
    return () => clearInterval(id);
  }, []);
  return rates;
}

// ── MAIN PAGE ─────────────────────────────────────────────────────────────────
export default function KonjokoPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const rates = useLiveRates();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const fade0 = useFadeIn(0);
  const fade1 = useFadeIn(100);
  const fade2 = useFadeIn(200);
  const fade3 = useFadeIn(300);
  const fadeRates = [useFadeIn(0), useFadeIn(100), useFadeIn(200)];
  const fadeServices = [useFadeIn(0), useFadeIn(120), useFadeIn(240)];
  const fadeSteps = [useFadeIn(0), useFadeIn(100), useFadeIn(200), useFadeIn(300)];
  const fadeSupportImg = useFadeIn(0);
  const fadeSupportTxt = useFadeIn(200);

  return (
    <>
      {/* ── GLOBAL STYLES ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; direction: rtl; }
        body {
          font-family: 'Vazirmatn', sans-serif;
          background: #020814;
          color: #f0f9ff;
          overflow-x: hidden;
          direction: rtl;
        }
        a { text-decoration: none; color: inherit; }
        @keyframes orbFloat {
          0%,100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(30px,-40px) scale(1.05); }
          66% { transform: translate(-20px,20px) scale(0.97); }
        }
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.5; transform:scale(0.85); }
        }
        @keyframes glowPulse {
          0%,100% { opacity:0.25; }
          50% { opacity:0.5; }
        }
        @keyframes slideInLeft {
          from { opacity:0; transform:translateX(-60px); }
          to { opacity:1; transform:translateX(0); }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes floatCard1 {
          0%,100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        @keyframes floatCard2 {
          0%,100% { transform: translateY(0px) rotate(1deg); }
          50% { transform: translateY(-14px) rotate(-1deg); }
        }
        @keyframes sparkle {
          0%,100% { opacity:0.3; transform:scale(0.8) rotate(0deg); }
          50% { opacity:1; transform:scale(1.3) rotate(20deg); }
        }
        .orb {
          position: fixed; border-radius: 50%; filter: blur(80px);
          pointer-events: none; z-index: 0;
        }
        .orb-1 { width:500px;height:500px;background:rgba(14,165,233,0.08);top:-200px;right:-150px;animation:orbFloat 12s ease-in-out infinite; }
        .orb-2 { width:400px;height:400px;background:rgba(34,211,238,0.06);bottom:-100px;left:-100px;animation:orbFloat 12s ease-in-out infinite;animation-delay:-4s; }
        .orb-3 { width:300px;height:300px;background:rgba(3,105,161,0.1);top:40%;left:40%;animation:orbFloat 12s ease-in-out infinite;animation-delay:-8s; }
        .ticker-track { display:flex; gap:48px; animation:ticker 24s linear infinite; white-space:nowrap; }
        .pulse-dot { animation: pulse 1.5s ease-in-out infinite; }
        .glow-pulse { animation: glowPulse 3s ease-in-out infinite; }
        .globe-rotate { animation: rotate 20s linear infinite; }
        .float-wa { animation: slideInLeft 0.8s ease 1s both; }
        .glass-card {
          background: rgba(14,165,233,0.07);
          border: 1px solid rgba(14,165,233,0.18);
          border-radius: 20px;
          backdrop-filter: blur(12px);
          transition: all 0.35s ease;
        }
        .glass-card:hover {
          background: rgba(14,165,233,0.13);
          border-color: rgba(14,165,233,0.35);
          box-shadow: 0 0 40px rgba(14,165,233,0.12);
          transform: translateY(-4px);
        }
        .service-icon-wrap { transition: all 0.3s ease; }
        .glass-card:hover .service-icon-wrap {
          background: linear-gradient(135deg,rgba(14,165,233,0.35),rgba(34,211,238,0.2)) !important;
          box-shadow: 0 0 25px rgba(14,165,233,0.3);
          transform: scale(1.08);
        }
        .nav-link {
          color: #94a3b8; font-size:14px; font-weight:500;
          padding: 8px 14px; border-radius:8px;
          transition: all 0.25s ease;
        }
        .nav-link:hover { color:#f0f9ff; background:rgba(14,165,233,0.07); }
        .btn-cta {
          background: linear-gradient(135deg,#0ea5e9,#22d3ee);
          color:#fff; font-family:'Vazirmatn',sans-serif;
          font-size:14px; font-weight:700;
          padding:10px 22px; border-radius:10px;
          box-shadow:0 0 20px rgba(14,165,233,0.35);
          transition:all 0.3s ease; position:relative; overflow:hidden;
          display:inline-flex; align-items:center; border:none; cursor:pointer;
        }
        .btn-cta:hover { transform:translateY(-2px); box-shadow:0 0 35px rgba(14,165,233,0.55); }
        .btn-cta-lg { font-size:15px; font-weight:700; padding:14px 32px; border-radius:12px; }
        .btn-secondary {
          background:rgba(14,165,233,0.07);
          border:1px solid rgba(14,165,233,0.18);
          color:#f0f9ff;
          font-family:'Vazirmatn',sans-serif;
          font-size:15px; font-weight:600;
          padding:14px 28px; border-radius:12px;
          cursor:pointer; display:inline-flex; align-items:center; gap:8px;
          transition:all 0.3s ease; backdrop-filter:blur(10px);
        }
        .btn-secondary:hover {
          background:rgba(14,165,233,0.13);
          border-color:#0ea5e9;
          transform:translateY(-2px);
        }
        .btn-whatsapp {
          display:inline-flex; align-items:center; gap:10px;
          background:linear-gradient(135deg,#25D366,#128C7E);
          color:#fff; font-family:'Vazirmatn',sans-serif;
          font-size:15px; font-weight:700;
          padding:14px 28px; border-radius:12px;
          box-shadow:0 0 30px rgba(37,211,102,0.3);
          transition:all 0.3s ease; border:none; cursor:pointer;
        }
        .btn-whatsapp:hover { transform:translateY(-3px); box-shadow:0 0 45px rgba(37,211,102,0.5); }
        .gradient-text {
          background: linear-gradient(135deg,#0ea5e9,#22d3ee);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @media(max-width:768px){
          .desktop-nav { display:none !important; }
          .hamburger { display:flex !important; }
          .rates-grid { grid-template-columns:1fr !important; }
          .services-grid { grid-template-columns:1fr !important; }
          .support-inner { grid-template-columns:1fr !important; }
          .hero-visual { display:none !important; }
        }
        @media(max-width:640px){
          .steps-grid { grid-template-columns:1fr !important; }
        }
        @media(min-width:769px) and (max-width:1024px){
          .steps-grid { grid-template-columns:repeat(2,1fr) !important; }
          .hero-visual { display:none !important; }
        }
      `}</style>

      {/* ── BACKGROUND ── */}
      <div style={{
        position:"fixed",inset:0,zIndex:0,
        background:"radial-gradient(ellipse 80% 60% at 20% 10%,rgba(14,165,233,0.12) 0%,transparent 60%),radial-gradient(ellipse 60% 50% at 80% 80%,rgba(34,211,238,0.08) 0%,transparent 55%),#020814"
      }}/>
      <div style={{
        position:"fixed",inset:0,zIndex:0,
        backgroundImage:"linear-gradient(rgba(14,165,233,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(14,165,233,0.04) 1px,transparent 1px)",
        backgroundSize:"60px 60px",
        maskImage:"radial-gradient(ellipse 100% 100% at center,black 30%,transparent 80%)",
        WebkitMaskImage:"radial-gradient(ellipse 100% 100% at center,black 30%,transparent 80%)",
      }}/>
      <div className="orb orb-1"/><div className="orb orb-2"/><div className="orb orb-3"/>

      {/* ── MOBILE NAV ── */}
      {mobileOpen && (
        <div style={{
          position:"fixed",inset:0,zIndex:999,
          background:"rgba(2,8,20,0.97)",backdropFilter:"blur(20px)",
          display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:28,
        }}>
          <button onClick={()=>setMobileOpen(false)} style={{
            position:"absolute",top:24,left:24,background:"none",border:"none",
            color:"#94a3b8",fontSize:26,cursor:"pointer",
          }}>✕</button>
          {NAV_LINKS.map(l=>(
            <a key={l.href} href={l.href} onClick={()=>setMobileOpen(false)}
              style={{color:"#f0f9ff",fontSize:20,fontWeight:600}}>
              {l.label}
            </a>
          ))}
          <a href={WHATSAPP_URL} className="btn-cta" onClick={()=>setMobileOpen(false)}>کنجوکو کن ✦</a>
        </div>
      )}

      {/* ── HEADER ── */}
      <header style={{
        position:"fixed",top:0,left:0,right:0,zIndex:100,padding:"0 24px",
        background:scrolled?"rgba(2,8,20,0.85)":"transparent",
        backdropFilter:scrolled?"blur(20px)":"none",
        borderBottom:scrolled?"1px solid rgba(14,165,233,0.18)":"1px solid transparent",
        transition:"all 0.4s ease",
      }}>
        <div style={{maxWidth:1200,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 0"}}>
          {/* Logo */}
          <a href="#home" style={{display:"flex",alignItems:"center",gap:12}}>
            <div style={{
              width:42,height:42,borderRadius:10,
              background:"linear-gradient(135deg,#0ea5e9,#22d3ee)",
              display:"flex",alignItems:"center",justifyContent:"center",
              fontSize:18,fontWeight:900,color:"#fff",
              boxShadow:"0 0 20px rgba(14,165,233,0.4)",
            }}>K</div>
            <div style={{display:"flex",flexDirection:"column"}}>
              <span className="gradient-text" style={{fontSize:17,fontWeight:800,letterSpacing:2}}>KONJOKO</span>
              <span style={{fontSize:12,fontWeight:500,color:"#94a3b8"}}>کنجوکو</span>
            </div>
          </a>
          {/* Desktop Nav */}
          <nav className="desktop-nav" style={{display:"flex",alignItems:"center",gap:8}}>
            {NAV_LINKS.map(l=><a key={l.href} href={l.href} className="nav-link">{l.label}</a>)}
          </nav>
          <a href="#support" className="btn-cta" style={{display:"inline-flex"}}>کنجوکو کن ✦</a>
          {/* Hamburger */}
          <button className="hamburger" onClick={()=>setMobileOpen(true)}
            style={{display:"none",flexDirection:"column",gap:5,background:"none",border:"none",cursor:"pointer",padding:8}}>
            {[0,1,2].map(i=><span key={i} style={{display:"block",width:24,height:2,background:"#94a3b8",borderRadius:2}}/>)}
          </button>
        </div>
      </header>

      {/* ── TICKER ── */}
      <div style={{paddingTop:80}}>
        <div style={{
          background:"rgba(14,165,233,0.05)",
          borderTop:"1px solid rgba(14,165,233,0.18)",
          borderBottom:"1px solid rgba(14,165,233,0.18)",
          padding:"10px 0",overflow:"hidden",position:"relative",zIndex:1,
        }}>
          <div className="ticker-track">
            {[...TICKER_ITEMS,...TICKER_ITEMS].map((item,i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",gap:10,fontSize:12,fontWeight:600,color:"#94a3b8",flexShrink:0}}>
                <span style={{color:"#22d3ee"}}>{item.code}</span>
                {item.text}
                <span style={{color:"#22d3ee"}}>{item.price}</span>
                {item.pct && <span style={{color:item.up?"#10b981":"#ef4444"}}>{item.up?"▲":"▼"} {item.pct}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── HERO ── */}
      <section id="home" style={{
        minHeight:"100vh",display:"flex",alignItems:"center",
        padding:"100px 24px 60px",position:"relative",zIndex:1,overflow:"hidden",
      }}>
        {/* warm glow behind character */}
        <div style={{
          position:"absolute",left:"48%",top:"50%",transform:"translate(-50%,-50%)",
          width:520,height:520,borderRadius:"50%",
          background:"radial-gradient(circle,rgba(251,146,60,0.18) 0%,rgba(234,88,12,0.10) 40%,transparent 70%)",
          filter:"blur(10px)",pointerEvents:"none",
        }}/>
        <div style={{maxWidth:1200,margin:"0 auto",width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",gap:40}}>

          {/* LEFT: Text */}
          <div style={{maxWidth:560,flexShrink:0}}>
            <div ref={fade0.ref} style={{...fade0.style,display:"inline-flex",alignItems:"center",gap:8,
              background:"rgba(14,165,233,0.07)",border:"1px solid rgba(14,165,233,0.18)",
              borderRadius:50,padding:"8px 16px",fontSize:12,fontWeight:600,color:"#22d3ee",marginBottom:28}}>
              <span className="pulse-dot" style={{width:8,height:8,background:"#10b981",borderRadius:"50%",display:"inline-block"}}/>
              پلتفرم تجارت بین‌المللی برای ایرانیان
            </div>
            <h1 ref={fade1.ref} style={{...fade1.style,fontSize:"clamp(28px,4.5vw,54px)",fontWeight:900,lineHeight:1.25,marginBottom:22}}>
              راهکار مدرن برای<br/>
              <span className="gradient-text">خرید، پرداخت</span><br/>
              و تجارت بین‌المللی
            </h1>
            <p ref={fade2.ref} style={{...fade2.style,fontSize:"clamp(14px,1.8vw,16px)",color:"#94a3b8",lineHeight:1.9,maxWidth:480,marginBottom:36}}>
              کنجوکو به کاربران ایرانی، تاجران و کسب‌وکارها کمک می‌کند تا پرداخت‌های بین‌المللی را انجام دهند، کالا از دبی، چین و ترکیه تهیه کنند و سفارشات خود را مدیریت نمایند.
            </p>
            <div ref={fade3.ref} style={{...fade3.style,display:"flex",gap:14,flexWrap:"wrap"}}>
              <a href="#support" className="btn-cta btn-cta-lg">کنجوکو کن ✦</a>
              <a href="#services" className="btn-secondary">مشاهده خدمات ←</a>
            </div>
            <div style={{display:"flex",gap:32,marginTop:48,flexWrap:"wrap"}}>
              {[
                {v:"+ ۵۰۰",l:"مشتری راضی"},
                {v:"۳",l:"ارز بین‌المللی"},
                {v:"۲۴/۷",l:"پشتیبانی واتساپ"},
                {v:"۴+",l:"کشور هدف"},
              ].map((s,i)=>(
                <div key={i}>
                  <div className="gradient-text" style={{fontSize:24,fontWeight:800}}>{s.v}</div>
                  <div style={{fontSize:11,color:"#475569"}}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Gadget Detective Character */}
          <div className="hero-visual" style={{position:"relative",flexShrink:0,width:480,height:580}}>

            {/* BIG golden sun/orb behind */}
            <div style={{
              position:"absolute",top:"38%",left:"50%",transform:"translate(-50%,-50%)",
              width:380,height:380,borderRadius:"50%",zIndex:0,
              background:"radial-gradient(circle,rgba(251,191,36,0.35) 0%,rgba(234,88,12,0.2) 45%,rgba(14,165,233,0.08) 70%,transparent 85%)",
              boxShadow:"0 0 60px rgba(251,191,36,0.25),0 0 120px rgba(234,88,12,0.15),0 0 200px rgba(14,165,233,0.08)",
            }}/>
            {/* outer ring */}
            <div style={{
              position:"absolute",top:"38%",left:"50%",transform:"translate(-50%,-50%)",
              width:410,height:410,borderRadius:"50%",zIndex:0,
              border:"1px solid rgba(251,191,36,0.15)",
            }}/>

            {/* Floating info cards */}
            <div style={{position:"absolute",top:55,right:-5,zIndex:5,animation:"floatCard1 3s ease-in-out infinite",
              background:"linear-gradient(135deg,rgba(14,165,233,0.15),rgba(14,165,233,0.05))",
              border:"1px solid rgba(14,165,233,0.35)",borderRadius:16,padding:"12px 18px",backdropFilter:"blur(16px)",
              boxShadow:"0 8px 32px rgba(14,165,233,0.15)"}}>
              <div style={{fontSize:10,color:"#64748b",marginBottom:4,display:"flex",alignItems:"center",gap:4}}>
                <span>🇺🇸</span> دلار آمریکا
              </div>
              <div style={{fontSize:16,fontWeight:900,color:"#22d3ee",letterSpacing:1}}>$ ۹۲,۳۵۰</div>
              <div style={{fontSize:11,color:"#10b981",marginTop:2,fontWeight:600}}>▲ ۱.۲٪ امروز</div>
            </div>

            <div style={{position:"absolute",top:175,left:-25,zIndex:5,animation:"floatCard2 3.6s ease-in-out infinite",
              background:"linear-gradient(135deg,rgba(251,146,60,0.15),rgba(251,146,60,0.05))",
              border:"1px solid rgba(251,146,60,0.4)",borderRadius:16,padding:"12px 18px",backdropFilter:"blur(16px)",
              boxShadow:"0 8px 32px rgba(251,146,60,0.15)"}}>
              <div style={{fontSize:10,color:"#64748b",marginBottom:4}}>📦 آخرین سفارش</div>
              <div style={{fontSize:14,fontWeight:800,color:"#fb923c"}}>دبی ✈ تهران</div>
              <div style={{fontSize:11,color:"#10b981",marginTop:2,fontWeight:600}}>✓ تایید و ارسال شد</div>
            </div>

            <div style={{position:"absolute",bottom:140,right:-10,zIndex:5,animation:"floatCard1 4.2s ease-in-out infinite 1s",
              background:"linear-gradient(135deg,rgba(251,191,36,0.15),rgba(251,191,36,0.05))",
              border:"1px solid rgba(251,191,36,0.4)",borderRadius:16,padding:"12px 18px",backdropFilter:"blur(16px)",
              boxShadow:"0 8px 32px rgba(251,191,36,0.12)"}}>
              <div style={{fontSize:10,color:"#64748b",marginBottom:4}}>🇨🇳 یوان چین</div>
              <div style={{fontSize:16,fontWeight:900,color:"#fbbf24"}}>¥ ۱۲,۷۴۰</div>
              <div style={{fontSize:11,color:"#10b981",marginTop:2,fontWeight:600}}>▲ ۰.۸٪</div>
            </div>

            <div style={{position:"absolute",bottom:100,left:-15,zIndex:5,animation:"floatCard2 3.9s ease-in-out infinite 0.6s",
              background:"linear-gradient(135deg,rgba(34,211,238,0.12),rgba(34,211,238,0.04))",
              border:"1px solid rgba(34,211,238,0.3)",borderRadius:16,padding:"12px 18px",backdropFilter:"blur(16px)",
              boxShadow:"0 8px 32px rgba(34,211,238,0.1)"}}>
              <div style={{fontSize:10,color:"#64748b",marginBottom:4}}>🇦🇪 درهم امارات</div>
              <div style={{fontSize:16,fontWeight:900,color:"#22d3ee"}}>د.إ ۲۵,۱۸۰</div>
              <div style={{fontSize:11,color:"#ef4444",marginTop:2,fontWeight:600}}>▼ ۰.۴٪</div>
            </div>

            {/* CHARACTER IMAGE */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://i.ibb.co/VWvzd8Xt/konjoko-character-png.jpg"
              alt="کنجو — کاراکتر کنجوکو"
              style={{
                position:"relative",zIndex:2,
                width:"100%",height:"100%",
                objectFit:"contain",
                filter:"drop-shadow(0 20px 40px rgba(251,146,60,0.3)) drop-shadow(0 0 40px rgba(14,165,233,0.15))",
                animation:"floatCard1 4s ease-in-out infinite",
                borderRadius:24,
              }}
            />




          </div>
        </div>
      </section>

      <div style={{height:1,background:"linear-gradient(to right,transparent,rgba(14,165,233,0.18),transparent)"}}/>

      {/* ── RATES ── */}
      <section id="rates" style={{padding:"90px 24px",background:"rgba(5,15,31,0.5)",position:"relative",zIndex:1}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div>
            <div style={{display:"inline-flex",alignItems:"center",gap:8,color:"#22d3ee",fontSize:13,fontWeight:700,letterSpacing:2,marginBottom:14}}>
              <span style={{display:"block",width:24,height:2,background:"linear-gradient(to left,#22d3ee,transparent)"}}/>
              نرخ بازار
            </div>
            <h2 style={{fontSize:"clamp(24px,4vw,38px)",fontWeight:800,marginBottom:14}}>نرخ لحظه‌ای ارزهای بین‌المللی</h2>
            <p style={{fontSize:15,color:"#94a3b8",maxWidth:500,lineHeight:1.8}}>نرخ‌های زیر به‌روزرسانی می‌شوند و صرفاً جهت اطلاع‌رسانی ارائه می‌گردند.</p>
          </div>
          <div className="rates-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20,marginTop:48}}>
            {rates.map((r,i)=>(
              <div key={r.code} ref={fadeRates[i].ref} style={fadeRates[i].style}>
                <div className="glass-card" style={{padding:28,textAlign:"center",position:"relative",overflow:"hidden"}}>
                  <div style={{position:"absolute",top:0,left:0,right:0,height:2,background:"linear-gradient(to right,transparent,#0ea5e9,transparent)"}}/>
                  <div style={{fontSize:32,marginBottom:12}}>{r.flag}</div>
                  <div style={{fontSize:13,fontWeight:700,letterSpacing:2,color:"#94a3b8",marginBottom:6}}>{r.code}</div>
                  <div style={{fontSize:12,color:"#475569",marginBottom:16}}>{r.name}</div>
                  <div className="gradient-text" style={{fontSize:28,fontWeight:800,marginBottom:10}}>
                    {r.base.toLocaleString("fa-IR")}
                  </div>
                  <div style={{
                    display:"inline-flex",alignItems:"center",gap:4,
                    fontSize:12,fontWeight:600,padding:"4px 10px",borderRadius:50,
                    background:r.up?"rgba(16,185,129,0.12)":"rgba(239,68,68,0.12)",
                    color:r.up?"#10b981":"#ef4444",
                  }}>
                    {r.up?"▲":"▼"} {r.change.toLocaleString("fa-IR")} تومان
                  </div>
                  <div style={{fontSize:11,color:"#475569",marginTop:8}}>به‌روز شده: لحظاتی پیش</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{height:1,background:"linear-gradient(to right,transparent,rgba(14,165,233,0.18),transparent)"}}/>

      {/* ── SERVICES ── */}
      <section id="services" style={{padding:"90px 24px",position:"relative",zIndex:1}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div>
            <div style={{display:"inline-flex",alignItems:"center",gap:8,color:"#22d3ee",fontSize:13,fontWeight:700,letterSpacing:2,marginBottom:14}}>
              <span style={{display:"block",width:24,height:2,background:"linear-gradient(to left,#22d3ee,transparent)"}}/>
              خدمات ما
            </div>
            <h2 style={{fontSize:"clamp(24px,4vw,38px)",fontWeight:800,marginBottom:14}}>آنچه کنجوکو برای شما انجام می‌دهد</h2>
            <p style={{fontSize:15,color:"#94a3b8",maxWidth:500,lineHeight:1.8}}>از پرداخت بین‌المللی تا خرید کالا و مدیریت سفارشات، همه‌چیز در یک پلتفرم.</p>
          </div>
          <div className="services-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:24,marginTop:52}}>
            {SERVICES.map((s,i)=>(
              <div key={s.title} ref={fadeServices[i].ref} style={fadeServices[i].style}>
                <div className="glass-card" style={{padding:"36px 28px"}}>
                  <div className="service-icon-wrap" style={{
                    width:56,height:56,
                    background:"linear-gradient(135deg,rgba(14,165,233,0.2),rgba(34,211,238,0.1))",
                    border:"1px solid rgba(14,165,233,0.25)",
                    borderRadius:16,display:"flex",alignItems:"center",justifyContent:"center",
                    fontSize:24,marginBottom:22,
                  }}>{s.icon}</div>
                  <h3 style={{fontSize:18,fontWeight:700,marginBottom:12}}>{s.title}</h3>
                  <p style={{fontSize:14,color:"#94a3b8",lineHeight:1.8}}>{s.desc}</p>
                  <ul style={{listStyle:"none",marginTop:18,display:"flex",flexDirection:"column",gap:8}}>
                    {s.items.map(item=>(
                      <li key={item} style={{fontSize:13,color:"#94a3b8",display:"flex",alignItems:"center",gap:8}}>
                        <span style={{width:6,height:6,background:"#22d3ee",borderRadius:"50%",flexShrink:0,display:"inline-block"}}/>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{height:1,background:"linear-gradient(to right,transparent,rgba(14,165,233,0.18),transparent)"}}/>

      {/* ── STEPS ── */}
      <section id="steps" style={{padding:"90px 24px",background:"rgba(5,15,31,0.4)",position:"relative",zIndex:1}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{textAlign:"center",maxWidth:600,margin:"0 auto 52px"}}>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:8,color:"#22d3ee",fontSize:13,fontWeight:700,letterSpacing:2,marginBottom:14}}>
              مراحل همکاری
            </div>
            <h2 style={{fontSize:"clamp(24px,4vw,38px)",fontWeight:800,marginBottom:14}}>چطور با کنجوکو کار کنیم؟</h2>
            <p style={{fontSize:15,color:"#94a3b8",lineHeight:1.8}}>فرآیند ساده و شفاف، از ثبت درخواست تا تحویل نهایی.</p>
          </div>
          <div className="steps-grid" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:20}}>
            {STEPS.map((step,i)=>(
              <div key={step.num} ref={fadeSteps[i].ref} style={fadeSteps[i].style}>
                <div className="glass-card" style={{padding:"28px 20px",textAlign:"center"}}>
                  <div style={{
                    width:56,height:56,
                    background:"linear-gradient(135deg,#0ea5e9,#22d3ee)",
                    borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",
                    fontSize:20,fontWeight:800,margin:"0 auto 20px",
                    boxShadow:"0 0 25px rgba(14,165,233,0.4)",
                  }}>{step.num}</div>
                  <h3 style={{fontSize:15,fontWeight:700,marginBottom:8}}>{step.title}</h3>
                  <p style={{fontSize:12,color:"#475569",lineHeight:1.7}}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{height:1,background:"linear-gradient(to right,transparent,rgba(14,165,233,0.18),transparent)"}}/>

      {/* ── SUPPORT ── */}
      <section id="support" style={{padding:"90px 24px",position:"relative",zIndex:1}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div className="support-inner" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"center"}}>
            {/* Image */}
            <div ref={fadeSupportImg.ref} style={{...fadeSupportImg.style,display:"flex",justifyContent:"center",position:"relative"}}>
              <div style={{position:"relative"}}>
                <div className="glow-pulse" style={{
                  position:"absolute",inset:-2,borderRadius:24,
                  background:"linear-gradient(135deg,#0ea5e9,#22d3ee,transparent,transparent)",
                  zIndex:0,opacity:0.3,
                }}/>
                <div style={{
                  width:320,height:380,borderRadius:24,overflow:"hidden",position:"relative",zIndex:1,
                  background:"linear-gradient(160deg,rgba(14,165,233,0.15),rgba(3,105,161,0.08))",
                  border:"1px solid rgba(14,165,233,0.18)",
                  boxShadow:"0 0 60px rgba(14,165,233,0.15)",
                }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80&auto=format&fit=crop"
                    alt="پشتیبانی اختصاصی کنجوکو"
                    style={{width:"100%",height:"100%",objectFit:"cover",filter:"saturate(0.8) contrast(1.1)"}}
                    onError={(e)=>{ (e.target as HTMLImageElement).src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&auto=format&fit=crop"; }}
                  />
                  <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(2,8,20,0.6) 0%,transparent 50%)"}}/>
                </div>
                {/* Online badge */}
                <div style={{
                  position:"absolute",top:-14,right:20,zIndex:2,
                  background:"rgba(16,185,129,0.15)",border:"1px solid rgba(16,185,129,0.35)",
                  borderRadius:50,padding:"6px 14px",
                  display:"flex",alignItems:"center",gap:7,
                  fontSize:12,fontWeight:600,color:"#10b981",
                  backdropFilter:"blur(10px)",
                }}>
                  <span className="pulse-dot" style={{width:8,height:8,background:"#10b981",borderRadius:"50%",display:"inline-block"}}/>
                  آنلاین و در دسترس
                </div>
              </div>
            </div>
            {/* Content */}
            <div ref={fadeSupportTxt.ref} style={fadeSupportTxt.style}>
              <div style={{display:"inline-flex",alignItems:"center",gap:8,color:"#22d3ee",fontSize:13,fontWeight:700,letterSpacing:2,marginBottom:14}}>
                <span style={{display:"block",width:24,height:2,background:"linear-gradient(to left,#22d3ee,transparent)"}}/>
                هوش مصنوعی + تخصص انسانی
              </div>
              <h2 style={{fontSize:"clamp(22px,3.5vw,34px)",fontWeight:800,marginBottom:16,lineHeight:1.3}}>
                دیگه ساعت‌ها دنبال<br/>
                <span className="gradient-text">فروشنده معتبر</span> نگرد
              </h2>
              <p style={{fontSize:15,color:"#94a3b8",lineHeight:1.9,marginBottom:28}}>
                کنجوکو با بهره‌گیری از هوش مصنوعی، هزاران فروشنده در دبی، چین و ترکیه را تحلیل می‌کند و در چند ثانیه معتبرترین گزینه را پیدا می‌کند. بعد یک کارشناس انسانی همه چیز را تأیید و پیگیری می‌کند. نتیجه؟ خرید مطمئن، بدون ریسک، بدون اتلاف وقت.
              </p>
              <div style={{display:"flex",flexDirection:"column",gap:14,marginBottom:36}}>
                {SUPPORT_FEATURES.map(f=>(
                  <div key={f.text} style={{display:"flex",alignItems:"center",gap:12,fontSize:14,color:"#94a3b8"}}>
                    <div style={{
                      width:36,height:36,flexShrink:0,
                      background:"rgba(14,165,233,0.07)",border:"1px solid rgba(14,165,233,0.18)",
                      borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,
                    }}>{f.icon}</div>
                    {f.text}
                  </div>
                ))}
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <WhatsAppIcon size={22}/>
                ارتباط در واتساپ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        padding:"48px 24px",
        borderTop:"1px solid rgba(14,165,233,0.18)",
        position:"relative",zIndex:1,
      }}>
        <div style={{maxWidth:1200,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:20}}>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}>
              <div style={{
                width:34,height:34,borderRadius:8,
                background:"linear-gradient(135deg,#0ea5e9,#22d3ee)",
                display:"flex",alignItems:"center",justifyContent:"center",
                fontSize:14,fontWeight:900,color:"#fff",
              }}>K</div>
              <span style={{fontSize:15,fontWeight:700,color:"#94a3b8"}}>KONJOKO | کنجوکو</span>
            </div>
            <p style={{fontSize:13,color:"#475569"}}>پلتفرم تجارت و پرداخت بین‌المللی برای ایرانیان</p>
          </div>
          <div style={{display:"flex",gap:20}}>
            {NAV_LINKS.map(l=>(
              <a key={l.href} href={l.href} style={{fontSize:13,color:"#475569",transition:"color 0.2s"}}
                onMouseEnter={e=>(e.currentTarget.style.color="#0ea5e9")}
                onMouseLeave={e=>(e.currentTarget.style.color="#475569")}>
                {l.label}
              </a>
            ))}
          </div>
          <p style={{fontSize:13,color:"#475569"}}>© ۱۴۰۴ کنجوکو. تمامی حقوق محفوظ است.</p>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ── */}
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="float-wa"
        style={{
          position:"fixed",bottom:28,left:28,zIndex:999,
          display:"flex",alignItems:"center",gap:10,
          background:"linear-gradient(135deg,#25D366,#128C7E)",
          color:"#fff",fontFamily:"'Vazirmatn',sans-serif",
          fontSize:14,fontWeight:700,
          padding:"13px 20px",borderRadius:50,
          boxShadow:"0 4px 30px rgba(37,211,102,0.4)",
          transition:"all 0.3s ease",
        }}
        onMouseEnter={e=>{
          (e.currentTarget as HTMLAnchorElement).style.transform="translateY(-3px) scale(1.02)";
          (e.currentTarget as HTMLAnchorElement).style.boxShadow="0 8px 40px rgba(37,211,102,0.55)";
        }}
        onMouseLeave={e=>{
          (e.currentTarget as HTMLAnchorElement).style.transform="";
          (e.currentTarget as HTMLAnchorElement).style.boxShadow="0 4px 30px rgba(37,211,102,0.4)";
        }}
      >
        <WhatsAppIcon size={22}/>
        پشتیبانی واتساپ
      </a>
    </>
  );
}