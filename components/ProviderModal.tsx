"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ArrowRight, Building, ShieldCheck } from "lucide-react";

interface ProviderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProviderModal({ isOpen, onClose }: ProviderModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    companyName: "",
    city: "Florence, Italy",
    unitsCount: "2-5 apartments",
    contactName: "",
    email: "",
    phone: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
        <div className="flex items-center justify-between px-6 py-4.5 border-b border-slate-100 bg-slate-50/70">
          <div>
            <span className="text-[11px] font-bold tracking-wider uppercase text-[#E11D48]">
              Housing Provider Network
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              {submitted ? "Registration Received" : "Join as a Verified Provider"}
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50/60">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Thank You, {form.contactName}!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Your profile for <span className="font-semibold text-slate-900">{form.city}</span> has been received. Our European partner relations manager will verify your details and connect with you shortly.
              </p>
              <button
                onClick={handleClose}
                className="w-full py-3 text-sm font-semibold text-white bg-[#E11D48] hover:bg-[#c9183d] rounded-xl shadow-xs transition-colors mt-4"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Agency or Landlord Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Tuscan Living Properties"
                  required
                  value={form.companyName}
                  onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Operating City
                  </label>
                  <select
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48] bg-white"
                  >
                    <option value="Florence, Italy">Florence, Italy</option>
                    <option value="Barcelona, Spain">Barcelona, Spain</option>
                    <option value="Paris, France">Paris, France</option>
                    <option value="Rome, Italy">Rome, Italy</option>
                    <option value="Other Europe">Other Europe</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Available Units
                  </label>
                  <select
                    value={form.unitsCount}
                    onChange={(e) => setForm({ ...form, unitsCount: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48] bg-white"
                  >
                    <option value="1 apartment">1 apartment</option>
                    <option value="2-5 apartments">2-5 apartments</option>
                    <option value="6-15 apartments">6-15 apartments</option>
                    <option value="16+ apartments / Building">16+ apartments</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Contact Person Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Matteo Rossi"
                  required
                  value={form.contactName}
                  onChange={(e) => setForm({ ...form, contactName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+39 333 1234567"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
                  />
                </div>
              </div>

              <div className="p-3 bg-emerald-50/70 border border-emerald-200/50 rounded-xl flex items-center gap-2.5 text-xs text-emerald-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Free to join. Guaranteed student semester leases & secure payments.</span>
              </div>

              <button
                type="submit"
                className="w-full py-3 text-sm font-semibold text-white bg-[#E11D48] hover:bg-[#c9183d] rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                Join as a Provider <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
