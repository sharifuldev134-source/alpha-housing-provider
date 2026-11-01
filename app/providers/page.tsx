"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProviderRegistrationFlow } from "@/components/ProviderRegistrationFlow";
import { ProviderModal } from "@/components/ProviderModal";
import { HousingPlanModal } from "@/components/HousingPlanModal";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Users,
  FileText,
  Heart,
} from "lucide-react";

export default function ProvidersPage() {
  const [view, setView] = useState<"landing" | "form">("landing");
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openForm = () => {
    setView("form");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openLanding = () => {
    setView("landing");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#070C18] text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
      <Navbar
        onOpenPlanModal={() => setIsPlanModalOpen(true)}
        onOpenProviderModal={() => setIsLoginModalOpen(true)}
        onOpenProviderRegistration={openForm}
        onResetProviderView={openLanding}
      />

      <main className="flex-1">
        {view === "landing" ? (
          /* ========================================================================= */
          /* PROVIDER LANDING PAGE (Exact screenshot match)                             */
          /* ========================================================================= */
          <>
            {/* HERO SECTION */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                {/* Left Content */}
                <div className="lg:col-span-7 flex flex-col items-start">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-900/50 text-[#E11D48] text-[11px] font-bold tracking-wider uppercase mb-5">
                    <Sparkles className="w-3.5 h-3.5 text-[#E11D48]" />
                    <span>VERIFIED STUDY ABROAD HOUSING NETWORK</span>
                  </div>

                  {/* Title */}
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12] mb-4">
                    Partner with<br />
                    <span className="text-[#E11D48]">AlphaHousing</span>
                  </h1>

                  {/* Description */}
                  <p className="text-xs sm:text-sm md:text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg mb-6">
                    Connect with American study-abroad students looking for housing in your city. No need to upload your entire inventory.
                  </p>

                  {/* 3 Value Bullets */}
                  <div className="space-y-2.5 mb-8 text-xs sm:text-[13.5px] font-medium text-slate-700 dark:text-slate-300">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#E11D48] shrink-0" />
                      <span>Receive qualified housing requests</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#E11D48] shrink-0" />
                      <span>Share available options when you have them</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#E11D48] shrink-0" />
                      <span>Build long-term relationships with Alpha</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={openForm}
                    className="px-7 py-3.5 rounded-full bg-[#E11D48] hover:bg-[#be123c] text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95"
                  >
                    Join as a Provider <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Right Card / Pisa Image */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-slate-100 dark:bg-slate-800 shadow-lg border border-slate-200/50 dark:border-slate-800">
                    <Image
                      src="/images/hero-pisa.jpg"
                      alt="Florence provider study abroad match"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />

                    {/* Floating Bottom Pill Badge Card */}
                    <div className="absolute bottom-4 left-4 right-4 z-10 bg-white/95 dark:bg-[#0E172A]/90 backdrop-blur-md rounded-2xl p-3.5 border border-white/70 dark:border-slate-700/80 shadow-md">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-extrabold text-[#E11D48]">€5.2k</span>
                        <span className="text-[11px] font-bold text-slate-900 dark:text-white">
                          Recent Group Match: Florence
                        </span>
                      </div>
                      <p className="text-[10.5px] text-slate-500 dark:text-slate-400 mt-0.5">
                        4 Syracuse students housed for Spring semester
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 3 FEATURE CARDS */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-white dark:bg-[#0E172A] rounded-2xl p-6 sm:p-7 border border-slate-100 dark:border-slate-800 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] hover:shadow-md transition-all text-center flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/50 text-rose-500 flex items-center justify-center mb-4">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 dark:text-white mb-2">
                    Real student groups
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    from trusted U.S. programs and verified university partners.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white dark:bg-[#0E172A] rounded-2xl p-6 sm:p-7 border border-slate-100 dark:border-slate-800 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] hover:shadow-md transition-all text-center flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-500 flex items-center justify-center mb-4">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 dark:text-white mb-2">
                    Simple process
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    No inventory required. Only share links and rates when you have matching vacancies.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white dark:bg-[#0E172A] rounded-2xl p-6 sm:p-7 border border-slate-100 dark:border-slate-800 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] hover:shadow-md transition-all text-center flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-500 flex items-center justify-center mb-4">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 dark:text-white mb-2">
                    Ongoing opportunities
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    In top study abroad cities with semester-by-semester repeat demand.
                  </p>
                </div>
              </div>
            </section>

            {/* HOW ALPHAHOUSING WORKS FOR PROVIDERS */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 text-center">
              {/* Badge */}
              <div className="inline-block px-3.5 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-900/50 text-[#E11D48] text-[11px] font-bold tracking-wider uppercase mb-3">
                ZERO FRICTION PROCESS
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2.5">
                How AlphaHousing Works for Providers
              </h2>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed mb-10">
                You stay in full control. We bring organized groups of 2–6 students with clear budgets and fixed semester dates.
              </p>

              {/* 4 Step Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10 text-left">
                <div className="bg-white dark:bg-[#0E172A] rounded-2xl p-5 border border-slate-100 dark:border-slate-800 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <span className="text-base font-extrabold text-[#E11D48] mb-2 block">
                      01
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                      Register in 1 Minute
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      Share your city and contact info. No property listings or document uploads required.
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-[#0E172A] rounded-2xl p-5 border border-slate-100 dark:border-slate-800 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <span className="text-base font-extrabold text-[#E11D48] mb-2 block">
                      02
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                      Receive Group Requests
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      Get notified when student groups from US programs are looking in your neighborhood.
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-[#0E172A] rounded-2xl p-5 border border-slate-100 dark:border-slate-800 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <span className="text-base font-extrabold text-[#E11D48] mb-2 block">
                      03
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                      Send a Link &amp; Price
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      Got an available unit? Simply paste your Airbnb or direct website link and your monthly rate.
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-[#0E172A] rounded-2xl p-5 border border-slate-100 dark:border-slate-800 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <span className="text-base font-extrabold text-[#E11D48] mb-2 block">
                      04
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                      Confirm &amp; Lease
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      Alpha presents your option to the group. If approved, lease directly with qualified students.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={openForm}
                className="px-8 py-3.5 rounded-full bg-[#E11D48] hover:bg-[#be123c] text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-2 shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-95"
              >
                Get Started Now <ArrowRight className="w-4 h-4" />
              </button>
            </section>
          </>
        ) : (
          /* ========================================================================= */
          /* REGISTRATION FORM VIEW (Single / 4-Step Wizard with strict validation)   */
          /* ========================================================================= */
          <div className="py-6 sm:py-10">
            <ProviderRegistrationFlow onBackToOverview={openLanding} />
          </div>
        )}
      </main>

      <Footer />

      <HousingPlanModal
        isOpen={isPlanModalOpen}
        onClose={() => setIsPlanModalOpen(false)}
      />
      <ProviderModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </div>
  );
}
