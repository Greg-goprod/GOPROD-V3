'use client'

import { ReactNode } from 'react'
import PageHeader from './PageHeader'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface Tab {
  href: string
  label: string
  icon: ReactNode
}

interface SectionPageProps {
  title: string
  icon: ReactNode
  backLink?: string // rendu optionnel ici
  tabs?: Tab[]
  children: ReactNode
}

export default function SectionPage({
  title,
  icon,
  backLink,
  tabs = [],
  children,
}: SectionPageProps) {
  const pathname = usePathname()

  return (
    <div className="p-6 text-gray-800 dark:text-[#FED983]">
      <PageHeader title={title} icon={icon} backHref={backLink} />

      {tabs.length > 0 && (
        <div className="mb-6 border-b border-gray-300 dark:border-[#FED983]/30">
          <nav className="flex flex-wrap gap-4">
            {tabs.map((tab) => {
              const isActive = pathname === tab.href
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`flex items-center px-4 py-2 text-sm font-medium uppercase transition-all duration-200 rounded-md ${
                    isActive
                      ? 'bg-primary text-white shadow-sm dark:bg-[#FED983] dark:text-[#1B1035]'
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

      {children}
    </div>
  )
}
