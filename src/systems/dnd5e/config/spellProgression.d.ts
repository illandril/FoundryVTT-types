declare global {
  namespace dnd5e {
    namespace config {
      interface spellProgression {
        none: 'None'
        full: 'Full Caster'
        half: 'Half Caster'
        third: 'Third Caster'
        pact: 'Pact Magic'
        artificer: 'Artificer'
      }
    }
  }
}

export {};
