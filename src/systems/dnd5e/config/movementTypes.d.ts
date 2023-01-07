declare global {
  namespace dnd5e {
    namespace config {
      interface movementTypes {
        burrow: 'Burrow'
        climb: 'Climb'
        fly: 'Fly'
        swim: 'Swim'
        walk: 'Walk'
      }
      const movementTypes: movementTypes;
    }
  }
}

export {};
