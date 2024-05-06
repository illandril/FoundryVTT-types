declare global {
  namespace dnd5e {
    namespace config {
      interface spellScalingModes {
        cantrip: string;
        none: string;
        level: string;
      }
      const spellScalingModes: spellScalingModes;
    }
  }
}

export type {};
