"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HousingPlanModal } from "@/components/HousingPlanModal";
import { ProviderModal } from "@/components/ProviderModal";
import {
  ShieldCheck,
  Users,
  MapPin,
  Headphones,
  Check,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [isProviderModalOpen, setIsProviderModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Florence, Italy");

  const openPlanForCity = (city: string) => {
    setSelectedCity(city);
    setIsPlanModalOpen(true);
  };

  const destinations = [
    {
      city: "Florence, Italy",
      activeGroups: "48 active groups",
      price: "€950–€1,350/mo per bed",
      image: "/images/city-florence.jpg",
    },
    {
      city: "Barcelona, Spain",
      activeGroups: "36 active groups",
      price: "€850–€1,200/mo per bed",
      image: "/images/city-barcelona.jpg",
    },
    {
      city: "Paris, France",
      activeGroups: "29 active groups",
      price: "€1,100–€1,700/mo per bed",
      image: "/images/city-paris.jpg",
    },
    {
      city: "Rome, Italy",
      activeGroups: "31 active groups",
      price: "€800–€1,250/mo per bed",
      image: "/images/city-rome.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#070C18] text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
      {/* Sticky Header */}
      <Navbar
        onOpenPlanModal={() => setIsPlanModalOpen(true)}
        onOpenProviderModal={() => setIsProviderModalOpen(true)}
      />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative w-full min-h-[500px] sm:min-h-[560px] lg:min-h-[620px] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-pisa.jpg"
              alt="Study abroad landmark in Italy"
              fill
              priority
              className="object-cover object-[center_30%]"
              sizes="100vw"
            />
            {/* Contrast Overlay Gradient: Darker on the left for text contrast, transparent on the right so tower and warm sky shine */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-slate-900/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
          </div>

          {/* Hero Content - LEFT ALIGNED */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20 lg:py-24">
            <div className="max-w-xl text-left flex flex-col items-start">
              {/* Semester Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/40 backdrop-blur-md border border-white/20 text-white/95 text-[11px] sm:text-xs font-medium mb-5 shadow-sm">
                <span className="text-teal-300 font-mono text-[13px] font-semibold">#</span>
                <span>Spring &amp; Fall 2027 Semester Applications Open</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold text-white tracking-tight leading-[1.12] mb-4">
                Find the Right Housing<br />
                for Your Study Abroad<br />
                Experience
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm md:text-[14.5px] text-white/90 max-w-lg leading-relaxed mb-8">
                AI-powered guidance and human support to help you find safe,<br className="hidden sm:inline" />
                convenient and comfortable housing abroad.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5">
                <button
                  onClick={() => setIsPlanModalOpen(true)}
                  className="px-6 py-3 rounded-full bg-[#E11D48] hover:bg-[#be123c] text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95"
                >
                  Start Housing Plan <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsProviderModalOpen(true)}
                  className="px-5 py-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white font-medium text-xs sm:text-sm transition-all cursor-pointer"
                >
                  Are you a landlord or agency?
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 4 FEATURE PILL CARDS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-[#0E172A] rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.05)] flex items-center gap-3.5 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#E8F8F0] dark:bg-emerald-950/40 text-[#0D9488] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-[13.5px] font-bold text-slate-900 dark:text-white leading-snug">
                  Safe and vetted
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                  recommendations &amp; inspections
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-[#0E172A] rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.05)] flex items-center gap-3.5 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#FEE2E2]/70 dark:bg-rose-950/40 text-rose-500 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-rose-500 dark:text-rose-400" />
              </div>
              <div>
                <h3 className="text-[13.5px] font-bold text-slate-900 dark:text-white leading-snug">
                  Designed for groups
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                  2 to 6+ students together
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-[#0E172A] rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.05)] flex items-center gap-3.5 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#FEF3C7]/80 dark:bg-amber-950/40 text-amber-600 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-amber-500 dark:text-amber-400" />
              </div>
              <div>
                <h3 className="text-[13.5px] font-bold text-slate-900 dark:text-white leading-snug">
                  Real neighborhood
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                  campus proximity &amp; safety insights
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white dark:bg-[#0E172A] rounded-2xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.05)] flex items-center gap-3.5 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#F3E8FF] dark:bg-purple-950/40 text-purple-600 flex items-center justify-center shrink-0">
                <Headphones className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-[13.5px] font-bold text-slate-900 dark:text-white leading-snug">
                  Human support
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                  on the ground when you need it
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FOR PROPERTY MANAGERS & LANDLORDS CARD */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#0E172A] p-6 sm:p-8 lg:p-9 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.06)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Apartment Image */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-slate-800 shadow-xs group">
                <Image
                  src="/images/apartment-florence.jpg"
                  alt="Verified Florence Provider Property interior"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                {/* Floating pill badge */}
                <div className="absolute bottom-3.5 left-3.5 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/75 backdrop-blur-md text-white text-[11px] font-medium border border-white/20">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Florence Provider Property</span>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-3.5 lg:pl-3">
                <span className="text-[#E11D48] text-xs font-bold tracking-wider uppercase">
                  FOR PROPERTY MANAGERS &amp; LANDLORDS
                </span>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                  Are you a housing provider?
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                  Connect with American study-abroad students looking for semester housing. No need to upload your entire inventory.
                </p>

                {/* 3 bullet checkmarks in a single row */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-[13px] font-medium text-slate-600 pt-1">
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200/60">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>Direct student group matches</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200/60">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>Reliable semester commitments</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200/60">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>Free to join &amp; review</span>
                  </div>
                </div>

                {/* CTA & Time helper */}
                <div className="flex items-center gap-4 pt-3">
                  <button
                    onClick={() => setIsProviderModalOpen(true)}
                    className="px-6 py-2.5 sm:py-3 rounded-full bg-[#E11D48] hover:bg-[#be123c] text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-95"
                  >
                    Join as a Provider <ArrowRight className="w-4 h-4" />
                  </button>
                  <span className="text-[11.5px] sm:text-xs text-slate-400">Takes less than 1 minute</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TOP STUDY ABROAD DESTINATIONS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Top Study Abroad Destinations
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Where American universities and study abroad programs partner with AlphaHousing
              </p>
            </div>
            <div>
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 text-[11px] sm:text-xs font-medium border border-slate-200/80 dark:border-slate-800">
                Active requests across 14 European cities
              </span>
            </div>
          </div>

          {/* 4 City Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {destinations.map((dest) => (
              <div
                key={dest.city}
                onClick={() => openPlanForCity(dest.city)}
                className="group rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#0E172A] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.city}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Card Info */}
                <div className="p-3.5 flex flex-col justify-between flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-[#E11D48] transition-colors">
                      {dest.city}
                    </h3>
                    <span className="px-2 py-0.5 rounded-md bg-[#FEF2F2] dark:bg-rose-950/40 text-[#E11D48] text-[10.5px] font-semibold border border-rose-100 dark:border-rose-900/40 shrink-0">
                      {dest.activeGroups}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {dest.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <HousingPlanModal
        isOpen={isPlanModalOpen}
        onClose={() => setIsPlanModalOpen(false)}
        defaultCity={selectedCity}
      />
      <ProviderModal
        isOpen={isProviderModalOpen}
        onClose={() => setIsProviderModalOpen(false)}
      />
    </div>
  );
}
