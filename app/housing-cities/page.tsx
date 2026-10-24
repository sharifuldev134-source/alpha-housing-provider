"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HousingPlanModal } from "@/components/HousingPlanModal";
import { ProviderModal } from "@/components/ProviderModal";
import { Search, MapPin, Users, Check, ArrowRight, Building } from "lucide-react";

export default function HousingCitiesPage() {
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [isProviderModalOpen, setIsProviderModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Florence, Italy");
  const [filter, setFilter] = useState("All");

  const cities = [
    {
      name: "Florence, Italy",
      country: "Italy",
      activeGroups: "48 active groups",
      priceRange: "€950–€1,350/mo",
      universities: ["NYU Florence", "Syracuse Florence", "Marist College", "FIDI"],
      image: "/images/city-florence.jpg",
      neighborhoods: ["Duomo", "Santa Croce", "San Frediano", "San Marco"],
    },
    {
      name: "Barcelona, Spain",
      country: "Spain",
      activeGroups: "36 active groups",
      priceRange: "€850–€1,200/mo",
      universities: ["UPF", "ESADE", "Universitat de Barcelona", "CEA CAPA"],
      image: "/images/city-barcelona.jpg",
      neighborhoods: ["Eixample", "Gràcia", "Gothic Quarter", "Poblenou"],
    },
    {
      name: "Paris, France",
      country: "France",
      activeGroups: "29 active groups",
      priceRange: "€1,100–€1,700/mo",
      universities: ["Sciences Po", "Sorbonne", "American University of Paris"],
      image: "/images/city-paris.jpg",
      neighborhoods: ["Latin Quarter", "Marais", "Montparnasse", "Bastille"],
    },
    {
      name: "Rome, Italy",
      country: "Italy",
      activeGroups: "31 active groups",
      priceRange: "€800–€1,250/mo",
      universities: ["John Cabot University", "Temple Rome", "Loyola Rome Center"],
      image: "/images/city-rome.jpg",
      neighborhoods: ["Trastevere", "Prati", "Campo de' Fiori", "Monti"],
    },
  ];

  const filteredCities = filter === "All" ? cities : cities.filter((c) => c.country === filter);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 text-slate-900">
      <Navbar
        onOpenPlanModal={() => setIsPlanModalOpen(true)}
        onOpenProviderModal={() => setIsProviderModalOpen(true)}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="px-3 py-1 rounded-md bg-rose-50 border border-rose-100 text-[#E11D48] text-[11px] font-bold tracking-wider uppercase inline-block mb-3">
            VERIFIED DESTINATIONS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Study Abroad Housing Cities
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            AlphaHousing operates local on-the-ground inspection teams across major European academic hubs. Every property is personally visited, tested, and vetted.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {["All", "Italy", "Spain", "France"].map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                filter === c
                  ? "bg-[#E11D48] text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredCities.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#E11D48] shadow-xs">
                  {item.activeGroups}
                </div>
              </div>

              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl font-bold text-slate-900">{item.name}</h2>
                    <span className="text-sm font-semibold text-slate-700">{item.priceRange}</span>
                  </div>

                  <div className="text-xs text-slate-500 mb-4">
                    Popular with: {item.universities.join(", ")}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.neighborhoods.map((n) => (
                      <span
                        key={n}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-[11px] font-medium"
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedCity(item.name);
                    setIsPlanModalOpen(true);
                  }}
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-[#E11D48] text-white text-sm font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  Request Housing in {item.name.split(",")[0]} <ArrowRight className="w-4 h-4" />
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
