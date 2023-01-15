declare global {
  namespace dnd5e {
    namespace config {
      interface conditionTypes {
        blinded: string
        charmed: string
        deafened: string
        diseased: string
        exhaustion: string
        frightened: string
        grappled: string
        incapacitated: string
        invisible: string
        paralyzed: string
        petrified: string
        poisoned: string
        prone: string
        restrained: string
        stunned: string
        unconscious: string
      }
      const conditionTypes: conditionTypes;
    }
  }
}

export {};
