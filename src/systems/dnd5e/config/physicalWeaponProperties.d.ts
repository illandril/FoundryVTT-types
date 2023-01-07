declare global {
  namespace dnd5e {
    namespace config {
      interface physicalWeaponProperties {
        ada: 'Adamantine'
        mgc: 'Magical'
        sil: 'Silvered'
      }
      const physicalWeaponProperties: physicalWeaponProperties;
    }
  }
}

export {};
