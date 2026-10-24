"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ArrowRight, ArrowLeft, Building2, Calendar, Users, ShieldCheck } from "lucide-react";

interface HousingPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCity?: string;
}

export function HousingPlanModal({ isOpen, onClose, defaultCity = "Florence, Italy" }: HousingPlanModalProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    city: defaultCity,
    university: "",
    groupSize: "3-4 students",
    semester: "Fall 2027",
    budgetPerBed: "€900 - €1,200/mo",
    fullName: "",
    email: "",
    phone: "",
    role: "Student", // or "Parent"
  });

  if (!isOpen) return null;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4.5 border-b border-slate-100 bg-slate-50/70">
          <div>
            <span className="text-[11px] font-bold tracking-wider uppercase text-[#E11D48]">
              Semester Housing Plan
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              {submitted ? "Housing Plan Submitted!" : `Step ${step} of 3: ${
                step === 1 ? "Destination & University" : step === 2 ? "Group & Budget Preferences" : "Contact Details"
              }`}
            </h3>
          </div>
          <button
            onClick={handleReset}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50/60">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                You&apos;re All Set, {formData.fullName || "Friend"}!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                We have received your group&apos;s request for{" "}
                <span className="font-semibold text-slate-900">{formData.city}</span> for the{" "}
                <span className="font-semibold text-slate-900">{formData.semester}</span> term. A local European field coordinator has been assigned to prepare verified matching options.
              </p>

              <div className="p-4 bg-slate-50 rounded-xl text-left text-xs space-y-1.5 border border-slate-100 text-slate-600">
                <div className="flex justify-between">
                  <span className="text-slate-500">Target Group Size:</span>
                  <span className="font-medium text-slate-900">{formData.groupSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Target Budget:</span>
                  <span className="font-medium text-slate-900">{formData.budgetPerBed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Confirmation Sent To:</span>
                  <span className="font-medium text-slate-900">{formData.email || "Your Email"}</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-3 text-sm font-semibold text-white bg-[#E11D48] hover:bg-[#c9183d] rounded-xl shadow-xs transition-colors mt-4"
              >
                Back to Website
              </button>
            </div>
          ) : (
            <form onSubmit={handleNext} className="space-y-5">
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Study Abroad City
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48] bg-white"
                    >
                      <option value="Florence, Italy">Florence, Italy</option>
                      <option value="Barcelona, Spain">Barcelona, Spain</option>
                      <option value="Paris, France">Paris, France</option>
                      <option value="Rome, Italy">Rome, Italy</option>
                      <option value="Madrid, Spain">Madrid, Spain</option>
                      <option value="Milan, Italy">Milan, Italy</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      University or Study Abroad Program
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. NYU Florence, Syracuse Madrid, CEA Paris"
                      required
                      value={formData.university}
                      onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
                    />
                    <p className="text-[11px] text-slate-500 mt-1">
                      Helps our field team filter properties within safe walking distance of your classes.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Semester Term
                    </label>
                    <div className="grid grid-cols-3 gap-2.5">
                      {["Spring 2027", "Fall 2027", "Summer 2027"].map((sem) => (
                        <button
                          key={sem}
                          type="button"
                          onClick={() => setFormData({ ...formData, semester: sem })}
                          className={`py-2 text-xs font-medium rounded-lg border transition-all text-center ${
                            formData.semester === sem
                              ? "border-[#E11D48] bg-red-50/70 text-[#E11D48] font-semibold"
                              : "border-slate-200 text-slate-600 hover:border-slate-300"
                          }`}
                        >
                          {sem}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Group Size (Friends Living Together)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {["Solo / Pair", "3-4 students", "5-6 students", "7+ students"].map((g) => (
                        <button
                          key={g}
                          type="button"
                          onClick={() => setFormData({ ...formData, groupSize: g })}
                          className={`py-2.5 px-2 text-xs rounded-xl border text-center transition-all ${
                            formData.groupSize === g
                              ? "border-[#E11D48] bg-red-50 text-[#E11D48] font-bold shadow-xs"
                              : "border-slate-200 text-slate-700 hover:border-slate-300"
                          }`}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                      Target Monthly Budget Per Student (Including Utilities)
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {["€700 - €900", "€900 - €1,200", "€1,200 - €1,600"].map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budgetPerBed: b })}
                          className={`py-2 px-1 text-xs rounded-xl border text-center transition-all ${
                            formData.budgetPerBed === b
                              ? "border-[#E11D48] bg-red-50 text-[#E11D48] font-bold"
                              : "border-slate-200 text-slate-700 hover:border-slate-300"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 bg-amber-50/70 border border-amber-200/60 rounded-xl flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-800 leading-relaxed">
                      All options include 100-point inspected electrical/heating systems, fast Wi-Fi, and escrow deposit security.
                    </p>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-3.5 animate-in fade-in duration-200">
                  <div className="flex gap-4 mb-2">
                    <label className="flex items-center text-xs font-medium text-slate-700 cursor-pointer">
                      <input
                        type="radio"
                        name="role"
                        checked={formData.role === "Student"}
                        onChange={() => setFormData({ ...formData, role: "Student" })}
                        className="mr-2 text-[#E11D48] focus:ring-[#E11D48]"
                      />
                      I am a Student
                    </label>
                    <label className="flex items-center text-xs font-medium text-slate-700 cursor-pointer">
                      <input
                        type="radio"
                        name="role"
                        checked={formData.role === "Parent"}
                        onChange={() => setFormData({ ...formData, role: "Parent" })}
                        className="mr-2 text-[#E11D48] focus:ring-[#E11D48]"
                      />
                      I am a Parent / Guardian
                    </label>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. sarah@university.edu"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Phone Number (WhatsApp enabled)
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
                    />
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>
                ) : (
                  <span />
                )}

                <button
                  type="submit"
                  className="flex items-center gap-1.5 px-6 py-2.5 text-sm font-semibold text-white bg-[#E11D48] hover:bg-[#c9183d] rounded-xl shadow-xs transition-all cursor-pointer active:scale-95"
                >
                  {step === 3 ? "Submit Housing Plan" : "Continue"} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
