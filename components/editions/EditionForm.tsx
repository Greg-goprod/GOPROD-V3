'use client';

import { useState } from 'react';
import { createEdition } from '@/lib/supabase/edition';

export default function EditionForm() {
  const [nom, setNom] = useState('');
  const [lieuPrincipal, setLieuPrincipal] = useState('');
  const [dateDebut, setDateDebut] = useState('');
  const [dateFin, setDateFin] = useState('');
  const [annee, setAnnee] = useState(new Date().getFullYear());
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const { error } = await createEdition({
      nom,
      lieu_principal: lieuPrincipal,
      date_debut: dateDebut,
      date_fin: dateFin,
      annee: annee,
    });

    if (error) {
      setMessage('Erreur lors de la création.');
    } else {
      setMessage('Édition créée avec succès !');
      // Reset formulaire
      setNom('');
      setLieuPrincipal('');
      setDateDebut('');
      setDateFin('');
      setAnnee(new Date().getFullYear());
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label>Nom de l&apos;édition</label>
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          className="input input-bordered w-full"
          required
        />
      </div>
      <div>
        <label>Lieu principal</label>
        <input
          type="text"
          value={lieuPrincipal}
          onChange={(e) => setLieuPrincipal(e.target.value)}
          className="input input-bordered w-full"
        />
      </div>
      <div>
        <label>Date de début</label>
        <input
          type="date"
          value={dateDebut}
          onChange={(e) => setDateDebut(e.target.value)}
          className="input input-bordered w-full"
          required
        />
      </div>
      <div>
        <label>Date de fin</label>
        <input
          type="date"
          value={dateFin}
          onChange={(e) => setDateFin(e.target.value)}
          className="input input-bordered w-full"
          required
        />
      </div>
      <div>
        <label>Année</label>
        <input
          type="number"
          value={annee}
          onChange={(e) => setAnnee(parseInt(e.target.value))}
          className="input input-bordered w-full"
          required
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary w-full"
        disabled={loading}
      >
        {loading ? 'Création...' : 'Créer Édition'}
      </button>

      {message && <p className="mt-2 text-center">{message}</p>}
    </form>
  );
}
