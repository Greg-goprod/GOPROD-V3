'use client'

import { UtensilsCrossed } from 'lucide-react'
import SectionPage from '@/components/ui/SectionPage'

export default function CateringPage() {
  return (
    <SectionPage
      title="CATERING"
      icon={<UtensilsCrossed className="w-6 h-6 text-primary dark:text-[#FED983]" />}
      backLink="/production/hospitality"
    >
      <div className="text-sm text-muted-foreground dark:text-gray-300">
        Contenu de la page CATERING à venir...
      </div>
    </SectionPage>
  )
}
