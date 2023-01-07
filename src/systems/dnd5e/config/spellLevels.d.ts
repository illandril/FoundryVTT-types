declare global {
  namespace dnd5e {
    namespace config {
      interface spellLevels {
        0: 'Cantrip'
        1: '1st Level'
        2: '2nd Level'
        3: '3rd Level'
        4: '4th Level'
        5: '5th Level'
        6: '6th Level'
        7: '7th Level'
        8: '8th Level'
        9: '9th Level'
      }
      const spellLevels: spellLevels;
    }
  }
}

export {};
