declare global {
  namespace dnd5e {
    namespace config {
      interface damageTypes {
        acid: 'Acid'
        bludgeoning: 'Bludgeoning'
        cold: 'Cold'
        fire: 'Fire'
        force: 'Force'
        lightning: 'Lightning'
        necrotic: 'Necrotic'
        piercing: 'Piercing'
        poison: 'Poison'
        psychic: 'Psychic'
        radiant: 'Radiant'
        slashing: 'Slashing'
        thunder: 'Thunder'
      }
      const damageTypes: damageTypes;
    }
  }
}

export {};
