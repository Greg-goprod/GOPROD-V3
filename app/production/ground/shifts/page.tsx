'use client'

import { Clock } from 'lucide-react'
import SectionPage from '@/components/ui/SectionPage'

export default function ShiftsPage() {
  return (
    <SectionPage
      title="SHIFTS"
      icon={<Clock className="w-6 h-6 text-primary dark:text-[#FED983]" />}
      backLink="/production/ground"
    >
      <div className="text-sm text-muted-foreground dark:text-gray-300">
        Cette page affichera les créneaux de disponibilité des chauffeurs et leur planification.
      </div>
    </SectionPage>
  )
}
