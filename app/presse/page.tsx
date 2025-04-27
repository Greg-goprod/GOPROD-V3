'use client'

import { Tv } from 'lucide-react'
import SectionPage from '@/components/ui/SectionPage'

export default function PressePage() {
  return (
    <SectionPage
      title="PRESSE"
      icon={<Tv className="w-6 h-6 text-primary dark:text-[#FED983]" />}
      backLink="/"
    >
      <div className="text-sm text-muted-foreground dark:text-gray-300">
        Espace dédié à la gestion des accréditations, communiqués et contacts presse.
      </div>
    </SectionPage>
  )
}
