declare global {
  namespace dnd5e {
    namespace config {
      interface spellPreparationModes {
        prepared: 'Prepared'
        pact: 'Pact Magic'
        always: 'Always Prepared'
        atwill: 'At-Will'
        innate: 'Innate Spellcasting'
      }
    }
  }
}

export {};
