'use client'

import Link from 'next/link'
import { Ghost } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center text-center p-6">
      <div className="space-y-6 max-w-md">
        <div className="flex justify-center">
          <Ghost size={64} className="text-gray-400 dark:text-gray-600" />
        </div>
        <h1 className="text-4xl font-semibold">404 - Page introuvable</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Oups ! On dirait que cette page n’existe pas (ou plus).
        </p>
        <Link
          href="/"
          className="inline-block px-5 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition"
        >
          Retour à l’accueil
        </Link>
      </div>
    </div>
  )
}
