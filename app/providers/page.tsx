"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProviderRegistrationFlow } from "@/components/ProviderRegistrationFlow";
import { HousingPlanModal } from "@/components/HousingPlanModal";

export default function ProvidersPage() {
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar
        onOpenProviderModal={() => {
          // Scroll smoothly to form if needed
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onOpenPlanModal={() => setIsPlanModalOpen(true)}
      />

      <main className="flex-1 py-6 sm:py-10">
        <ProviderRegistrationFlow />
      </main>

      <Footer />

      <HousingPlanModal
        isOpen={isPlanModalOpen}
        onClose={() => setIsPlanModalOpen(false)}
      />
    </div>
  );
}
