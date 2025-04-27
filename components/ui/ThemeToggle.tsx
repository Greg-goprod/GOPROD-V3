"use client";

import { useEffect, useState } from "react";

interface ThemeToggleProps {
  collapsed: boolean; // 👈 On récupère collapsed de Sidebar
}

export default function ThemeToggle({ collapsed }: ThemeToggleProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = saved || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    updateHtmlClass(initialTheme);
  }, []);

  const updateHtmlClass = (mode: "light" | "dark") => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    updateHtmlClass(newTheme);
  };

  return (
    <div className="flex items-center justify-center relative group">
      <button
        onClick={toggleTheme}
        className={`w-12 h-6 flex items-center rounded-full p-1 transition-all duration-500 transform hover:scale-105 ${
          theme === "dark" ? "bg-[#FED983]" : "bg-gray-300"
        }`}
        aria-label="Toggle theme"
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-500 ${
            theme === "dark" ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>

      {/* Texte LIGHT / DARK visible seulement si la sidebar est ouverte */}
      {!collapsed && (
        <span className="ml-2 text-[14px] font-semibold text-gray-700 dark:text-[#FED983]">
          LIGHT / DARK
        </span>
      )}

      {/* Tooltip survol pour mode compact */}
      {collapsed && (
        <div className="absolute top-1/2 left-full ml-2 transform -translate-y-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap z-50">
          LIGHT / DARK
        </div>
      )}
    </div>
  );
}
