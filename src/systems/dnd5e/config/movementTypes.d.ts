declare global {
  namespace dnd5e {
    namespace config {
      interface movementTypes {
        burrow: string
        climb: string
        fly: string
        swim: string
        walk: string
      }
      const movementTypes: movementTypes;
    }
  }
}

export {};
