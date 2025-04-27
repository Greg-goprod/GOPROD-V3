'use client'

import { LayoutDashboard } from 'lucide-react'
import SectionPage from '@/components/ui/SectionPage'

export default function Home() {
  return (
    <SectionPage
      title="GO-PROD"
      icon={<LayoutDashboard className="w-6 h-6 text-primary dark:text-[#FED983]" />}
    >
      <div className="text-sm text-muted-foreground dark:text-gray-300">
        Bienvenue sur <strong>GO-PROD</strong>. Sélectionne une section dans le menu.
      </div>
    </SectionPage>
  )
}
