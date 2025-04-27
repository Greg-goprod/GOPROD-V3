'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { Truck, LayoutGrid, List, Search, ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import VehicleModal from '@/components/ui/VehicleModal'

export default function VehiculesPage() {
  const [vehicules, setVehicules] = useState<any[]>([])
  const [filtered, setFiltered] = useState<any[]>([])
  const [selectedVehicle, setSelectedVehicle] = useState<any | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState({ key: 'numero_engagement', direction: 'asc' })

  useEffect(() => {
    async function fetchVehicules() {
      const { data, error } = await supabase.from('vehicules').select('*')
      if (!error) setVehicules(data || [])
    }
    fetchVehicules()
  }, [])

  useEffect(() => {
    let data = [...vehicules]

    if (search) {
      data = data.filter((v) =>
        `${v.numero_engagement} ${v.marque} ${v.modele} ${v.immatriculation}`
          .toLowerCase()
          .includes(search.toLowerCase())
      )
    }

    data.sort((a, b) => {
      const aVal = a[sort.key]?.toString().toLowerCase() || ''
      const bVal = b[sort.key]?.toString().toLowerCase() || ''
      return sort.direction === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal)
    })

    setFiltered(data)
  }, [vehicules, search, sort])

  const openModal = (vehicle: any) => {
    setSelectedVehicle(vehicle)
    setIsModalOpen(true)
  }

  const handleSort = (key: string) => {
    setSort((prev) => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }))
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Link
            href="/production/ground"
            className="w-8 h-8 rounded-full flex items-center justify-center border hover:bg-gray-100 dark:hover:bg-[#2D1A60] transition"
          >
            <Truck className="w-4 h-4" />
          </Link>
          <Truck className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-bold uppercase tracking-wide text-gray-800 dark:text-[#FED983]">
            Véhicules
          </h1>
        </div>

        <div className="flex space-x-2 items-center">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher..."
            className="px-3 py-1.5 rounded-md border text-sm bg-white dark:bg-[#1B1035] dark:text-[#FED983] border-gray-300 dark:border-[#FED983]/40 focus:outline-none"
          />
          <button
            onClick={() => setView('grid')}
            className={`p-2 rounded-md border ${
              view === 'grid'
                ? 'bg-primary text-white dark:bg-[#FED983] dark:text-[#1B1035]'
                : 'hover:bg-gray-100 dark:hover:bg-[#2D1A60] text-gray-600 dark:text-[#FED983]'
            }`}
          >
            <LayoutGrid size={18} />
          </button>
          <button
            onClick={() => setView('list')}
            className={`p-2 rounded-md border ${
              view === 'list'
                ? 'bg-primary text-white dark:bg-[#FED983] dark:text-[#1B1035]'
                : 'hover:bg-gray-100 dark:hover:bg-[#2D1A60] text-gray-600 dark:text-[#FED983]'
            }`}
          >
            <List size={18} />
          </button>
        </div>
      </div>

      {/* LIST VIEW */}
      {view === 'list' && (
        <div className="border rounded-lg overflow-hidden">
          <div className="grid grid-cols-6 gap-2 bg-muted text-xs font-bold text-gray-700 dark:text-[#FED983] px-4 py-2">
            {['numero_engagement', 'immatriculation', 'marque', 'modele', 'statut_technique', 'is_active'].map((col) => (
              <button
                key={col}
                onClick={() => handleSort(col)}
                className="flex items-center space-x-1 uppercase"
              >
                <span>
                  {{
                    numero_engagement: 'N° Vhc',
                    immatriculation: 'Immatriculation',
                    marque: 'Marque',
                    modele: 'Modèle',
                    statut_technique: 'Statut',
                    is_active: 'Actif',
                  }[col]}
                </span>
                {sort.key === col ? (
                  sort.direction === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                ) : (
                  <ChevronDown size={14} className="opacity-20" />
                )}
              </button>
            ))}
          </div>

          {filtered.map((v) => (
            <div
              key={v.id}
              onClick={() => openModal(v)}
              className="grid grid-cols-6 gap-2 items-center px-4 py-2 text-sm text-gray-700 dark:text-[#FED983] hover:bg-gray-100 dark:hover:bg-[#2D1A60] cursor-pointer"
            >
              <span>{v.numero_engagement}</span>
              <span>{v.immatriculation}</span>
              <span>{v.marque}</span>
              <span>{v.modele}</span>
              <span>{v.statut_technique || '—'}</span>
              <span>{v.is_active ? 'Oui' : 'Non'}</span>
            </div>
          ))}
        </div>
      )}

      {/* GRID VIEW */}
      {view === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {filtered.map((v) => (
            <div
              key={v.id}
              onClick={() => openModal(v)}
              className="cursor-pointer p-4 border rounded-lg shadow-sm hover:shadow-md bg-white dark:bg-[#2D1A60] transition"
            >
              <div className="flex items-center space-x-4">
                {v.photo_url ? (
                  <img
                    src={v.photo_url}
                    alt="Photo véhicule"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <Truck className="w-6 h-6 text-gray-500 dark:text-[#FED983]" />
                  </div>
                )}
                <div>
                  <div className="font-semibold text-gray-800 dark:text-[#FED983]">
                    {v.numero_engagement} — {v.marque} {v.modele}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-300">
                    {v.immatriculation}<br />
                    Statut : {v.statut_technique || '—'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* MODALE */}
      {selectedVehicle && (
        <VehicleModal
          vehicle={selectedVehicle}
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  )
}
