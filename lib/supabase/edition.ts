import { supabase } from '@/lib/supabaseClient';

export type EditionData = {
  nom: string;
  annee: number;
  date_debut: string; // format 'YYYY-MM-DD'
  date_fin: string;   // format 'YYYY-MM-DD'
  lieu_principal?: string;
  description?: string;
  url_page_edition?: string;
  responsable_id?: string;
  logo_url?: string;
  theme_couleur?: string;
  notes_interne?: string;
};

export async function createEdition(edition: EditionData) {
  const { data, error } = await supabase
    .from('editions')
    .insert([edition])
    .select()
    .single();

  if (error) {
    console.error('Erreur création édition :', error);
    throw new Error(error.message);
  }

  return data;
}
