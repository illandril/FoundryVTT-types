declare global {
  namespace dnd5e {
    namespace config {
      interface actorSizes {
        grg: string
        huge: string
        lg: string
        med: string
        sm: string
        tiny: string
      }
      const actorSizes: actorSizes;
    }
  }
}

export {};
