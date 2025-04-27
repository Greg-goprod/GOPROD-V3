'use client'

import { Truck } from 'lucide-react'
import Image from 'next/image'

interface Vehicule {
  id: string
  numero_engagement: string
  immatriculation: string
  marque: string
  modele: string
  statut_technique?: string
  photo_url?: string
}

interface Props {
  vehicules: Vehicule[]
  onSelect: (vehicule: Vehicule) => void
}

export default function VehiculesGridView({ vehicules, onSelect }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {vehicules.map((vehicule) => (
        <div
          key={vehicule.id}
          className="border rounded-lg p-4 bg-white dark:bg-[#2D1A60] shadow-sm hover:shadow-md transition cursor-pointer"
          onClick={() => onSelect(vehicule)}
        >
          <div className="flex items-center space-x-4 mb-3">
            {vehicule.photo_url ? (
              <Image
                src={vehicule.photo_url}
                alt="Photo véhicule"
                width={48}
                height={48}
                className="rounded-full object-cover w-12 h-12"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <Truck className="w-5 h-5 text-gray-500 dark:text-[#FED983]" />
              </div>
            )}
            <div>
              <div className="font-semibold text-gray-800 dark:text-[#FED983]">
                {vehicule.numero_engagement || '—'}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-300">
                {vehicule.immatriculation || '—'}
              </div>
            </div>
          </div>

          <div className="text-sm text-gray-700 dark:text-gray-200">
            <strong>Marque:</strong> {vehicule.marque}<br />
            <strong>Modèle:</strong> {vehicule.modele}<br />
            <strong>Statut:</strong> {vehicule.statut_technique || '—'}
          </div>
        </div>
      ))}
    </div>
  )
}
