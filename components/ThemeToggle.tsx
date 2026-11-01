"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({
  className = "",
  showLabel = false,
}: {
  className?: string;
  showLabel?: boolean;
}) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 ${className}`}
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className={`relative inline-flex items-center justify-center gap-1.5 p-2 rounded-full border transition-all duration-200 cursor-pointer shadow-xs hover:scale-105 active:scale-95 ${
        isDark
          ? "bg-slate-900 border-slate-700 text-amber-300 hover:text-amber-200 hover:bg-slate-800"
          : "bg-slate-100 border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-200"
      } ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400" />
        ) : (
          <Moon className="w-4 h-4 text-slate-700" />
        )}
      </div>
      {showLabel && (
        <span className="text-xs font-semibold pr-1.5 text-slate-700 dark:text-slate-200">
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </button>
  );
}
