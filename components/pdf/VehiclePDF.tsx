'use client'

import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer'

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

export default function VehiclePDF({ vehicle, logoUrl }: { vehicle: any; logoUrl?: string }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {logoUrl && <Image src={logoUrl} style={styles.logo} />}

        <Text style={styles.header}>Fiche Véhicule</Text>

        <View style={styles.section}>
          {[
            ['N° Vhc', vehicle.numero_engagement],
            ['Marque', vehicle.marque],
            ['Modèle', vehicle.modele],
            ['Couleur', vehicle.couleur],
            ['Places', vehicle.places],
            ['Immatriculation', vehicle.immatriculation],
            ['Type véhicule', vehicle.type_vehicule],
            ['Statut', vehicle.statut_technique],
            ['Capacité bagages', vehicle.capacite_bagages],
            ['Accessibilité PMR', vehicle.accessibilite_pmr ? 'Oui' : 'Non'],
            ['Carburant', vehicle.carburant_id],
            ['Date réception', vehicle.date_reception],
            ['KM réception', vehicle.km_reception],
            ['Remarques réception', vehicle.remarques_reception],
            ['Date retour', vehicle.date_retour],
            ['KM retour', vehicle.km_retour],
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
