'use client'

import { MapPinned } from 'lucide-react'
import SectionPage from '@/components/ui/SectionPage'

export default function MissionsPage() {
  return (
    <SectionPage
      title="Missions"
      icon={<MapPinned className="w-6 h-6 text-primary dark:text-[#FED983]" />}
      backLink="/production/ground"
    >
      <div className="text-sm text-muted-foreground dark:text-gray-300">
        Cette page affichera les missions programmées, leurs détails, et les chauffeurs affectés.
      </div>
    </SectionPage>
  )
}
