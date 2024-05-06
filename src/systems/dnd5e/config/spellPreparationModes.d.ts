declare global {
  namespace dnd5e {
    namespace config {
      interface spellPreparationModes {
        prepared: string;
        pact: string;
        always: string;
        atwill: string;
        innate: string;
      }
      const spellPreparationModes: spellPreparationModes;
    }
  }
}

export type {};
