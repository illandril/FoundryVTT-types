declare global {
  namespace dnd5e {
    namespace config {
      interface actorSizes {
        grg: 'Gargantuan'
        huge: 'Huge'
        lg: 'Large'
        med: 'Medium'
        sm: 'Small'
        tiny: 'Tiny'
      }
      const actorSizes: actorSizes;
    }
  }
}

export {};
