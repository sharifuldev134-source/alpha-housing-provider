"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HousingPlanModal } from "@/components/HousingPlanModal";
import { ProviderModal } from "@/components/ProviderModal";
import { FaqAccordion } from "@/components/FaqAccordion";
import {
  ShieldCheck,
  Lock,
  Headphones,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function StudentsAndParentsPage() {
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [isProviderModalOpen, setIsProviderModalOpen] = useState(false);

  const trustCards = [
    {
      icon: ShieldCheck,
      iconColor: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-100",
      title: "100-Point Property Inspection",
      description:
        "We physically test heating, hot water pressure, security locks, smoke alarms, and ensure safe neighborhoods close to campus study centers.",
    },
    {
      icon: Lock,
      iconColor: "text-rose-500",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-100",
      title: "Protected Escrow Payments",
      description:
        "Rent and deposits are held safely in European escrow accounts. No international wire fraud, hidden tourist taxes, or surprise utilities.",
    },
    {
      icon: Headphones,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-100",
      title: "24/7 On-the-Ground Support",
      description:
        "English-speaking field coordinators on site in Florence, Barcelona, Rome, and Paris ready to assist with lockouts, repairs, or doctor visits.",
    },
  ];

  const parentFaqs = [
    {
      question: "How does AlphaHousing vet and inspect apartments abroad?",
      answer:
        "Every property is in-person inspected by our local European field team. We verify electrical and gas safety certifications, fire alarms, secure deadbolts, high-speed Wi-Fi speed tests, and strict cleanliness standards before presenting any option to students.",
    },
    {
      question: "How does group matching work if we have 2, 4, or 6 friends?",
      answer:
        "AlphaHousing is custom-built for roommate groups. You tell us how many friends want to live together, and our local field coordinators match you with whole multi-bedroom units where each student gets their private or shared bed space without splitting across different properties.",
    },
    {
      question: "Are security deposits protected for parents?",
      answer:
        "Yes. Unlike direct international wire transfers to unknown foreign individuals, all security deposits are held in a secure European bank escrow structure. Funds are strictly released according to clear, bilateral English-language lease agreements.",
    },
    {
      question: "What if an emergency happens while abroad?",
      answer:
        "Every city has dedicated local bilingual field coordinators on call 24/7. From lockouts and maintenance repairs to medical or emergency navigation, your student has trusted local advocates on site at all times.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar
        onOpenPlanModal={() => setIsPlanModalOpen(true)}
        onOpenProviderModal={() => setIsProviderModalOpen(true)}
      />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="pt-16 pb-14 sm:pt-24 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          {/* Trust Guarantee Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-[#E11D48] text-xs sm:text-sm font-semibold mb-6">
            <ShieldCheck className="w-4 h-4 text-[#E11D48]" />
            <span>Verified Safety &amp; Parent Trust Guarantee</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight sm:leading-[1.15] max-w-3xl mx-auto mb-6">
            Safe, Transparent &amp; Seamless Housing for Study Abroad
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Sending your student abroad shouldn&apos;t involve scam risks, foreign wire transfers, or substandard living conditions. We bridge American university standards with vetted European property providers.
          </p>

          {/* CTA Button */}
          <div>
            <button
              onClick={() => setIsPlanModalOpen(true)}
              className="px-8 py-3.5 rounded-full bg-[#E11D48] hover:bg-[#c9183d] text-white text-sm sm:text-base font-semibold shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer active:scale-95"
            >
              Create Your Student Group Plan <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* WHY PARENTS & UNIVERSITIES TRUST US */}
        <section className="py-16 sm:py-20 bg-slate-50/60 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Why Parents &amp; Universities Trust Us
              </h2>
              <p className="text-sm text-slate-500 mt-2">
                Every step is engineered to give families complete confidence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {trustCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div
                        className={`w-12 h-12 rounded-2xl ${card.bgColor} ${card.borderColor} border flex items-center justify-center mb-6`}
                      >
                        <Icon className={`w-6 h-6 ${card.iconColor}`} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-3">
                        {card.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-md bg-rose-50 border border-rose-100 text-[#E11D48] text-[11px] font-bold tracking-wider uppercase mb-3">
              GOT QUESTIONS?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions for Parents
            </h2>
          </div>

          <FaqAccordion items={parentFaqs} defaultOpenIndex={0} />
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
