"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HousingPlanModal } from "@/components/HousingPlanModal";
import { ProviderModal } from "@/components/ProviderModal";
import {
  CheckCircle2,
  Building,
  CalendarCheck,
  CreditCard,
  Headphones,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function ProvidersPage() {
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [isProviderModalOpen, setIsProviderModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar
        onOpenPlanModal={() => setIsPlanModalOpen(true)}
        onOpenProviderModal={() => setIsProviderModalOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <span className="px-3 py-1 rounded-md bg-rose-50 border border-rose-100 text-[#E11D48] text-[11px] font-bold tracking-wider uppercase inline-block mb-3">
            LANDLORD &amp; PROPERTY MANAGER NETWORK
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Fill Your European Semester Apartments with Verified American Students
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
            AlphaHousing partners with reputable property owners, landlords, and agencies in Florence, Barcelona, Rome, and Paris. Gain reliable 4-to-9 month bookings with prompt, secured payouts.
          </p>
          <button
            onClick={() => setIsProviderModalOpen(true)}
            className="px-8 py-3.5 rounded-full bg-[#E11D48] hover:bg-[#c9183d] text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer active:scale-95"
          >
            Join as a Verified Provider <ArrowRight className="w-4 h-4" />
          </button>
        </section>

        {/* 3 Provider Benefits */}
        <section className="py-16 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-5">
                  <CalendarCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Pre-Screened Group Bookings</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We match you directly with cohesive student groups vetted by university study abroad offices. Zero party tourists or one-night turnover hassle.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-5">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Guaranteed On-Time Rent</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Rent payments and security deposits are collected in advance through European escrow banking, preventing delays or unpaid utilities.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-[#E11D48] mb-5">
                  <Headphones className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Bilingual Liaison Support</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our on-the-ground coordinators handle check-in orientation, translation, emergency mediation, and routine tenant communication.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Simple Onboarding CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="rounded-3xl bg-[#091124] text-white p-8 sm:p-12 text-center shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
              Have 1 or More Apartments Available for 2027?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
              Join over 250 European property managers who rely on AlphaHousing to consistently fill semester vacancies.
            </p>
            <button
              onClick={() => setIsProviderModalOpen(true)}
              className="px-8 py-3.5 rounded-full bg-[#E11D48] hover:bg-[#c9183d] text-white font-semibold text-sm sm:text-base shadow-md inline-flex items-center gap-2 cursor-pointer"
            >
              Submit Property Information <ArrowRight className="w-4 h-4" />
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
