"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");

  // Helper to safely apply theme to HTML and Body
  const applyThemeToDom = useCallback((targetTheme: Theme) => {
    if (typeof window === "undefined") return;
    const isDark = targetTheme === "dark";
    const root = document.documentElement;
    const body = document.body;

    if (isDark) {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
      root.style.colorScheme = "dark";
      if (body) {
        body.classList.add("dark");
        body.setAttribute("data-theme", "dark");
      }
    } else {
      root.classList.remove("dark");
      root.removeAttribute("data-theme");
      root.style.colorScheme = "light";
      if (body) {
        body.classList.remove("dark");
        body.removeAttribute("data-theme");
      }
    }
  }, []);

  // Initialize theme from localStorage or DOM or system preference
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("alpha_theme") as Theme | null;
      const isDomDark = document.documentElement.classList.contains("dark");

      if (savedTheme === "dark" || savedTheme === "light") {
        setThemeState(savedTheme);
        applyThemeToDom(savedTheme);
      } else if (isDomDark || window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setThemeState("dark");
        applyThemeToDom("dark");
      } else {
        setThemeState("light");
        applyThemeToDom("light");
      }
    } catch {
      // Ignore localStorage errors
    }
  }, [applyThemeToDom]);

  // Listen to system changes if user hasn't explicitly set a preference
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = (e: MediaQueryListEvent) => {
      try {
        const savedTheme = localStorage.getItem("alpha_theme");
        if (!savedTheme) {
          const newSysTheme: Theme = e.matches ? "dark" : "light";
          setThemeState(newSysTheme);
          applyThemeToDom(newSysTheme);
        }
      } catch {}
    };

    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, [applyThemeToDom]);

  const setTheme = useCallback(
    (newTheme: Theme) => {
      setThemeState(newTheme);
      try {
        localStorage.setItem("alpha_theme", newTheme);
      } catch {}
      applyThemeToDom(newTheme);
    },
    [applyThemeToDom]
  );

  const toggleTheme = useCallback(() => {
    // Guaranteed to flip based on actual live DOM class state
    const isCurrentlyDark =
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark");
    const nextTheme: Theme = isCurrentlyDark ? "light" : "dark";
    setTheme(nextTheme);
  }, [setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
