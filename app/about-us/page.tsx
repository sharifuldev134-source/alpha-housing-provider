"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HousingPlanModal } from "@/components/HousingPlanModal";
import { ProviderModal } from "@/components/ProviderModal";
import { ShieldCheck, Globe, Heart } from "lucide-react";

export default function AboutUsPage() {
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [isProviderModalOpen, setIsProviderModalOpen] = useState(false);

  const stats = [
    { number: "3,400+", label: "Students Housed Safely" },
    { number: "450+", label: "Vetted European Providers" },
    { number: "14", label: "Study Abroad Cities" },
    { number: "99.4%", label: "Parent Satisfaction Rate" },
  ];

  const values = [
    {
      icon: ShieldCheck,
      iconColor: "text-[#E11D48]",
      title: "Integrity First",
      description:
        "We never compromise on student safety. If a property doesn't meet fire, electrical, or neighborhood safety standards, it is never listed.",
    },
    {
      icon: Globe,
      iconColor: "text-emerald-500",
      title: "Local Cultural Respect",
      description:
        "We bridge American student expectations with European residential culture, creating long-term relationships with property owners.",
    },
    {
      icon: Heart,
      iconColor: "text-rose-500",
      title: "Human Care",
      description:
        "AI powers our matching algorithms, but human coordinators are always physically present in the destination cities to solve real problems.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#070C18] text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
      <Navbar
        onOpenPlanModal={() => setIsPlanModalOpen(true)}
        onOpenProviderModal={() => setIsProviderModalOpen(true)}
      />

      <main className="flex-1 pb-24">
        {/* HERO SECTION */}
        <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block px-3.5 py-1 rounded-full bg-rose-50 border border-rose-100 text-[#E11D48] text-[11px] font-bold tracking-wider uppercase mb-5">
            OUR MISSION &amp; STORY
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Empowering American Students to<br />Study Abroad with Confidence
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            Founded by former study abroad alumni and European hospitality veterans, AlphaHousing was built to solve the single most stressful part of the study abroad experience: housing.
          </p>
        </section>

        {/* 4 STATS ROW */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {stats.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#E11D48] tracking-tight leading-none mb-2">
                  {item.number}
                </span>
                <span className="text-[11px] sm:text-xs text-slate-400 dark:text-slate-500 font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 3 VALUE CARDS */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="bg-white dark:bg-[#0E172A] rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] hover:shadow-md transition-all flex flex-col justify-start"
                >
                  <div className="w-8 h-8 flex items-center justify-center mb-4">
                    <Icon className={`w-5 h-5 ${v.iconColor} stroke-[2]`} />
                  </div>
                  <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 dark:text-white mb-2">
                    {v.title}
                  </h3>
                  <p className="text-[11.5px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}
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
