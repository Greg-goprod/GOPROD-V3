'use client'

import { BadgeInfo } from 'lucide-react'
import SectionPage from '@/components/ui/SectionPage'

export default function BackstagePage() {
  return (
    <SectionPage
      title="BACKSTAGE"
      icon={<BadgeInfo className="w-6 h-6 text-primary dark:text-[#FED983]" />}
      backLink="/production/hospitality"
    >
      <div className="text-sm text-muted-foreground dark:text-gray-300">
        Contenu de la page BACKSTAGE à venir...
      </div>
    </SectionPage>
  )
}
