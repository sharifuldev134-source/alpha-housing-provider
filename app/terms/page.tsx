import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-6">Terms of Service</h1>
        <div className="prose prose-slate text-sm sm:text-base space-y-4 text-slate-600 leading-relaxed">
          <p>
            Welcome to AlphaHousing. By accessing our platform, submitting a study abroad housing plan, or registering as a housing provider, you agree to these Terms of Service.
          </p>
          <h2 className="text-lg font-bold text-slate-900 pt-4">1. Vetting &amp; Property Standards</h2>
          <p>
            AlphaHousing operates a 100-point inspection protocol for student safety. Landlords agree to maintain heating, electrical standards, Wi-Fi connectivity, and structural safety throughout the semester tenancy.
          </p>
          <h2 className="text-lg font-bold text-slate-900 pt-4">2. Bilateral English Lease Agreements</h2>
          <p>
            All housing agreements facilitated through the network utilize standardized, transparent bilateral lease agreements executed in English and the local European jurisdiction language.
          </p>
          <h2 className="text-lg font-bold text-slate-900 pt-4">3. Governing Law</h2>
          <p>
            These terms are governed in accordance with applicable international consumer and European tenancy protection regulations.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
