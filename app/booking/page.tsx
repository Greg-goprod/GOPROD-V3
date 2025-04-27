'use client'

import { CalendarCheck2 } from 'lucide-react'
import SectionPage from '@/components/ui/SectionPage'

export default function BookingPage() {
  return (
    <SectionPage
      title="BOOKING"
      icon={<CalendarCheck2 className="w-6 h-6 text-primary dark:text-[#FED983]" />}
      backLink="/"
    >
      <div className="text-sm text-muted-foreground dark:text-gray-300">
        Module de gestion des artistes, offres, contrats, cachets et fiches techniques.
      </div>
    </SectionPage>
  )
}
