declare global {
  namespace dnd5e {
    namespace config {
      interface damageTypes {
        acid: string
        bludgeoning: string
        cold: string
        fire: string
        force: string
        lightning: string
        necrotic: string
        piercing: string
        poison: string
        psychic: string
        radiant: string
        slashing: string
        thunder: string
      }
      const damageTypes: damageTypes;
    }
  }
}

export {};
