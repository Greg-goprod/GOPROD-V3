'use client'

import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { ReactNode } from 'react'

interface PageHeaderProps {
  title: string
  icon: ReactNode
  backHref?: string // <- rendu optionnel ici
}

export default function PageHeader({ title, icon, backHref }: PageHeaderProps) {
  return (
    <div className="flex items-center space-x-3 mb-6">
      {/* Bouton retour (affiché seulement si backHref est fourni) */}
      {backHref && (
        <Link
          href={backHref}
          className="w-8 h-8 rounded-full flex items-center justify-center border hover:bg-gray-100 dark:hover:bg-[#2D1A60] transition"
        >
          <ChevronLeft className="w-4 h-4 text-gray-800 dark:text-[#FED983]" />
        </Link>
      )}

      {/* Icône */}
      <div className="w-6 h-6 text-primary dark:text-[#FED983]">{icon}</div>

      {/* Titre */}
      <h1 className="text-2xl font-bold uppercase tracking-wide text-gray-800 dark:text-[#FED983]">
        {title}
      </h1>
    </div>
  )
}
