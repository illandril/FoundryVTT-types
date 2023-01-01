
declare global {
  namespace dnd5e {
    namespace config {
      interface spellScalingModes {
        cantrip: 'Cantrip'
        none: 'None'
        level: 'Spell Level'
      }
      const spellScalingModes: spellScalingModes;
    }
  }
}

export {};
