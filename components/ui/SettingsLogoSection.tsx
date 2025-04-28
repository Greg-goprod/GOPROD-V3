'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import { UploadCloud } from 'lucide-react'
import Image from 'next/image'  // Importation de Image

export default function SettingsLogoSection() {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fileUrl, setFileUrl] = useState<string | null>(null)
  const router = useRouter()

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (file.size > 5 * 1024 * 1024) {
      setError("Fichier trop lourd (max 5 MB)")
      return
    }

    const fileExt = file.name.split('.').pop()?.toLowerCase()
    if (!['jpg', 'jpeg', 'png', 'heic'].includes(fileExt || '')) {
      setError("Format non pris en charge")
      return
    }

    const fileName = `logo.${fileExt}`
    setUploading(true)

    const { error: uploadError } = await supabase.storage
      .from('logos')
      .upload(fileName, file, {
        upsert: true,
        cacheControl: '3600',
        contentType: file.type,
      })

    if (uploadError) {
      setError(uploadError.message)
    } else {
      setError(null)
      const { data } = supabase.storage.from('logos').getPublicUrl(fileName)
      setFileUrl(data.publicUrl)
    }

    setUploading(false)
    router.refresh()
  }

  return (
    <div className="mb-8 p-4 border rounded-lg bg-white dark:bg-[#1B1035]">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-[#FED983] mb-2">Logo de l’événement</h2>
      <p className="text-sm text-muted-foreground dark:text-gray-400 mb-4">
        Importez une image JPEG, PNG ou HEIC (max 5MB). Ce logo sera utilisé dans les documents PDF et sur le site.
      </p>

      <label className="flex flex-col items-center justify-center w-full h-32 px-4 py-6 border-2 border-dashed rounded-lg cursor-pointer hover:border-primary transition">
        <UploadCloud className="w-6 h-6 mb-2 text-gray-500 dark:text-[#FED983]" />
        <span className="text-sm text-gray-600 dark:text-[#FED983]">
          Glissez-déposez un fichier ou cliquez pour parcourir
        </span>
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="hidden"
        />
      </label>

      {uploading && <p className="mt-4 text-sm text-blue-500">Chargement en cours...</p>}
      {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
      {fileUrl && (
        <div className="mt-4">
          <p className="text-sm text-muted-foreground">Logo actuel :</p>
          <Image
            src={fileUrl}
            alt="Logo actuel"
            width={100}  // Définir la largeur
            height={50}  // Définir la hauteur
            className="mt-2 object-contain"
          />
        </div>
      )}
    </div>
  )
}
