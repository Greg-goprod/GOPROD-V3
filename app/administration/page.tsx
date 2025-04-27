'use client'

import { UserCog } from 'lucide-react'
import SectionPage from '@/components/ui/SectionPage'

export default function AdministrationPage() {
  return (
    <SectionPage
      title="ADMINISTRATION"
      icon={<UserCog className="w-6 h-6 text-primary dark:text-[#FED983]" />}
      backLink="/"
    >
      <div className="text-sm text-muted-foreground dark:text-gray-300">
        Section dédiée à l’administration générale de l’événement ou de la plateforme.
      </div>
    </SectionPage>
  )
}
