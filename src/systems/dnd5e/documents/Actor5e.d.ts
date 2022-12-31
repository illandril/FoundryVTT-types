declare global {
  namespace dnd5e {
    namespace documents {
      type ActorSystemData = {
        preparation?: {
          mode?: keyof dnd5e.config.spellPreparationModes
          prepared?: boolean
        }
        activation?: {
          type?: keyof dnd5e.config.abilityActivationTypes
          cost?: number
          condition?: string
        }
      };

      class Actor5e extends Actor<dnd5e.documents.Item5e, dnd5e.documents.ActiveEffect5e> {
        get system(): dnd5e.documents.ActorSystemData;
      }
    }
  }
}

export {};
