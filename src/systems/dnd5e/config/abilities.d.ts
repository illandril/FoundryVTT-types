type AbilityConfiguration = {
  label: string
  abbreviation: string
  type: 'physical' | 'mental'
  defaults?: object
};
declare global {
  namespace dnd5e {
    namespace config {
      interface abilities {
        str: AbilityConfiguration
        dex: AbilityConfiguration
        con: AbilityConfiguration
        int: AbilityConfiguration
        wis: AbilityConfiguration
        cha: AbilityConfiguration
      }
      const abilities: abilities;
    }
  }
}

export {};
