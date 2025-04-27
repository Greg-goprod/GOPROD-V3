'use client'

import { Building2, UtensilsCrossed, BadgeInfo } from 'lucide-react'
import SectionTabs from '@/components/ui/SectionTabs'

const tabs = [
  {
    href: '/production/hospitality/hotel',
    label: 'HOTEL',
    icon: <Building2 className="w-4 h-4 mr-2" />,
  },
  {
    href: '/production/hospitality/catering',
    label: 'CATERING',
    icon: <UtensilsCrossed className="w-4 h-4 mr-2" />,
  },
  {
    href: '/production/hospitality/backstage',
    label: 'BACKSTAGE',
    icon: <BadgeInfo className="w-4 h-4 mr-2" />,
  },
]

export default function HospitalityPage() {
  return (
    <SectionTabs
      title="Hospitality"
      icon={<UtensilsCrossed className="w-6 h-6 text-primary" />}
      backLink="/production"
      tabs={tabs}
    />
  )
}
