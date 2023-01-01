declare global {
  namespace dnd5e {
    namespace config {
      interface spellSchools {
        abj: 'Abjuration'
        con: 'Conjuration'
        div: 'Divination'
        enc: 'Enchantment'
        evo: 'Evocation'
        ill: 'Illusion'
        nec: 'Necromancy'
        trs: 'Transmutation'
      }
      const spellSchools: spellSchools;
    }
  }
}

export {};
