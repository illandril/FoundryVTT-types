declare global {
  namespace dnd5e {
    namespace config {
      interface conditionTypes {
        blinded: 'Blinded'
        charmed: 'Charmed'
        deafened: 'Deafened'
        diseased: 'Diseased'
        exhaustion: 'Exhaustion'
        frightened: 'Frightened'
        grappled: 'Grappled'
        incapacitated: 'Incapacitated'
        invisible: 'Invisible'
        paralyzed: 'Paralyzed'
        petrified: 'Petrified'
        poisoned: 'Poisoned'
        prone: 'Prone'
        restrained: 'Restrained'
        stunned: 'Stunned'
        unconscious: 'Unconscious'
      }
      const conditionTypes: conditionTypes;
    }
  }
}

export {};
