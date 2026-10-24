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
  ShieldCheck,
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
      borderColor: "border-rose-100",
    },
    {
      step: "STEP 02",
      title: "Local Providers Submit Options",
      description:
        "Verified local landlords and property managers match your exact group criteria without public bidding wars.",
      icon: SlidersHorizontal,
      iconColor: "text-emerald-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-100",
    },
    {
      step: "STEP 03",
      title: "Review Curated Options & Virtual Tours",
      description:
        "Explore high-resolution 3D walkthroughs, verified Wi-Fi speed tests, floor plans, and campus commute times.",
      icon: MessageSquare,
      iconColor: "text-amber-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-100",
    },
    {
      step: "STEP 04",
      title: "Sign English Leases & Escrow Protection",
      description:
        "Sign legally compliant bilateral student leases. Rent and deposits are safely held in European bank escrow accounts.",
      icon: KeyRound,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-100",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] text-slate-900">
      <Navbar
        onOpenPlanModal={() => setIsPlanModalOpen(true)}
        onOpenProviderModal={() => setIsProviderModalOpen(true)}
      />

      <main className="flex-1">
        {/* DARK NAVY HERO BANNER */}
        <section className="bg-[#091124] text-white pt-20 pb-28 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Pill Tag */}
            <div className="inline-block px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-5">
              TRANSPARENT 4-STEP JOURNEY
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-5">
              How AlphaHousing Works
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              We eliminated the headaches of Craigslist scams, language barriers, and non-refundable deposits abroad.
            </p>
          </div>
        </section>

        {/* 4 PROCESS STEP CARDS (2x2 GRID) */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14 relative z-10 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex items-start gap-5"
                >
                  {/* Step Icon */}
                  <div
                    className={`w-12 h-12 rounded-2xl ${item.bgColor} ${item.borderColor} border flex items-center justify-center shrink-0`}
                  >
                    <Icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>

                  {/* Step details */}
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E11D48]">
                      {item.step}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed pt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA BOX */}
        <section className="max-w-2xl mx-auto px-4 sm:px-6 pb-20">
          <div className="rounded-3xl bg-rose-50/80 border border-rose-100 p-8 sm:p-10 text-center shadow-xs">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
              Ready to secure your semester apartment?
            </h2>
            <p className="text-xs sm:text-sm text-[#E11D48] font-semibold mb-6">
              Takes 2 minutes to submit your housing requirements.
            </p>
            <button
              onClick={() => setIsPlanModalOpen(true)}
              className="px-8 py-3.5 rounded-full bg-[#E11D48] hover:bg-[#c9183d] text-white text-sm sm:text-base font-semibold shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer active:scale-95"
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
