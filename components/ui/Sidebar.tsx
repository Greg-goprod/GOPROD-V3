"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  UserCog,
  CalendarCheck2,
  Speaker,
  Tv,
  SlidersHorizontal,
  LogOut,
} from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import ThemeToggle from "./ThemeToggle";

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  const navItems = [
    { href: "/", label: "TABLEAU DE BORD", icon: LayoutDashboard },
    { href: "/administration", label: "ADMINISTRATION", icon: UserCog },
    { href: "/booking", label: "BOOKING", icon: CalendarCheck2 },
    { href: "/production", label: "PRODUCTION", icon: Speaker },
    { href: "/presse", label: "PRESSE", icon: Tv },
    { href: "/parametres", label: "PARAMÈTRES", icon: SlidersHorizontal },
  ];

  useEffect(() => {
    async function fetchLogo() {
      const { data, error } = await supabase
        .from("settings")
        .select("logo_url")
        .eq("id", 1)
        .single();

      if (error) {
        console.warn("Erreur chargement logo:", error.message);
        return;
      }

      if (data?.logo_url) {
        const { data: publicData } = supabase.storage
          .from("public-assets")
          .getPublicUrl(data.logo_url);

        if (publicData?.publicUrl) {
          setLogoUrl(publicData.publicUrl);
        }
      }
    }

    fetchLogo();
  }, []);

  return (
    <aside
      className={`relative flex flex-col justify-between h-screen p-4 border-r shadow-sm bg-white dark:bg-[#1B1035] text-gray-800 dark:text-[#FED983] transition-all duration-500 ease-in-out ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-6 w-6 h-6 rounded-full bg-gray-200 dark:bg-[#2D1A60] flex items-center justify-center shadow transition-transform hover:scale-110 z-50"
      >
        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      {/* Top section */}
      <div className="flex flex-col items-center space-y-8">
        <Link href="/" className="block">
          {logoUrl ? (
            <img
              src={logoUrl}
              alt="Logo Go-Prod"
              className="h-10 w-auto object-contain mx-auto logo-transition"
            />
          ) : (
            <div className="text-[18px] font-semibold fade-in">Go-Prod</div>
          )}
        </Link>

        {/* Nav */}
        <nav className="flex flex-col space-y-2 w-full mt-6">
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={`group sidebar-link ${
                pathname === href
                  ? "bg-gray-200 dark:bg-[#2D1A60]"
                  : "hover:bg-gray-100 dark:hover:bg-[#2D1A60]"
              }`}
            >
              <div className="flex items-center space-x-3">
                <Icon className="icon-hover" size={20} />
                {!collapsed && <span className="fade-in">{label}</span>}
                {collapsed && <span className="tooltip">{label}</span>}
              </div>
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col space-y-4">
        <ThemeToggle collapsed={collapsed} />
        <hr className="border-t border-gray-300 dark:border-[#FED983]/30" />
        <button
          type="button"
          className="w-full flex items-center space-x-3 p-2 text-[15px] uppercase hover:text-red-500 transition font-semibold relative"
        >
          <LogOut size={20} className="icon-hover" />
          {!collapsed && <span className="fade-in">Déconnexion</span>}
          {collapsed && <span className="tooltip">Déconnexion</span>}
        </button>
      </div>
    </aside>
  );
}
