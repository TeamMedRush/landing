"use client";

import Image from "next/image";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white font-sans">

      {/* ── PWA INSTALL BANNER (mobile only) ── */}
      <div className="flex md:hidden items-center gap-3 px-4 py-2.5 bg-sky-50 border-b border-sky-100">
        <div className="w-9 h-9 rounded-xl bg-cyan-600 flex items-center justify-center shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>
        <p className="flex-1 text-[13px] font-semibold text-gray-800 leading-tight">
          ⚡ Add MedRush to your Home Screen for instant access!
        </p>
        <button className="shrink-0 px-5 py-1.5 bg-amber-500 hover:bg-amber-600 text-white text-[13px] font-bold rounded-full transition-colors">
          Install
        </button>
      </div>

      {/* ── NAVBAR ── */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-6 md:px-10 py-3">

          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            {/* M Icon */}
            <div className="flex items-center gap-1.5">
              <div className="w-9 h-9 rounded-lg bg-cyan-600 flex items-center justify-center">
                <span className="text-white font-black text-xl leading-none">M</span>
                <span className="text-emerald-400 font-black text-sm leading-none -ml-0.5 -mt-2">+</span>
              </div>
              <span className="text-cyan-700 font-black text-xl tracking-wide">MEDRUSH</span>
            </div>
            <span className="hidden md:block text-sm text-gray-400 border-l border-gray-300 pl-3 font-medium">
              Pharmacy Quick-Commerce
            </span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
            <li>
              <a href="#" className="text-sm font-semibold text-cyan-600 nav-active">Home</a>
            </li>
            <li>
              <a href="#" className="text-sm font-medium text-gray-600 hover:text-cyan-600 transition-colors">How it Works</a>
            </li>
            <li>
              <a href="#" className="text-sm font-medium text-gray-600 hover:text-cyan-600 transition-colors">Medicine Categories</a>
            </li>
            <li>
              <a href="#" className="text-sm font-medium text-gray-600 hover:text-cyan-600 transition-colors">Help</a>
            </li>
          </ul>

          {/* Desktop icons */}
          <div className="hidden md:flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-cyan-600 transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-cyan-600 transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-1 text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
            <a href="#" className="text-sm font-semibold text-cyan-600">Home</a>
            <a href="#" className="text-sm text-gray-700">How it Works</a>
            <a href="#" className="text-sm text-gray-700">Medicine Categories</a>
            <a href="#" className="text-sm text-gray-700">Help</a>
          </div>
        )}
      </nav>

      {/* ── HERO SECTION ── */}
      <section className="relative">

        {/* Hero background image — aspect-video shows full image, no crop */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9", maxHeight: "620px" }}>
          <Image
            src="/hero-bg.jpg"
            alt="MedRush delivery — medicines delivered in 15-30 minutes"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark gradient overlay — left heavy for text readability on desktop */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.38) 42%, rgba(0,0,0,0.08) 65%, transparent 100%)",
            }}
          />

          {/* ── DESKTOP: Content overlaid on image ── */}
          <div className="hidden md:flex absolute inset-0 flex-col justify-center px-14 max-w-[600px]">
            <h1 className="text-4xl font-extrabold italic text-white leading-tight mb-4" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
              MEDRUSH: Your Hyperlocal Pharmacy, Delivered in 15–30 Minutes.
            </h1>
            <p className="text-[15px] text-white/90 leading-relaxed mb-6 max-w-[400px]">
              Get all medicines—prescription &amp; OTC—from your nearest pharmacy to your doorstep, fast.
            </p>

            {/* Pincode + CTA */}
            <div className="flex rounded-lg overflow-hidden shadow-xl max-w-[440px] mb-3">
              <input
                id="pincode-input"
                type="text"
                placeholder="Enter your Area/Pincode"
                className="flex-1 px-4 py-3.5 text-sm text-gray-700 bg-white outline-none placeholder-gray-400"
              />
              <button
                id="order-btn"
                className="flex items-center gap-2 px-5 py-3.5 bg-cyan-600 hover:bg-cyan-700 text-white text-[13px] font-bold tracking-wide transition-colors whitespace-nowrap"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                ORDER MEDICINE NOW
              </button>
            </div>

            {/* Bottom row: Download App + Search */}
            <div className="flex items-center gap-4 max-w-[440px]">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold text-white/80">Download App</span>
                <div className="flex items-center gap-1.5">
                  {/* Windows */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.8)">
                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                  </svg>
                  {/* Apple */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.8)">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  {/* Play */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.8)">
                    <path d="M3.18 23.72A2 2 0 0 1 2 22V2a2 2 0 0 1 1.18-1.72l11.9 11.72zM21 12l-4.37 2.53-3.35-3.31 3.35-3.31zm-18 9.37L14.55 9.78l2.08 2.05zM14.55 14.22L3 23.37l11.55-11.59z" />
                  </svg>
                </div>
              </div>

              <div className="flex-1 flex items-center gap-2 bg-white rounded-md px-3 py-2.5 shadow-md">
                <input
                  id="search-input"
                  type="text"
                  placeholder="Search"
                  className="flex-1 text-[13px] text-gray-700 outline-none placeholder-gray-400 bg-transparent"
                />
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ── MOBILE: Content BELOW image ── */}
        <div className="md:hidden bg-white px-4 pt-5 pb-4">
          <h1 className="text-[26px] font-extrabold text-gray-900 leading-tight mb-3">
            MEDRUSH: Your Hyperlocal Pharmacy, Delivered in 15–30 Minutes.
          </h1>
          <p className="text-[14px] text-gray-500 leading-relaxed mb-5">
            Get all medicines—prescription &amp; OTC—from your nearest pharmacy to your doorstep, fast.
          </p>

          {/* Pincode + CTA */}
          <div className="flex rounded-lg overflow-hidden border border-gray-200 shadow-sm mb-3">
            <input
              id="pincode-input-mobile"
              type="text"
              placeholder="Enter your Area/Pincode"
              className="flex-1 px-4 py-3.5 text-sm text-gray-700 bg-white outline-none placeholder-gray-400"
            />
            <button
              id="order-btn-mobile"
              className="flex items-center gap-1.5 px-4 py-3.5 bg-cyan-600 hover:bg-cyan-700 text-white text-[12px] font-bold tracking-wide transition-colors whitespace-nowrap"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              ORDER MEDICINE NOW
            </button>
          </div>

          {/* Search */}
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-3 shadow-sm">
            <input
              id="search-input-mobile"
              type="text"
              placeholder="Search"
              className="flex-1 text-[13px] text-gray-700 outline-none placeholder-gray-400 bg-transparent"
            />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>

        {/* ── MOBILE: PWA Install Card ── */}
        <div className="md:hidden mx-4 mb-3 p-4 bg-sky-50 border border-sky-100 rounded-xl flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
            <div className="flex items-center gap-0.5">
              <div className="w-6 h-6 rounded-md bg-cyan-600 flex items-center justify-center">
                <span className="text-white font-black text-sm leading-none">M</span>
              </div>
            </div>
          </div>
          <div>
            <p className="text-[13px] font-bold text-gray-800 leading-tight">Faster performance &amp; offline updates!</p>
            <span className="text-[11px] text-gray-500 flex items-center gap-1 mt-0.5">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
              Install the MedRush Web App now.
            </span>
          </div>
        </div>
      </section>

      {/* ── FEATURE CARDS ── overlap bottom of hero on desktop ── */}
      <section className="px-4 md:px-10 pb-10 md:pb-8 -mt-6 md:-mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 max-w-5xl mx-auto">

          {/* Card 1 */}
          <div id="feature-speed" className="bg-white rounded-2xl px-5 py-5 flex items-center gap-4 shadow-lg border border-gray-100 hover:-translate-y-0.5 transition-transform">
            <div className="w-13 h-13 rounded-xl bg-cyan-50 flex items-center justify-center shrink-0" style={{ width: 50, height: 50 }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" />
                <rect x="9" y="11" width="14" height="10" rx="2" ry="2" />
                <circle cx="12" cy="20" r="1" />
                <circle cx="20" cy="20" r="1" />
              </svg>
            </div>
            <div>
              <h3 className="text-[15px] font-bold text-gray-900 leading-tight">Hyperlocal Speed</h3>
              <p className="text-[13px] text-gray-400 mt-0.5">15-30 min delivery</p>
            </div>
          </div>

          {/* Card 2 */}
          <div id="feature-medicines" className="bg-white rounded-2xl px-5 py-5 flex items-center gap-4 shadow-lg border border-gray-100 hover:-translate-y-0.5 transition-transform">
            <div className="w-13 h-13 rounded-xl bg-cyan-50 flex items-center justify-center shrink-0" style={{ width: 50, height: 50 }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <div>
              <h3 className="text-[15px] font-bold text-gray-900 leading-tight">All Medicines Available</h3>
              <p className="text-[13px] text-gray-400 mt-0.5">Wide range</p>
            </div>
          </div>

          {/* Card 3 */}
          <div id="feature-trusted" className="bg-white rounded-2xl px-5 py-5 flex items-center gap-4 shadow-lg border border-gray-100 hover:-translate-y-0.5 transition-transform">
            <div className="w-13 h-13 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0" style={{ width: 50, height: 50 }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
            </div>
            <div>
              <h3 className="text-[15px] font-bold text-gray-900 leading-tight">Reliable &amp; Trusted</h3>
              <p className="text-[13px] text-gray-400 mt-0.5">Genuine products</p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
