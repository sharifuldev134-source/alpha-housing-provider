"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
  Sparkles,
  Building,
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
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* Sticky Header */}
      <Navbar
        onOpenPlanModal={() => setIsPlanModalOpen(true)}
        onOpenProviderModal={() => setIsProviderModalOpen(true)}
      />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative w-full min-h-[580px] sm:min-h-[640px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-pisa.jpg"
              alt="Study abroad landmark in Italy"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            {/* Contrast Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/35 to-slate-900/30" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
            {/* Semester Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white/95 text-xs sm:text-sm font-medium mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Spring &amp; Fall 2027 Semester Applications Open</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12] max-w-3xl mb-5 drop-shadow-xs">
              Find the Right Housing for Your Study Abroad Experience
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-200/95 max-w-2xl mx-auto leading-relaxed mb-8">
              AI-powered guidance and human support to help you find safe,
              convenient and comfortable housing abroad.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => setIsPlanModalOpen(true)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#E11D48] hover:bg-[#c9183d] text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer active:scale-95"
              >
                Start Housing Plan <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsProviderModalOpen(true)}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white font-medium text-sm sm:text-base transition-all duration-200 cursor-pointer"
              >
                Are you a landlord or agency?
              </button>
            </div>
          </div>
        </section>

        {/* 4 FEATURE PILL CARDS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-md flex items-center gap-3.5 hover:shadow-lg transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-[14.5px] font-bold text-slate-900 leading-snug">
                  Safe and vetted
                </h2>
                <p className="text-xs text-slate-500 leading-tight">
                  recommendations &amp; inspections
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-md flex items-center gap-3.5 hover:shadow-lg transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-rose-50 text-rose-500 border border-rose-100 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-[14.5px] font-bold text-slate-900 leading-snug">
                  Designed for groups
                </h2>
                <p className="text-xs text-slate-500 leading-tight">
                  2 to 6+ students together
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-md flex items-center gap-3.5 hover:shadow-lg transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-[14.5px] font-bold text-slate-900 leading-snug">
                  Real neighborhood
                </h2>
                <p className="text-xs text-slate-500 leading-tight">
                  campus proximity &amp; safety insights
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-md flex items-center gap-3.5 hover:shadow-lg transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center shrink-0">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-[14.5px] font-bold text-slate-900 leading-snug">
                  Human support
                </h2>
                <p className="text-xs text-slate-500 leading-tight">
                  on the ground when you need it
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FOR PROPERTY MANAGERS & LANDLORDS CARD */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-xs hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Apartment Image */}
              <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-sm group">
                <Image
                  src="/images/apartment-florence.jpg"
                  alt="Verified Florence Provider Property interior"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Floating pill badge */}
                <div className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/75 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Florence Provider Property</span>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-6 flex flex-col justify-center space-y-5 lg:pl-4">
                <div className="inline-block">
                  <span className="px-3 py-1 rounded-md bg-rose-50 border border-rose-100 text-[#E11D48] text-[11px] font-bold tracking-wider uppercase">
                    FOR PROPERTY MANAGERS &amp; LANDLORDS
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Are you a housing provider?
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Connect with American study-abroad students looking for semester housing. No need to upload your entire inventory.
                </p>

                {/* 3 bullet checkmarks */}
                <div className="flex flex-wrap gap-y-2 gap-x-5 text-xs sm:text-sm font-medium text-slate-700 pt-1">
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span>Direct student group matches</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span>Reliable semester commitments</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span>Free to join &amp; review</span>
                  </div>
                </div>

                {/* CTA & Time helper */}
                <div className="flex items-center gap-4 pt-2">
                  <button
                    onClick={() => setIsProviderModalOpen(true)}
                    className="px-6 py-3 rounded-full bg-[#E11D48] hover:bg-[#c9183d] text-white text-sm font-semibold flex items-center gap-2 shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-95"
                  >
                    Join as a Provider <ArrowRight className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-slate-400">Takes less than 1 minute</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TOP STUDY ABROAD DESTINATIONS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Top Study Abroad Destinations
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Where American universities and study abroad programs partner with AlphaHousing
              </p>
            </div>
            <div>
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200">
                Active requests across 14 European cities
              </span>
            </div>
          </div>

          {/* 4 City Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest) => (
              <div
                key={dest.city}
                onClick={() => openPlanForCity(dest.city)}
                className="group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.city}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Card Info */}
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-slate-900 text-base group-hover:text-[#E11D48] transition-colors">
                      {dest.city}
                    </h3>
                    <span className="px-2 py-0.5 rounded-md bg-rose-50 text-[#E11D48] text-[11px] font-semibold shrink-0">
                      {dest.activeGroups}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
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
