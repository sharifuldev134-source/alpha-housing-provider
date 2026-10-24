"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  onOpenPlanModal?: () => void;
  onOpenProviderModal?: () => void;
}

export function Navbar({ onOpenPlanModal, onOpenProviderModal }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "For Students & Parents", href: "/for-students-and-parents" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Housing Cities", href: "/housing-cities" },
    { label: "About Us", href: "/about-us" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7 text-[14.5px] font-medium text-slate-700">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1.5 transition-colors hover:text-[#E11D48] ${
                  isActive ? "text-[#E11D48] font-semibold" : "text-slate-600"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E11D48] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-3.5">
          <Link
            href="/providers"
            onClick={(e) => {
              if (onOpenProviderModal) {
                e.preventDefault();
                onOpenProviderModal();
              }
            }}
            className="px-4 py-2 text-sm font-semibold text-[#E11D48] border border-[#E11D48]/30 rounded-full hover:bg-red-50/70 hover:border-[#E11D48] transition-all duration-200"
          >
            Providers
          </Link>
          <button
            onClick={onOpenPlanModal}
            className="px-5 py-2 text-sm font-semibold text-white bg-[#E11D48] hover:bg-[#c9183d] rounded-full shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-1.5 cursor-pointer active:scale-95"
          >
            Start Housing Plan
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={onOpenPlanModal}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-[#E11D48] rounded-full"
          >
            Plan
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-5 pt-4 pb-6 space-y-3.5 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-red-50 text-[#E11D48] font-semibold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <Link
              href="/providers"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 text-center text-sm font-semibold text-[#E11D48] border border-[#E11D48]/30 rounded-xl hover:bg-red-50"
            >
              Housing Providers Portal
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenPlanModal) onOpenPlanModal();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-[#E11D48] rounded-xl flex items-center justify-center gap-2 shadow-sm"
            >
              Start Housing Plan <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
