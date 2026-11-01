"use client";

import React from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";
import { LoginModal } from "@/components/LoginModal";

export function ProvidersWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        {children}
        <LoginModal />
      </AuthProvider>
    </ThemeProvider>
  );
}

