'use client'

import { Dialog } from '@headlessui/react'
import { X, Printer, Pencil } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import VehiclePDF from '../pdf/VehiclePDF'

export default function VehicleModal({
  vehicle,
  open,
  onClose,
}: {
  vehicle: any
  open: boolean
  onClose: () => void
}) {
  const cancelButtonRef = useRef(null)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return (
    <Dialog
      as="div"
      className="relative z-50"
      open={open}
      onClose={onClose}
      initialFocus={cancelButtonRef}
    >
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-3xl rounded-lg bg-white dark:bg-[#1B1035] shadow-xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b dark:border-[#FED983]/30">
            <h2 className="text-xl font-bold text-gray-900 dark:text-[#FED983]">Détail du véhicule</h2>
            <div className="flex space-x-2">
              <PDFDownloadLink
                document={<VehiclePDF vehicle={vehicle} />}
                fileName={`vehicule_${vehicle.id || 'fiche'}.pdf`}
                className="text-xs px-2 py-1 rounded-md bg-primary text-white hover:bg-opacity-90 dark:bg-[#FED983] dark:text-[#1B1035]"
              >
                {({ loading }) => (loading ? 'PDF...' : <Printer className="w-4 h-4" />)}
              </PDFDownloadLink>
              <button
                onClick={() => setIsEditing((prev) => !prev)}
                className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-[#2D1A60]"
              >
                <Pencil className="w-4 h-4 text-gray-700 dark:text-[#FED983]" />
              </button>
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-[#2D1A60]"
              >
                <X className="w-5 h-5 text-gray-600 dark:text-[#FED983]" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 text-sm text-gray-700 dark:text-gray-200 space-y-4">
            <ul className="grid grid-cols-2 gap-4">
              <li><strong>N° Vhc :</strong> {vehicle.numero_engagement || '—'}</li>
              <li><strong>Marque :</strong> {vehicle.marque || '—'}</li>
              <li><strong>Modèle :</strong> {vehicle.modele || '—'}</li>
              <li><strong>Immatriculation :</strong> {vehicle.immatriculation || '—'}</li>
              <li><strong>Couleur :</strong> {vehicle.couleur || '—'}</li>
              <li><strong>Places :</strong> {vehicle.places || '—'}</li>
              <li><strong>Type véhicule :</strong> {vehicle.type_vehicule || '—'}</li>
              <li><strong>Carburant :</strong> {vehicle.carburant_id || '—'}</li>
              <li><strong>Bagages :</strong> {vehicle.capacite_bagages || '—'}</li>
              <li><strong>Passagers :</strong> {vehicle.nb_passagers || '—'}</li>
              <li><strong>Statut technique :</strong> {vehicle.statut_technique || '—'}</li>
              <li><strong>Statut affectation :</strong> {vehicle.type_affectation_id || '—'}</li>
              <li><strong>Date réception :</strong> {vehicle.date_reception || '—'}</li>
              <li><strong>KM réception :</strong> {vehicle.km_reception || '—'}</li>
              <li><strong>Remarques réception :</strong> {vehicle.remarques_reception || '—'}</li>
              <li><strong>Date retour :</strong> {vehicle.date_retour || '—'}</li>
              <li><strong>KM retour :</strong> {vehicle.km_retour || '—'}</li>
              <li><strong>Remarques retour :</strong> {vehicle.remarques_retour || '—'}</li>
              <li><strong>Fournisseur :</strong> {vehicle.fournisseur || '—'}</li>
            </ul>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
