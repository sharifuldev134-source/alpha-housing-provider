"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  Building2,
  Home,
  Phone,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

export function ProviderRegistrationFlow() {
  // Mode: "single" | "wizard"
  const [mode, setMode] = useState<"single" | "wizard">("single");
  const [wizardStep, setWizardStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1 / Single
    companyName: "Firenze Housing Group",
    providerType: "Property Manager",
    website: "https://firenzehousing.it",
    country: "Italy",
    city: "Florence",
    description:
      "We manage premium furnished apartments in historic central Florence, specializing in American semester abroad student groups with 24/7 local assistance.",
    
    // Single form fields
    contactName: "Maria Rossi",
    emailOrWhatsApp: "maria@firenzehousing.it",
    providesSemesterHousing: "Yes", // "Yes" | "Sometimes"

    // Step 2 (Housing Profile)
    areasServed: "Santa Croce, Santo Spirito, Duomo, San Marco",
    housingTypes: ["Apartments"] as string[],
    typicalGroupSize: "2–5 students",
    typicalBedrooms: "3–4 bedrooms",
    rentMin: "3000",
    rentMax: "6000",
    semesterRentals: "Yes",
    acceptStudentGroups: "Yes",
    additionalNotes:
      "All properties include high-speed Wi-Fi, air conditioning, and dedicated study desks.",

    // Step 3 (Contact Information)
    email: "maria@firenzehousing.it",
    phoneCountryCode: "+39",
    phone: "312 345 6789",
    preferredContact: "Email",
    languages: ["English", "Italian"] as string[],

    // Step 4
    agreeToTerms: true,
  });

  const toggleHousingType = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      housingTypes: prev.housingTypes.includes(type)
        ? prev.housingTypes.filter((t) => t !== type)
        : [...prev.housingTypes, type],
    }));
  };

  const toggleLanguage = (lang: string) => {
    setFormData((prev) => ({
      ...prev,
      languages: prev.languages.includes(lang)
        ? prev.languages.filter((l) => l !== lang)
        : [...prev.languages, lang],
    }));
  };

  const handleSingleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWizardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Top Banner Switcher */}
      <div className="rounded-2xl bg-rose-50/80 border border-rose-100 px-4 sm:px-6 py-3 flex items-center justify-between text-xs sm:text-sm font-medium mb-8">
        <div className="flex items-center gap-2 text-slate-800">
          <Sparkles className="w-4 h-4 text-[#E11D48]" />
          <span>
            {mode === "single"
              ? "Showing Single, Simple Form"
              : "Showing 4-Step Detailed Wizard (Image 2 flow)"}
          </span>
        </div>

        <button
          onClick={() => {
            setMode(mode === "single" ? "wizard" : "single");
            setSubmitted(false);
          }}
          className="text-[#E11D48] hover:text-[#c9183d] font-semibold flex items-center gap-1 transition-colors cursor-pointer"
        >
          {mode === "single" ? "Switch to 4-Step Wizard →" : "Switch to Single Form →"}
        </button>
      </div>

      {submitted ? (
        <div className="max-w-xl mx-auto bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 text-center shadow-xs space-y-5 animate-in zoom-in-95 duration-200">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50/60">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">
            Application Received!
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
            Thank you, <span className="font-semibold text-slate-900">{formData.companyName}</span>! Our European partner relations team in{" "}
            <span className="font-semibold text-slate-900">{formData.city}</span> is reviewing your details. You will receive an onboarding confirmation email at{" "}
            <span className="font-semibold text-slate-900">{formData.emailOrWhatsApp || formData.email}</span> within 24 hours.
          </p>
          <div className="pt-3">
            <button
              onClick={() => setSubmitted(false)}
              className="px-8 py-3 text-sm font-semibold text-white bg-[#E11D48] hover:bg-[#c9183d] rounded-2xl shadow-sm transition-all"
            >
              Submit Another Application
            </button>
          </div>
        </div>
      ) : mode === "single" ? (
        /* ========================================================================= */
        /* SINGLE, SIMPLE FORM MODE (Screenshot 1)                                   */
        /* ========================================================================= */
        <div className="max-w-xl mx-auto bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs animate-in fade-in duration-200">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Join the AlphaHousing Provider Network
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Connect with American study-abroad students looking for housing. It only takes a minute.
            </p>
          </div>

          <form onSubmit={handleSingleSubmit} className="space-y-4">
            {/* Company / Provider Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Company / Provider Name <span className="text-[#E11D48]">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.companyName}
                onChange={(e) =>
                  setFormData({ ...formData, companyName: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                City <span className="text-[#E11D48]">*</span>
              </label>
              <div className="relative">
                <select
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  className="w-full appearance-none px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48] pr-10 cursor-pointer"
                >
                  <option value="Florence">Florence</option>
                  <option value="Rome">Rome</option>
                  <option value="Barcelona">Barcelona</option>
                  <option value="Paris">Paris</option>
                  <option value="Madrid">Madrid</option>
                  <option value="Milan">Milan</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Contact Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Contact Name <span className="text-[#E11D48]">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.contactName}
                onChange={(e) =>
                  setFormData({ ...formData, contactName: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
              />
            </div>

            {/* Email or WhatsApp */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Email or WhatsApp <span className="text-[#E11D48]">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.emailOrWhatsApp}
                onChange={(e) =>
                  setFormData({ ...formData, emailOrWhatsApp: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
              />
            </div>

            {/* Website (optional) */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Website <span className="text-slate-400 font-normal">(optional)</span>
              </label>
              <input
                type="url"
                value={formData.website}
                onChange={(e) =>
                  setFormData({ ...formData, website: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
              />
            </div>

            {/* Semester Housing Radio */}
            <div className="pt-1">
              <label className="block text-xs font-semibold text-slate-700 mb-2">
                Do you provide semester housing for students?
              </label>
              <div className="flex items-center gap-6 text-sm text-slate-700">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="providesSemester"
                    checked={formData.providesSemesterHousing === "Yes"}
                    onChange={() =>
                      setFormData({ ...formData, providesSemesterHousing: "Yes" })
                    }
                    className="accent-[#E11D48] w-4 h-4 cursor-pointer"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="providesSemester"
                    checked={formData.providesSemesterHousing === "Sometimes"}
                    onChange={() =>
                      setFormData({ ...formData, providesSemesterHousing: "Sometimes" })
                    }
                    className="accent-[#E11D48] w-4 h-4 cursor-pointer"
                  />
                  <span>Sometimes</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-3.5 text-sm font-bold text-white bg-[#E11D48] hover:bg-[#c9183d] rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                Join AlphaHousing <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Footnote */}
            <p className="text-[11px] text-slate-400 text-center leading-relaxed pt-2">
              After you submit, our team will review and activate your account. You&apos;ll receive a confirmation email shortly.
            </p>
          </form>
        </div>
      ) : (
        /* ========================================================================= */
        /* 4-STEP DETAILED WIZARD MODE (Screenshots 2, 3, 4, 5)                       */
        /* ========================================================================= */
        <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xs animate-in fade-in duration-200">
          {/* STEPPER HEADER */}
          <div className="relative mb-10 pb-2">
            <div className="flex items-center justify-between relative z-10">
              {[
                { step: 1, label: "Provider Details" },
                { step: 2, label: "Housing Profile" },
                { step: 3, label: "Contact Information" },
                { step: 4, label: "Review & Submit" },
              ].map((s) => {
                const isCompleted = wizardStep > s.step;
                const isActive = wizardStep === s.step;

                return (
                  <div
                    key={s.step}
                    className="flex flex-col items-center flex-1 cursor-pointer"
                    onClick={() => {
                      if (wizardStep > s.step) setWizardStep(s.step);
                    }}
                  >
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        isCompleted
                          ? "bg-[#E11D48] text-white"
                          : isActive
                          ? "bg-[#E11D48] text-white ring-4 ring-rose-100"
                          : "border-2 border-slate-200 text-slate-400 bg-white"
                      }`}
                    >
                      {isCompleted ? <Check className="w-4 h-4 stroke-[3]" /> : s.step}
                    </div>
                    <span
                      className={`text-[11px] font-semibold mt-2 text-center transition-colors ${
                        isActive
                          ? "text-[#E11D48]"
                          : isCompleted
                          ? "text-slate-700"
                          : "text-slate-400"
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Connecting Line behind the circles */}
            <div className="absolute top-4.5 left-10 right-10 h-0.5 bg-slate-200 -z-0" />
          </div>

          {/* STEP 1: Provider Details (Screenshot 2) */}
          {wizardStep === 1 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Provider Details
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Tell us about your organization.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Provider Name <span className="text-[#E11D48]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData({ ...formData, companyName: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Provider Type <span className="text-[#E11D48]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={formData.providerType}
                      onChange={(e) =>
                        setFormData({ ...formData, providerType: e.target.value })
                      }
                      className="w-full appearance-none px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48] pr-10 cursor-pointer"
                    >
                      <option value="Property Manager">Property Manager</option>
                      <option value="Landlord / Private Owner">Landlord / Private Owner</option>
                      <option value="Agency / Broker">Agency / Broker</option>
                      <option value="Student Residence Operator">Student Residence Operator</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Website
                </label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) =>
                    setFormData({ ...formData, website: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Country <span className="text-[#E11D48]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                      className="w-full appearance-none px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48] pr-10 cursor-pointer"
                    >
                      <option value="Italy">🇮🇹 Italy</option>
                      <option value="Spain">🇪🇸 Spain</option>
                      <option value="France">🇫🇷 France</option>
                      <option value="United Kingdom">🇬🇧 United Kingdom</option>
                      <option value="Germany">🇩🇪 Germany</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    City <span className="text-[#E11D48]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      className="w-full appearance-none px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48] pr-10 cursor-pointer"
                    >
                      <option value="Florence">Florence</option>
                      <option value="Rome">Rome</option>
                      <option value="Barcelona">Barcelona</option>
                      <option value="Paris">Paris</option>
                      <option value="Madrid">Madrid</option>
                      <option value="Milan">Milan</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-semibold text-slate-700">
                    Short Description <span className="text-[#E11D48]">*</span>
                  </label>
                  <span className="text-[11px] text-slate-400">
                    {formData.description.length}/300
                  </span>
                </div>
                <textarea
                  rows={3}
                  maxLength={300}
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
                />
              </div>

              <div className="flex justify-end pt-3">
                <button
                  type="button"
                  onClick={() => setWizardStep(2)}
                  className="px-8 py-3 text-sm font-bold text-white bg-[#E11D48] hover:bg-[#c9183d] rounded-2xl shadow-sm transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
                >
                  Next <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Housing Profile (Screenshot 3) */}
          {wizardStep === 2 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Housing Profile
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Tell us about the type of housing you provide.
                </p>
              </div>

              {/* Areas Served */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Areas Served <span className="text-[#E11D48]">*</span>
                </label>
                <input
                  type="text"
                  value={formData.areasServed}
                  onChange={(e) =>
                    setFormData({ ...formData, areasServed: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
                />
              </div>

              {/* Types of Housing */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Types of Housing
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    "Apartments",
                    "Rooms",
                    "Student Residence",
                    "Shared Housing",
                    "Villas",
                    "Other",
                  ].map((type) => {
                    const isChecked = formData.housingTypes.includes(type);
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => toggleHousingType(type)}
                        className={`flex items-center gap-2.5 px-3.5 py-2 rounded-xl border text-xs font-medium transition-all text-left ${
                          isChecked
                            ? "border-[#E11D48] bg-rose-50/60 text-[#E11D48] font-semibold"
                            : "border-slate-200 text-slate-700 hover:border-slate-300"
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                            isChecked
                              ? "bg-[#E11D48] border-[#E11D48] text-white"
                              : "border-slate-300 bg-white"
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span>{type}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Typical Group Size & Bedrooms */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Typical Group Size
                  </label>
                  <div className="relative">
                    <select
                      value={formData.typicalGroupSize}
                      onChange={(e) =>
                        setFormData({ ...formData, typicalGroupSize: e.target.value })
                      }
                      className="w-full appearance-none px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48] pr-10 cursor-pointer"
                    >
                      <option value="2–5 students">2–5 students</option>
                      <option value="1–2 students">1–2 students</option>
                      <option value="6+ students">6+ students</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Typical Bedrooms
                  </label>
                  <div className="relative">
                    <select
                      value={formData.typicalBedrooms}
                      onChange={(e) =>
                        setFormData({ ...formData, typicalBedrooms: e.target.value })
                      }
                      className="w-full appearance-none px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48] pr-10 cursor-pointer"
                    >
                      <option value="3–4 bedrooms">3–4 bedrooms</option>
                      <option value="1–2 bedrooms">1–2 bedrooms</option>
                      <option value="5+ bedrooms">5+ bedrooms</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Monthly Rent (EUR) */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Typical Monthly Rent (EUR)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-slate-400">
                      €
                    </span>
                    <input
                      type="number"
                      value={formData.rentMin}
                      onChange={(e) =>
                        setFormData({ ...formData, rentMin: e.target.value })
                      }
                      className="w-full pl-8 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
                    />
                  </div>

                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-slate-400">
                      €
                    </span>
                    <input
                      type="number"
                      value={formData.rentMax}
                      onChange={(e) =>
                        setFormData({ ...formData, rentMax: e.target.value })
                      }
                      className="w-full pl-8 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
                    />
                  </div>
                </div>
              </div>

              {/* Semester Rentals & Accept Student Groups */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Semester Rentals
                  </label>
                  <div className="flex items-center gap-4 text-xs text-slate-700">
                    {["Yes", "No", "Sometimes"].map((val) => (
                      <label key={val} className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="semesterRentals"
                          checked={formData.semesterRentals === val}
                          onChange={() =>
                            setFormData({ ...formData, semesterRentals: val })
                          }
                          className="accent-[#E11D48] w-3.5 h-3.5 cursor-pointer"
                        />
                        <span>{val}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Accept Student Groups?
                  </label>
                  <div className="flex items-center gap-4 text-xs text-slate-700">
                    {["Yes", "No", "Sometimes"].map((val) => (
                      <label key={val} className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="acceptStudentGroups"
                          checked={formData.acceptStudentGroups === val}
                          onChange={() =>
                            setFormData({ ...formData, acceptStudentGroups: val })
                          }
                          className="accent-[#E11D48] w-3.5 h-3.5 cursor-pointer"
                        />
                        <span>{val}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Additional Notes
                </label>
                <textarea
                  rows={2}
                  value={formData.additionalNotes}
                  onChange={(e) =>
                    setFormData({ ...formData, additionalNotes: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
                />
              </div>

              {/* Back / Next Buttons */}
              <div className="flex items-center justify-between pt-3">
                <button
                  type="button"
                  onClick={() => setWizardStep(1)}
                  className="px-6 py-2.5 text-xs font-semibold text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>
                <button
                  type="button"
                  onClick={() => setWizardStep(3)}
                  className="px-8 py-3 text-sm font-bold text-white bg-[#E11D48] hover:bg-[#c9183d] rounded-2xl shadow-sm transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
                >
                  Next <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Contact Information (Screenshot 4) */}
          {wizardStep === 3 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Contact Information
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  How should AlphaHousing contact you?
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Primary Contact Name <span className="text-[#E11D48]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.contactName}
                  onChange={(e) =>
                    setFormData({ ...formData, contactName: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Email Address <span className="text-[#E11D48]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Phone / WhatsApp <span className="text-[#E11D48]">*</span>
                </label>
                <div className="flex gap-2">
                  <div className="relative w-44">
                    <select
                      value={formData.phoneCountryCode}
                      onChange={(e) =>
                        setFormData({ ...formData, phoneCountryCode: e.target.value })
                      }
                      className="w-full appearance-none px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48] pr-8 cursor-pointer"
                    >
                      <option value="+39">🇮🇹 Italy (+39)</option>
                      <option value="+34">🇪🇸 Spain (+34)</option>
                      <option value="+33">🇫🇷 France (+33)</option>
                      <option value="+44">🇬🇧 UK (+44)</option>
                      <option value="+1">🇺🇸 US (+1)</option>
                    </select>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Preferred Contact Method
                </label>
                <div className="relative">
                  <select
                    value={formData.preferredContact}
                    onChange={(e) =>
                      setFormData({ ...formData, preferredContact: e.target.value })
                    }
                    className="w-full appearance-none px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48] pr-10 cursor-pointer"
                  >
                    <option value="Email">Email</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Phone Call">Phone Call</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Languages Spoken */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Languages Spoken
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {["English", "Italian", "Spanish", "French", "Other"].map(
                    (lang) => {
                      const isChecked = formData.languages.includes(lang);
                      return (
                        <button
                          key={lang}
                          type="button"
                          onClick={() => toggleLanguage(lang)}
                          className={`flex items-center gap-2.5 px-3.5 py-2 rounded-xl border text-xs font-medium transition-all text-left ${
                            isChecked
                              ? "border-[#E11D48] bg-rose-50/60 text-[#E11D48] font-semibold"
                              : "border-slate-200 text-slate-700 hover:border-slate-300"
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                              isChecked
                                ? "bg-[#E11D48] border-[#E11D48] text-white"
                                : "border-slate-300 bg-white"
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span>{lang}</span>
                        </button>
                      );
                    }
                  )}
                </div>
              </div>

              {/* Back / Next Buttons */}
              <div className="flex items-center justify-between pt-3">
                <button
                  type="button"
                  onClick={() => setWizardStep(2)}
                  className="px-6 py-2.5 text-xs font-semibold text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>
                <button
                  type="button"
                  onClick={() => setWizardStep(4)}
                  className="px-8 py-3 text-sm font-bold text-white bg-[#E11D48] hover:bg-[#c9183d] rounded-2xl shadow-sm transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
                >
                  Next <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Review & Submit (Screenshot 5) */}
          {wizardStep === 4 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Review Your Information
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Please review your details before submitting.
                </p>
              </div>

              {/* 3 Summary Review Cards */}
              <div className="space-y-3.5">
                {/* Review Card 1 */}
                <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-rose-50 text-[#E11D48] border border-rose-100 flex items-center justify-center shrink-0">
                      <Building2 className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Provider Details
                      </div>
                      <div className="text-sm font-bold text-slate-900 mt-0.5">
                        {formData.companyName}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {formData.providerType} • {formData.city}, {formData.country}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setWizardStep(1)}
                    className="text-xs font-bold text-[#E11D48] hover:underline cursor-pointer"
                  >
                    Edit
                  </button>
                </div>

                {/* Review Card 2 */}
                <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
                      <Home className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Housing Profile
                      </div>
                      <div className="text-sm font-bold text-slate-900 mt-0.5">
                        {formData.housingTypes.join(", ")} | {formData.typicalGroupSize} | €{formData.rentMin} – €{formData.rentMax}/month
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        Areas: {formData.areasServed}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setWizardStep(2)}
                    className="text-xs font-bold text-[#E11D48] hover:underline cursor-pointer"
                  >
                    Edit
                  </button>
                </div>

                {/* Review Card 3 */}
                <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center shrink-0">
                      <Phone className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Contact Information
                      </div>
                      <div className="text-sm font-bold text-slate-900 mt-0.5">
                        {formData.contactName}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {formData.email} • {formData.phoneCountryCode} {formData.phone}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setWizardStep(3)}
                    className="text-xs font-bold text-[#E11D48] hover:underline cursor-pointer"
                  >
                    Edit
                  </button>
                </div>
              </div>

              {/* Terms Agreement Checkbox */}
              <div className="pt-2">
                <label className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={(e) =>
                      setFormData({ ...formData, agreeToTerms: e.target.checked })
                    }
                    className="accent-[#E11D48] w-4 h-4 rounded cursor-pointer"
                  />
                  <span>
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="text-[#E11D48] font-bold hover:underline"
                    >
                      AlphaHousing Provider Terms
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="text-[#E11D48] font-bold hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </span>
                </label>
              </div>

              {/* Back / Submit for Review */}
              <div className="flex items-center justify-between pt-3">
                <button
                  type="button"
                  onClick={() => setWizardStep(3)}
                  className="px-6 py-2.5 text-xs font-semibold text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>
                <button
                  type="button"
                  disabled={!formData.agreeToTerms}
                  onClick={handleWizardSubmit}
                  className={`px-8 py-3.5 text-sm font-bold text-white rounded-2xl shadow-sm transition-all flex items-center gap-1.5 ${
                    formData.agreeToTerms
                      ? "bg-[#E11D48] hover:bg-[#c9183d] cursor-pointer active:scale-95 shadow-md"
                      : "bg-slate-300 cursor-not-allowed"
                  }`}
                >
                  Submit for Review
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
