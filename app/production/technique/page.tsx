'use client'

import { PocketKnife } from 'lucide-react'
import SectionPage from '@/components/ui/SectionPage'

export default function TechniquePage() {
  return (
    <SectionPage
      title="Technique"
      icon={<PocketKnife className="w-6 h-6 text-primary dark:text-[#FED983]" />}
      backLink="/production"
    >
      <div className="text-sm text-muted-foreground dark:text-gray-300">
        Contenu de la page TECHNIQUE à venir...
      </div>
    </SectionPage>
  )
}
