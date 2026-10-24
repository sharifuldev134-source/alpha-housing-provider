"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Sparkles, ChevronDown } from "lucide-react";

interface HousingPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCity?: string;
}

export function HousingPlanModal({
  isOpen,
  onClose,
  defaultCity = "Florence, Italy",
}: HousingPlanModalProps) {
  const [destination, setDestination] = useState(defaultCity);
  const [groupSize, setGroupSize] = useState("4 students");
  const [semester, setSemester] = useState("Spring 2027 (Jan – May)");
  const [university, setUniversity] = useState("Vanderbilt University");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-7 sm:p-9">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50/60">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Housing Request Submitted!
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                We have notified verified providers in{" "}
                <span className="font-semibold text-slate-900">{destination}</span> for{" "}
                <span className="font-semibold text-slate-900">{university}</span>. You will receive curated options directly for your group.
              </p>

              <div className="bg-slate-50 rounded-2xl p-4 text-xs text-left space-y-1.5 border border-slate-100 text-slate-600 my-4">
                <div className="flex justify-between">
                  <span className="text-slate-500">Destination:</span>
                  <span className="font-semibold text-slate-900">{destination}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Group Size:</span>
                  <span className="font-semibold text-slate-900">{groupSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Semester:</span>
                  <span className="font-semibold text-slate-900">{semester}</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-3.5 text-sm font-bold text-white bg-[#E11D48] hover:bg-[#c9183d] rounded-2xl shadow-sm transition-all cursor-pointer active:scale-95"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-[#E11D48] text-[11px] font-bold tracking-wider uppercase mb-1">
                <Sparkles className="w-3 h-3 text-[#E11D48]" />
                <span>STUDENT &amp; PARENT PLANNER</span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Start Your Housing Plan
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Tell us your study abroad program details to connect with verified vetted providers.
                </p>
              </div>

              {/* Field 1: Destination */}
              <div className="pt-2">
                <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Study Abroad Destination
                </label>
                <div className="relative">
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full appearance-none px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48] pr-10 cursor-pointer"
                  >
                    <option value="Florence, Italy">Florence, Italy</option>
                    <option value="Barcelona, Spain">Barcelona, Spain</option>
                    <option value="Paris, France">Paris, France</option>
                    <option value="Rome, Italy">Rome, Italy</option>
                    <option value="Madrid, Spain">Madrid, Spain</option>
                    <option value="Milan, Italy">Milan, Italy</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Fields 2 & 3: Group Size & Semester (Grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Group Size
                  </label>
                  <div className="relative">
                    <select
                      value={groupSize}
                      onChange={(e) => setGroupSize(e.target.value)}
                      className="w-full appearance-none px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48] pr-10 cursor-pointer"
                    >
                      <option value="1 student (Solo)">1 student (Solo)</option>
                      <option value="2 students">2 students</option>
                      <option value="3 students">3 students</option>
                      <option value="4 students">4 students</option>
                      <option value="5 students">5 students</option>
                      <option value="6+ students">6+ students</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Semester
                  </label>
                  <div className="relative">
                    <select
                      value={semester}
                      onChange={(e) => setSemester(e.target.value)}
                      className="w-full appearance-none px-3.5 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48] pr-9 cursor-pointer"
                    >
                      <option value="Spring 2027 (Jan – May)">Spring 2027 (Jan – May)</option>
                      <option value="Fall 2027 (Aug – Dec)">Fall 2027 (Aug – Dec)</option>
                      <option value="Summer 2027">Summer 2027</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Field 4: Home University */}
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Home University / Program
                </label>
                <input
                  type="text"
                  placeholder="e.g. Vanderbilt University"
                  required
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#E11D48]/30 focus:border-[#E11D48]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 text-sm font-bold text-white bg-[#E11D48] hover:bg-[#c9183d] rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  Submit Request to Providers →
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
