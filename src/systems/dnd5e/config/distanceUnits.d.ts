declare global {
  namespace dnd5e {
    namespace config {
      interface distanceUnits {
        any: 'Any'
        ft: 'Feet'
        km: 'Kilometers'
        m: 'Meters'
        mi: 'Miles'
        none: 'None'
        self: 'Self'
        spec: 'Special'
        touch: 'Touch'
      }
      const distanceUnits: distanceUnits;
    }
  }
}

export {};
