declare global {
  namespace dnd5e {
    namespace config {
      interface limitedUsePeriods {
        charges: string
        day: string
        lr: string
        sr: string
      }
      const limitedUsePeriods: limitedUsePeriods;
    }
  }
}

export {};
