declare global {
  namespace dnd5e {
    namespace config {
      interface itemActionTypes {
        mwak: 'Melee Weapon Attack'
        rwak: 'Ranged Weapon Attack'
        msak: 'Melee Spell Attack'
        rsak: 'Ranged Spell Attack'
        save: 'Saving Throw'
        heal: 'Healing'
        abil: 'Ability Check'
        util: 'Utility'
        other: 'Other'
      }
    }
  }
}

export {};
