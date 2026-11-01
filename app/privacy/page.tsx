import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-6">Privacy Policy</h1>
        <div className="prose prose-slate text-sm sm:text-base space-y-4 text-slate-600 leading-relaxed">
          <p>
            At AlphaHousing, we take your privacy and personal data protection very seriously. This Privacy Policy details how we collect, store, and process information from students, parents, universities, and European housing providers.
          </p>
          <h2 className="text-lg font-bold text-slate-900 pt-4">1. Information We Collect</h2>
          <p>
            We collect information provided directly when you submit a housing plan, such as student and parent contact information, university study abroad program dates, room preferences, and communications with our field staff.
          </p>
          <h2 className="text-lg font-bold text-slate-900 pt-4">2. Escrow &amp; Payment Security</h2>
          <p>
            All monetary deposits and lease escrow accounts are managed under European financial regulations and strict bilateral data handling compliance. We do not sell your personal data to any third-party advertisers.
          </p>
          <h2 className="text-lg font-bold text-slate-900 pt-4">3. Contact Us</h2>
          <p>
            If you have questions regarding your data or wish to request data deletion, contact privacy@alphahousing.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
