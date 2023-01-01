declare global {
  namespace dnd5e {
    namespace config {
      interface abilityActivationTypes {
        action: 'Action'
        bonus: 'Bonus Action'
        crew: 'Crew Action'
        day: 'Days'
        hour: 'Hours'
        lair: 'Lair Action'
        legendary: 'Legendary Action'
        minute: 'Minutes'
        none: 'None'
        reaction: 'Reaction'
        special: 'Special'
      }
      const abilityActivationTypes: abilityActivationTypes;
    }
  }
}

export {};
