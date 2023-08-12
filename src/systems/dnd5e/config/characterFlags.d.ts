/**
 * @typedef {object} CharacterFlagConfig
 * @property {string} name
 * @property {string} hint
 * @property {string} section
 * @property {typeof boolean|string|number} type
 * @property {string} placeholder
 * @property {string[]} [abilities]
 * @property {Object<string, string>} [choices]
 * @property {string[]} [skills]
 */

type CharacterFlagConfig = {
  name: string
  hint: string
  section: string
};

declare global {
  namespace dnd5e {
    namespace config {
      interface characterFlags {
        [index: string]: CharacterFlagConfig
        diamondSoul: CharacterFlagConfig
        elvenAccuracy: CharacterFlagConfig
        halflingLucky: CharacterFlagConfig
        initiativeAdv: CharacterFlagConfig
        initiativeAlert: CharacterFlagConfig
        jackOfAllTrades: CharacterFlagConfig
        observantFeat: CharacterFlagConfig
        powerfulBuild: CharacterFlagConfig
        reliableTalent: CharacterFlagConfig
        remarkableAthlete: CharacterFlagConfig
        weaponCriticalThreshold: CharacterFlagConfig
        spellCriticalThreshold: CharacterFlagConfig
        meleeCriticalDamageDice: CharacterFlagConfig
      }
      const characterFlags: characterFlags;
    }
  }
}

export {};
