declare global {
  namespace dnd5e {
    namespace config {
      interface spellProgression {
        none: string
        full: string
        half: string
        third: string
        pact: string
        artificer: string
      }
      const spellProgression: spellProgression;
    }
  }
}

export {};
