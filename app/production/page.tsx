'use client'

import {
  CalendarClock,
  Plane,
  Speaker,
  Building2,
  PocketKnife,
  Users,
  ChevronLeft,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tabs = [
  {
    href: '/production/timetable',
    label: 'TIMETABLE',
    icon: <CalendarClock className="w-4 h-4 mr-2" />,
  },
  {
    href: '/production/travels',
    label: 'TRAVELS',
    icon: <Plane className="w-4 h-4 mr-2" />,
  },
  {
    href: '/production/ground',
    label: 'GROUND',
    icon: <Speaker className="w-4 h-4 mr-2" />,
  },
  {
    href: '/production/hospitality',
    label: 'HOSPITALITY',
    icon: <Building2 className="w-4 h-4 mr-2" />,
  },
  {
    href: '/production/technique',
    label: 'TECHNIQUE',
    icon: <PocketKnife className="w-4 h-4 mr-2" />,
  },
  {
    href: '/production/party-crew',
    label: 'PARTY CREW',
    icon: <Users className="w-4 h-4 mr-2" />,
  },
]

export default function ProductionPage() {
  const pathname = usePathname()

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <Link
          href="/"
          className="w-8 h-8 rounded-full flex items-center justify-center border hover:bg-gray-100 dark:hover:bg-[#2D1A60] transition"
        >
          <ChevronLeft className="w-4 h-4" />
        </Link>
        <Speaker className="w-6 h-6 text-primary" />
        <h1 className="text-2xl font-bold uppercase tracking-wide text-gray-800 dark:text-[#FED983]">
          Production
        </h1>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-6 border-b border-gray-300 dark:border-[#FED983]/30">
        <nav className="flex flex-wrap gap-2 sm:gap-3">
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
    </div>
  )
}
