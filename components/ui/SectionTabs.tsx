'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import { ReactNode } from 'react'

interface Tab {
  href: string
  label: string
  icon: ReactNode
}

interface SectionTabsProps {
  title: string
  icon: ReactNode
  backLink: string
  tabs?: Tab[]
}

export default function SectionTabs({ title, icon, backLink, tabs = [] }: SectionTabsProps) {
  const pathname = usePathname()

  return (
    <div className="p-6">
      {/* Titre avec retour et icône */}
      <div className="flex items-center space-x-3 mb-6">
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
              const isActive = pathname === tab.href
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`flex items-center px-4 py-2 text-sm uppercase font-semibold transition-all duration-200 rounded-md ${
                    isActive
                      ? 'bg-gray-900 text-white dark:bg-[#FED983] dark:text-[#1B1035]'
                      : 'text-gray-600 dark:text-[#FED983] hover:bg-gray-100 dark:hover:bg-[#2D1A60] hover:text-black dark:hover:text-white'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </div>
  )
}
