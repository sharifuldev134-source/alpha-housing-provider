"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { useAuth } from "@/context/AuthContext";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  LayoutDashboard,
  Inbox,
  LogOut,
  User,
} from "lucide-react";

interface NavbarProps {
  onOpenPlanModal?: () => void;
  onOpenProviderModal?: () => void;
  onOpenProviderRegistration?: () => void;
  onResetProviderView?: () => void;
}

export function Navbar({
  onOpenPlanModal,
  onOpenProviderModal,
  onOpenProviderRegistration,
  onResetProviderView,
}: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { isLoggedIn, user, logout, openLoginModal } = useAuth();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isProvidersPage = pathname === "/providers";

  // Close profile dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProfileDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { label: "For Students & Parents", href: "/for-students-and-parents" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Housing Cities", href: "/housing-cities" },
    { label: "About Us", href: "/about-us" },
  ];

  const handleLogout = () => {
    setProfileDropdownOpen(false);
    logout();
    router.push("/providers");
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-[#070C18]/95 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7 text-[13px] sm:text-[13.5px] font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1.5 transition-colors hover:text-[#E11D48] ${
                  isActive ? "text-[#E11D48] font-semibold" : "text-slate-600 dark:text-slate-300"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E11D48] rounded-full" />
                )}
              </Link>
            );
          })}

          {/* Providers link in navbar on providers page */}
          {isProvidersPage && (
            <Link
              href="/providers"
              onClick={() => {
                if (onResetProviderView) onResetProviderView();
              }}
              className="relative py-1.5 text-[#E11D48] font-semibold"
            >
              Providers
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E11D48] rounded-full" />
            </Link>
          )}
        </nav>

        {/* Desktop CTA & Auth Section */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* WHEN LOGGED IN: SHOW PROFILE IMAGE + DROPDOWN */}
          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              {/* Profile Dropdown Trigger */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center gap-2 p-1.5 pl-2 pr-2.5 rounded-full border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer shadow-2xs"
                >
                  <div className="w-7 h-7 rounded-full overflow-hidden relative bg-slate-200 dark:bg-slate-700 ring-2 ring-[#E11D48]/30 shrink-0">
                    <Image
                      src={
                        user?.avatar ||
                        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80"
                      }
                      alt={user?.name || "Provider Profile"}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 max-w-[110px] truncate">
                    {user?.name || "Maria Rossi"}
                  </span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                      profileDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Profile Floating Dropdown */}
                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-[#0D1527] rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    {/* User Info Header */}
                    <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden relative bg-slate-200 dark:bg-slate-700 shrink-0">
                        <Image
                          src={
                            user?.avatar ||
                            "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80"
                          }
                          alt={user?.name || "Provider"}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-extrabold text-slate-900 dark:text-white truncate">
                          {user?.name}
                        </p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                          {user?.company}
                        </p>
                        <span className="inline-block mt-0.5 px-1.5 py-0.2 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-[9px] font-bold rounded">
                          Verified Provider
                        </span>
                      </div>
                    </div>

                    {/* Dropdown Items */}
                    <div className="p-1.5 space-y-0.5">
                      <Link
                        href="/dashboard"
                        onClick={() => setProfileDropdownOpen(false)}
                        className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-[#E11D48] dark:hover:text-[#E11D48] hover:bg-rose-50/70 dark:hover:bg-rose-950/30 rounded-xl transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <LayoutDashboard className="w-4 h-4 text-slate-400" />
                          <span>Dashboard</span>
                        </div>
                        <span className="px-1.5 py-0.2 rounded bg-rose-100 dark:bg-rose-950/60 text-[#E11D48] text-[9.5px] font-bold">
                          Portal
                        </span>
                      </Link>

                      <Link
                        href="/dashboard"
                        onClick={() => setProfileDropdownOpen(false)}
                        className="flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <Inbox className="w-4 h-4 text-slate-400" />
                          <span>Housing Requests</span>
                        </div>
                        <span className="w-4 h-4 rounded-full bg-[#E11D48] text-white text-[10px] font-bold flex items-center justify-center">
                          2
                        </span>
                      </Link>
                    </div>

                    {/* Divider */}
                    <div className="my-1 border-t border-slate-100 dark:border-slate-800" />

                    {/* Logout Option */}
                    <div className="p-1.5">
                      <button
                        type="button"
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-xl transition-colors cursor-pointer"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Log Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Button */}
              {isProvidersPage ? (
                <Link
                  href="/dashboard"
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#E11D48] hover:bg-[#be123c] rounded-full shadow-xs transition-all duration-200 flex items-center gap-1.5"
                >
                  <LayoutDashboard className="w-3.5 h-3.5" />
                  <span>Dashboard</span>
                </Link>
              ) : (
                <button
                  onClick={onOpenPlanModal}
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#E11D48] hover:bg-[#c9183d] rounded-full shadow-xs hover:shadow-sm transition-all duration-200 flex items-center gap-1.5 cursor-pointer active:scale-95"
                >
                  Start Housing Plan
                </button>
              )}
            </div>
          ) : (
            /* WHEN NOT LOGGED IN */
            <>
              {isProvidersPage ? (
                <>
                  <button
                    onClick={openLoginModal}
                    className="px-4 py-2 text-xs font-semibold text-white bg-[#E11D48] hover:bg-[#be123c] rounded-full shadow-xs transition-all duration-200 cursor-pointer active:scale-95"
                  >
                    Log in
                  </button>
                  <button
                    onClick={onOpenProviderRegistration || onOpenProviderModal}
                    className="px-5 py-2 text-xs font-semibold text-white bg-[#E11D48] hover:bg-[#c9183d] rounded-full shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer active:scale-95"
                  >
                    Join as a Provider
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/providers"
                    className="px-4 py-2 text-xs font-semibold text-[#E11D48] border border-[#E11D48]/35 rounded-full hover:bg-rose-50/70 transition-all duration-200"
                  >
                    Providers
                  </Link>
                  <button
                    onClick={onOpenPlanModal}
                    className="px-5 py-2 text-xs font-semibold text-white bg-[#E11D48] hover:bg-[#c9183d] rounded-full shadow-xs hover:shadow-sm transition-all duration-200 flex items-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    Start Housing Plan
                  </button>
                </>
              )}
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center space-x-2">
          <ThemeToggle />
          {isLoggedIn ? (
            <Link
              href="/dashboard"
              className="w-8 h-8 rounded-full overflow-hidden relative ring-2 ring-[#E11D48]"
            >
              <Image
                src={
                  user?.avatar ||
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80"
                }
                alt="Profile"
                fill
                unoptimized
                className="object-cover"
              />
            </Link>
          ) : (
            <button
              onClick={isProvidersPage ? openLoginModal : onOpenPlanModal}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#E11D48] rounded-full"
            >
              {isProvidersPage ? "Log in" : "Plan"}
            </button>
          )}
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-[#070C18] px-5 pt-4 pb-6 space-y-3.5 shadow-xl animate-in slide-in-from-top-2 duration-200">
          {/* If Logged In Mobile Card */}
          {isLoggedIn && user && (
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full overflow-hidden relative bg-slate-200 dark:bg-slate-700 shrink-0">
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">{user.name}</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">{user.company}</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="text-xs text-rose-600 font-semibold p-1 hover:underline"
              >
                Log Out
              </button>
            </div>
          )}

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
                      ? "bg-red-50 dark:bg-rose-950/40 text-[#E11D48] font-semibold"
                      : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/providers"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isProvidersPage
                  ? "bg-red-50 dark:bg-rose-950/40 text-[#E11D48] font-semibold"
                  : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
              }`}
            >
              Providers
            </Link>
            {isLoggedIn && (
              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-bold text-[#E11D48] bg-rose-50 flex items-center justify-between"
              >
                <span>Provider Dashboard</span>
                <span className="text-xs bg-[#E11D48] text-white px-2 py-0.5 rounded-full">
                  2 requests
                </span>
              </Link>
            )}

            {/* Theme Toggle in Mobile Drawer */}
            <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Appearance
              </span>
              <ThemeToggle showLabel />
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2.5">
            {!isLoggedIn ? (
              <>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openLoginModal();
                  }}
                  className="w-full py-2.5 text-center text-sm font-semibold text-white bg-[#E11D48] rounded-xl shadow-xs"
                >
                  Log in to Portal
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenProviderRegistration) onOpenProviderRegistration();
                  }}
                  className="w-full py-2.5 text-center text-sm font-semibold text-[#E11D48] border border-[#E11D48]/30 rounded-xl hover:bg-red-50"
                >
                  Join as a Provider
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenPlanModal) onOpenPlanModal();
                }}
                className="w-full py-2.5 text-center text-sm font-semibold text-white bg-[#E11D48] rounded-xl flex items-center justify-center gap-2 shadow-sm"
              >
                Start Housing Plan <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

