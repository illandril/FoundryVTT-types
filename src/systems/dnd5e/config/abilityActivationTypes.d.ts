declare global {
  namespace dnd5e {
    namespace config {
      interface abilityActivationTypes {
        action: string
        bonus: string
        crew: string
        day: string
        hour: string
        lair: string
        legendary: string
        minute: string
        mythic: string
        none: string
        reaction: string
        special: string
      }
      const abilityActivationTypes: abilityActivationTypes;
    }
  }
}

export {};
