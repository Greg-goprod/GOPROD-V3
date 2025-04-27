'use client'

import { Building2 } from 'lucide-react'
import SectionPage from '@/components/ui/SectionPage'

export default function HotelPage() {
  return (
    <SectionPage
      title="HOTEL"
      icon={<Building2 className="w-6 h-6 text-primary dark:text-[#FED983]" />}
      backLink="/production/hospitality"
    >
      <div className="text-sm text-muted-foreground dark:text-gray-300">
        Contenu de la page HOTEL à venir...
      </div>
    </SectionPage>
  )
}
