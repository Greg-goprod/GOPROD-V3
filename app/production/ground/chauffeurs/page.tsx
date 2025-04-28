'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { Users } from 'lucide-react'
import SectionPage from '@/components/ui/SectionPage'
import Image from 'next/image' // Importation du composant Image de Next.js

export default function ChauffeursPage() {
  const [chauffeurs, setChauffeurs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchChauffeurs() {
      try {
        const { data, error } = await supabase
          .from('chauffeurs')
          .select('*')
          .order('last_name', { ascending: true })

        if (error) {
          console.error('Erreur Supabase:', error.message)
          return
        }

        setChauffeurs(data || [])
      } catch (error) {
        console.error('Erreur:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchChauffeurs()
  }, [])

  return (
    <SectionPage
      title="CHAUFFEURS"
      icon={<Users className="w-6 h-6 text-primary dark:text-[#FED983]" />}
      backLink="/production/ground"
    >
      {loading ? (
        <div className="flex items-center justify-center p-8">
          <p className="text-gray-500 dark:text-gray-400">Chargement...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {chauffeurs.map((chauffeur) => (
            <div
              key={chauffeur.id}
              className="flex items-center space-x-4 p-4 border rounded-xl shadow-sm hover:shadow-md transition-shadow dark:border-gray-700"
            >
              <Image
                src={
                  chauffeur.photo_url ??
                  `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    `${chauffeur.first_name} ${chauffeur.last_name}`
                  )}&background=random`
                }
                alt={`Photo de ${chauffeur.first_name} ${chauffeur.last_name}`}
                width={56} // Largeur pour l'image
                height={56} // Hauteur pour l'image
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-gray-800 dark:text-[#FED983]">
                  {chauffeur.first_name} {chauffeur.last_name}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {chauffeur.email || '—'}
                </div>
                {chauffeur.phone && (
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {chauffeur.phone}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </SectionPage>
  )
}
