"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HousingPlanModal } from "@/components/HousingPlanModal";
import { ProviderModal } from "@/components/ProviderModal";
import { Search, ArrowRight } from "lucide-react";

export default function HousingCitiesPage() {
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [isProviderModalOpen, setIsProviderModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Florence, Italy");
  const [searchQuery, setSearchQuery] = useState("");

  const cities = [
    {
      name: "Florence, Italy",
      shortName: "Florence",
      activeGroups: "48 active groups",
      priceRange: "€950 - €1,350 / month",
      universities: "Syracuse, NYU Florence, IES Abroad, CAPA, Kent State",
      neighborhoods: "Santa Croce, Duomo, San Marco, Santo Spirito",
      image: "/images/city-florence.jpg",
    },
    {
      name: "Barcelona, Spain",
      shortName: "Barcelona",
      activeGroups: "36 active groups",
      priceRange: "€850 - €1,200 / month",
      universities: "CEA CAPA, IES, ESADE, University of Barcelona",
      neighborhoods: "Eixample, Gràcia, Gothic Quarter, El Born",
      image: "/images/city-barcelona.jpg",
    },
    {
      name: "Paris, France",
      shortName: "Paris",
      activeGroups: "29 active groups",
      priceRange: "€1,100 - €1,700 / month",
      universities: "Sciences Po, Sorbonne, American Univ. of Paris (AUP)",
      neighborhoods: "Latin Quarter, Marais, 6th Arrondissement, Montparnasse",
      image: "/images/city-paris.jpg",
    },
    {
      name: "Rome, Italy",
      shortName: "Rome",
      activeGroups: "31 active groups",
      priceRange: "€800 - €1,250 / month",
      universities: "John Cabot University, Temple Rome, Loyola Chicago Rome",
      neighborhoods: "Trastevere, Prati, Monti, Testaccio",
      image: "/images/city-rome.jpg",
    },
    {
      name: "Madrid, Spain",
      shortName: "Madrid",
      activeGroups: "24 active groups",
      priceRange: "€750 - €1,150 / month",
      universities: "Syracuse Madrid, Carlos III, Complutense, SLU Madrid",
      neighborhoods: "Malasaña, Chamberí, Salamanca, Moncloa",
      image: "/images/hero-pisa.jpg",
    },
    {
      name: "Milan, Italy",
      shortName: "Milan",
      activeGroups: "18 active groups",
      priceRange: "€900 - €1,450 / month",
      universities: "Bocconi, IES Abroad Milan, Cattolica, Politecnico",
      neighborhoods: "Navigli, Porta Romana, Brera, Isola",
      image: "/images/apartment-florence.jpg",
    },
  ];

  const filteredCities = cities.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.universities.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.neighborhoods.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#070C18] text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
      <Navbar
        onOpenPlanModal={() => setIsPlanModalOpen(true)}
        onOpenProviderModal={() => setIsProviderModalOpen(true)}
      />

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 w-full">
        {/* Section Header */}
        <div className="mb-6">
          <span className="text-[#E11D48] text-xs font-bold tracking-wider uppercase block mb-1.5">
            DESTINATIONS
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            European Study Abroad Housing<br />Destinations
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed mt-2">
            Browse cities where AlphaHousing maintains local inspection teams, trusted university relationships, and verified provider networks.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mb-10">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by city, country or university (e.g. Florence, Bocconi, Spain)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 bg-white dark:bg-[#0E172A] shadow-xs focus:outline-none focus:ring-1 focus:ring-slate-300 dark:focus:ring-slate-700"
            />
          </div>
        </div>

        {/* 6 Cities Grid (3 columns x 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredCities.map((item) => (
            <div
              key={item.name}
              className="bg-white dark:bg-[#0E172A] rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* City Image */}
              <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Top left badge: City name */}
                <div className="absolute top-3 left-3 bg-slate-950/75 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-white border border-white/20">
                  {item.name}
                </div>
                {/* Top right badge: Active groups */}
                <div className="absolute top-3 right-3 bg-[#E11D48] px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold text-white shadow-xs">
                  {item.activeGroups}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-4 flex flex-col justify-between flex-1 space-y-3.5">
                <div>
                  {/* Rent Row */}
                  <div className="flex items-center justify-between text-xs pb-1 border-b border-slate-100">
                    <span className="text-slate-400 text-[11px]">Average Student Rent</span>
                    <span className="font-bold text-slate-900 text-xs">{item.priceRange}</span>
                  </div>

                  {/* Universities */}
                  <div className="pt-2.5">
                    <span className="text-[11px] font-bold text-slate-700 block mb-0.5">
                      Top University Programs:
                    </span>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      {item.universities}
                    </p>
                  </div>

                  {/* Neighborhoods */}
                  <div className="pt-2">
                    <span className="text-[11px] font-bold text-slate-700 block mb-0.5">
                      Popular Student Neighborhoods:
                    </span>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      {item.neighborhoods}
                    </p>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <button
                  onClick={() => {
                    setSelectedCity(item.name);
                    setIsPlanModalOpen(true);
                  }}
                  className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-[#E11D48] text-slate-700 hover:text-white border border-slate-200/80 hover:border-transparent text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                >
                  Request Housing in {item.shortName} <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />

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
