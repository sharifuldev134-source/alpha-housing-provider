import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="w-full bg-[#080E1E] text-slate-400 py-12 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <Logo variant="light" />
          </div>

          {/* Copyright notice */}
          <div className="text-xs sm:text-sm text-slate-400 text-center">
            &copy; 2026 AlphaHousing Inc. Study Abroad Housing Provider Network.
          </div>

          {/* Secondary links */}
          <div className="flex items-center space-x-6 text-xs sm:text-sm text-slate-400">
            <Link
              href="/providers"
              className="hover:text-white transition-colors duration-150"
            >
              Provider Portal
            </Link>
            <Link
              href="/privacy"
              className="hover:text-white transition-colors duration-150"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white transition-colors duration-150"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
