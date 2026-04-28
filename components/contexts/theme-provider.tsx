"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";
import { type ReactNode } from "react";

type Theme = "dark" | "light" | "system";

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: "dark" | "light";
  setTheme: (theme: Theme) => void;
}

interface ThemeState {
  theme: Theme;
  resolvedTheme: "dark" | "light";
}

const defaultThemeState: ThemeState = {
  theme: "dark",
  resolvedTheme: "dark",
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
const storageKey = "theme";
let themeState = defaultThemeState;
const listeners = new Set<() => void>();

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: "dark" | "light") {
  document.documentElement.classList.remove("dark", "light");
  document.documentElement.classList.add(theme);
  document.documentElement.style.colorScheme = theme;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return themeState;
}

function getServerSnapshot() {
  return defaultThemeState;
}

function setThemeState(nextState: ThemeState) {
  themeState = nextState;
  listeners.forEach((listener) => listener());
}

function resolveTheme(theme: Theme) {
  return theme === "system" ? getSystemTheme() : theme;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { theme, resolvedTheme } = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const setTheme = useCallback((nextTheme: Theme) => {
    localStorage.setItem(storageKey, nextTheme);
    const nextResolvedTheme = resolveTheme(nextTheme);
    setThemeState({ theme: nextTheme, resolvedTheme: nextResolvedTheme });
    applyTheme(nextResolvedTheme);
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem(storageKey) as Theme | null;
    const initialTheme = storedTheme ?? "dark";
    const initialResolvedTheme = resolveTheme(initialTheme);

    setThemeState({ theme: initialTheme, resolvedTheme: initialResolvedTheme });
    applyTheme(initialResolvedTheme);
  }, []);

  useEffect(() => {
    if (theme !== "system") {
      return;
    }

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const nextResolvedTheme = getSystemTheme();
      setThemeState({ theme: "system", resolvedTheme: nextResolvedTheme });
      applyTheme(nextResolvedTheme);
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [theme]);

  const value = useMemo(
    () => ({ theme, resolvedTheme, setTheme }),
    [theme, resolvedTheme, setTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
