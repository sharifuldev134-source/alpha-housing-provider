"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HousingPlanModal } from "@/components/HousingPlanModal";
import { ProviderModal } from "@/components/ProviderModal";
import { Shield, Users, Globe, Award, CheckCircle2, ArrowRight } from "lucide-react";

export default function AboutUsPage() {
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [isProviderModalOpen, setIsProviderModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar
        onOpenPlanModal={() => setIsPlanModalOpen(true)}
        onOpenProviderModal={() => setIsProviderModalOpen(true)}
      />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <span className="px-3 py-1 rounded-md bg-rose-50 border border-rose-100 text-[#E11D48] text-[11px] font-bold tracking-wider uppercase inline-block mb-3">
            OUR MISSION
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Empowering American Students to Study Abroad with Complete Peace of Mind
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            AlphaHousing was founded by former study abroad alumni and university advisors who experienced firsthand the chaos of finding safe apartments abroad. We built the first verified housing network that bridges US student standards with trustworthy European landlords.
          </p>
        </section>

        {/* Value Pillars */}
        <section className="py-16 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-[#E11D48] mb-5">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">100% In-Person Vetting</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  No virtual stock photos. Every home is physically inspected by our on-site European coordinators for lock safety, heating, reliable internet, and building security.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-5">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Roommate Group Guarantee</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We solve the #1 student challenge: keeping friend groups together. Whether 2, 4, or 6+ students, we secure whole apartments that fit your entire group.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-5">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Bilateral English Leases</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Zero foreign language ambiguities. Our contracts are vetted by international property lawyers with transparent terms and escrow protected deposits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team & Presence */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
            Local European Teams in Florence, Barcelona, Paris &amp; Rome
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
            Our bilingual team is based in the same neighborhoods where students live. We are here from check-in day to departure, ready 24/7 for any urgent request.
          </p>
          <button
            onClick={() => setIsPlanModalOpen(true)}
            className="px-8 py-3.5 rounded-full bg-[#E11D48] hover:bg-[#c9183d] text-white font-semibold text-sm shadow-md inline-flex items-center gap-2"
          >
            Start Your Housing Plan <ArrowRight className="w-4 h-4" />
          </button>
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
