"use client";

import { useState } from "react";
import { createClient } from '@/utils/supabase/client';

export default function Home() {
  const supabase = createClient();
  const [heroEmail, setHeroEmail] = useState("");
  const [heroSubmitted, setHeroSubmitted] = useState(false);

  const [ctaEmail, setCtaEmail] = useState("");
  const [ctaSubmitted, setCtaSubmitted] = useState(false);

  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (heroEmail) {
      await supabase.from('Waitlist_Emails').insert([{ Email_Id: heroEmail }]);
      setHeroSubmitted(true);
    }
  };

  const handleCtaSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (ctaEmail) {
      await supabase.from('Waitlist_Emails').insert([{ Email_Id: ctaEmail }]);
      setCtaSubmitted(true);
    }
  };

  return (
    <>
      <main className="pt-24 flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center px-8 md:px-20 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full max-w-screen-2xl mx-auto">
            <div className="md:col-span-6 z-10">
              <span className="inline-block px-4 py-1.5 bg-secondary-fixed text-on-secondary-fixed-variant font-label text-[0.7rem] tracking-[0.2em] uppercase font-bold rounded-full mb-6">
                The Future of Fresh
              </span>
              <h1 className="font-headline text-5xl md:text-8xl leading-[1.1] mb-8 tracking-tight text-primary">
                Your Chef-Ready <br /><span className="serif-italic">Prep, Delivered.</span>
              </h1>
              <p className="text-on-surface-variant text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
                Expertly chopped, perfectly portioned, and delivered to your doorstep. Choose your vegetables, select your cut&mdash;julienne, sliced, diced, or cubed&mdash;and we&apos;ll handle the rest.
              </p>

              {!heroSubmitted ? (
                <form onSubmit={handleHeroSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                  <input
                    className="flex-grow bg-surface-container-low border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/40 text-on-surface transition-all outline-none"
                    placeholder="Enter your email for early access"
                    type="email"
                    value={heroEmail}
                    onChange={(e) => setHeroEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-semibold hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-secondary/20">
                    Get Early Access
                  </button>
                </form>
              ) : (
                <div className="bg-primary-container/10 border border-primary-container/20 text-on-surface p-4 rounded-xl max-w-md flex items-center gap-4">
                  <span className="material-symbols-outlined text-secondary" data-icon="check_circle">check_circle</span>
                  <p className="font-medium text-sm">You&apos;re on the list! We&apos;ll be in touch soon with fresh updates.</p>
                </div>
              )}

              {!heroSubmitted && <p className="mt-4 text-xs text-on-surface-variant font-label tracking-wide opacity-60">No spam. Only fresh updates from our kitchen.</p>}
            </div>

            {/* Asymmetric Hero Image */}
            <div className="md:col-span-6 relative h-[500px] md:h-[700px]">
              <div className="absolute inset-0 bg-primary-container/5 rounded-[2rem] -rotate-3 translate-x-8 translate-y-8"></div>
              <div className="absolute inset-0 overflow-hidden rounded-[2rem] ghost-border ambient-shadow">
                <img
                  className="w-full h-full object-cover"
                  alt="Top-down artistic view of perfectly julienned vibrant carrots and diced bell peppers on a dark stone chef block with soft natural lighting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu_IdHjILYGSYRLmVfr9hqfGv6bt_nhhRTLyeExpR7O8yZNSLnGN_0kqEeGcv5MRZH9uZl7v4HK-CK8J_iCLowcXhsKeE2TZ71hLn73LcdkQZ1FtcCM0blfwiivJxZ2NQkWiVSNyRX5OHEl7WRIfTP6a-OcawV1qKG-0UdPVNKx2C5cr5fopb_23bE2O8N92ioR-LZMGkuKPT5dUA-AMLz6sPDAa4wTJmIa2DRjvkvq9yTF2LHd10b98qTRIe8f_6mQ3bOukCf2g04"
                />
              </div>

              {/* Floating Ingredient Badge */}
              <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-xl ambient-shadow ghost-border hidden md:block transition-transform hover:-translate-y-2 duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary" data-icon="restaurant">restaurant</span>
                  </div>
                  <div>
                    <p className="text-[0.65rem] font-label uppercase tracking-widest text-on-surface-variant">Signature Cut</p>
                    <p className="font-headline text-lg text-primary">Master-Grade Julienne</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The "Chopping Guide" Bento Grid */}
        <section className="py-32 px-8 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-20 text-center">
              <h2 className="font-headline text-4xl md:text-6xl text-primary mb-4">The Precision of the Blade</h2>
              <p className="text-on-surface-variant max-w-xl mx-auto">Select the perfect cut for your recipe. Our chefs handle the technical prep so you can focus on the flavor.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Cut Type 1 */}
              <div className="group bg-surface-container-lowest p-8 rounded-xl ghost-border transition-all duration-300 hover:bg-white hover:ambient-shadow cursor-default hover:-translate-y-2">
                <div className="w-10 h-10 mb-6 bg-surface-container text-primary rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined" data-icon="reorder">reorder</span>
                </div>
                <h3 className="font-headline text-2xl mb-2">Julienne</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">Matchstick precision. Perfect for stir-fries, garnishes, and slaws.</p>
                <span className="text-[0.7rem] font-label tracking-widest uppercase text-secondary font-bold">2mm x 2mm x 4cm</span>
              </div>

              {/* Cut Type 2 */}
              <div className="group bg-surface-container-lowest p-8 rounded-xl ghost-border transition-all duration-300 hover:bg-white hover:ambient-shadow cursor-default hover:-translate-y-2">
                <div className="w-10 h-10 mb-6 bg-surface-container text-primary rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined" data-icon="grid_view">grid_view</span>
                </div>
                <h3 className="font-headline text-2xl mb-2">Diced</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">The kitchen standard. Uniform cubes for sauces, soups, and soffritto.</p>
                <span className="text-[0.7rem] font-label tracking-widest uppercase text-secondary font-bold">6mm cubes</span>
              </div>

              {/* Cut Type 3 */}
              <div className="group bg-surface-container-lowest p-8 rounded-xl ghost-border transition-all duration-300 hover:bg-white hover:ambient-shadow cursor-default hover:-translate-y-2">
                <div className="w-10 h-10 mb-6 bg-surface-container text-primary rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined" data-icon="format_list_bulleted">format_list_bulleted</span>
                </div>
                <h3 className="font-headline text-2xl mb-2">Sliced</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">Consistent thickness for even roasting and beautiful presentation.</p>
                <span className="text-[0.7rem] font-label tracking-widest uppercase text-secondary font-bold">3mm rounds</span>
              </div>

              {/* Cut Type 4 */}
              <div className="group bg-surface-container-lowest p-8 rounded-xl ghost-border transition-all duration-300 hover:bg-white hover:ambient-shadow cursor-default hover:-translate-y-2">
                <div className="w-10 h-10 mb-6 bg-surface-container text-primary rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined" data-icon="view_compact">view_compact</span>
                </div>
                <h3 className="font-headline text-2xl mb-2">Cubed</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">Hearty and robust. Ideal for slow cooking, roasting, and stews.</p>
                <span className="text-[0.7rem] font-label tracking-widest uppercase text-secondary font-bold">1.5cm cubes</span>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works / Selection Selection */}
        <section id="process-section" className="py-32 px-8 overflow-hidden">
          <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center gap-20">
            <div className="w-full md:w-1/2 order-2 md:order-1 relative">
              {/* Visual Illustration of quantity/delivery */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container rounded-3xl p-8 aspect-square flex flex-col justify-between hover:scale-[1.02] transition-transform relative overflow-hidden group shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/95 via-white/80 to-transparent z-10 pointer-events-none"></div>
                  <img src="/step1.jpg" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Fresh cut vegetables" />
                  <div className="relative z-20 pointer-events-none">
                    <span className="material-symbols-outlined text-4xl text-primary drop-shadow-sm" data-icon="scale">scale</span>
                  </div>
                  <div className="relative z-20">
                    <p className="font-label uppercase tracking-widest text-[0.65rem] mb-1">Step 01</p>
                    <h4 className="font-headline text-2xl drop-shadow-sm">Select Weight</h4>
                    <div className="flex gap-2 mt-4 flex-wrap">
                      <span className="px-3 py-1 bg-white/90 rounded-full text-xs font-bold border border-outline-variant/30 cursor-pointer hover:bg-white transition-colors">250g</span>
                      <span className="px-3 py-1 bg-secondary-container text-white rounded-full text-xs font-bold shadow-sm shadow-secondary-container/30">500g</span>
                      <span className="px-3 py-1 bg-white/90 rounded-full text-xs font-bold border border-outline-variant/30 cursor-pointer hover:bg-white transition-colors">1kg</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#154212] text-white rounded-3xl p-8 aspect-square flex flex-col justify-between hover:scale-[1.02] transition-transform relative overflow-hidden group shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#154212]/90 via-[#154212]/80 to-transparent z-10 pointer-events-none mix-blend-multiply"></div>
                  <img src="/step2.jpg" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 mix-blend-overlay" alt="Fresh grocery bag" />
                  <div className="relative z-20 pointer-events-none">
                    <span className="material-symbols-outlined text-4xl shadow-sm filter drop-shadow-md text-white/90" data-icon="schedule">schedule</span>
                  </div>
                  <div className="relative z-20">
                    <p className="font-label uppercase tracking-widest text-[0.65rem] mb-1 opacity-80">Step 02</p>
                    <h4 className="font-headline text-2xl text-white drop-shadow-md">Choose Window</h4>
                    <p className="text-xs mt-2 opacity-90 font-medium drop-shadow-sm">Morning (7-9 AM)<br />Evening (6-8 PM)</p>
                  </div>
                </div>
                <div className="col-span-2 bg-secondary-fixed rounded-3xl p-8 flex items-center justify-between hover:scale-[1.01] transition-transform">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-secondary" data-icon="local_shipping">local_shipping</span>
                    </div>
                    <div>
                      <p className="font-label uppercase tracking-widest text-[0.65rem] mb-1">Step 03</p>
                      <h4 className="font-headline text-2xl">Doorstep Delivery</h4>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-4xl opacity-20" data-icon="check_circle">check_circle</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <h2 className="font-headline text-4xl md:text-6xl text-primary mb-8">From Garden to Counter, Seamlessly.</h2>
              <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
                We source directly from local growers who prioritize flavor and soil health. Once harvested, our culinary atelier transforms raw ingredients into precise, ready-to-use portions.
              </p>
              <ul className="space-y-6">
                <li className="flex gap-4 group cursor-default">
                  <span className="material-symbols-outlined text-secondary group-hover:scale-125 transition-transform" data-icon="temp_preferences_custom">temp_preferences_custom</span>
                  <div>
                    <h5 className="font-bold text-primary">Cold-Chain Optimized</h5>
                    <p className="text-sm text-on-surface-variant">Stay fresh from our cutting board to your fridge.</p>
                  </div>
                </li>
                <li className="flex gap-4 group cursor-default">
                  <span className="material-symbols-outlined text-secondary group-hover:scale-125 transition-transform" data-icon="eco">eco</span>
                  <div>
                    <h5 className="font-bold text-primary">Zero Food Waste</h5>
                    <p className="text-sm text-on-surface-variant">We utilize all offcuts, so you buy only what you eat.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Final CTA / Waitlist */}
        <section id="waitlist-section" className="py-32 px-8">
          <div className="max-w-4xl mx-auto hero-gradient rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <span className="material-symbols-outlined text-[12rem]" data-icon="skillet">skillet</span>
            </div>
            <h2 className="font-headline text-4xl md:text-6xl text-white mb-6 relative z-10">Reclaim Your Evenings.</h2>
            <p className="text-on-primary-container text-lg mb-12 max-w-xl mx-auto opacity-90 relative z-10">
              We are launching in select cities soon. Join the waitlist to get your first week of chef-ready prep for free.
            </p>

            <div className="relative z-10 max-w-md mx-auto">
              {!ctaSubmitted ? (
                <form onSubmit={handleCtaSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    className="flex-grow bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder:text-white/60 focus:ring-2 focus:ring-secondary outline-none transition-all"
                    placeholder="Email address"
                    type="email"
                    value={ctaEmail}
                    onChange={(e) => setCtaEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-secondary-fixed active:scale-95 transition-all shadow-xl">
                    Reserve Spot
                  </button>
                </form>
              ) : (
                <div className="bg-white/10 border border-white/20 text-white p-6 rounded-xl flex items-center justify-center gap-3 backdrop-blur-sm">
                  <span className="material-symbols-outlined text-secondary-fixed">check_circle</span>
                  <p className="font-bold">Spot reserved! We can&apos;t wait to cook with you.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
