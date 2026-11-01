"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HousingPlanModal } from "@/components/HousingPlanModal";
import { ProviderModal } from "@/components/ProviderModal";
import {
  Search,
  SlidersHorizontal,
  MessageSquare,
  KeyRound,
  ArrowRight,
} from "lucide-react";

export default function HowItWorksPage() {
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [isProviderModalOpen, setIsProviderModalOpen] = useState(false);

  const steps = [
    {
      step: "STEP 01",
      title: "Submit Group Housing Plan",
      description:
        "Tell us your study abroad city, university center, group size (2-6 friends), semester dates, and budget preference.",
      icon: Search,
      iconColor: "text-rose-500",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-100/70",
    },
    {
      step: "STEP 02",
      title: "Local Providers Submit Options",
      description:
        "Verified local landlords and property managers match your exact group criteria without public bidding wars.",
      icon: SlidersHorizontal,
      iconColor: "text-emerald-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-100/70",
    },
    {
      step: "STEP 03",
      title: "Review Curated Options & Virtual Tours",
      description:
        "Explore high-resolution 3D walkthroughs, verified Wi-Fi speed tests, floor plans, and campus commute times.",
      icon: MessageSquare,
      iconColor: "text-amber-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-100/70",
    },
    {
      step: "STEP 04",
      title: "Sign English Leases & Escrow Protection",
      description:
        "Sign legally compliant bilateral student leases. Rent and deposits are safely held in European bank escrow accounts.",
      icon: KeyRound,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-100/70",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#070C18] text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
      <Navbar
        onOpenPlanModal={() => setIsPlanModalOpen(true)}
        onOpenProviderModal={() => setIsProviderModalOpen(true)}
      />

      <main className="flex-1">
        {/* DARK NAVY HERO BANNER */}
        <section className="bg-[#080E1E] text-white pt-16 pb-24 sm:pt-20 sm:pb-28 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            {/* Pill Tag */}
            <div className="inline-block px-3.5 py-1 rounded-full bg-[#0F1B38] border border-blue-500/25 text-[#60A5FA] text-[11px] font-semibold uppercase tracking-wider mb-5">
              TRANSPARENT 4-STEP JOURNEY
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight mb-4">
              How AlphaHousing Works
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-xs sm:text-sm md:text-[14.5px] max-w-2xl mx-auto leading-relaxed">
              We eliminated the headaches of Craigslist scams, language barriers, and non-refundable deposits abroad.
            </p>
          </div>
        </section>

        {/* 4 PROCESS STEP CARDS (2x2 GRID) */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-14 relative z-10 mb-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-[#0E172A] rounded-3xl p-6 sm:p-7 border border-slate-100 dark:border-slate-800 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-lg transition-all duration-300 flex items-start gap-4"
                >
                  {/* Step Icon */}
                  <div
                    className={`w-11 h-11 rounded-2xl ${item.bgColor} dark:bg-slate-800/80 ${item.borderColor} dark:border-slate-700 border flex items-center justify-center shrink-0 mt-0.5`}
                  >
                    <Icon className={`w-5 h-5 ${item.iconColor}`} />
                  </div>

                  {/* Step details */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#E11D48]">
                      {item.step}
                    </span>
                    <h3 className="text-base sm:text-[17px] font-bold text-slate-900 dark:text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed pt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA BOX */}
        <section className="max-w-xl mx-auto px-4 sm:px-6 pb-20">
          <div className="rounded-3xl bg-[#FEF2F2]/70 dark:bg-rose-950/20 border border-[#FEE2E2] dark:border-rose-900/40 p-6 sm:p-8 text-center shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1.5">
              Ready to secure your semester apartment?
            </h2>
            <p className="text-xs text-[#E11D48] font-medium mb-5">
              Takes 2 minutes to submit your housing requirements.
            </p>
            <button
              onClick={() => setIsPlanModalOpen(true)}
              className="px-6 py-3 rounded-full bg-[#E11D48] hover:bg-[#be123c] text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition-all inline-flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              Start Housing Plan Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </main>

      <Footer />

      <HousingPlanModal
        isOpen={isPlanModalOpen}
        onClose={() => setIsPlanModalOpen(false)}
      />
      <ProviderModal
        isOpen={isProviderModalOpen}
        onClose={() => setIsProviderModalOpen(false)}
      />
    </div>
  );
}
