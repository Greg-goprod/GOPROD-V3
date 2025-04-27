'use client'

import { Users } from 'lucide-react'
import SectionPage from '@/components/ui/SectionPage'

export default function PartyCrewPage() {
  return (
    <SectionPage
      title="Party Crew"
      icon={<Users className="w-6 h-6 text-primary dark:text-[#FED983]" />}
      backLink="/production"
    >
      <div className="text-sm text-muted-foreground dark:text-gray-300">
        Contenu de la page PARTY CREW à venir...
      </div>
    </SectionPage>
  )
}
