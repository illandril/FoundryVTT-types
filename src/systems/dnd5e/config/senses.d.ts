declare global {
  namespace dnd5e {
    namespace config {
      interface senses {
        blindsight: string;
        darkvision: string;
        tremorsense: string;
        truesight: string;
      }
      const senses: senses;
    }
  }
}

export type {};
