'use client'

import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { supabase } from '@/lib/supabaseClient'
import { ImageIcon, Upload } from 'lucide-react'

export default function LogoUploader() {
  const [uploading, setUploading] = useState(false)
  const [logoUrl, setLogoUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setError(null)

    const file = acceptedFiles[0]
    if (!file) return

    if (file.size > 5 * 1024 * 1024) {
      setError('Fichier trop volumineux (max. 5 MB)')
      return
    }

    const ext = file.name.split('.').pop()?.toLowerCase()
    if (!['jpg', 'jpeg', 'png', 'heic'].includes(ext || '')) {
      setError('Format non supporté')
      return
    }

    setUploading(true)

    const filePath = `logo-${Date.now()}.${ext}`

    const { error: uploadError } = await supabase.storage
      .from('logos')
      .upload(filePath, file, {
        upsert: true,
        cacheControl: '3600',
      })

    if (uploadError) {
      setError('Erreur lors de l’upload')
      setUploading(false)
      return
    }

    const { data: publicUrl } = supabase
      .storage
      .from('logos')
      .getPublicUrl(filePath)

    setLogoUrl(publicUrl.publicUrl)
    setUploading(false)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.jpg', '.jpeg', '.png', '.heic'] },
    multiple: false,
  })

  return (
    <div>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-6 cursor-pointer text-center transition
          ${isDragActive ? 'border-primary bg-gray-50' : 'border-gray-300 dark:border-[#FED983]/30'}`}
      >
        <input {...getInputProps()} />
        {uploading ? (
          <p className="text-sm text-muted-foreground">Upload en cours...</p>
        ) : (
          <div className="flex flex-col items-center space-y-2">
            <Upload className="w-6 h-6 text-primary" />
            <p className="text-sm text-gray-600 dark:text-[#FED983]">
              Glissez-déposez un fichier ici, ou cliquez pour sélectionner.
            </p>
            <p className="text-xs text-muted-foreground">Formats : JPG, PNG, HEIC — max 5 MB</p>
          </div>
        )}
      </div>

      {error && (
        <p className="text-sm text-red-500 mt-2">{error}</p>
      )}

      {logoUrl && (
        <div className="mt-4 flex items-center space-x-4">
          <img
            src={logoUrl}
            alt="Logo uploadé"
            className="w-24 h-24 object-contain rounded border dark:border-[#FED983]/30"
          />
          <p className="text-sm text-gray-600 dark:text-[#FED983]">Aperçu du logo</p>
        </div>
      )}
    </div>
  )
}
