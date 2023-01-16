declare global {
  namespace dnd5e {
    namespace config {
      interface abilityAbbreviations {
        str: string
        dex: string
        con: string
        int: string
        wis: string
        cha: string
      }
      const abilityAbbreviations: abilityAbbreviations;
    }
  }
}

export {};
