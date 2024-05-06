declare global {
  namespace dnd5e {
    namespace config {
      interface consumableTypes {
        ammo: string;
        food: string;
        poison: string;
        potion: string;
        rod: string;
        scroll: string;
        trinket: string;
        wand: string;
      }
      const consumableTypes: consumableTypes;
    }
  }
}

export type {};
