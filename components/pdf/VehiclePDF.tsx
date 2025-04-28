'use client'

import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer'

// Définition du type Vehicle
type Vehicle = {
  numero_engagement: string;
  marque: string;
  modele: string;
  couleur: string;
  places: number;
  immatriculation: string;
  type_vehicule?: string;
  statut_technique?: string;
  capacite_bagages?: number;
  accessibilite_pmr?: boolean;
  carburant_id?: string;
  date_reception?: string;
  km_reception?: number;
  remarques_reception?: string;
  date_retour?: string;
  km_retour?: number;
  remarques_retour?: string;
}

// Définition des styles PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: 'Helvetica',
  },
  header: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  label: {
    width: '40%',
    fontWeight: 'bold',
  },
  value: {
    width: '60%',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    objectFit: 'contain',
    alignSelf: 'center',
  },
})

export default function VehiclePDF({ vehicle, logoUrl }: { vehicle: Vehicle; logoUrl?: string }) {
  return (
    <Document>
      // eslint-disable-next-line react/jsx-no-comment-textnodes
      <Page size="A4" style={styles.page}>
        // eslint-disable-next-line jsx-a11y/alt-text, jsx-a11y/alt-text, jsx-a11y/alt-text
        {logoUrl && <Image src={logoUrl} style={styles.logo} />}

        <Text style={styles.header}>Fiche Véhicule</Text>

        <View style={styles.section}>
          {[ 
            ['N° Vhc', vehicle.numero_engagement],
            ['Marque', vehicle.marque],
            ['Modèle', vehicle.modele],
            ['Couleur', vehicle.couleur],
            ['Places', vehicle.places?.toString()],
            ['Immatriculation', vehicle.immatriculation],
            ['Type véhicule', vehicle.type_vehicule],
            ['Statut', vehicle.statut_technique],
            ['Capacité bagages', vehicle.capacite_bagages?.toString()],
            ['Accessibilité PMR', vehicle.accessibilite_pmr ? 'Oui' : 'Non'],
            ['Carburant', vehicle.carburant_id],
            ['Date réception', vehicle.date_reception],
            ['KM réception', vehicle.km_reception?.toString()],
            ['Remarques réception', vehicle.remarques_reception],
            ['Date retour', vehicle.date_retour],
            ['KM retour', vehicle.km_retour?.toString()],
            ['Remarques retour', vehicle.remarques_retour],
          ].map(([label, value]) => (
            <View style={styles.row} key={label}>
              <Text style={styles.label}>{label} :</Text>
              <Text style={styles.value}>{value || '—'}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  )
}
