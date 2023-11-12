declare global {
  namespace foundry {
    namespace documents {
      type BaseActorFields = {
        name: string
        type: typeof foundry.documents.BaseActor.TYPES[number]
      };

      class BaseActor extends foundry.abstract.Document {
        static TYPES: string[];
        get name(): BaseActorFields['name'];
        get type(): BaseActorFields['type'];
        get effects(): foundry.abstract.EmbeddedCollection<string, BaseActiveEffect>;
        get items(): foundry.abstract.EmbeddedCollection<string, BaseItem>;
      }
    }
  }
}

export {};
