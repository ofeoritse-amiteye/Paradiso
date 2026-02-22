'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Badge, BadgeCheck, BedDouble, House, Key, KeyRound, ShieldCheck, User, UserCheck, Verified } from 'lucide-react';
import { BiPurchaseTag } from 'react-icons/bi';

const WHY_TRANSACT = [
  {
    title: 'Buy',
    description: 'Verified titles, transparent acquisitions with zero compromise on due diligence.',
    icon: <BiPurchaseTag className="text-2xl"/>,
    accent: '#C9A84C',
    number: '01',
    tag: 'Ownership',
  },
  {
    title: 'Rent',
    description: 'Secure leases, thoroughly vetted landlords, and contracts that protect you.',
    icon: <KeyRound/>,
    accent: '#7EC8A4',
    number: '02',
    tag: 'Tenancy',
  },
  {
    title: 'Short-let',
    description: "Flexible premium stays across Nigeria's finest verified properties.",
    icon: <BedDouble/>,
    accent: '#A8C4E0',
    number: '03',
    tag: 'Stays',
  },
] as const;

const PLATFORM_FEATURES = [
  {
    icon: <Verified/>,
    title: 'Verified Titles',
    description: 'Every property undergoes a rigorous physical check and title verification with the Land Registry.',
    accent: '#2D6A4F',
    number: '01',
    tag: 'verified',
  },
  {
    icon: <UserCheck/>,
    title: 'ID-Checked Agents',
    description: 'We only partner with registered realtors whose identities and licenses have been fully vetted by our security team.',
    accent: '#C9A84C',
    number: '02',
    tag: 'Secure',
  },
  {
    icon: <ShieldCheck/>,
    title: 'Secure Escrow',
    description: 'Funds are held in a secure escrow account and only released when transaction milestones are verified.',
    accent: '#A8C4E0',
    number: '03',
    tag: 'Safe',
  },
] as const;

const Features: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="pt-6 relative" style={{ backgroundColor: '#06100A' }}>
      <div className="w-full ">
        {/* ══ WHY TRANSACT ON PARADISO ══ */}
        <div className="text-center ">
          <span
            className="inline-block text-[11px] font-semibold tracking-[0.22em] uppercase rounded-full px-4 py-1.5 mb-6"
            style={{ color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)', background: 'rgba(201,168,76,0.08)' }}
          >
            Safety First
          </span>
          <h2
            className="text-4xl font-bold mt-4 text-[#F0EBE1]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Why Transact on Paradiso?
          </h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto" style={{ color: 'rgba(240,235,225,0.7)' }}>
            We prioritize your security in every transaction, eliminating the risks traditionally associated with Nigerian real estate.
          </p>
        </div>

        {/* ══ WHY TRANSACT CARDS (Buy / Rent / Short-let) ══ */}
        <motion.div
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 mt-12 pb-6"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.14, delayChildren: 0.65 } }, hidden: {} }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {PLATFORM_FEATURES.map((item, i) => (
              <motion.div
                key={item.title}
                className="group feature-card relative"
                variants={{
                  hidden: { opacity: 0, y: 44 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.23, 1, 0.32, 1] } },
                }}
                onMouseEnter={() => setActiveCard(i)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div
                  className="relative h-full rounded-2xl p-7 overflow-hidden"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    backdropFilter: 'blur(18px)',
                    border: `1px solid ${activeCard === i ? item.accent + '45' : 'rgba(255,255,255,0.07)'}`,
                    boxShadow: activeCard === i
                      ? `0 20px 60px rgba(0,0,0,0.45), 0 0 0 1px ${item.accent}30`
                      : '0 8px 40px rgba(0,0,0,0.28)',
                    transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
                  }}
                >
                  {/* Hover radial glow */}
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                    style={{ background: `radial-gradient(ellipse 85% 75% at 50% 115%, ${item.accent}14, transparent)` }}
                  />

                  {/* Ghost number */}
                  <span
                    className="absolute -top-5 -right-2 font-bold leading-none select-none pointer-events-none"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '9.5rem',
                      color: item.accent,
                      opacity: activeCard === i ? 0.11 : 0.04,
                      transition: 'opacity 0.45s ease',
                    }}
                  >
                    {item.number}
                  </span>

                  {/* Tag pill */}
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-5 text-[10px] tracking-[0.18em] uppercase font-semibold"
                    style={{
                      background: `${item.accent}12`,
                      color: item.accent,
                      border: `1px solid ${item.accent}22`,
                    }}
                  >
                    {item.tag}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-350 group-hover:scale-110 group-hover:rotate-3"
                    style={{ background: `${item.accent}16` }}
                  >
                    <span className="material-icons text-xl" style={{ color: item.accent }}>{item.icon}</span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[1.65rem] font-semibold mb-2 leading-tight"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--cream)', letterSpacing: '-0.01em' }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-[1.7] font-light" style={{ color: 'rgba(240,235,225,0.52)' }}>
                    {item.description}
                  </p>

                  {/* Bottom action strip */}
                  <div
                    className="mt-6 pt-5 flex items-center justify-between"
                    style={{ borderTop: `1px solid ${item.accent}16` }}
                  >
                    <span
                      className="text-[10px] tracking-[0.22em] uppercase font-semibold transition-all duration-300 opacity-50 group-hover:opacity-100"
                      style={{ color: item.accent }}
                    >
                      Explore
                    </span>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 opacity-50 group-hover:opacity-100 group-hover:scale-110"
                      style={{ background: `${item.accent}16`, color: item.accent }}
                    >
                      <span className="material-icons text-[15px]"><ArrowRight/></span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ══ FEATURES (Verified Titles, Agents, Escrow) ══ */}
        <div className="text-center  mb-6">
          <h2
            className="text-4xl font-bold text-[#F0EBE1]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Features
          </h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto" style={{ color: 'rgba(240,235,225,0.7)' }}>
            Security and transparency built into every step.
          </p>
        </div>

        <motion.div
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-6"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }, hidden: {} }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {WHY_TRANSACT.map((item, i) => (
            <motion.div
              key={item.title}
              className="group feature-card relative"
              variants={{
                hidden: { opacity: 0, y: 44 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.23, 1, 0.32, 1] } },
              }}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div
                className="relative h-full rounded-2xl p-7 overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(18px)',
                  border: `1px solid ${activeCard === i ? item.accent + '45' : 'rgba(255,255,255,0.07)'}`,
                  boxShadow: activeCard === i
                    ? `0 20px 60px rgba(0,0,0,0.45), 0 0 0 1px ${item.accent}30`
                    : '0 8px 40px rgba(0,0,0,0.28)',
                  transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
                }}
              >
                {/* Hover radial glow */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  style={{ background: `radial-gradient(ellipse 85% 75% at 50% 115%, ${item.accent}14, transparent)` }}
                />

                {/* Ghost number */}
                <span
                  className="absolute -top-5 -right-2 font-bold leading-none select-none pointer-events-none"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '9.5rem',
                    color: item.accent,
                    opacity: activeCard === i ? 0.11 : 0.04,
                    transition: 'opacity 0.45s ease',
                  }}
                >
                  {item.number}
                </span>

                {/* Tag pill */}
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-5 text-[10px] tracking-[0.18em] uppercase font-semibold"
                  style={{
                    background: `${item.accent}12`,
                    color: item.accent,
                    border: `1px solid ${item.accent}22`,
                  }}
                >
                  {item.tag}
                </div>

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-350 group-hover:scale-110 group-hover:rotate-3"
                  style={{ background: `${item.accent}16` }}
                >
                  <span className="material-icons text-xl" style={{ color: item.accent }}>{item.icon}</span>
                </div>

                {/* Title */}
                <h3
                  className="text-[1.65rem] font-semibold mb-2 leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--cream)', letterSpacing: '-0.01em' }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-[1.7] font-light" style={{ color: 'rgba(240,235,225,0.52)' }}>
                  {item.description}
                </p>

                {/* Bottom action strip */}
                <div
                  className="mt-6 pt-5 flex items-center justify-between"
                  style={{ borderTop: `1px solid ${item.accent}16` }}
                >
                  <span
                    className="text-[10px] tracking-[0.22em] uppercase font-semibold transition-all duration-300 opacity-50 group-hover:opacity-100"
                    style={{ color: item.accent }}
                  >
                    Explore
                  </span>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 opacity-50 group-hover:opacity-100 group-hover:scale-110"
                    style={{ background: `${item.accent}16`, color: item.accent }}
                  >
                    <span className="material-icons text-[15px]"><ArrowRight/></span>
                  </div>
                </div>
              </div>
            </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
