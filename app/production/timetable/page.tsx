'use client'

import { CalendarClock } from 'lucide-react'
import SectionPage from '@/components/ui/SectionPage'

export default function TimetablePage() {
  return (
    <SectionPage
      title="Timetable"
      icon={<CalendarClock className="w-6 h-6 text-primary dark:text-[#FED983]" />}
      backLink="/production"
    >
      <div className="text-sm text-muted-foreground dark:text-gray-300">
        Contenu de la page TIMETABLE à venir...
      </div>
    </SectionPage>
  )
}
