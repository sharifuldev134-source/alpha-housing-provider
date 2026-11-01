"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface UserProfile {
  name: string;
  email: string;
  company: string;
  role: string;
  avatar: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: UserProfile | null;
  login: (email?: string, password?: string) => boolean;
  logout: () => void;
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
}

const defaultUser: UserProfile = {
  name: "Maria Rossi",
  email: "maria@firenzehousing.it",
  company: "Florence Housing Group",
  role: "Verified Housing Provider",
  avatar:
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<UserProfile | null>(defaultUser);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedAuth = localStorage.getItem("alpha_auth_session");
      if (savedAuth === "true") {
        setIsLoggedIn(true);
      }
    }
  }, []);

  const login = (email?: string, _password?: string) => {
    setIsLoggedIn(true);
    if (email) {
      setUser((prev) => (prev ? { ...prev, email } : defaultUser));
    } else {
      setUser(defaultUser);
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("alpha_auth_session", "true");
    }
    setIsLoginModalOpen(false);
    return true;
  };

  const logout = () => {
    setIsLoggedIn(false);
    if (typeof window !== "undefined") {
      localStorage.removeItem("alpha_auth_session");
    }
  };

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        login,
        logout,
        isLoginModalOpen,
        openLoginModal,
        closeLoginModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

