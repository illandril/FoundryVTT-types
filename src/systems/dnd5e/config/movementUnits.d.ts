declare global {
  namespace dnd5e {
    namespace config {
      interface movementUnits {
        ft: 'Feet'
        km: 'Kilometers'
        m: 'Meters'
        mi: 'Miles'
      }
      const movementUnits: movementUnits;
    }
  }
}

export {};
