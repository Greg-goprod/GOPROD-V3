'use client'

import { SlidersHorizontal } from 'lucide-react'
import SectionPage from '@/components/ui/SectionPage'
import LogoUploader from '@/components/ui/LogoUploader'

export default function ParametresPage() {
  return (
    <SectionPage
      title="PARAMÈTRES"
      icon={<SlidersHorizontal className="w-6 h-6 text-primary dark:text-[#FED983]" />}
      backLink="/"
    >
      {/* Introduction */}
      <div className="text-sm text-muted-foreground dark:text-gray-300 mb-6">
        Cette section vous permet de configurer les paramètres du module Ground : chauffeurs, véhicules, missions, shifts, etc.
      </div>

      {/* Section Upload Logo */}
      <div className="bg-white dark:bg-[#1B1035] p-6 rounded-lg shadow border dark:border-[#FED983]/20 mb-8">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-[#FED983]">
          Logo de l’événement
        </h2>
        <LogoUploader />
      </div>

      {/* Tu pourras ajouter ici d'autres sous-sections comme Chauffeurs, Véhicules, etc. */}

    </SectionPage>
  )
}
