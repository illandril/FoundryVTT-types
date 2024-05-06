declare global {
  namespace dnd5e {
    namespace config {
      interface abilityConsumptionTypes {
        ammo: string;
        attribute: string;
        charges: string;
        hitDice: string;
        material: string;
      }
      const abilityConsumptionTypes: abilityConsumptionTypes;
    }
  }
}

export type {};
