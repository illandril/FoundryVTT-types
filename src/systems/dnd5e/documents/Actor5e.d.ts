declare global {
  namespace dnd5e {
    namespace documents {
      type ActorSystemData = {
        abilities?: Record<keyof dnd5e.config.abilities, {
          value?: number
          proficient?: number
          bonuses?: {
            check?: string
            save?: string
          }
        }>
      };

      class Actor5e extends Actor<dnd5e.documents.Item5e, dnd5e.documents.ActiveEffect5e> {
        get system(): dnd5e.documents.ActorSystemData;
      }
    }
  }
}

export {};
