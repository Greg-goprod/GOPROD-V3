'use client'

import { useState } from 'react'
import PageHeader from '@/components/ui/PageHeader'
import SectionTabs from '@/components/ui/SectionTabs'

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState('general')

  const mainTabs = [
    { label: 'GÉNÉRAL', value: 'general' },
    { label: 'PRODUCTION', value: 'production' },
    { label: 'BOOKING', value: 'booking' },
    { label: 'PRESSE', value: 'presse' },
    { label: 'ADMINISTRATION', value: 'administration' },
  ]

  return (
    <div className="p-4">
      <PageHeader
        title="PARAMÈTRES"
        icon={null} // Pas d'icône ici
        backHref="/" // Lien de retour
      />

      <SectionTabs
        backLink="/" // On définit explicitement le backLink ici
        tabs={mainTabs.map(tab => ({
          href: tab.value ? `/parametres/${tab.value}` : '#', // Assure-toi que href est toujours valide
          label: tab.label,
        }))}
        activeTab={activeSection} // L'onglet actif
        onTabChange={setActiveSection} // Change le state pour l'onglet actif
      />

      <div className="mt-6">
        {activeSection === 'general' && (
          <div className="text-muted-foreground">
            👉 Ici tu vas mettre ton formulaire pour GÉNÉRAL (EditionForm, Logo, etc.)
          </div>
        )}
        {activeSection === 'production' && (
          <div className="text-muted-foreground">
            👉 Ici on ajoutera une sous-navigation : Ground, Timetable, etc.
          </div>
        )}
        {activeSection === 'booking' && (
          <div className="text-muted-foreground">
            👉 Contenu Booking
          </div>
        )}
        {activeSection === 'presse' && (
          <div className="text-muted-foreground">
            👉 Contenu Presse
          </div>
        )}
        {activeSection === 'administration' && (
          <div className="text-muted-foreground">
            👉 Contenu Administration
          </div>
        )}
      </div>
    </div>
  )
}
