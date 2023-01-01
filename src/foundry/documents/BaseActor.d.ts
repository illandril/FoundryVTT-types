declare global {
  namespace foundry {
    namespace documents {
      class BaseActor extends foundry.abstract.Document {
        static TYPES: string[];
        get name(): string;
        get type(): typeof foundry.documents.BaseActor.TYPES[number];
        get effects(): foundry.abstract.EmbeddedCollection<string, BaseActiveEffect>;
        get items(): foundry.abstract.EmbeddedCollection<string, BaseItem>;
      }
    }
  }
}

export {};
