declare global {
  namespace dnd5e {
    namespace config {
      interface physicalWeaponProperties {
        ada: string;
        mgc: string;
        sil: string;
      }
      const physicalWeaponProperties: physicalWeaponProperties;
    }
  }
}

export type {};
