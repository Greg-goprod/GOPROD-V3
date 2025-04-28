'use client'

import { ChevronLeft } from 'lucide-react'
import { ReactNode } from 'react'
import Link from 'next/link'

interface Tab {
  value: string
  label: string
  icon: ReactNode
}

interface SectionTabsProps {
  title: string
  icon: ReactNode
  backLink: string
  tabs?: Tab[]
  activeTab?: string
  onTabChange?: (tabValue: string) => void
}

export default function SectionTabs({
  title,
  icon,
  backLink,
  tabs = [],
  activeTab,
  onTabChange,
}: SectionTabsProps) {
  return (
    <div className="p-6">
      {/* Titre avec retour et icône */}
      <div className="flex items-center space-x-3 mb-3"> {/* Réduit l'espace entre titre et onglets */}
        <Link
          href={backLink}
          className="w-8 h-8 rounded-full flex items-center justify-center border hover:bg-gray-100 dark:hover:bg-[#2D1A60] transition"
        >
          <ChevronLeft className="w-4 h-4" />
        </Link>
        <div className="w-6 h-6 text-primary dark:text-[#FED983]">{icon}</div>
        <h1 className="text-2xl font-semibold uppercase tracking-wide text-gray-800 dark:text-[#FED983]">
          {title}
        </h1>
      </div>

      {/* Barre de navigation si sous-onglets */}
      {tabs.length > 0 && (
        <div className="mb-6 border-b border-gray-300 dark:border-[#FED983]/30">
          <nav className="flex flex-wrap gap-4">
            {tabs.map((tab) => {
              const isActive = tab.value === activeTab

              return (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => onTabChange?.(tab.value)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm uppercase font-semibold transition-all duration-200 rounded-md 
                    ${isActive
                      ? 'bg-[#2D1A60] text-white'  // Couleur violette pour l'onglet actif
                      : 'text-gray-600 dark:text-[#FED983] hover:bg-gray-100 dark:hover:bg-[#2D1A60] hover:text-black dark:hover:text-white'}
                  `}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              )
            })}
          </nav>
        </div>
      )}
    </div>
  )
}
