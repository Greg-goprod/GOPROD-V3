'use client'

import { Plane } from 'lucide-react'
import SectionPage from '@/components/ui/SectionPage'

export default function TravelsPage() {
  return (
    <SectionPage
      title="Travels"
      icon={<Plane className="w-6 h-6 text-primary dark:text-[#FED983]" />}
      backLink="/production"
    >
      <div className="text-sm text-muted-foreground dark:text-gray-300">
        Contenu de la page TRAVELS à venir...
      </div>
    </SectionPage>
  )
}
