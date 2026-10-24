import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group ${className}`}>
      {/* Stylized colorful origami ribbon mark */}
      <svg
        className="w-8 h-8 transition-transform duration-300 group-hover:scale-105 shrink-0"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 30L16 10L23 23L14 30H6Z"
          fill="#E11D48"
          fillOpacity="0.95"
        />
        <path
          d="M16 10L25 5L34 22L25 25L16 10Z"
          fill="#F59E0B"
        />
        <path
          d="M23 23L34 22L31 34L20 32L23 23Z"
          fill="#06B6D4"
        />
        <path
          d="M14 30L23 23L20 32L12 35L14 30Z"
          fill="#8B5CF6"
        />
      </svg>

      <div className="flex flex-col leading-none">
        <div className="flex items-baseline text-[21px] font-extrabold tracking-tight">
          <span className={isLight ? "text-white" : "text-[#0F172A]"}>ALPHA</span>
          <span className="text-[#E11D48] ml-0.5">Housing</span>
        </div>
        <span
          className={`text-[9.5px] font-medium tracking-wide mt-0.5 ${
            isLight ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Study Abroad. Stay Confident.
        </span>
      </div>
    </Link>
  );
}
