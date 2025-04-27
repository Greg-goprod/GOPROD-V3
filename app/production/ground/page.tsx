'use client'

import SectionTabs from '@/components/ui/SectionTabs'
import { Truck, Users, MapPinned, Clock } from 'lucide-react'

const tabs = [
  {
    href: '/production/ground/chauffeurs',
    label: 'CHAUFFEURS',
    icon: <Users className="w-4 h-4 mr-2" />,
  },
  {
    href: '/production/ground/vehicules',
    label: 'VÉHICULES',
    icon: <Truck className="w-4 h-4 mr-2" />,
  },
  {
    href: '/production/ground/missions',
    label: 'MISSIONS',
    icon: <MapPinned className="w-4 h-4 mr-2" />,
  },
  {
    href: '/production/ground/shifts',
    label: 'SHIFTS',
    icon: <Clock className="w-4 h-4 mr-2" />,
  },
]

export default function GroundPage() {
  return (
    <SectionTabs
      title="Ground"
      icon={<Truck className="w-6 h-6 text-primary" />}
      backLink="/production"
      tabs={tabs}
    />
  )
}
