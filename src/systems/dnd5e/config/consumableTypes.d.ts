declare global {
  namespace dnd5e {
    namespace config {
      interface consumableTypes {
        ammo: 'Ammunition'
        food: 'Food'
        poison: 'Poison'
        potion: 'Potion'
        rod: 'Rod'
        scroll: 'Scroll'
        trinket: 'Trinket'
        wand: 'Wand'
      }
      const consumableTypes: consumableTypes;
    }
  }
}

export {};
