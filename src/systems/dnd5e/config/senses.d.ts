declare global {
  namespace dnd5e {
    namespace config {
      interface senses {
        blindsight: 'Blindsight'
        darkvision: 'Darkvision'
        tremorsense: 'Tremorsense'
        truesight: 'Truesight'
      }
      const senses: senses;
    }
  }
}

export {};
