'use client';

import React from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';

const FEATURES = [
  {
    title: 'Buy',
    description: 'Verified titles, transparent acquisitions with zero compromise on due diligence.',
    icon: 'home_work',
    accent: '#C9A84C',
    number: '01',
    tag: 'Ownership',
  },
  {
    title: 'Rent',
    description: 'Secure leases, thoroughly vetted landlords, and contracts that protect you.',
    icon: 'key',
    accent: '#7EC8A4',
    number: '02',
    tag: 'Tenancy',
  },
  {
    title: 'Short-let',
    description: 'Flexible premium stays across Nigeria\'s finest verified properties.',
    icon: 'night_shelter',
    accent: '#A8C4E0',
    number: '03',
    tag: 'Stays',
  },
] as const;

const PROPERTY_IMAGES = [
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80',
];

const TICKER = ['Verified Titles', 'Trusted Landlords', 'Diaspora Ready', 'Secure Acquisitions', 'Premium Properties', 'Zero Compromises'];

/* ── Animated counter ── */
const Counter = ({ to, suffix = '' }: { to: number; suffix?: string }) => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let v = 0;
    const step = Math.ceil(to / 55);
    const t = setInterval(() => {
      v += step;
      if (v >= to) { setCount(to); clearInterval(t); } else { setCount(v); }
    }, 22);
    return () => clearInterval(t);
  }, [to]);
  return <>{count.toLocaleString()}{suffix}</>;
};

/* ── Mouse-tracking spotlight ── */
const useMouseSpotlight = () => {
  const [pos, setPos] = React.useState({ x: 50, y: 40 });
  React.useEffect(() => {
    const h = (e: MouseEvent) => setPos({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    window.addEventListener('mousemove', h, { passive: true });
    return () => window.removeEventListener('mousemove', h);
  }, []);
  return pos;
};

const Hero: React.FC = () => {
  const [animationData, setAnimationData] = React.useState<object | null>(null);
  const [activeCard, setActiveCard] = React.useState<number | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const mouse = useMouseSpotlight();

  React.useEffect(() => {
    fetch('/Home.json').then(r => r.json()).then(setAnimationData).catch(() => setAnimationData(null));
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Outfit:wght@300;400;500;600&display=swap');

        :root {
          --gold: #C9A84C;
          --ink: #06100A;
          --surface: #0B1510;
          --cream: #F0EBE1;
          --sage: #7EC8A4;
          --sky: #A8C4E0;
        }

        /* Ambient blobs */
        @keyframes floatA { 0%,100% { transform: translate(0,0) scale(1); opacity:0.5; } 50% { transform: translate(12px,-18px) scale(1.05); opacity:0.75; } }
        @keyframes floatB { 0%,100% { transform: translate(0,0) scale(1); opacity:0.45; } 50% { transform: translate(-10px,14px) scale(1.04); opacity:0.65; } }
        .blob-a { animation: floatA 10s ease-in-out infinite; }
        .blob-b { animation: floatB 13s ease-in-out infinite 2s; }
        .blob-c { animation: floatA 16s ease-in-out infinite 5s; }

        /* Image strips */
        @keyframes stripFwd { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes stripRev { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .strip-fwd { animation: stripFwd 60s linear infinite; }
        .strip-rev { animation: stripRev 70s linear infinite; }

        /* Ticker */
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .ticker-run { animation: ticker 26s linear infinite; }

        /* Gold shimmer */
        @keyframes shimmer { 0% { background-position: -300% center; } 100% { background-position: 300% center; } }
        .gold-shimmer {
          background: linear-gradient(90deg, #b8922a 0%, #f5d982 30%, #C9A84C 50%, #f5d982 70%, #b8922a 100%);
          background-size: 300% auto;
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 5s linear infinite;
        }

        /* Grain */
        .hero-grain::before {
          content: '';
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='250' height='250' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 20;
        }

        /* Card */
        .feature-card { transition: transform 0.45s cubic-bezier(0.23,1,0.32,1), box-shadow 0.45s ease, border-color 0.4s ease; }
        .feature-card:hover { transform: translateY(-10px); }

        /* CTA pulse */
        @keyframes ctaPulse { 0%,100% { box-shadow: 0 0 0 0 rgba(201,168,76,0.5), 0 6px 28px rgba(201,168,76,0.35); } 60% { box-shadow: 0 0 0 10px rgba(201,168,76,0), 0 6px 28px rgba(201,168,76,0.35); } }
        .cta-pulse { animation: ctaPulse 2.8s ease-out infinite; }

        /* Vertical text */
        .vtext { writing-mode: vertical-rl; text-orientation: mixed; }

        /* Stat separator */
        .stat-sep { position: relative; }
        .stat-sep::after { content: ''; position: absolute; right: 0; top: 20%; height: 60%; width: 1px; background: rgba(201,168,76,0.15); }
      `}</style>

      <div
        ref={containerRef}
        className="hero-grain relative min-h-screen flex flex-col overflow-hidden"
        style={{ backgroundColor: 'var(--ink)', fontFamily: "'Outfit', sans-serif" }}
      >

        {/* ══ AMBIENT LIGHT SYSTEM ══ */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* Mouse spotlight */}
          <div
            className="absolute inset-0 transition-all duration-1000 ease-out"
            style={{ background: `radial-gradient(ellipse 60% 45% at ${mouse.x}% ${mouse.y}%, rgba(201,168,76,0.065) 0%, transparent 65%)` }}
          />
          {/* Ambient blobs */}
          <div className="blob-a absolute rounded-full" style={{ width: 720, height: 720, top: -240, left: -180, background: 'radial-gradient(circle, rgba(201,168,76,0.10) 0%, transparent 65%)' }} />
          <div className="blob-b absolute rounded-full" style={{ width: 560, height: 560, bottom: -120, right: -80, background: 'radial-gradient(circle, rgba(45,106,79,0.11) 0%, transparent 65%)' }} />
          <div className="blob-c absolute rounded-full" style={{ width: 380, height: 380, top: '45%', left: '55%', background: 'radial-gradient(circle, rgba(168,196,224,0.07) 0%, transparent 65%)' }} />

          {/* Fine grid */}
          <svg className="absolute inset-0 w-full h-full" opacity={0.022}>
            <defs>
              <pattern id="g" width="56" height="56" patternUnits="userSpaceOnUse">
                <path d="M56 0L0 0 0 56" fill="none" stroke="#C9A84C" strokeWidth="0.6"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#g)"/>
          </svg>

          {/* Concentric arcs — top right */}
          <svg className="absolute top-0 right-0" width="480" height="480" viewBox="0 0 480 480" fill="none" opacity={0.07}>
            <defs>
              <linearGradient id="ag" x1="0" y1="0" x2="480" y2="480" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#C9A84C"/>
                <stop offset="100%" stopColor="#C9A84C" stopOpacity="0"/>
              </linearGradient>
            </defs>
            {[380, 290, 200, 115].map((r, i) => (
              <circle key={i} cx="480" cy="0" r={r} stroke="url(#ag)" strokeWidth="0.7"/>
            ))}
          </svg>
          {/* Concentric arcs — bottom left */}
          <svg className="absolute bottom-0 left-0" width="380" height="380" viewBox="0 0 380 380" fill="none" opacity={0.055}>
            {[300, 210, 130].map((r, i) => (
              <circle key={i} cx="0" cy="380" r={r} stroke="#7EC8A4" strokeWidth="0.7"/>
            ))}
          </svg>
        </div>

        {/* ══ PARALLAX IMAGE STRIPS ══ */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
          <div className="absolute w-full overflow-hidden" style={{ top: '3%', height: 190, opacity: 0.8 }}>
            <div className="strip-fwd flex gap-4 h-full" style={{ width: 'max-content' }}>
              {[...PROPERTY_IMAGES, ...PROPERTY_IMAGES].map((src, i) => (
                <div key={i} className="h-full rounded-xl overflow-hidden flex-shrink-0" style={{ width: 270 }}>
                  <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute w-full overflow-hidden" style={{ bottom: '16%', height: 165, opacity: 0.13 }}>
            <div className="strip-rev flex gap-4 h-full" style={{ width: 'max-content' }}>
              {[...PROPERTY_IMAGES.slice().reverse(), ...PROPERTY_IMAGES.slice().reverse()].map((src, i) => (
                <div key={i} className="h-full rounded-xl overflow-hidden flex-shrink-0" style={{ width: 250 }}>
                  <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ MASTER OVERLAY ══ */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{ background: 'linear-gradient(180deg, rgba(6,16,10,0.80) 0%, rgba(6,16,10,0.52) 22%, rgba(6,16,10,0.52) 55%, rgba(6,16,10,0.92) 78%, rgba(6,16,10,1) 100%)' }}
        />

        {/* ══ SIDE LABELS ══ */}
        <div className="absolute fixed left-5 top-[45%] -translate-y-1/2 z-10 hidden xl:flex flex-col items-center gap-3">
          <div style={{ width: 1, height: 56, background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.35))' }} />
          <span className="vtext text-[9px] tracking-[0.4em] uppercase font-light" style={{ color: 'rgba(201,168,76,0.45)' }}>Est. 2024 · Lagos</span>
          <div style={{ width: 1, height: 56, background: 'linear-gradient(to bottom, rgba(201,168,76,0.35), transparent)' }} />
        </div>
        
        <div className="absolute fixed right-5 top-[45%] -translate-y-1/2 z-10 hidden xl:flex flex-col items-center gap-3">
          <div style={{ width: 1, height: 56, background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.35))' }} />
          <span className="vtext text-[9px] tracking-[0.4em] uppercase font-light" style={{ color: 'rgba(201,168,76,0.45)' }}>Trust · Verified</span>
          <div style={{ width: 1, height: 56, background: 'linear-gradient(to bottom, rgba(201,168,76,0.35), transparent)' }} />
        </div>

        {/* ══ HERO CONTENT ══ */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center text-center  px-4 sm:px-8 h-screen"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -18, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-10"
            style={{
              background: 'rgba(201,168,76,0.07)',
              border: '1px solid rgba(201,168,76,0.28)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#C9A84C', boxShadow: '0 0 8px rgba(201,168,76,0.9)', flexShrink: 0, display: 'inline-block' }} />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase" style={{ color: '#C9A84C' }}>
              Nigeria's Trust-First Property Platform
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 42 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, ease: [0.23, 1, 0.32, 1], delay: 0.08 }}
            className="max-w-5xl leading-[1.0] tracking-[-0.015em]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.8rem, 7.8vw, 6.8rem)',
              fontWeight: 600,
              color: 'var(--cream)',
            }}
          >
            Secure Your{' '}
            <span
              className="italic font-light"
              style={{ color: 'rgba(240,235,225,0.5)', fontWeight: 300 }}
            >
              Piece of
            </span>
            <br />
            <span className="gold-shimmer">Nigeria</span>
            {' '}
            <span className="italic font-light" style={{ color: 'rgba(240,235,225,0.5)', fontWeight: 300 }}>with</span>
            {' '}
            <span className="italic" style={{ color: '#7EC8A4', fontWeight: 400 }}>
              Confidence
            </span>
          </motion.h1>

          {/* Animated rule */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.3, delay: 0.55, ease: [0.23, 1, 0.32, 1] }}
            style={{
              height: 1, width: 180, marginTop: 28, marginBottom: 22,
              background: 'linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.65) 50%, transparent 100%)',
              transformOrigin: 'center',
            }}
          />

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.28 }}
            className="max-w-[480px] leading-[1.75] font-light"
            style={{ fontSize: 'clamp(0.95rem, 1.7vw, 1.12rem)', color: 'rgba(240,235,225,0.58)' }}
          >
            Verified titles, transparent acquisitions built for locals and the global diaspora who refuse to take risks with their heritage.
          </motion.p>

          {/* Stats block */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.5 }}
            className="flex mt-12 rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(201,168,76,0.06)',
              border: '1px solid rgba(201,168,76,0.18)',
              backdropFilter: 'blur(20px)',
            }}
          >
            {[
              { to: 4200, suffix: '+', label: 'Verified Listings' },
              { to: 98, suffix: '%', label: 'Title Clearance' },
              { to: 12, suffix: ' States', label: 'Nigeria-Wide' },
              { to: 2400, suffix: '+', label: 'Diaspora Clients' },
            ].map((s, i) => (
              <div
                key={i}
                className={i < 3 ? 'stat-sep' : ''}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  padding: '18px 28px',
                  background: i % 2 === 0 ? 'rgba(255,255,255,0.025)' : 'transparent',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 'clamp(1.4rem, 2.8vw, 2.1rem)',
                    fontWeight: 600, color: 'var(--cream)', lineHeight: 1,
                  }}
                >
                  <Counter to={s.to} suffix={s.suffix} />
                </span>
                <span
                  className="text-[9px] tracking-[0.22em] uppercase font-medium mt-1.5"
                  style={{ color: 'rgba(201,168,76,0.65)' }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <button
              className="cta-pulse flex items-center gap-2.5 px-9 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:brightness-110"
              style={{
                background: 'linear-gradient(135deg, #D4AE55 0%, #A07830 100%)',
                color: 'var(--ink)',
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              <span>Explore Properties</span>
              <span className="material-icons text-[17px]"><ArrowRight/></span>
            </button>
            <button
              className="flex items-center gap-2.5 px-9 py-3.5 rounded-full font-medium text-sm tracking-wide transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(255,255,255,0.04)',
                color: 'var(--cream)',
                fontFamily: "'Outfit', sans-serif",
                border: '1px solid rgba(201,168,76,0.28)',
                backdropFilter: 'blur(8px)',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.55)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.28)')}
            >
              <span className="material-icons text-[17px]" style={{ color: '#C9A84C' }}><PlayCircle/></span>
              <span>How it works</span>
            </button>
          </motion.div>
        </motion.div>

        {/* ══ GOLD TICKER ══ */}
        <motion.div
          className="absolute bottom-0 z-10 w-full overflow-hidden mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          style={{
            borderTop: '1px solid rgba(201,168,76,0.14)',
            borderBottom: '1px solid rgba(201,168,76,0.14)',
            padding: '9px 0',
            background: 'rgba(201,168,76,0.04)',
          }}
        >
          <div className="ticker-run flex whitespace-nowrap gap-10" style={{ width: 'max-content' }}>
            {[...TICKER, ...TICKER, ...TICKER, ...TICKER].map((t, i) => (
              <span
                key={i}
                className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase font-medium"
                style={{ color: 'rgba(201,168,76,0.58)' }}
              >
                <svg width="3" height="3" viewBox="0 0 3 3"><circle cx="1.5" cy="1.5" r="1.5" fill="#C9A84C" fillOpacity="0.7" /></svg>
                {t}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </>
  );
};

export default Hero;