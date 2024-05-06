declare global {
  namespace dnd5e {
    namespace config {
      interface movementUnits {
        ft: string;
        km: string;
        m: string;
        mi: string;
      }
      const movementUnits: movementUnits;
    }
  }
}

export type {};
