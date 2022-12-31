declare global {
  namespace foundry {
    namespace documents {
      class BaseActor extends foundry.abstract.Document {
        static TYPES: string[];
        get name(): string;
        get type(): typeof foundry.documents.BaseActor.TYPES[number];
        get effects(): EmbeddedCollection<string, BaseActiveEffect>;
        get items(): EmbeddedCollection<string, BaseItem>;
      }
    }
  }
}

export {};
